# Quy Trình Viết 1 Bài Post Co-work Với Claude

> Dành cho: Chuyên viên Nội dung (hoặc Trưởng phòng tự làm content)
> Nguyên tắc: **Bạn quyết định — Claude nghiên cứu, nháp, kiểm tra.** Claude không tự đăng bài.
> Đọc cùng: `weekly_content_writing_process.md` (lịch tuần), `content_writing_framework_by_persona.md`

---

## Tổng quan: 3 giai đoạn — 8 bước

```
GIAI ĐOẠN A — NGHIÊN CỨU (input đủ rồi mới nghĩ ý tưởng)
  Bước 1: Đối thủ đang đăng gì            → /competitor-posts
  Bước 2: Bài của TA đang chạy thế nào    → số liệu performance
  Bước 3: TA có gì để nói                 → sản phẩm, cam kết, tiếng nói khách

GIAI ĐOẠN B — Ý TƯỞNG & DÀN Ý (chưa viết vội)
  Bước 4: Brainstorm góc content với Claude
  Bước 5: Chọn 1 góc + chốt DÀN Ý bài post

GIAI ĐOẠN C — VIẾT & KIỂM
  Bước 6: Claude viết nháp theo dàn ý
  Bước 7: Bạn sửa + Claude check compliance
  Bước 8: Đăng → 3 ngày sau ghi lesson learned
```

