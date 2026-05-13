# SUPPORT DOC — CHUYÊN VIÊN DIGITAL MARKETING

> Tài liệu nhanh cho Digital team. Đọc kỹ trước ngày đầu vận hành.  
> Tài liệu đầy đủ: [MASTER_WORKFLOW.md](../01.Chiến%20lược/MASTER_WORKFLOW.md)

---

## VAI TRÒ & TRÁCH NHIỆM

**Bạn chịu trách nhiệm cho:** ROAS từng kênh, CPA, CTR, tỷ lệ chuyển đổi, lead từ quảng cáo.  
**Báo cáo cho:** Trưởng phòng (ROAS ngày, báo cáo tuần).  
**Phối hợp với:** Content (nhận creative), CRM (chia sẻ lead), Bán hàng (xác nhận doanh thu từ ads).

---

## LỊCH LÀM VIỆC CHUẨN

### Hàng ngày
| Thời gian | Việc cần làm |
|-----------|--------------|
| 07:30 | Cập nhật ROAS qua đêm vào `Bao_cao_ROAS_ngay.xlsx` |
| **Trước 09:00** | ⚠️ **ROAS phải được cập nhật trước khi Stand-up** |
| 08:30–08:45 | Daily Stand-up |
| 09:00–11:00 | Điều chỉnh bid, thêm/loại từ khóa, tối ưu đối tượng |
| **Mỗi 15 phút** | Kiểm tra lead Hot trong `Lead_tu_Marketing_template.xlsx` |
| 13:30–15:00 | Phân tích campaign, làm báo cáo |
| 15:00–17:00 | Phối hợp Content làm creative mới, set up campaign |

### Hàng tuần
| Ngày | Việc cần làm |
|------|--------------|
| Thứ Ba | Kiểm tra search term report → đề xuất từ khóa âm mới |
| **Thứ Năm 10:00** | **Tạo báo cáo A/B test**: ≥ 2 biến thể creative → ghi vào `Ket_qua_AB_test.xlsx` |
| Thứ Sáu | Báo cáo hiệu suất từng kênh (impressions, clicks, conversions, ROAS) |

### Đầu ra tuần
- Báo cáo ROAS từng kênh (ngày + tuần)
- Kết quả A/B test creative
- Đề xuất từ khóa âm mới
- Kế hoạch điều chỉnh ngân sách tuần sau

---

## QUY TRÌNH XỬ LÝ LEAD HOT (QUAN TRỌNG NHẤT)

```
Cứ 15 phút: kiểm tra Lead_tu_Marketing_template.xlsx
│
├── Lọc: Nguồn = Facebook Lead Gen / Google Call Only
│         Cột "Đã gửi sales" = FALSE
│         Cột "Mức độ nóng" = HOT
│
└── Với mỗi lead Hot:
    1. Gửi Zalo #lead-hot:
       "LEAD HOT: [Họ tên] - [SĐT] - [Yêu cầu] - [link sheet]"
    2. Cập nhật cột "Đã gửi sales" = TRUE
    3. Ghi thời gian gửi = now()
```

**Lý do quan trọng:** Lead Hot nguội rất nhanh. Gửi chậm quá 15 phút → tỷ lệ chốt giảm mạnh.

---

## GIÁM SÁT ROAS — NGƯỠNG CẢNh BÁO

| ROAS | Hành động |
|------|-----------|
| ≥ 4 | Tốt, tiếp tục tối ưu |
| 2.5–4 | Theo dõi sát, test biến thể mới |
| **< 2.5 trong 3 ngày liên tiếp** | **⚠️ BÁO ĐỘNG ĐỎ** — xem bên dưới |

### Khi ROAS < 2.5 trong 3 ngày liên tiếp:
1. Tự động tạm dừng tất cả chiến dịch dưới ngưỡng
2. Gửi báo động đỏ vào Zalo `#bao-cao` + bảng chi tiết từng campaign
3. Yêu cầu Content gửi creative mới trong 24h
4. Báo Trưởng phòng → họp khẩn phân tích 5 Whys

---

## CHECKLIST TRƯỚC KHI SET UP CAMPAIGN MỚI

- [ ] Copy quảng cáo đã qua checklist 6 mục (giống Content)?
- [ ] Nếu có "miễn phí vận chuyển toàn quốc" → đã xác nhận với kho chưa?
- [ ] Landing page link trùng đúng với sản phẩm quảng cáo?
- [ ] Đối tượng mục tiêu đã setup đúng theo brief?
- [ ] Ngân sách test: bắt đầu với 10% ngân sách tổng cho A/B test?
- [ ] Chiến dịch > 10 triệu → đặt lịch cập nhật mỗi 6h cho Trưởng phòng?

