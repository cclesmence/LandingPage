    /* ─────────────────────────────────────────────
    CONFIGURATION
    ───────────────────────────────────────────── */
    const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyassBznSA4IyNj7CxuEa3llkBCwDkttD5b8wu53v047VrpWkjQD6TiPu2ZNq4O5BlK/exec";

    /* ─────────────────────────────────────────────
    DATA
    ───────────────────────────────────────────── */
    const ROOMS = [
    { id: "phong-khach",      name: "Phòng khách",          icon: "🛋️" },
    { id: "phong-ngu-master", name: "Phòng ngủ master",      icon: "🛏️" },
    { id: "phong-ngu-phu",   name: "Phòng ngủ phụ",         icon: "🛏️" },
    { id: "bep-ban-an",      name: "Phòng bếp + bàn ăn",    icon: "🍳" },
    { id: "phong-lam-viec",  name: "Phòng làm việc",         icon: "💼" },
    { id: "phong-tam",       name: "Phòng tắm",              icon: "🛁" },
    { id: "ban-cong",        name: "Ban công / sân vườn",    icon: "🌿" },
    { id: "hanh-lang",       name: "Hành lang / sảnh",       icon: "🚪" }
    ];

    const PHONG_CACH = [
    { id: "co-dien",      name: "Cổ điển (Classical)",             img: "assets/pc/pc1.jpg" },
    { id: "tan-co-dien", name: "Tân cổ điển (Neoclassical)",       img: "assets/pc/pc2.jpg" },
    { id: "hien-dai",    name: "Hiện đại (Modern)",                img: "assets/pc/pc3.jpg" },
    { id: "toi-gian",    name: "Tối giản (Minimalism)",            img: "assets/pc/pc4.png" },
    { id: "cong-nghiep", name: "Công nghiệp (Industrial)",         img: "assets/pc/pc5.png" },
    { id: "bac-au",      name: "Bắc Âu (Scandinavian)",            img: "assets/pc/pc6.png" },
    { id: "dia-trung-hai", name: "Địa Trung Hải (Mediterranean)",  img: "assets/pc/pc7.png" },
    { id: "nhat-ban",    name: "Nhật Bản (Japanese Zen)",          img: "assets/pc/pc8.png" },
    { id: "duong-dai",   name: "Đương đại (Contemporary)",         img: "assets/pc/pc9.png" },
    { id: "rustic",      name: "Rustic (Mộc mạc)",                 img: "assets/pc/pc10.png" },
    { id: "co-dien-2",     name: "Cổ điển (Classical)",        img: "assets/pc/pc11.jpg" },
    { id: "modern-2",      name: "Modern (Hiện đại)",           img: "assets/pc/pc12.png" },
    { id: "minimalism-2",  name: "Minimalism (Tối giản)",       img: "assets/pc/pc13.png" },
    { id: "scandinavian-2",name: "Scandinavian",                img: "assets/pc/pc14.png" },
    { id: "industrial-2",  name: "Industrial",                  img: "assets/pc/pc15.png" },
    { id: "vintage-retro", name: "Vintage / Retro",             img: "assets/pc/pc16.png" },
    { id: "indochine",     name: "Indochine (Đông Dương)",      img: "assets/pc/pc17.png" },
    { id: "wabi-sabi",     name: "Wabi Sabi (Nhật)",            img: "assets/pc/pc18.png" },
    { id: "japandi",       name: "Japandi (Nhật + Bắc Âu)",    img: "assets/pc/pc19.png" },
    { id: "eclectic",      name: "Eclectic (Chiết trung)",      img: "assets/pc/pc20.png" }
    ];

    const COLOUR_COMBO = [
    {
        id: "tra-sua-xam",
        name: "Trà sữa & Xám quý ông",
        img: "assets/color/color1.png",
        colors: [
    { hex: "#D4C6B2", name: "Màu Trà sữa" },
    { hex: "#676964", name: "Xám Quý ông" },
    { hex: "#CFC2AB", name: "Trắng nhạt" },
    { hex: "#B8ADA2", name: "Xám be" }
        ]
    },
    {
        id: "xam-den-nau",
        name: "Xám thẩm & Đen",
        img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=480&h=360&fit=crop&auto=format",
        colors: [
    { hex: "#5A6060", name: "Xám thẩm" },
    { hex: "#1A1A1A", name: "Đen kim cương" },
    { hex: "#7D5A3C", name: "Nâu jeep" },
    { hex: "#D4C5B0", name: "Màu Trà sữa" }
        ]
    },
    {
        id: "tra-sua-oc-cho",
        name: "Trà sữa & Óc chó",
        img: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=480&h=360&fit=crop&auto=format",
        colors: [
    { hex: "#D4C5B0", name: "Màu Trà sữa" },
    { hex: "#5C3D2E", name: "Gỗ óc chó" },
    { hex: "#C4A882", name: "Nâu nhạt" },
    { hex: "#9B7B5E", name: "Gỗ óc chó nhạt" }
        ]
    },
    {
        id: "tra-sua-trang-nga",
        name: "Trà sữa & Trắng ngà",
        img: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=480&h=360&fit=crop&auto=format",
        colors: [
    { hex: "#D4C5B0", name: "Màu Trà sữa" },
    { hex: "#F5EFE6", name: "Trắng ngà" },
    { hex: "#C4A882", name: "Nâu nhạt" },
    { hex: "#7D5A3C", name: "Nâu óc chó" }
        ]
    },
    {
        id: "tra-sua-oc-cho-dam",
        name: "Trà sữa & Óc chó đậm",
        img: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=480&h=360&fit=crop&auto=format",
        colors: [
    { hex: "#D4C5B0", name: "Màu Trà sữa" },
    { hex: "#4A2C1A", name: "Gỗ óc chó đậm" },
    { hex: "#A0714F", name: "Nâu hạt dẻ" },
    { hex: "#B5A898", name: "Xám trà sữa" }
        ]
    },
    {
        id: "nau-quy-ong",
        name: "Nâu Quý ông & Xanh nâu",
        img: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=480&h=360&fit=crop&auto=format",
        colors: [
    { hex: "#7D5A3C", name: "Nâu Quý ông" },
    { hex: "#E8E0D0", name: "Trắng kem bẩn" },
    { hex: "#A0714F", name: "Nâu hạt dẻ" },
    { hex: "#8FA097", name: "Xanh nâu nhạt" }
        ]
    },
    {
        id: "tra-sua-ho-dao",
        name: "Trà sữa & Hồ đào",
        img: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=480&h=360&fit=crop&auto=format",
        colors: [
    { hex: "#D4C5B0", name: "Màu Trà sữa" },
    { hex: "#8B4513", name: "Nâu hồ đào" },
    { hex: "#9B7B5E", name: "Gỗ óc chó nhạt" },
    { hex: "#CCCCCC", name: "Xám nhạt" }
        ]
    }
    ];

    const MATERIALS = [
    {
        id: "go-tu-nhien", name: "Gỗ tự nhiên",
        img: "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=480&h=360&fit=crop&auto=format",
        types: [
    { id: "soi-my",   name: "Sồi Mỹ",   img: "https://images.unsplash.com/photo-1574016290398-6feabb46dc65?w=200&h=200&fit=crop&auto=format" },
    { id: "teak",     name: "Teak",      img: "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=200&h=200&fit=crop&auto=format" },
    { id: "oc-cho",   name: "Óc chó",    img: "https://images.unsplash.com/photo-1566791396524-5ab6a641cb10?w=200&h=200&fit=crop&auto=format" },
    { id: "xoan-dao", name: "Xoan đào",  img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=200&h=200&fit=crop&auto=format" },
    { id: "huong",    name: "Hương",     img: "https://images.unsplash.com/photo-1548591890-5e0a4b3d7d15?w=200&h=200&fit=crop&auto=format" },
    { id: "go-lat",   name: "Lát hoa",   img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format" },
    { id: "go-mit",   name: "Mít",       img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=200&h=200&fit=crop&auto=format" },
    { id: "go-pine",  name: "Thông",     img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=200&h=200&fit=crop&auto=format" }
        ]
    },
    {
        id: "go-cong-nghiep", name: "Gỗ công nghiệp",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=480&h=360&fit=crop&auto=format",
        types: [
    { id: "mdf",      name: "MDF",      img: "https://images.unsplash.com/photo-1574016290398-6feabb46dc65?w=200&h=200&fit=crop&auto=format" },
    { id: "hdf",      name: "HDF",      img: "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=200&h=200&fit=crop&auto=format" },
    { id: "mfc",      name: "MFC",      img: "https://images.unsplash.com/photo-1566791396524-5ab6a641cb10?w=200&h=200&fit=crop&auto=format" },
    { id: "laminate", name: "Laminate", img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=200&h=200&fit=crop&auto=format" },
    { id: "acrylic",  name: "Acrylic",  img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=200&h=200&fit=crop&auto=format" },
    { id: "melamine", name: "Melamine", img: "https://images.unsplash.com/photo-1548591890-5e0a4b3d7d15?w=200&h=200&fit=crop&auto=format" },
    { id: "veneer",   name: "Veneer",   img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=200&h=200&fit=crop&auto=format" }
        ]
    },
    {
        id: "kinh", name: "Kính",
        img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=480&h=360&fit=crop&auto=format",
        types: [
    { id: "kinh-trong",     name: "Kính trong",  img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=200&h=200&fit=crop&auto=format" },
    { id: "kinh-mo",        name: "Kính mờ",    img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=200&h=200&fit=crop&auto=format" },
    { id: "kinh-cuong-luc", name: "Cường lực",  img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=200&h=200&fit=crop&auto=format" },
    { id: "kinh-guong",     name: "Kính gương", img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=200&h=200&fit=crop&auto=format" },
    { id: "kinh-mau",       name: "Kính màu",   img: "https://images.unsplash.com/photo-1551730459-92db2a308d6a?w=200&h=200&fit=crop&auto=format" },
    { id: "kinh-san",       name: "Kính sần",   img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=200&h=200&fit=crop&auto=format" },
    { id: "kinh-long-chim", name: "Long chim",  img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=200&h=200&fit=crop&auto=format" }
        ]
    },
    {
        id: "da", name: "Đá",
        img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=480&h=360&fit=crop&auto=format",
        types: [
    { id: "fairy-white",       name: "Fairy White",           img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=200&h=200&fit=crop&auto=format" },
    { id: "fantasy-gray",      name: "Fantasy Gray",          img: "https://images.unsplash.com/photo-1584473457406-6240486418e9?w=200&h=200&fit=crop&auto=format" },
    { id: "fossil-brown",      name: "Fossil Brown",          img: "https://images.unsplash.com/photo-1535567465461-dfaa55ba6f82?w=200&h=200&fit=crop&auto=format" },
    { id: "fossil-gray",       name: "Fossil Gray",           img: "https://images.unsplash.com/photo-1584473457406-6240486418e9?w=200&h=200&fit=crop&auto=format" },
    { id: "frost-white",       name: "Frost White",           img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=200&h=200&fit=crop&auto=format" },
    { id: "marbella-white",    name: "Marbella White",        img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=200&h=200&fit=crop&auto=format" },
    { id: "marquina-midnight", name: "Marquina Midnight",     img: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?w=200&h=200&fit=crop&auto=format" },
    { id: "meridian-gray",     name: "Meridian Gray",         img: "https://images.unsplash.com/photo-1584473457406-6240486418e9?w=200&h=200&fit=crop&auto=format" },
    { id: "midnight-corvo",    name: "Midnight Corvo",        img: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?w=200&h=200&fit=crop&auto=format" },
    { id: "midnight-majesty",  name: "Midnight Majesty",      img: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?w=200&h=200&fit=crop&auto=format" },
    { id: "galant-gray",       name: "Galant Gray",           img: "https://images.unsplash.com/photo-1584473457406-6240486418e9?w=200&h=200&fit=crop&auto=format" },
    { id: "glacier-white",     name: "Glacier White",         img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=200&h=200&fit=crop&auto=format" },
    { id: "gray-lagoon",       name: "Gray Lagoon",           img: "https://images.unsplash.com/photo-1584473457406-6240486418e9?w=200&h=200&fit=crop&auto=format" },
    { id: "hazelwood",         name: "Hazelwood",             img: "https://images.unsplash.com/photo-1535567465461-dfaa55ba6f82?w=200&h=200&fit=crop&auto=format" },
    { id: "iced-gray",         name: "Iced Gray",             img: "https://images.unsplash.com/photo-1584473457406-6240486418e9?w=200&h=200&fit=crop&auto=format" },
    { id: "mirano-gray",       name: "Mirano Gray",           img: "https://images.unsplash.com/photo-1584473457406-6240486418e9?w=200&h=200&fit=crop&auto=format" },
    { id: "montclair-white",   name: "Montclair White",       img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=200&h=200&fit=crop&auto=format" },
    { id: "mystic-gray",       name: "Mystic Gray",           img: "https://images.unsplash.com/photo-1527664544008-d47f0c0d6f36?w=200&h=200&fit=crop&auto=format" },
    { id: "new-calacatta",     name: "New Calacatta Laza",    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=200&h=200&fit=crop&auto=format" },
    { id: "iced-white",        name: "Iced White",            img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=200&h=200&fit=crop&auto=format" },
    { id: "lido-blanco",       name: "Lido Blanco",           img: "https://images.unsplash.com/photo-1535567465461-dfaa55ba6f82?w=200&h=200&fit=crop&auto=format" },
    { id: "macabo-gray",       name: "Macabo Gray",           img: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?w=200&h=200&fit=crop&auto=format" },
    { id: "manhattan-gray",    name: "Manhattan Gray",        img: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?w=200&h=200&fit=crop&auto=format" },
    { id: "mara-blanca",       name: "Mara Blanca",           img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=200&h=200&fit=crop&auto=format" },
    { id: "new-carrara",       name: "New Carrara Marmi",     img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=200&h=200&fit=crop&auto=format" },
    { id: "pacific-salt",      name: "Pacific Salt",          img: "https://images.unsplash.com/photo-1535567465461-dfaa55ba6f82?w=200&h=200&fit=crop&auto=format" },
    { id: "pearl-gray",        name: "Pearl Gray",            img: "https://images.unsplash.com/photo-1584473457406-6240486418e9?w=200&h=200&fit=crop&auto=format" },
    { id: "pebble-rock",       name: "Pebble Rock",           img: "https://images.unsplash.com/photo-1527664544008-d47f0c0d6f36?w=200&h=200&fit=crop&auto=format" },
    { id: "peppercorn-white",  name: "Peppercorn White",      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=200&h=200&fit=crop&auto=format" },
    { id: "perla-white",       name: "Perla White",           img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=200&h=200&fit=crop&auto=format" }
        ]
    },
    {
        id: "inox", name: "Inox",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=480&h=360&fit=crop&auto=format",
        types: [
    { id: "inox-bong",     name: "Inox bóng",  img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&h=200&fit=crop&auto=format" },
    { id: "inox-mo",       name: "Inox mờ",    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&h=200&fit=crop&auto=format" },
    { id: "inox-den",      name: "Inox đen",   img: "https://images.unsplash.com/photo-1564540574859-0dfb63985953?w=200&h=200&fit=crop&auto=format" },
    { id: "inox-vang",     name: "Inox vàng",  img: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=200&h=200&fit=crop&auto=format" },
    { id: "inox-brushed",  name: "Brushed",    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&h=200&fit=crop&auto=format" },
    { id: "inox-hairline", name: "Hairline",   img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&h=200&fit=crop&auto=format" },
    { id: "inox-dong",     name: "Inox đồng",  img: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=200&h=200&fit=crop&auto=format" }
        ]
    },
    {
        id: "vai", name: "Vải",
        img: "https://images.unsplash.com/photo-1558618047-3c2f1bc77e0e?w=480&h=360&fit=crop&auto=format",
        types: [
    { id: "vai-nhung",      name: "Vải nhung",  img: "https://images.unsplash.com/photo-1558618047-3c2f1bc77e0e?w=200&h=200&fit=crop&auto=format" },
    { id: "vai-bo",         name: "Vải bố",     img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=200&h=200&fit=crop&auto=format" },
    { id: "da-that",        name: "Da thật",    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&h=200&fit=crop&auto=format" },
    { id: "da-pu",          name: "Da PU",      img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&h=200&fit=crop&auto=format" },
    { id: "vai-cotton",     name: "Cotton",     img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=200&h=200&fit=crop&auto=format" },
    { id: "vai-linen",      name: "Linen",      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=200&h=200&fit=crop&auto=format" },
    { id: "vai-microfiber", name: "Microfiber", img: "https://images.unsplash.com/photo-1558618047-3c2f1bc77e0e?w=200&h=200&fit=crop&auto=format" }
        ]
    }
    ];

    const MAU_SAC = [
    { id: "trang-kem",  name: "Trắng kem",  color: "#F5F0E8" },
    { id: "xam-nhat",   name: "Xám nhạt",   color: "#C8C8C8" },
    { id: "nau-go",     name: "Nâu gỗ",     color: "#8B5E3C" },
    { id: "xanh-reu",   name: "Xanh rêu",   color: "#6B7C5C" },
    { id: "xanh-navy",  name: "Xanh navy",  color: "#1B2F5B" },
    { id: "den-trang",  name: "Đen trắng",  color: "#1A1A1A" },
    { id: "hong-nude",  name: "Hồng nude",  color: "#D4A5A5" },
    { id: "tuy-chinh",  name: "Tùy chỉnh",  color: null }
    ];

    const VAT_LIEU_OPTIONS = ["Gỗ tự nhiên", "Gỗ công nghiệp", "Da thật", "Vải nhung", "Kim loại", "Mây tre"];
    const UU_TIEN_OPTIONS  = ["Quan trọng nhất", "Quan trọng", "Bình thường"];
    const UU_TIEN_PHAN_BO_OPTIONS = ["Phần thô", "Nội thất", "Cảnh quan", "Cân bằng các hạng mục"];
    const MUC_HOAN_THIEN_OPTIONS = ["Basic", "Tiêu chuẩn", "Cao cấp"];

    const MAX_PHOTOS_PER_ROOM = 5;
    const MAX_PHOTO_MB        = 5;
    const MAX_TOTAL_MB        = 20;

    /* ─────────────────────────────────────────────
    STATE
    ───────────────────────────────────────────── */
    const state = {
    ho_ten: "", so_dien_thoai: "", email: "", dia_chi: "", dien_tich: "", nguon_khach: "",
    ten_du_an: "", chu_dau_tu: "", loai_cong_trinh: "", dt_dat: "",
    selected_rooms: [],
    room_details: {},
    ngan_sach: "", thoi_gian_thi_cong: "", yeu_cau_dac_biet: "",
    uu_tien_phan_bo: "", muc_hoan_thien: "", cac_moc_quan_trong: "",
    khao_sat_phong_cach: "", khao_sat_hinh_anh: "", khao_sat_khong_gian: "",
    thoi_quen: [], so_thich: [],
    ly_do: "", ky_vong: [], uu_tien: "",
    phong_cach: [], colour_combo: [],
    materials: {}
};

    function ensureRoomState(roomId) {
    if (!state.room_details[roomId])
    state.room_details[roomId] = { dien_tich: "", yeu_cau: [], yeu_cau_khac: "" };
}

    /* ─────────────────────────────────────────────
    RENDER: ROOM GRID (Step 2)
    ───────────────────────────────────────────── */
    function renderRooms() {
    const container = document.getElementById("grid-rooms");
    container.innerHTML = "";
    ROOMS.forEach(room => {
    const el = document.createElement("div");
    el.className = "room-check-item";
    el.dataset.id = room.id;
    el.innerHTML = `<span class="room-icon">${room.icon}</span><span class="room-label">${room.name}</span>`;
    el.addEventListener("click", () => {
    const checked = el.classList.toggle("checked");
    if (checked) { if (!state.selected_rooms.includes(room.id)) state.selected_rooms.push(room.id); }
    else          { state.selected_rooms = state.selected_rooms.filter(id => id !== room.id); }
    toggleRoom(room.id, checked);
    showErr("err-rooms", false);
});
    container.appendChild(el);
});
}

    /* ─────────────────────────────────────────────
    TOGGLE ROOM PANEL (Step 3)
    ───────────────────────────────────────────── */
    function toggleRoom(roomId, checked) {
    const container = document.getElementById("room-details-container");
    const empty     = document.getElementById("step3-empty");
    if (checked) {
    ensureRoomState(roomId);
    const room  = ROOMS.find(r => r.id === roomId);
    const panel = buildRoomPanel(room);
    const order = ROOMS.map(r => r.id);
    let inserted = false;
    container.querySelectorAll(".room-panel[data-room-id]").forEach(sib => {
    if (!inserted && order.indexOf(sib.dataset.roomId) > order.indexOf(roomId)) {
    container.insertBefore(panel, sib); inserted = true;
}
});
    if (!inserted) container.appendChild(panel);
} else {
    const existing = container.querySelector(`.room-panel[data-room-id="${roomId}"]`);
    if (existing) existing.remove();
    delete state.room_details[roomId];
}
    empty.style.display = state.selected_rooms.length === 0 ? "block" : "none";
}

    /* ─────────────────────────────────────────────
    BUILD ROOM PANEL
    ───────────────────────────────────────────── */
    function buildRoomPanel(room) {
    const panel = document.createElement("details");
    panel.className = "room-panel";
    panel.open = true;
    panel.dataset.roomId = room.id;
    panel.innerHTML = `
        <summary class="room-panel-summary">
          <span class="rp-icon">${room.icon}</span>
          <span>${room.name}</span>
          <svg class="rp-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <div class="room-panel-body">
          <div class="field-group" style="margin-top:14px;">
            <label>Diện tích dự kiến (m²)</label>
            <input type="number" id="dientich-${room.id}" placeholder="m²" min="1" />
          </div>
          <div class="field-group" style="margin-top:12px;">
            <label>Yêu cầu đặc biệt</label>
            <div class="checkbox-grid" id="yeu-cau-grid-${room.id}"></div>
            <input type="text" id="yeu-cau-khac-${room.id}" class="other-input" placeholder="Nhập yêu cầu khác..." style="display:none;">
          </div>
        </div>`;
    setTimeout(() => renderRoomYeuCau(room.id), 0);
    return panel;
}

    function renderRoomYeuCau(roomId) {
    const d = state.room_details[roomId];
    const container = document.getElementById("yeu-cau-grid-" + roomId);
    if (!container || !d) return;
    const options = ["Phòng kín", "Cần cách âm", "Cần linh hoạt chuyển đổi", "Phong thủy", "Kỹ thuật riêng (smart home, năng lượng mặt trời...)", "Khác"];
    container.innerHTML = "";
    options.forEach(opt => {
    const item = document.createElement("div");
    item.className = "checkbox-item" + (d.yeu_cau.includes(opt) ? " checked" : "");
    item.innerHTML = `<div class="checkbox-box"><svg viewBox="0 0 10 8"><polyline points="1,4 3.5,7 9,1"/></svg></div><span class="checkbox-label">${opt}</span>`;
    item.addEventListener("click", () => {
    const idx = d.yeu_cau.indexOf(opt);
    if (idx === -1) { d.yeu_cau.push(opt); item.classList.add("checked"); }
    else            { d.yeu_cau.splice(idx, 1); item.classList.remove("checked"); }
    if (opt === "Khác") {
    const inp = document.getElementById("yeu-cau-khac-" + roomId);
    if (inp) { inp.style.display = item.classList.contains("checked") ? "block" : "none"; if (!item.classList.contains("checked")) inp.value = ""; }
}
});
    container.appendChild(item);
});
}

    /* ─────────────────────────────────────────────
    RENDER: RADIO GROUPS (Step 4)
    ───────────────────────────────────────────── */
    function renderRadios(containerId, options, stateKey) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    options.forEach(opt => {
    const item = document.createElement("div");
    item.className = "radio-item" + (state[stateKey] === opt ? " selected" : "");
    item.innerHTML = `<div class="radio-dot"></div><span class="radio-text">${opt}</span>`;
    item.addEventListener("click", () => {
    state[stateKey] = opt;
    container.querySelectorAll(".radio-item").forEach(el => el.classList.remove("selected"));
    item.classList.add("selected");
});
    container.appendChild(item);
});
}

    /* ─────────────────────────────────────────────
    VALIDATION
    ───────────────────────────────────────────── */
    function showErr(id, show) { const el = document.getElementById(id); if (el) el.classList.toggle("visible", show); }
    function markField(id, error) { const el = document.getElementById(id); if (el) el.classList.toggle("error", error); }

    function validateStep1() {
    const ten = document.getElementById("f-ten").value.trim();
    const sdt = document.getElementById("f-sdt").value.trim();
    const email = document.getElementById("f-email").value.trim();
    const diachi = document.getElementById("f-diachi").value.trim();
    const dientich = document.getElementById("f-dientich").value.trim();
    let ok = true;
    const noTen = !ten; markField("f-ten", noTen); showErr("err-ten", noTen); if (noTen) ok = false;
    const noSdt = !sdt || !/^(0|\+84)[0-9]{8,10}$/.test(sdt.replace(/\s/g, ""));
    markField("f-sdt", noSdt); showErr("err-sdt", noSdt); if (noSdt) ok = false;
    if (email) { const bad = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); markField("f-email", bad); showErr("err-email", bad); if (bad) ok = false; }
    else { markField("f-email", false); showErr("err-email", false); }
    const noDiachi = !diachi; markField("f-diachi", noDiachi); showErr("err-diachi", noDiachi); if (noDiachi) ok = false;
    const noDientich = !dientich || isNaN(dientich) || +dientich <= 0;
    markField("f-dientich", noDientich); showErr("err-dientich", noDientich); if (noDientich) ok = false;
    state.ho_ten = ten; state.so_dien_thoai = sdt; state.email = email;
    state.dia_chi = diachi; state.dien_tich = dientich;
    state.nguon_khach = document.getElementById("f-nguon")?.value || "";
    state.ten_du_an = document.getElementById("f-ten-du-an")?.value.trim() || "";
    state.chu_dau_tu = document.getElementById("f-chu-dau-tu")?.value.trim() || "";
    state.loai_cong_trinh = document.getElementById("f-loai-ct")?.value || "";
    state.dt_dat = document.getElementById("f-dt-dat")?.value.trim() || "";
    return ok;
}

    function validateStep2() {
    const ok = state.selected_rooms.length > 0;
    showErr("err-rooms", !ok);
    return ok;
}

    function validateStep3() {
    state.selected_rooms.forEach(roomId => {
        const d = state.room_details[roomId];
        if (!d) return;
        const dtEl = document.getElementById("dientich-" + roomId);
        if (dtEl) d.dien_tich = dtEl.value.trim();
        const khacEl = document.getElementById("yeu-cau-khac-" + roomId);
        if (khacEl) d.yeu_cau_khac = khacEl.value.trim();
    });
    return true;
}

    function validateStep4() {
    state.ngan_sach = document.getElementById("f-tong-ngansach")?.value.trim() || "";
    state.uu_tien_phan_bo = state.uu_tien_phan_bo || "";
    state.muc_hoan_thien = state.muc_hoan_thien || "";
    state.thoi_gian_thi_cong = document.getElementById("f-thoi-gian-hoan-thanh")?.value.trim() || "";
    state.cac_moc_quan_trong = document.getElementById("f-cac-moc-quan-trong")?.value.trim() || "";
    state.khao_sat_phong_cach = document.getElementById("f-khaosat-phongcach")?.value.trim() || "";
    state.khao_sat_hinh_anh = document.getElementById("f-khaosat-hinhanh")?.value.trim() || "";
    state.khao_sat_khong_gian = document.getElementById("f-khaosat-khonggian")?.value.trim() || "";
    return true;
}

    /* ─────────────────────────────────────────────
    VALIDATE ALL & HANDLE SUBMIT
    ───────────────────────────────────────────── */
    function validateAll() {
    const results = [validateStep1(), validateStep2(), validateStep3(), validateStep4()];
    const allOk = results.every(Boolean);
    if (!allOk) {
    const firstErr = document.querySelector(".field-error.visible");
    if (firstErr) {
    const panel = firstErr.closest("details");
    if (panel && !panel.open) panel.open = true;
    setTimeout(() => firstErr.scrollIntoView({ behavior: "smooth", block: "center" }), 80);
}
}
    return allOk;
}

    function handleSubmit() {
    const errEl = document.getElementById("global-error-msg");
    errEl.classList.remove("visible");
    if (validateAll()) { submitForm(); }
    else { errEl.textContent = "Vui lòng kiểm tra lại các thông tin còn thiếu bên trên."; errEl.classList.add("visible"); }
}

    /* ─────────────────────────────────────────────
    SUBMIT
    ───────────────────────────────────────────── */
    function setLoading(on) { document.getElementById("loading-overlay").classList.toggle("active", on); }
    function setLoadingMsg(html) { document.querySelector(".loading-text").innerHTML = html; }

    function compressImage(file, maxWidth, quality) {
    return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
    let w = img.width, h = img.height;
    if (w > maxWidth) { h = Math.round(h * maxWidth / w); w = maxWidth; }
    const canvas = document.createElement("canvas");
    canvas.width = w; canvas.height = h;
    canvas.getContext("2d").drawImage(img, 0, 0, w, h);
    URL.revokeObjectURL(url);
    const dataUrl = canvas.toDataURL("image/jpeg", quality);
    resolve(dataUrl.split(",")[1]);
};
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error("img load failed")); };
    img.src = url;
});
}

    async function processImages() {
    const all = [];
    let total = 0;
    state.selected_rooms.forEach(rid => { const d = state.room_details[rid]; if (d) total += d.photos.length; });
    if (total === 0) return all;
    let done = 0;
    for (const roomId of state.selected_rooms) {
    const d    = state.room_details[roomId];
    const room = ROOMS.find(r => r.id === roomId);
    if (!d || !d.photos.length) continue;
    for (const p of d.photos) {
    const data = await compressImage(p.file, 1200, 0.75);
    all.push({ room: room.name, filename: p.name.replace(/\.[^.]+$/, ".jpg"), data, mimeType: "image/jpeg" });
    done++;
    setLoadingMsg(`Đang tải ảnh lên... <strong>${Math.round(done / total * 100)}%</strong>`);
}
}
    return all;
}

    async function submitForm() {
    document.getElementById("submit-error-box").classList.remove("visible");
    setLoading(true);
    setLoadingMsg("Đang xử lý...");

    console.log("[SUBMIT] Bắt đầu xử lý ảnh...");
    let images = [];
    try {
    images = await processImages();
    console.log("[SUBMIT] Xử lý ảnh xong:", images.length, "ảnh");
    images.forEach((img, i) => console.log(`  Ảnh ${i+1}: ${img.filename} | base64 size: ${(img.data.length / 1024).toFixed(1)} KB`));
} catch (imgErr) {
    console.error("[SUBMIT] Lỗi xử lý ảnh:", imgErr);
}
    setLoadingMsg("Đang gửi thông tin...");

    const roomsPayload = state.selected_rooms.map(roomId => {
    const d    = state.room_details[roomId];
    const room = ROOMS.find(r => r.id === roomId);
    return {
    room: room.name,
    phong_cach: d.phong_cach,
    mau_sac: d.mau_sac.map(id => { const s = MAU_SAC.find(m => m.id === id); return s ? s.name : id; }),
    vat_lieu: d.vat_lieu,
    uu_tien: d.uu_tien,
    ghi_chu: d.ghi_chu
};
});

    const payload = {
    timestamp: new Date().toISOString(),
    ho_ten: state.ho_ten, so_dien_thoai: state.so_dien_thoai,
    email: state.email, dia_chi: state.dia_chi, dien_tich: state.dien_tich,
    nguon_khach: state.nguon_khach,
    ten_du_an: state.ten_du_an,
    chu_dau_tu: state.chu_dau_tu,
    loai_cong_trinh: state.loai_cong_trinh,
    dt_dat: state.dt_dat,
    rooms: roomsPayload,
    ngan_sach: state.ngan_sach,
    thoi_gian_thi_cong: state.thoi_gian_thi_cong,
    yeu_cau_dac_biet: state.yeu_cau_dac_biet,
    uu_tien_phan_bo: state.uu_tien_phan_bo,
    muc_hoan_thien: state.muc_hoan_thien,
    cac_moc_quan_trong: state.cac_moc_quan_trong,
    khao_sat_phong_cach: state.khao_sat_phong_cach,
    khao_sat_hinh_anh: state.khao_sat_hinh_anh,
    khao_sat_khong_gian: state.khao_sat_khong_gian,
    images
};

    const bodyStr = JSON.stringify(payload);
    console.log("[SUBMIT] Payload tổng:", (bodyStr.length / 1024).toFixed(1), "KB |", images.length, "ảnh");
    console.log("[SUBMIT] Gửi đến:", APPS_SCRIPT_URL);

    try {
    if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL === "PASTE_YOUR_APPS_SCRIPT_URL_HERE") {
    await new Promise(r => setTimeout(r, 800));
    showResult(); return;
}
    const res = await fetch(APPS_SCRIPT_URL, {
    method: "POST", headers: { "Content-Type": "text/plain" },
    body: bodyStr, mode: "no-cors"
});
    console.log("[SUBMIT] fetch hoàn thành. Response type:", res.type, "| status:", res.status);
    showResult();
} catch (err) {
    console.error("[SUBMIT] fetch lỗi:", err);
    setLoading(false);
    document.getElementById("submit-error-msg").textContent = "Có lỗi xảy ra khi gửi thông tin. Vui lòng kiểm tra kết nối và thử lại.";
    document.getElementById("submit-error-box").classList.add("visible");
}
}

    function retrySubmit() { submitForm(); }

    /* ─────────────────────────────────────────────
    RESULT PAGE
    ───────────────────────────────────────────── */
    function showResult() {
    setLoading(false);
    document.querySelectorAll(".accordion-step").forEach(s => s.style.display = "none");
    const sw = document.querySelector(".submit-wrap"); if (sw) sw.style.display = "none";
    document.getElementById("submit-error-box").classList.remove("visible");

    const firstName = state.ho_ten.split(" ").pop();
    const rooms = state.selected_rooms.map(id => ROOMS.find(r => r.id === id)?.name).filter(Boolean);

    document.getElementById("res-title").textContent     = `Cảm ơn bạn, ${firstName}! 🎉`;
    document.getElementById("res-subtitle").textContent  = `Chúng tôi đã nhận yêu cầu tư vấn cho ${rooms.length} phòng.`;
    document.getElementById("res-style-badge").textContent = "✦ " + rooms.join(" · ");

    const rows = [
    ["Họ và tên",         state.ho_ten],
    ["Điện thoại",        state.so_dien_thoai],
    ["Email",             state.email || "Chưa cung cấp"],
    ["Địa chỉ thi công",  state.dia_chi],
    ["Diện tích",         state.dien_tich + " m²"],
    ["Phòng thiết kế",    rooms.join(", ")],
    ["Tổng ngân sách dự kiến", state.ngan_sach || "Không có"],
    ["Ưu tiên phân bổ",       state.uu_tien_phan_bo || "Không có"],
    ["Mức hoàn thiện",        state.muc_hoan_thien || "Không có"],
    ["Thời gian hoàn thành",  state.thoi_gian_thi_cong || "Không có"],
    ["Các mốc quan trọng",    state.cac_moc_quan_trong || "Không có"],
    ["Phong cách mong muốn", state.khao_sat_phong_cach || "Không có"],
    ["Hình ảnh tham khảo",   state.khao_sat_hinh_anh || "Không có"],
    ["Điều không thích",     state.khao_sat_khong_gian || "Không có"]
    ];
    document.getElementById("res-summary-rows").innerHTML = rows.map(([k, v]) =>
    `<div class="summary-row"><span class="summary-key">${k}</span><span class="summary-val">${v}</span></div>`
    ).join("");
    document.getElementById("result-page").style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

    /* ─────────────────────────────────────────────
    SHARE / RESTART
    ───────────────────────────────────────────── */
    async function shareResult() {
    try {
    const text = `Mình vừa gửi yêu cầu tư vấn thiết kế nội thất cho ${state.selected_rooms.length} phòng. Bạn thử xem nhé!`;
    if (navigator.share) await navigator.share({ title: "Tư Vấn Thiết Kế Nội Thất", text, url: window.location.href });
    else { await navigator.clipboard.writeText(window.location.href); alert("Đã sao chép link!"); }
} catch (_) {}
}

    function restartForm() { window.location.reload(); }

    /* ─────────────────────────────────────────────
    INIT
    ───────────────────────────────────────────── */
    function init() {
    renderRooms();
    renderRadios("ro-uu-tien-phan-bo", UU_TIEN_PHAN_BO_OPTIONS, "uu_tien_phan_bo");
    renderRadios("ro-muc-hoan-thien", MUC_HOAN_THIEN_OPTIONS, "muc_hoan_thien");
    renderCheckboxGrid("thoi-quen-grid", ["Gọn gàng", "Làm việc tại nhà", "Hay tiếp khách", "Khác"], "thoi_quen", "thoi-quen-khac");
    renderCheckboxGrid("so-thich-grid", ["Nuôi thú cưng", "Đọc sách", "Trồng cây", "Khác"], "so_thich", "so-thich-khac");
    renderRadios("ly-do-radio", ["Ở", "Cho thuê", "Kinh doanh"], "ly_do");
    renderCheckboxGrid("ky-vong-grid", ["Đẹp", "Sang trọng - luxury", "Tiện nghi", "Tối ưu chi phí", "Thể hiện cá tính", "Khác"], "ky_vong", "ky-vong-khac");
    renderRadios("uu-tien-radio", ["Công năng", "Thẩm mỹ"], "uu_tien");
    renderPhongCach();
    renderColourCombo();
    renderMaterials();
}

    function renderColourCombo() {
    const container = document.getElementById("grid-colour");
    if (!container) return;
    container.innerHTML = "";
    COLOUR_COMBO.forEach(item => {
    const card = document.createElement("div");
    card.className = "selection-card" + (state.colour_combo.includes(item.id) ? " selected" : "");
    card.innerHTML = `
          <div class="card-img-wrap">
            <img src="${item.img}" alt="${item.name}" loading="lazy" />
            <div class="card-check"><svg viewBox="0 0 12 10"><polyline points="1,5 4,9 11,1"/></svg></div>
          </div>
          <div class="combo-swatches">
            ${item.colors.map(c => `<div class="combo-swatch"><div class="combo-dot" style="background:${c.hex};"></div><span class="combo-swatch-name">${c.name}</span></div>`).join("")}
          </div>`;
    card.addEventListener("click", () => {
    const idx = state.colour_combo.indexOf(item.id);
    if (idx === -1) { state.colour_combo.push(item.id); card.classList.add("selected"); }
    else            { state.colour_combo.splice(idx, 1); card.classList.remove("selected"); }
});
    container.appendChild(card);
});
}

    function renderMaterials() {
    const section = document.getElementById("material-section");
    if (!section) return;
    section.innerHTML = "";

    const catGrid = document.createElement("div");
    catGrid.className = "material-cat-grid";

    const panels = [];
    MATERIALS.forEach(mat => {
    if (!state.materials[mat.id]) state.materials[mat.id] = [];

    const card = document.createElement("div");
    card.className = "material-cat-card";
    card.innerHTML = `<img class="cat-img" src="${mat.img}" alt="${mat.name}" loading="lazy"><div class="cat-name">${mat.name}</div>`;
    catGrid.appendChild(card);

    const panel = document.createElement("div");
    panel.className = "material-type-panel";
    panel.innerHTML = `<div class="material-type-title">${mat.name}</div><div class="material-type-grid" id="mat-types-${mat.id}"></div>`;
    panels.push({ card, panel, mat });
});

    section.appendChild(catGrid);
    panels.forEach(({ card, panel, mat }) => {
    section.appendChild(panel);
    card.addEventListener("click", () => {
    const isOpen = panel.classList.contains("visible");
    panels.forEach(p => { p.card.classList.remove("active"); p.panel.classList.remove("visible"); });
    if (!isOpen) { card.classList.add("active"); panel.classList.add("visible"); }
    renderMatTypes(mat.id);
});
});
}

    function renderMatTypes(catId) {
    const mat = MATERIALS.find(m => m.id === catId);
    const container = document.getElementById("mat-types-" + catId);
    if (!mat || !container) return;
    container.innerHTML = "";
    mat.types.forEach(t => {
    const item = document.createElement("div");
    item.className = "material-type-item" + (state.materials[catId].includes(t.id) ? " selected" : "");
    item.innerHTML = `<img class="material-type-swatch" src="${t.img}" alt="${t.name}" loading="lazy"><span class="material-type-name">${t.name}</span>`;
    item.addEventListener("click", () => {
    const idx = state.materials[catId].indexOf(t.id);
    if (idx === -1) { state.materials[catId].push(t.id); item.classList.add("selected"); }
    else            { state.materials[catId].splice(idx, 1); item.classList.remove("selected"); }
});
    container.appendChild(item);
});
}

    function renderPhongCach() {
    const container = document.getElementById("grid-phongcach");
    if (!container) return;
    container.innerHTML = "";
    PHONG_CACH.forEach(item => {
    const card = document.createElement("div");
    card.className = "selection-card" + (state.phong_cach.includes(item.id) ? " selected" : "");
    card.innerHTML = `
          <div class="card-img-wrap">
            <img src="${item.img}" alt="${item.name}" loading="lazy" />
            <div class="card-check"><svg viewBox="0 0 12 10"><polyline points="1,5 4,9 11,1"/></svg></div>
          </div>
          <div class="card-body">
            <div class="card-title">${item.name}</div>
          </div>`;
    card.addEventListener("click", () => {
    const idx = state.phong_cach.indexOf(item.id);
    if (idx === -1) { state.phong_cach.push(item.id); card.classList.add("selected"); }
    else            { state.phong_cach.splice(idx, 1); card.classList.remove("selected"); }
});
    container.appendChild(card);
});
}

    function renderCheckboxGrid(containerId, options, stateKey, otherInputId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    options.forEach(opt => {
    const item = document.createElement("div");
    item.className = "checkbox-item" + (state[stateKey].includes(opt) ? " checked" : "");
    item.innerHTML = `<div class="checkbox-box"><svg viewBox="0 0 10 8"><polyline points="1,4 3.5,7 9,1"/></svg></div><span class="checkbox-label">${opt}</span>`;
    item.addEventListener("click", () => {
    const idx = state[stateKey].indexOf(opt);
    if (idx === -1) { state[stateKey].push(opt); item.classList.add("checked"); }
    else            { state[stateKey].splice(idx, 1); item.classList.remove("checked"); }
    if (opt === "Khác" && otherInputId) {
    const inp = document.getElementById(otherInputId);
    if (inp) { inp.style.display = item.classList.contains("checked") ? "block" : "none"; if (!item.classList.contains("checked")) inp.value = ""; }
}
});
    container.appendChild(item);
});
}

    document.addEventListener("DOMContentLoaded", init);
