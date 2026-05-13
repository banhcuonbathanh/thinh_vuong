# SUPPORT DOC — CHUYÊN VIÊN CRM & CHĂM SÓC KHÁCH HÀNG

> Tài liệu nhanh cho CRM team. Đọc kỹ trước ngày đầu vận hành.  
> Tài liệu đầy đủ: [MASTER_WORKFLOW.md](../01.Chiến%20lược/MASTER_WORKFLOW.md)

---

## VAI TRÒ & TRÁCH NHIỆM

**Bạn chịu trách nhiệm cho:** Database khách hàng, lead từ hotline/inbox/livestream, email/SMS marketing, review xấu, chương trình KH thân thiết.  
**Báo cáo cho:** Trưởng phòng (NPS, tỷ lệ chốt đơn hàng tuần).  
**Phối hợp với:** Bán hàng (bàn giao lead), Content (cung cấp feedback KH), Digital (chia sẻ lead từ QC).

---

## LỊCH LÀM VIỆC CHUẨN

### Hàng ngày
| Thời gian | Việc cần làm |
|-----------|--------------|
| 07:30 | ⚠️ **Quét review xấu buổi sáng** (Google Maps, Facebook, Shopee, group laptop) |
| 08:30–08:45 | Daily Stand-up |
| **Cứ 2 giờ** | Kiểm tra sheet lead, xử lý lead Hot trong 15 phút |
| 09:00–12:00 | Phân tích dữ liệu CRM, lên kịch bản email, gọi lead Hot |
| 13:30–16:00 | Triển khai email/SMS, xử lý phản hồi, đồng bộ dữ liệu với Sales |
| **16:00** | Gửi danh sách lead đã xử lý vào Zalo nhóm chung (SĐT + nhu cầu + mức độ nóng) |
| **16:00** | ⚠️ **Quét review xấu buổi chiều** |

### Hàng tuần
| Ngày | Việc cần làm |
|------|--------------|
| Thứ Sáu | 1 chiến dịch email marketing (ví dụ: voucher cho KH mua 1 tháng trước) |
| **Thứ Sáu 15:00** | Gửi báo cáo "Tỷ lệ chốt đơn từ lead marketing" cho Trưởng phòng |

### Đầu ra tuần
- Báo cáo tỷ lệ mở email, CTR, doanh thu từ email
- Cập nhật phân khúc khách hàng
- 1 chiến dịch email/SMS
- Báo cáo tỷ lệ chốt đơn

---

## QUY TRÌNH XỬ LÝ LEAD (CỨNG, KHÔNG BỎ QUA)

```
NGUỒN LEAD CỦA BẠN:
├── Hotline (khách gọi từ website)
├── Inbox Facebook Page
└── Livestream comment

CỨNG MỖI 2 GIỜ: kiểm tra + ghi vào sheet Lead_tu_Marketing_template.xlsx
│  Cột bắt buộc: Thời gian · Họ tên · SĐT · Nguồn · Nội dung yêu cầu

PHÂN LOẠI
├── HOT: Yêu cầu gọi lại ngay HOẶC hỏi mua > 2 máy
│   → Gọi điện trong 15 PHÚT
│   → Sau gọi: cập nhật cột "Trạng thái xử lý"
│      (đã liên hệ / hẹn gọi lại / không nghe máy)
│
├── WARM: Hỏi giá, so sánh model
│   → Xử lý trong 4 giờ
│
└── COLD: Thả cảm xúc, hỏi chung chung
    → Xử lý trong ngày
```

**Lý do quan trọng:** Lead Hot nguội rất nhanh. Gọi sau 15 phút là mất hẳn một đơn hàng.

---

## QUY TRÌNH XỬ LÝ REVIEW XẤU

### Phát hiện (quét 2 lần/ngày: sáng 7:30 + chiều 16:00)
- Kênh quét: Google Maps · Facebook Page · Shopee · Group laptop Facebook
- Từ khóa nhận diện: "lỗi" · "hỏng" · "lừa đảo" · review 1-2 sao

### Phân loại & xử lý
| Cấp độ | Dấu hiệu | Hành động | Thời gian |
|--------|----------|-----------|-----------|
| **Cấp 1** | Review lẻ, < 10 tương tác | Phản hồi công khai (dùng Template C1) + Inbox riêng | **30 phút** |
| **Cấp 2** | > 50 tương tác hoặc lan sang group lớn | **Báo ngay Trưởng phòng — KHÔNG tự phản hồi** | Ngay lập tức |
| **Cấp 3** | Báo chí, kiện tụng | Kích hoạt `Bien_ban_khung_hoang_cap3.docx` + Báo BGĐ | Ngay lập tức |

