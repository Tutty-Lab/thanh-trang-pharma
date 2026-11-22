# Thanh Trang Pharma — website tĩnh

Website dựng lại từ bản thiết kế PDF "thanh trang demo 7".

## Cấu trúc

```
site/
├── index.html          Trang chủ
├── styleguide.html     Design system: màu, chữ, nút, card, số liệu
├── css/
│   ├── tokens.css      Biến màu, font, kích thước (sửa ở đây trước)
│   ├── base.css        Reset, container
│   ├── components.css  Tiêu đề, nút, header, card, tin tức
│   ├── sections.css    Bố cục từng section trang chủ
│   └── responsive.css  Breakpoint 1100 / 900 / 600px
├── js/main.js          Menu mobile
└── assets/
    ├── images/         Ảnh lấy từ PDF
    └── icons/          Logo, icon footer
```

## Bố cục trang chủ (theo "Layout - Website Thanh Trang - Homepage")

01 Hero → 02 Brand promise → 03 Về Thanh Trang → 04 Thương hiệu châu Âu → 05 Giải pháp sức khỏe →
06 Proof & trust → 07 Nhà thuốc & đối tác → 08 Đến tay người cần nó → 09 Ban lãnh đạo (tùy chọn) →
10 Tin tức → 11 Final CTA.

Màu: trắng làm nền, xanh cho cấu trúc/headline, cam cho điểm chạm. Ảnh hiện dùng tạm ảnh từ bản demo trước;
thay bằng ảnh thật trong `assets/images/` (giữ tên file hoặc sửa `src` trong index.html).
Thương hiệu mới: nhân bản khối `brand-card` đang để trong comment ở section 04.

## Chạy thử

```
python -m http.server 8766 --directory site
```

rồi mở http://localhost:8766 (styleguide: http://localhost:8766/styleguide.html).