---

## QUY TRÌNH ONBOARD SẢN PHẨM MỚI (phần Digital)

Khi Content hoàn tất onboard và được Trưởng phòng duyệt:
1. **Tạo bộ từ khóa** trong Google Keyword Planner (trong 30 phút)
2. Setup ads theo mức ưu tiên:
   - P0: Chạy ads trong 48h sau khi lên web
   - P1: Trong 72h
3. Thêm từ khóa sản phẩm vào `Tu_khoa_ads.xlsx`

---

## XỬ LÝ KHỦNG HOẢNG (phần Digital)

Khi nhận lệnh từ Trưởng phòng **"dừng ads khủng hoảng cấp 2":**
1. Dừng NGAY tất cả chiến dịch đang chạy
2. Lưu snapshot trạng thái trước khi dừng (tên campaign, ngân sách, số liệu)
3. Báo xác nhận vào Zalo `#khung-hoang`
4. Chờ lệnh tiếp theo từ Trưởng phòng

---

## A/B TEST TEMPLATE (ghi vào Ket_qua_AB_test.xlsx)

| Cột | Nội dung |
|-----|----------|
| Biến A | Mô tả creative/copy/landing A |
| Biến B | Mô tả creative/copy/landing B |
| Thời gian test | Từ ngày... đến ngày... |
| Ngân sách | 10% tổng ngân sách campaign |
| Kết quả A | CTR · CVR · ROAS |
| Kết quả B | CTR · CVR · ROAS |
| Kết luận | Biến nào thắng và lý do |
| Người phê duyệt | Tên Trưởng phòng |

---

## KPI CÁ NHÂN (BÁO CÁO NGÀY/TUẦN)

| Chỉ số | Mục tiêu | Tần suất |
|--------|----------|----------|
| ROAS từng kênh | ≥ 4 | Hàng ngày |
| CPA | Giảm dần | Hàng tuần |
| CTR | > 2% | Hàng tuần |
| Tỷ lệ chuyển đổi | 2-5% | Hàng tuần |
| Tỷ lệ bàn giao lead đúng hạn | ≥ 95% | Hàng tuần |
| ROAS bonus | > 4.5 | Hàng tháng |

---

## FILE & CÔNG CỤ CỐT LÕI

| File / Tool | Mục đích | Tần suất |
|-------------|----------|----------|
| `Bao_cao_ROAS_ngay.xlsx` | Cập nhật ROAS hàng ngày | Mỗi sáng trước 9h |
| `Lead_tu_Marketing_template.xlsx` | Ghi và gửi lead Hot | Mỗi 15 phút |
| `Tu_khoa_ads.xlsx` | Quản lý từ khóa theo campaign | Hàng tuần |
| `Ket_qua_AB_test.xlsx` | Lưu kết quả A/B test | Mỗi thứ Năm |
| Google Ads Manager | Vận hành campaign | Hàng ngày |
| Meta Business Suite | Facebook/Instagram Ads | Hàng ngày |
| GA4 + Google Search Console | Phân tích traffic, SEO | Hàng tuần |
| Zalo `#lead-hot` | Bắn lead Hot cho Sales | Realtime |
| Zalo `#bao-cao` | Báo cáo ROAS, alert | Khi cần |

---

## TÀI LIỆU CẦN ĐỌC (theo thứ tự)

1. [chia sẻ dữ liệu & bàn giao giữa marketing và bán hàng.md](../03_Quảng%20cáo/chia%20sẻ%20dữ%20liệu%20%26%20bàn%20giao%20giữa%20marketing%20và%20bán%20hàng%20.md)
2. [onboard sản phẩm mới.md](../02_Nội%20dung/onboard%20sản%20phẩm%20mới.md) — phần Digital
3. [kiểm tra tuân thủ cam kết truyền thông.md](../02_Nội%20dung/kiểm%20tra%20tuân%20thủ%20cam%20kết%20truyền%20thông.md)
4. [quản_lý_review_xấu_khủng_hoảng_truyền_thông.md](../04_CRM/quản_lý_review_xấu_khủng_hoảng_truyền_thông.md) — biết khi nào cần dừng ads
5. [CLAUDE_Digital.md](CLAUDE_Digital.md) — Hướng dẫn làm việc với AI
