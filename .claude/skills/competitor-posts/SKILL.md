---
name: competitor-posts
description: Tóm tắt bài đăng fanpage đối thủ từ screenshot (hoặc text dán vào), ghi log theo ngày, đối chiếu với dữ liệu của ta và rút góc content. Dùng khi user nói "tóm tắt bài đối thủ", "xem đối thủ đăng gì", hoặc sau khi thả screenshot vào folder competitor_screenshots.
---

# Tóm tắt bài đăng fanpage đối thủ

## Bối cảnh
Facebook chặn đọc fanpage tự động (yêu cầu đăng nhập) → quy trình bán tự động:
người dùng chụp màn hình bài đăng khi lướt fanpage đối thủ → thả vào folder → skill này xử lý phần còn lại.

Đối thủ theo dõi chính (theo `02_content/reference/data_congty_vs_doithu_t6-2026.md`):
- **usalaptop.vn** — đối thủ trực tiếp
- **FPT Shop, CellphoneS** — ông lớn, theo dõi trend khuyến mãi mùa vụ
- Đối thủ khác nếu user cung cấp

## Input
0. **File export từ Chrome extension** (`fb_posts_*.md`) trong `02_content/reference/competitor_screenshots/` — text thô từng bài đã tách sẵn (`=== BÀI #n ===`), đường nhanh nhất. Extension + hướng dẫn cài: `tool/competitor_extension/README.md`
1. **Screenshot** trong `02_content/reference/competitor_screenshots/` (bỏ qua subfolder `processed/`)
   - Bài đăng Facebook (caption + ảnh + tương tác)
   - **Video/Reels/TikTok:** screenshot bài video kèm caption + lượt xem. Hiệu quả nhất: chụp **lưới video** (tab Video của kênh YouTube, hoặc profile TikTok) — 1 screenshot lấy được 6–12 video: tiêu đề + view + độ mới cùng lúc
2. **Text dán trực tiếp** trong tin nhắn hoặc args (nội dung bài copy nguyên văn)
   - Với video quan trọng cần phân tích sâu: dán **transcript** (YouTube → "Hiện bản chép lời" → copy) → phân tích cấu trúc hook/nội dung/CTA của script
3. **WebSearch bổ trợ** (khi user hỏi "đối thủ làm video gì về chủ đề X"): search `<đối thủ> <chủ đề> youtube` — tiêu đề video tìm được chính là hook họ dùng

⚠️ Giới hạn: Claude KHÔNG xem được file video (.mp4) và KHÔNG tự đọc được fanpage/kênh YouTube/TikTok qua URL (đã test 06/2026: Facebook chặn đăng nhập, YouTube chỉ trả về tiêu đề). Input phải là screenshot hoặc text.

Nếu không có input nào → báo user: "Chưa có input. Chụp màn hình bài đăng/lưới video đối thủ thả vào `02_content/reference/competitor_screenshots/` hoặc dán nội dung bài trực tiếp."

## Các bước

### Bước 1 — Đọc input
- List file ảnh trong folder (png/jpg/jpeg), đọc từng ảnh bằng Read tool
- Gom cả text user dán (nếu có)

### Bước 2 — Trích xuất từng bài
Với mỗi bài đăng nhận diện được, trích:

| Trường | Ghi chú |
|---|---|
| Đối thủ | Tên page/kênh (nhìn header trong screenshot) |
| Ngày đăng | Nếu thấy; không thấy ghi "~" + ngày chụp |
| Format | Ảnh đơn / album / video / reels / minigame / livestream |
| Hook (câu mở) | Nguyên văn nếu đọc được. Với video: tiêu đề video = hook |
| Thông điệp chính | 1 câu |
| Offer/giá | Khuyến mãi, %, giá cụ thể nếu có |
| Tương tác | Like/comment/share/view nếu thấy trong screenshot |

Với screenshot **lưới video** (nhiều video trong 1 ảnh): trích bảng `tiêu đề | view | độ mới` cho từng video,
sau đó nhận xét chung: chủ đề nào họ làm nhiều nhất, video nào view vượt trội (→ chủ đề khách quan tâm).
Với **transcript** video: phân tích cấu trúc 0–3s hook / nội dung / CTA — đối chiếu format script trong `weekly_content_writing_process.md`.

Không suy đoán phần bị che/mờ — ghi "(không rõ)".

### Bước 3 — Ghi log
Append vào `02_content/reference/competitor_posts_log.md` (tạo file nếu chưa có) theo format:

```markdown
## [DD/MM/YYYY] — N bài

### <Đối thủ> — <format> — <ngày đăng>
- **Hook:** ...
- **Thông điệp:** ...
- **Offer:** ...
- **Tương tác:** ...
```

### Bước 4 — Phân tích & rút góc content
Đối chiếu với:
- `02_content/reference/data_congty_vs_doithu_t6-2026.md` (cam kết + giá của ta)
- Các entry cũ trong `competitor_posts_log.md` (pattern lặp lại của đối thủ?)

Trả lời 3 câu, ghi vào cuối entry log:
1. **Đối thủ đang đẩy gì?** (sản phẩm/phân khúc/thông điệp)
2. **Ta có lợi thế gì để phản công?** (vd: họ đẩy "bao test 7 ngày" → ta có "lỗi 1 đổi 1 trong 15 ngày")
3. **Góc content đề xuất** — tối đa 3 góc, mỗi góc 1 câu, ghi rõ persona nhắm tới

⚠️ Khi đề xuất góc content có cam kết: chỉ dùng nguyên văn cam kết trong `data_congty_vs_doithu_t6-2026.md` mục "Cam kết".

### Bước 5 — Dọn dẹp
- Di chuyển (move, không xóa) các screenshot + file export đã xử lý vào `competitor_screenshots/processed/`
- Báo user: số bài đã tóm tắt, link file log, và 3 góc content đề xuất

## Output cuối
Tóm tắt ngắn cho user: số bài xử lý theo từng đối thủ, insight đáng chú ý nhất, 3 góc content. Chi tiết đầy đủ nằm trong file log.
