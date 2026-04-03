// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURATION
// ─────────────────────────────────────────────────────────────────────────────
const OWNER_EMAIL     = "nguyenthithuhuyen29403@gmail.com";      // email nhận thông báo
const SHEET_NAME      = "Submissions";                // tên sheet trong Spreadsheet
const DRIVE_FOLDER_ID = "1Y-S9flb5NYp-FMDIERYxfkX3BJJphhbb";  // ID thư mục Google Drive (để trống = lưu root)

// ─────────────────────────────────────────────────────────────────────────────
// MAIN HANDLER
// ─────────────────────────────────────────────────────────────────────────────
function doPost(e) {
  try {
    if (!e || !e.postData) {
      console.error("[doPost] e hoặc e.postData là undefined – có vẻ đây là chạy thủ công từ editor, không phải từ web request.");
      return ContentService
        .createTextOutput(JSON.stringify({ status: "error", message: "No event data (run from editor?)" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    const raw  = e.postData.contents || "{}";
    console.log("[doPost] postData tồn tại:", !!e.postData, "| raw length:", raw.length);

    let data;
    try {
      data = JSON.parse(raw);
      console.log("[doPost] JSON parse OK | ho_ten:", data.ho_ten, "| số ảnh:", (data.images || []).length);
    } catch (parseErr) {
      console.error("[doPost] JSON parse THẤT BẠI:", parseErr.message, "| raw 200 ký tự đầu:", raw.substring(0, 200));
      throw parseErr;
    }

    let imageLinks = [];
    try {
      imageLinks = saveImagesToDrive(data);
      console.log("[doPost] saveImagesToDrive OK | links:", imageLinks.length);
    } catch (driveErr) {
      console.error("[doPost] saveImagesToDrive LỖI:", driveErr.message);
    }

    saveToSheet(data, imageLinks);
    console.log("[doPost] saveToSheet OK");

    sendEmailNotification(data, imageLinks);
    console.log("[doPost] sendEmailNotification OK");

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    console.error("[doPost] LỖI CHÍNH:", err.message);
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", message: "Apps Script is running." }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ─────────────────────────────────────────────────────────────────────────────
// LƯU ẢNH VÀO GOOGLE DRIVE
// ─────────────────────────────────────────────────────────────────────────────
function saveImagesToDrive(data) {
  const images = data.images;
  if (!images || images.length === 0) return [];

  const ts        = Utilities.formatDate(new Date(), "Asia/Ho_Chi_Minh", "yyyyMMdd_HHmmss");
  const folderName = "NỘI THẤT - " + (data.ho_ten || "Khách") + " - " + ts;

  let parentFolder;
  try {
    parentFolder = (DRIVE_FOLDER_ID && DRIVE_FOLDER_ID !== "PASTE_YOUR_FOLDER_ID_HERE")
      ? DriveApp.getFolderById(DRIVE_FOLDER_ID)
      : DriveApp.getRootFolder();
  } catch (_) {
    parentFolder = DriveApp.getRootFolder();
  }

  const folder = parentFolder.createFolder(folderName);
  folder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

  const links = [];
  images.forEach(function(img) {
    try {
      const decoded  = Utilities.base64Decode(img.data);
      const mime    = img.mimeType || (img.filename && img.filename.toLowerCase().endsWith(".png") ? "image/png" : img.filename && img.filename.toLowerCase().endsWith(".webp") ? "image/webp" : "image/jpeg");
      const blob    = Utilities.newBlob(decoded, mime, img.filename || "image.jpg");
      const file    = folder.createFile(blob);
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      links.push({
        room:     img.room || "",
        filename: img.filename || "image.jpg",
        url:      "https://drive.google.com/file/d/" + file.getId() + "/view"
      });
    } catch (_) {}
  });
  return links;
}

// ─────────────────────────────────────────────────────────────────────────────
// GHI DỮ LIỆU VÀO GOOGLE SHEET
// ─────────────────────────────────────────────────────────────────────────────
function saveToSheet(data, imageLinks) {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  let   sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    const headers = [
      "Thời gian", "Họ và tên", "Số điện thoại", "Email",
      "Địa chỉ thi công", "Diện tích (m²)", "Nguồn khách",
      "Phòng thiết kế", "Chi tiết phòng",
      "Ngân sách", "Thời gian thi công", "Yêu cầu đặc biệt",
      "Link ảnh tham khảo"
    ];
    sheet.appendRow(headers);
    const hdr = sheet.getRange(1, 1, 1, headers.length);
    hdr.setBackground("#8B6914");
    hdr.setFontColor("#ffffff");
    hdr.setFontWeight("bold");
    hdr.setFontSize(11);
    sheet.setFrozenRows(1);
    sheet.setColumnWidths(1, headers.length, 160);
    sheet.setColumnWidth(9, 300);
    sheet.setColumnWidth(13, 300);
  }

  const ts = data.timestamp
    ? Utilities.formatDate(new Date(data.timestamp), "Asia/Ho_Chi_Minh", "dd/MM/yyyy HH:mm:ss")
    : Utilities.formatDate(new Date(), "Asia/Ho_Chi_Minh", "dd/MM/yyyy HH:mm:ss");

  const rooms       = Array.isArray(data.rooms) ? data.rooms : [];
  const roomNames   = rooms.map(function(r) { return r.room; }).join(", ");
  const roomDetails = rooms.map(function(r) {
    return r.room + ": " + (r.phong_cach || "—")
      + (r.mau_sac && r.mau_sac.length  ? " | Màu: "      + r.mau_sac.join(", ")  : "")
      + (r.vat_lieu && r.vat_lieu.length ? " | Vật liệu: " + r.vat_lieu.join(", ") : "")
      + (r.uu_tien   ? " | Ưu tiên: " + r.uu_tien : "")
      + (r.ghi_chu   ? " | Ghi chú: " + r.ghi_chu : "");
  }).join("\n");

  const imageLinksStr = (imageLinks || []).map(function(l) {
    return "[" + l.room + "] " + l.filename + ": " + l.url;
  }).join("\n");

  const row = [
    ts,
    data.ho_ten            || "",
    data.so_dien_thoai     || "",
    data.email             || "",
    data.dia_chi           || "",
    data.dien_tich         || "",
    data.nguon_khach       || "",
    roomNames,
    roomDetails,
    data.ngan_sach         || "",
    data.thoi_gian_thi_cong|| "",
    data.yeu_cau_dac_biet  || "",
    imageLinksStr
  ];

  sheet.appendRow(row);
  const lastRow = sheet.getLastRow();
  if (lastRow % 2 === 0) {
    sheet.getRange(lastRow, 1, 1, row.length).setBackground("#fdf8f0");
  }
  sheet.getRange(lastRow, 9).setWrap(true);
  sheet.getRange(lastRow, 13).setWrap(true);
}

// ─────────────────────────────────────────────────────────────────────────────
// GỬI EMAIL THÔNG BÁO
// ─────────────────────────────────────────────────────────────────────────────
function sendEmailNotification(data, imageLinks) {
  if (!OWNER_EMAIL || OWNER_EMAIL === "PASTE_YOUR_EMAIL_HERE") return;

  const ts = data.timestamp
    ? Utilities.formatDate(new Date(data.timestamp), "Asia/Ho_Chi_Minh", "dd/MM/yyyy HH:mm:ss")
    : Utilities.formatDate(new Date(), "Asia/Ho_Chi_Minh", "dd/MM/yyyy HH:mm:ss");

  const rooms      = Array.isArray(data.rooms) ? data.rooms : [];
  const firstName  = data.ho_ten ? data.ho_ten.split(" ").pop() : "Khách";
  const subject    = "[Nội Thất] Tư vấn mới từ " + (data.ho_ten || "Khách hàng") + " – " + ts;

  const roomRowsHtml = rooms.map(function(r) {
    const imgs = (imageLinks || []).filter(function(l) { return l.room === r.room; });
    const imgHtml = imgs.length
      ? "<br/><small style='color:#8B6914;'>🖼 Ảnh: " + imgs.map(function(l) {
          return '<a href="' + l.url + '" style="color:#8B6914;">' + l.filename + "</a>";
        }).join(" · ") + "</small>"
      : "";
    return `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #f5f0e8;">
          <strong style="font-size:14px;color:#1A1A1A;">${r.room}</strong>
          ${imgHtml}
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:6px;">
            ${infoRow("Phong cách", r.phong_cach || "—")}
            ${r.mau_sac && r.mau_sac.length  ? infoRow("Màu sắc",   r.mau_sac.join(", "))  : ""}
            ${r.vat_lieu && r.vat_lieu.length ? infoRow("Vật liệu",  r.vat_lieu.join(", ")) : ""}
            ${r.uu_tien ? infoRow("Ưu tiên",   r.uu_tien) : ""}
            ${r.ghi_chu ? infoRow("Ghi chú",   r.ghi_chu) : ""}
          </table>
        </td>
      </tr>`;
  }).join("");

  const htmlBody = `<!DOCTYPE html>
<html lang="vi">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f5f0e8;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0e8;padding:32px 16px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

      <tr><td style="background:linear-gradient(135deg,#8B6914,#a8821e);padding:28px 32px 22px;text-align:center;">
        <p style="margin:0 0 4px;color:rgba(255,255,255,0.75);font-size:11px;letter-spacing:2px;text-transform:uppercase;">Tư Vấn Thiết Kế Nội Thất</p>
        <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">Yêu Cầu Tư Vấn Mới</h1>
        <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:13px;">${ts}</p>
      </td></tr>

      <tr><td style="background:#fff8ec;border-bottom:1px solid #f0e0b0;padding:12px 32px;text-align:center;">
        <p style="margin:0;font-size:14px;color:#7a5200;">📬 Khách hàng mới cần tư vấn. Hãy liên hệ trong <strong>24 giờ</strong>!</p>
      </td></tr>

      <tr><td style="padding:28px 32px;">

        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
          <tr><td style="padding-bottom:12px;">
            <h2 style="margin:0;font-size:14px;font-weight:700;color:#8B6914;text-transform:uppercase;letter-spacing:0.8px;border-bottom:2px solid #f5f0e8;padding-bottom:8px;">👤 Thông tin khách hàng</h2>
          </td></tr>
          ${infoRow("Họ và tên", data.ho_ten || "—")}
          ${infoRow("Số điện thoại", '<a href="tel:' + (data.so_dien_thoai||"") + '" style="color:#8B6914;font-weight:600;text-decoration:none;">' + (data.so_dien_thoai||"—") + "</a>")}
          ${infoRow("Email", data.email ? '<a href="mailto:' + data.email + '" style="color:#8B6914;text-decoration:none;">' + data.email + "</a>" : "Chưa cung cấp")}
          ${infoRow("Địa chỉ thi công", data.dia_chi || "—")}
          ${infoRow("Diện tích", data.dien_tich ? data.dien_tich + " m²" : "—")}
          ${infoRow("Nguồn khách", data.nguon_khach || "—")}
        </table>

        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
          <tr><td style="padding-bottom:12px;">
            <h2 style="margin:0;font-size:14px;font-weight:700;color:#8B6914;text-transform:uppercase;letter-spacing:0.8px;border-bottom:2px solid #f5f0e8;padding-bottom:8px;">🏠 Chi tiết phòng (${rooms.length} phòng)</h2>
          </td></tr>
          ${roomRowsHtml}
        </table>

        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
          <tr><td style="padding-bottom:12px;">
            <h2 style="margin:0;font-size:14px;font-weight:700;color:#8B6914;text-transform:uppercase;letter-spacing:0.8px;border-bottom:2px solid #f5f0e8;padding-bottom:8px;">💰 Ngân sách &amp; Thời gian</h2>
          </td></tr>
          ${infoRow("Ngân sách dự kiến", '<strong style="color:#1a6b3c;">' + (data.ngan_sach || "—") + "</strong>")}
          ${infoRow("Thời gian thi công", data.thoi_gian_thi_cong || "—")}
        </table>

        ${data.yeu_cau_dac_biet ? `
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
          <tr><td style="padding-bottom:10px;">
            <h2 style="margin:0;font-size:14px;font-weight:700;color:#8B6914;text-transform:uppercase;letter-spacing:0.8px;border-bottom:2px solid #f5f0e8;padding-bottom:8px;">📝 Yêu cầu đặc biệt</h2>
          </td></tr>
          <tr><td style="background:#fdf8f0;border-radius:8px;padding:14px 16px;font-size:14px;color:#1A1A1A;line-height:1.6;border-left:3px solid #8B6914;">${data.yeu_cau_dac_biet}</td></tr>
        </table>` : ""}

        <table width="100%" cellpadding="0" cellspacing="0">
          <tr><td align="center" style="padding-top:8px;">
            <a href="tel:${data.so_dien_thoai || ""}" style="display:inline-block;background:#8B6914;color:#ffffff;text-decoration:none;padding:14px 36px;border-radius:8px;font-size:15px;font-weight:700;">
              📞 Gọi ngay cho ${firstName}
            </a>
          </td></tr>
        </table>

      </td></tr>

      <tr><td style="background:#f5f0e8;padding:18px 32px;text-align:center;border-top:1px solid #e0d9cc;">
        <p style="margin:0;font-size:12px;color:#888;">Email tự động từ hệ thống tư vấn nội thất. Vui lòng không trả lời trực tiếp.</p>
      </td></tr>

    </table>
  </td></tr>
</table>
</body></html>`;

  MailApp.sendEmail({ to: OWNER_EMAIL, subject: subject, htmlBody: htmlBody });
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER
// ─────────────────────────────────────────────────────────────────────────────
function infoRow(label, value) {
  return `<tr>
    <td style="padding:5px 0;border-bottom:1px solid #f5f0e8;">
      <table width="100%" cellpadding="0" cellspacing="0"><tr>
        <td width="150" style="font-size:12px;color:#888;vertical-align:top;padding-right:10px;">${label}</td>
        <td style="font-size:13px;color:#1A1A1A;font-weight:500;vertical-align:top;">${value}</td>
      </tr></table>
    </td>
  </tr>`;
}