**TRIGGER ĐẶC BIỆT:** 3 review Cấp 1 trong cùng 1 ngày về cùng 1 sản phẩm → Tự nâng lên Cấp 2, báo Trưởng phòng ngay.

### Nguyên tắc khi phản hồi công khai (Cấp 1)
- Dùng đúng template đã duyệt — **không được tự viết**
- Không xóa review, không cãi lại, không đổ lỗi cho khách
- Hẹn xử lý riêng: "Anh/chị vui lòng inbox để chúng tôi hỗ trợ ngay"
- Sau khi inbox: hỏi thông tin đơn hàng, đề nghị bồi thường nếu lỗi thuộc về cửa hàng

---

## QUY TRÌNH BÀN GIAO SALES

```
16:00 mỗi ngày:
Tạo danh sách lead đã xử lý trong ngày
   Cột: SĐT · Nhu cầu chính · Mức độ nóng · Ghi chú
→ Gửi vào Zalo nhóm chung

Khi Sales chốt đơn:
   Sales ghi mã lead vào sheet
→ Bạn cập nhật cột "Chốt đơn?" = YES
→ Ghi doanh thu = giá trị đơn
```

**Thứ Sáu 15h:** Tính tỷ lệ chốt đơn và gửi báo cáo Trưởng phòng:
- Tỷ lệ chốt = (số lead chốt / tổng lead gửi Sales) × 100%
- Phân tích: nguồn lead nào chốt cao nhất? Lead nào không chốt và vì sao?

---

## LUỒNG PHỐI HỢP VỚI CONTENT

- **Hàng tuần:** Trả lời câu hỏi của Content: "Khách đang thắc mắc điều gì nhất?"
- Dữ liệu bạn có (từ inbox, hotline) là nguồn ý tưởng vô giá cho Content
- Ghi lại câu hỏi phổ biến vào `Feedback_khach_hang.xlsx` (nếu có)

---

## KPI CÁ NHÂN (BÁO CÁO THÁNG)

| Chỉ số | Mục tiêu |
|--------|----------|
| Tỷ lệ mở email | > 20% |
| CTR email | > 3% |
| Doanh thu từ email/SMS | Tăng dần |
| Tỷ lệ chốt đơn từ lead | 15-20% |
| Thời gian xử lý lead Hot | < 15 phút (100%) |
| Phản hồi review Cấp 1 | < 30 phút (100%) |
| NPS (Net Promoter Score) | Tăng dần (đo hàng quý) |

---

## FILE & CÔNG CỤ CỐT LÕI

| File / Tool | Mục đích | Tần suất |
|-------------|----------|----------|
| `Lead_tu_Marketing_template.xlsx` | Ghi nhận + phân loại tất cả lead | Mỗi 2 giờ |
| `Theo_doi_review_xau.xlsx` | Ghi nhận review xấu theo dõi | Hàng ngày |
| `Template_phan_hoi_cap1.docx` | Phản hồi công khai review Cấp 1 | Khi có review |
| `Bien_ban_khung_hoang_cap3.docx` | Xử lý khủng hoảng truyền thông | Khi có khủng hoảng |
| CRM (HubSpot/Getfly) | Quản lý database KH | Hàng ngày |
| Mailchimp / CRM email | Gửi chiến dịch email/SMS | Hàng tuần |
| Zalo nhóm chung | Gửi lead 16h hàng ngày | 16:00 mỗi ngày |

---

## ĐÂU RA THÁNG

| Deliverable | Deadline |
|-------------|---------|
| Báo cáo CLV sơ bộ | Cuối tháng |
| Danh sách KH VIP | Cuối tháng |
| Kế hoạch chương trình tri ân | Tuần 3 tháng |
| Khảo sát NPS | Cuối quý |
| Cập nhật phân khúc KH | Cuối tháng |

---

## TÀI LIỆU CẦN ĐỌC (theo thứ tự)

1. [chia sẻ dữ liệu & bàn giao giữa marketing và bán hàng.md](../03_Quảng%20cáo/chia%20sẻ%20dữ%20liệu%20%26%20bàn%20giao%20giữa%20marketing%20và%20bán%20hàng%20.md)
2. [quản_lý_review_xấu_khủng_hoảng_truyền_thông.md](../04_CRM/quản_lý_review_xấu_khủng_hoảng_truyền_thông.md)
3. [customer_research.md](../04_CRM/customer_research.md)
4. [kiểm tra tuân thủ cam kết truyền thông.md](../02_Nội%20dung/kiểm%20tra%20tuân%20thủ%20cam%20kết%20truyền%20thông.md) — kiểm tra email/SMS trước khi gửi
5. [CLAUDE_CRM.md](CLAUDE_CRM.md) — Hướng dẫn làm việc với AI
