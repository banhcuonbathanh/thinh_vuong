# Hướng Dẫn Từng Bước — Tool Tóm Tắt Bài Đăng Đối Thủ

> Tool gồm 2 phần: **Chrome extension** (lấy bài từ fanpage) + **skill `/competitor-posts`** (tóm tắt + rút góc content).
> Phần A làm 1 lần duy nhất. Phần B làm hàng tuần, mất ~3 phút.

---

## PHẦN A — Cài extension (làm 1 lần, ~2 phút)

**Bước 1.** Mở Chrome, gõ vào thanh địa chỉ: `chrome://extensions` → Enter

**Bước 2.** Góc trên bên phải, bật công tắc **Developer mode** (Chế độ nhà phát triển)

**Bước 3.** Bấm nút **Load unpacked** (Tải tiện ích đã giải nén) — góc trên bên trái

**Bước 4.** Chọn đúng folder này:
```
Desktop → code → lap top thinh vuong → tool → competitor_extension
```
→ thấy card "**Laptop TV — Trích bài đối thủ**" xuất hiện là xong

**Bước 5.** Bấm icon 🧩 (mảnh ghép) cạnh thanh địa chỉ → bấm 📌 cạnh tên extension để ghim ra ngoài

✅ **Kiểm tra:** thấy icon extension trên thanh công cụ Chrome là cài thành công.

---

## PHẦN B — Quy trình hàng tuần (sáng thứ Hai, ~3 phút/fanpage)

**Bước 1.** Mở Chrome (tài khoản Facebook đã đăng nhập sẵn) → vào fanpage đối thủ:
- usalaptop.vn (đối thủ trực tiếp — bắt buộc)
- CellphoneS, FPT Shop (theo dõi trend khuyến mãi)

**Bước 2.** **Cuộn xuống** cho Facebook load 5–10 bài gần nhất (cuộn 3–5 lần, dừng 1 giây mỗi lần cuộn)

**Bước 3.** Bấm icon extension → bấm nút **📥 Trích bài đang hiển thị**
- Đợi 1–2 giây, extension tự bung các đoạn "Xem thêm"
- Thấy báo "✅ Đã trích N bài" là được

**Bước 4.** Hộp thoại lưu file hiện ra → lưu vào đúng folder:
```
Desktop → code → lap top thinh vuong → 02_content → reference → competitor_screenshots
```
(giữ nguyên tên file `fb_posts_...md`)

**Bước 5.** Lặp lại Bước 1–4 cho fanpage đối thủ tiếp theo (nếu xem nhiều page)

**Bước 6.** Mở Claude Code trong project này → gõ:
```
/competitor-posts
```

**Bước 7.** Đọc kết quả Claude trả về:
- Tóm tắt từng bài: hook, thông điệp, offer, tương tác
- Đối thủ đang đẩy gì + ta có lợi thế gì để phản công
- Tối đa 3 góc content đề xuất (ghi rõ persona nhắm tới)
- Toàn bộ được lưu vào `02_content/reference/competitor_posts_log.md` — tích lũy theo tuần

✅ **Xong.** Dùng góc content đề xuất để điền content calendar tuần mới (bước chiều thứ Hai trong `weekly_content_writing_process.md`).

---

## PHẦN C — Khi có vấn đề

| Tình huống | Cách xử lý |
|---|---|
| Bấm nút báo "Không tìm thấy bài nào" | Cuộn trang thêm vài lần cho bài load ra rồi bấm lại |
| Extension trích thiếu bài / thiếu caption | Facebook có thể đã đổi giao diện → **fallback: chụp màn hình** từng bài (Cmd+Shift+4), thả ảnh vào cùng folder `competitor_screenshots/` — skill xử lý được cả ảnh lẫn file text. Báo Claude kèm file export lỗi để sửa extension |
| Muốn lấy video TikTok/YouTube của đối thủ | Chụp màn hình **lưới video** (tab Video của kênh) — 1 ảnh lấy được 6–12 video gồm tiêu đề + view. Video quan trọng: copy transcript (YouTube → "Hiện bản chép lời") dán cho Claude |
| Chạy `/competitor-posts` báo chưa có input | Kiểm tra file đã lưu đúng folder `competitor_screenshots/` chưa (không phải Downloads) |
| Sau khi chạy skill, folder trống | Bình thường — file đã xử lý được chuyển vào `processed/`, không bị xóa |

---

## Nguyên tắc an toàn

- Extension **chỉ đọc** trang đang mở và tải file về máy — không gửi dữ liệu đi đâu, không đăng bài, không tự tương tác
- Dùng với tần suất người thật (vài lần/tuần), chỉ xem nội dung công khai — không cào hàng loạt
- Góc content Claude đề xuất luôn dùng nguyên văn cam kết đã duyệt (lỗi 1 đổi 1 trong 15 ngày, bảo hành 12-36 tháng...) — vẫn phải qua compliance check như mọi bài khác trước khi đăng