Tổng thời gian: ~45 phút/bài (nghiên cứu 15' + ý tưởng 10' + viết & kiểm 20').
Nếu viết nhiều bài trong tuần: Giai đoạn A chỉ cần làm **1 lần sáng thứ Hai**, các bài sau bắt đầu từ Bước 4.

---

# GIAI ĐOẠN A — NGHIÊN CỨU

## Bước 1 — Đối thủ đang đăng gì (10 phút)

1. Mở Chrome → vào fanpage đối thủ (usalaptop.vn **bắt buộc**; CellphoneS, FPT Shop nếu có thời gian)
2. Cuộn 3–5 lần cho load 5–10 bài → bấm extension **📥 Trích bài đang hiển thị**
3. Lưu file vào `02_content/reference/competitor_screenshots/`
4. Trong Claude, gõ: `/competitor-posts`

→ Claude tóm tắt vào `competitor_posts_log.md`, đối chiếu giá/cam kết, rút sẵn góc phản công.

**Cần trả lời được sau bước này:** đối thủ tuần này đẩy sản phẩm gì, khuyến mãi gì, và **họ ĐANG BỎ TRỐNG góc nào**.

## Bước 2 — Bài của TA đang chạy thế nào (5 phút)

Mở Facebook/TikTok Insights (hoặc `Bao_cao_ROAS_ngay.xlsx`), ghi nhanh 3 dòng rồi dán cho Claude:

```
Tuần qua của ta:
- Bài tốt nhất: [tên/chủ đề bài] — [reach/tương tác]
- Bài tệ nhất: [tên/chủ đề bài] — [reach/tương tác]
- Trung bình: [con số]
Phân tích giúp tôi: format/chủ đề nào đang ăn, cái nào nên bỏ?
```

→ Claude đối chiếu thêm với `creative_ideas_and_failure_lessons.md` (bài học thất bại cũ) để trả lời.

**Cần trả lời được:** format nào nên lặp lại, format nào tránh.

## Bước 3 — TA có gì để nói (Claude tự đọc, bạn chỉ bổ sung)

Claude lấy thông tin công ty từ 4 nguồn có sẵn — **không bịa**:

| Thông tin | File nguồn | Dùng để |
|---|---|---|
| Sản phẩm + giá + cấu hình thật | `tai_lieu_laptoptv_vn.md` | Con số trong bài |
| Lợi thế so với đối thủ (đổi trả 15 vs 7 ngày, phân khúc <10tr) | `data_congty_vs_doithu_t6-2026.md` | Góc khác biệt hóa |
| Tiếng nói khách hàng thật (inbox/comment nguyên văn) | `data_request_for_content.md` | Hook + xử lý objection |
| Persona (sinh viên / văn phòng / game thủ) | `04_CRM/customer_research.md` | Chọn đối tượng bài |

**Việc của bạn (5 phút, nếu chưa làm tuần này):** nạp tiếng nói khách hàng mới — copy 5–10 câu inbox/comment nguyên văn vào mục Ưu tiên 1 của `data_request_for_content.md`. Hook viết từ câu khách hỏi thật luôn ăn hơn hook tự nghĩ.

---

# GIAI ĐOẠN B — Ý TƯỞNG & DÀN Ý

## Bước 4 — Brainstorm góc content (5 phút)

Gõ cho Claude:

```
Từ 3 input vừa nghiên cứu (đối thủ tuần này + performance bài của ta + dữ liệu công ty),
đề xuất 5 góc content. Mỗi góc theo format:
- Tên góc | Persona | Kênh
- Insight gốc: [từ câu khách hỏi nào / lỗ hổng nào của đối thủ / format thắng nào của ta]
- Vì sao đáng làm TUẦN NÀY (không phải tuần nào cũng đăng được)
```

Góc tốt phải bắt nguồn từ **ít nhất 1 trong 3 nguồn**: lỗ hổng đối thủ · câu khách hỏi thật · format ta đã thắng. Góc nghĩ từ hư không → loại.

> Hai lợi thế luôn ưu tiên khai thác: **đổi trả 15 ngày vs 7 ngày** của đối thủ, và **phân khúc dưới 10tr** đối thủ bỏ trống.

## Bước 5 — Chọn góc + chốt dàn ý (5 phút) ← *bước quan trọng nhất, đừng bỏ qua*

**Bạn chọn 1 góc** (quyết định kinh doanh — không nhờ Claude chọn). Sau đó yêu cầu:

```
Chốt góc số [N]. Lập dàn ý bài post trước khi viết:
```

Claude trả về dàn ý theo template — **bạn duyệt dàn ý xong mới cho viết**:

```
DÀN Ý BÀI POST
- Kênh + format:   [FB caption / blog / script TikTok]
- Persona:         [ai đọc bài này]
- 1 thông điệp duy nhất: [bài này muốn khách nhớ đúng 1 điều gì?]
- Hook:            [câu mở — lấy từ câu khách hỏi thật nếu có]
- 3 ý chính:       [mỗi ý 1 dòng]
- Số liệu sẽ dùng: [giá/cấu hình — kèm file nguồn]
- Cam kết nhắc tới: [bảo hành/đổi trả — sẽ gắn [Cảnh báo cam kết]]
- CTA:             [nhắn tin / hotline / xem link]
```

Sửa dàn ý ở đây rẻ hơn nhiều so với sửa bài đã viết. Dàn ý lệch thông điệp → quay lại Bước 4.

---

# GIAI ĐOẠN C — VIẾT & KIỂM

## Bước 6 — Claude viết nháp theo dàn ý (~1 phút)

Claude **bắt buộc** làm theo thứ tự:
1. Đọc `content_writing_framework_by_persona.md` → đúng cấu trúc cho persona
2. Bám đúng dàn ý đã duyệt ở Bước 5 — không tự thêm ý mới
3. Số liệu chỉ lấy từ file nguồn đã ghi trong dàn ý
4. Tự gắn `[Cảnh báo cam kết]` vào mọi câu có bảo hành / đổi trả / giá / giao hàng
5. Xuất **2 phiên bản hook khác nhau** để bạn chọn

## Bước 7 — Bạn sửa + Claude check compliance (10 phút)

1. Bạn đọc nháp, sửa giọng cho giống người thật (Claude viết hay bị "tròn trịa" quá)
2. Dán bản cuối lại cho Claude:

```
Check bài này theo checklist 10 điểm trong
communication_commitment_compliance_check.md. Liệt kê từng điểm đạt/không đạt.
```

3. Sửa điểm sai → Claude gắn `[Đã kiểm]` → gửi Trưởng phòng duyệt (deadline 15:00 thứ Năm theo SOP)

## Bước 8 — Đăng → ghi lesson learned (5 phút, sau 3 ngày)

```
Bài [tên bài] đạt [số liệu]. So với trung bình thì [cao/thấp].
Ghi lesson learned.
```

→ Claude ghi vào `lesson_learned.md` + `creative_ideas_and_failure_lessons.md` (nếu thất bại). Lần sau Bước 2 và Bước 6 tự né lỗi cũ — vòng lặp khép kín.

---

## Việc gì KHÔNG giao cho Claude

| Việc | Lý do |
|------|-------|
| Chọn góc content cuối cùng + duyệt dàn ý | Quyết định kinh doanh — bạn hiểu khách hơn |
| Đăng bài / trả lời comment | Nguyên tắc bảo mật trong CLAUDE.md |
| Tự bịa giá, khuyến mãi, cam kết | Mọi con số phải có file nguồn hoặc bạn cung cấp |
| Duyệt cuối | Vẫn là Trưởng phòng duyệt theo SOP |
