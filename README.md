# 🪑 Tư Vấn Phong Cách Nội Thất — Hướng Dẫn Deploy

Tổng quan: 1 file `index.html` + 1 script `Code.gs` + deploy miễn phí lên Vercel.

---

## Bước 1 — Tạo Google Sheet

1. Truy cập [sheets.google.com](https://sheets.google.com) → **Tạo bảng tính mới**
2. Đặt tên bảng tính, ví dụ: `Nội Thất - Tư Vấn Khách Hàng`
3. Ghi nhớ **URL** của bảng tính (sẽ cần khi deploy Apps Script)
4. **Không cần** tạo cột thủ công — script sẽ tự tạo header khi có submission đầu tiên

---

## Bước 2 — Deploy Google Apps Script

### 2.1 Mở Apps Script
1. Trong Google Sheet vừa tạo, vào menu **Tiện ích mở rộng → Apps Script**
2. Màn hình Apps Script sẽ mở ra với file `Code.gs` mặc định

### 2.2 Dán code
1. Xóa toàn bộ nội dung mặc định trong `Code.gs`
2. Copy toàn bộ nội dung file `Code.gs` trong project này và dán vào
3. Tìm dòng sau và điền email của bạn:
   ```javascript
   const OWNER_EMAIL = "PASTE_YOUR_EMAIL_HERE";
   // Ví dụ:
   const OWNER_EMAIL = "chuxuong@gmail.com";
   ```
4. Nhấn **Ctrl + S** để lưu

### 2.3 Deploy thành Web App
1. Nhấn nút **Deploy** (góc trên phải) → **New deployment**
2. Nhấn biểu tượng ⚙️ bên cạnh "Select type" → chọn **Web app**
3. Điền thông tin:
   - **Description**: `Noi That Tu Van v1`
   - **Execute as**: `Me` (tài khoản Google của bạn)
   - **Who has access**: `Anyone` ← **quan trọng**, phải chọn Anyone
4. Nhấn **Deploy**
5. **Cấp quyền**: Google sẽ hỏi quyền truy cập
   - Nhấn **Authorize access**
   - Chọn tài khoản Google của bạn
   - Nhấn **Advanced** → **Go to [tên script] (unsafe)** → **Allow**
6. Copy **Web app URL** hiện ra (dạng `https://script.google.com/macros/s/AKfyc.../exec`)

> ⚠️ **Lưu ý**: Mỗi lần sửa `Code.gs`, bạn phải **Deploy lại** (New deployment hoặc Manage deployments → chọn version mới) thì thay đổi mới có hiệu lực.

---

## Bước 3 — Tạo thư mục Google Drive lưu ảnh

> Bước này **không bắt buộc** — nếu bỏ qua, ảnh sẽ lưu thẳng vào root Google Drive của bạn.

1. Truy cập [drive.google.com](https://drive.google.com)
2. Nhấn **+ Mới → Thư mục mới**, đặt tên ví dụ: `Ảnh Tư Vấn Nội Thất`
3. Mở thư mục vừa tạo
4. Nhìn lên thanh URL của trình duyệt, copy phần ID ở cuối:
   ```
   https://drive.google.com/drive/folders/1aBcDeFgHiJkLmNoPqRsTuV
                                           ^^^^^^^^^^^^^^^^^^^^^^^^
                                           Đây là FOLDER ID
   ```
5. Quay lại `Code.gs` (trong Apps Script Editor), tìm dòng:
   ```javascript
   const DRIVE_FOLDER_ID = "PASTE_YOUR_FOLDER_ID_HERE";
   ```
   Thay bằng ID vừa copy:
   ```javascript
   const DRIVE_FOLDER_ID = "1aBcDeFgHiJkLmNoPqRsTuV";
   ```
6. Lưu và **Deploy lại** (Manage deployments → chọn deployment hiện tại → Edit → chọn version mới → Save)

> 💡 **Cách hoạt động**: Mỗi lần có submission, script tự tạo thư mục con `"NỘI THẤT - [Tên khách] - [Timestamp]"` bên trong, lưu ảnh vào đó, và đính kèm link vào email + Google Sheet.

---

## Bước 4 — Điền URL vào index.html

Mở file `index.html`, tìm dòng (khoảng đầu phần `<script>`):

```javascript
const APPS_SCRIPT_URL = "PASTE_YOUR_APPS_SCRIPT_URL_HERE";
```

Thay bằng URL vừa copy:

```javascript
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfyc.../exec";
```

Lưu file.

---

## Bước 4 — Deploy lên Vercel

### Cách A — Kéo thả (đơn giản nhất, không cần tài khoản Git)

1. Truy cập [vercel.com](https://vercel.com) → Đăng nhập / Tạo tài khoản
2. Từ Dashboard, nhấn **Add New → Project**
3. Kéo thả thư mục `LandingPage` vào ô upload **hoặc** nhấn **Browse** và chọn thư mục
4. Vercel tự nhận đây là static site
5. Nhấn **Deploy**
6. Sau ~30 giây, bạn nhận được URL dạng: `https://landing-page-xxx.vercel.app`

### Cách B — Dùng Vercel CLI

```bash
# Cài Vercel CLI (chỉ cần làm 1 lần)
npm install -g vercel

# Vào thư mục project và deploy
cd LandingPage
vercel

# Làm theo hướng dẫn, chọn "No" cho framework detection
# URL sẽ hiện ra sau khi deploy xong
```

### Cách C — Qua GitHub

1. Push thư mục lên GitHub repository
2. Vào Vercel → **Import Git Repository** → chọn repo
3. Deploy tự động

---

## Bước 5 — Kiểm tra hoạt động

### Test Apps Script
Mở trực tiếp Web App URL trên trình duyệt:
```
https://script.google.com/macros/s/YOUR_ID/exec
```
Nếu thấy `{"status":"ok","message":"Apps Script is running."}` là thành công.

### Test Landing Page
1. Mở trang Vercel vừa deploy
2. Điền form và submit
3. Kiểm tra:
   - **Google Sheet**: Phải có hàng dữ liệu mới trong sheet `Submissions`
   - **Email**: Phải nhận được email HTML tại địa chỉ `OWNER_EMAIL`
   - **Trang kết quả**: Hiện trang cảm ơn với tóm tắt lựa chọn

---

## Cấu trúc file

```
LandingPage/
├── index.html    ← Toàn bộ landing page (HTML + CSS + JS)
├── Code.gs       ← Google Apps Script (copy vào Apps Script Editor)
└── README.md     ← File này
```

---

## Xử lý sự cố thường gặp

| Vấn đề | Nguyên nhân | Cách xử lý |
|--------|-------------|------------|
| Submit không có dữ liệu vào Sheet | Apps Script chưa được cấp quyền | Mở Web App URL trực tiếp → cấp quyền lại |
| Lỗi CORS khi submit | Chọn sai "Who has access" | Đặt lại thành **Anyone** và deploy lại |
| Không nhận được email | `OWNER_EMAIL` sai hoặc Gmail chặn | Kiểm tra Spam, xác nhận email đúng |
| Trang hiện "Paste URL" | Chưa điền `APPS_SCRIPT_URL` | Điền URL vào `index.html` như Bước 3 |
| Deploy lại không có hiệu lực | Dùng lại version cũ | Tạo **New deployment** thay vì dùng version cũ |

---

## Tuỳ chỉnh nhanh

- **Đổi tên xưởng**: Tìm `✦ Xưởng Nội Thất` trong `index.html`
- **Đổi màu chủ đạo**: Tìm `--primary: #8B6914` trong CSS
- **Thêm phong cách**: Thêm object vào mảng `PHONG_CACH` trong JS
- **Đổi ảnh**: Thay URL Unsplash trong `img:` của từng item

---

*Được xây dựng với HTML/CSS/JS thuần — không framework, không npm, không backend.*
