## 📋 Danh sách Skill cần trang bị cho Claude Code để tự động hóa Marketing Laptop Thịnh Vượng

Dưới đây là các **skill** (kỹ năng / tích hợp) bạn cần xây dựng hoặc cấu hình để Claude Code có thể tự động thực hiện công việc mà không cần nhắc nhở thủ công mỗi lần.

---

### 1. **Google Sheets Skill** – Đọc/ghi dữ liệu lead, ROAS, review
- **Mục đích:** Claude Code tự cập nhật lead từ QC, ghi nhận ROAS, theo dõi review xấu.
- **Cách làm:**
  - Tạo Service Account Google → cấp quyền Editor cho các sheet.
  - Cung cấp file JSON key qua biến môi trường `GOOGLE_SHEETS_CREDENTIALS`.
  - Viết script Python nhỏ (hoặc dùng MCP server) để Claude Code gọi qua `execute`.
- **Output mong muốn:** Claude Code có thể đọc dòng mới, ghi trạng thái, thêm cột.

### 2. **Zalo Notify Skill** – Gửi lead hot & báo cáo vào nhóm
- **Mục đích:** Tự động thông báo lead hot cho sales, cảnh báo ROAS thấp, báo cáo KPI.
- **Cách làm:**
  - Tạo Zalo Official Account (miễn phí) hoặc dùng webhook từ Zalo API.
  - Lấy `ZALO_WEBHOOK_URL_LEAD_HOT` và `ZALO_WEBHOOK_URL_BAO_CAO`.
  - Cung cấp script `send_zalo.py` mà Claude Code gọi với tham số message.
- **Output mong muốn:** Tin nhắn xuất hiện trong nhóm Zalo trong vòng 1 phút.

### 3. **Facebook Comment Scanner Skill** – Phát hiện review xấu
- **Mục đích:** CRM tự động quét bình luận mới trên Facebook Page, group laptop để phát hiện phốt.
- **Cách làm:**
  - Dùng Facebook Graph API với Page Access Token.
  - Cấp quyền `pages_read_engagement`.
  - Script định kỳ (mỗi 30 phút) lấy comment có từ khóa "lỗi", "hỏng", "lừa".
- **Output mong muốn:** Ghi vào sheet `Theo_doi_review_xau.xlsx` và gán cấp độ.

### 4. **Onboard Product Trigger Skill** – Phát hiện sản phẩm mới từ kho
- **Mục đích:** Khi kho nhập hàng, tự động tạo task cho Content.
- **Cách làm:**
  - Kho cập nhật file Excel/Google Sheet `Nhap_kho.xlsx` (có cột "Mã SP", "Ngày nhập", "Ưu tiên").
  - Claude Code (hoặc script cron) so sánh với `Onboard_san_pham.xlsx`, phát hiện dòng mới → gửi yêu cầu vào #channel Content.
- **Output mong muốn:** Content nhận được thông báo "Cần onboard SP P0: Dell XPS 15".

### 5. **ROAS Monitor Skill** – Tự động dừng ads khi hiệu suất kém
- **Mục đích:** Digital không cần canh giờ, Claude Code tự tạm dừng chiến dịch Facebook/Google nếu ROAS <2.5.
- **Cách làm:**
  - Kết nối với Facebook Ads API hoặc Google Ads API qua token.
  - Script kiểm tra ROAS 7 ngày, nếu dưới ngưỡng → gọi API để tắt campaign.
  - Ghi log vào `Bao_cao_ROAS_ngay.xlsx`.
- **Output mong muốn:** Chiến dịch tự động dừng, tránh cháy ngân sách.

### 6. **Scheduler Skill** – Chạy các tác vụ theo lịch (cron)
- **Mục đích:** Chạy các skill trên vào đúng giờ (sáng, trưa, chiều) mà không cần kích hoạt thủ công.
- **Cách làm:**
  - Dùng GitHub Action, crontab trên VPS, hoặc AWS Lambda + EventBridge.
  - Định nghĩa lịch: 
    - 8h30: quét review xấu + gửi lead chậm.
    - 9h00: cập nhật ROAS.
    - 15h00: onboard sản phẩm P0 chưa xử lý.
    - 17h00: tổng hợp KPI gửi Zalo.
  - Gọi `claude --daily morning` hoặc trực tiếp script.
- **Output mong muốn:** Mọi thứ chạy tự động, bạn chỉ cần đọc báo cáo cuối ngày.

### 7. **Template Auto-Reply Skill** – Phản hồi review xấu cấp 1 tự động
- **Mục đích:** Khi phát hiện review 1-2 sao, Claude Code tự đăng phản hồi công khai theo template.
- **Cách làm:**
  - Đọc template từ file `Template_phan_hoi_cap1.docx`.
  - Dùng Facebook Graph API post comment hoặc gửi tin nhắn.
  - Ghi lại trạng thái "đã phản hồi" vào sheet.
- **Output mong muốn:** Khách hàng thấy được quan tâm trong vòng 30 phút.

### 8. **Lead Scoring Skill** – Phân loại Hot/Warm/Cold
- **Mục đích:** Tự động gán nhãn lead dựa trên hành vi (từ khóa, thời gian, nguồn).
- **Cách làm:**
  - Dùng mô hình rule-based (IF chứa "gọi lại" OR "mua ngay" → Hot).
  - Hoặc gọi API ChatGPT để phân tích nội dung yêu cầu.
  - Cập nhật cột "Mức độ nóng" trong sheet lead.
- **Output mong muốn:** Lead hot được ưu tiên xử lý ngay.

### 9. **Failure Library Skill** – Tự động lưu thất bại vào đúng cấu trúc
- **Mục đích:** Khi chiến dịch không đạt KPI, Claude Code tạo file phân tích 5 Whys.
- **Cách làm:**
  - Dựa trên `Bao_cao_ROAS_ngay.xlsx` và `KPI_team.csv`, nếu ROAS <2.5 hoặc conversion rate <1% → trigger.
  - Hỏi người dùng câu hỏi 5 Whys (hoặc tự suy luận từ dữ liệu).
  - Tạo file markdown lưu vào `05_Bao_cao/That_bai/YYYY-MM-DD_ten_chien_dich.md`.
- **Output mong muốn:** Cả team có cơ sở để không lặp lại lỗi.

### 10. **Brand Audit Reminder Skill** – Nhắc nhở kiểm tra thương hiệu định kỳ
- **Mục đích:** Mỗi tháng/quý, Claude Code tự gửi checklist brand audit cho Trưởng phòng.
- **Cách làm:**
  - Đọc lịch từ Google Calendar hoặc file `Lich_audit.xlsx`.
  - Gửi tin nhắn Zalo kèm link checklist Google Form.
  - Tổng hợp kết quả và báo cáo.
- **Output mong muốn:** Không bỏ sót audit thương hiệu.

---

## 🔧 Lộ trình xây dựng các skill (theo thứ tự ưu tiên)

| Thứ tự | Skill | Thời gian ước lượng | Level độ khó |
|:------:|-------|:-------------------:|:------------:|
| 1 | Google Sheets Skill | 1 ngày | Dễ |
| 2 | Zalo Notify Skill | 1 ngày | Dễ |
| 3 | Scheduler Skill | 0.5 ngày | Dễ |
| 4 | Lead Scoring Skill | 2 ngày | Trung bình |
| 5 | ROAS Monitor Skill | 3 ngày (cần API QC) | Khó |
| 6 | Facebook Comment Scanner | 2 ngày | Trung bình |
| 7 | Template Auto-Reply | 1 ngày | Trung bình |
| 8 | Onboard Product Trigger | 1 ngày | Dễ |
| 9 | Failure Library Skill | 1 ngày | Trung bình |
| 10 | Brand Audit Reminder | 0.5 ngày | Dễ |

---

## 🧪 Cách kiểm tra skill đã hoạt động chưa

Với mỗi skill, bạn có thể yêu cầu Claude Code:

> “Hãy chạy skill Google Sheets, đọc 5 dòng đầu tiên của sheet `Lead_tu_Marketing_template` và in ra màn hình.”

Nếu Claude Code trả về đúng dữ liệu → skill đã sẵn sàng.

---

Bạn muốn tôi viết chi tiết **từng skill dưới dạng hướng dẫn cài đặt** (code mẫu, cấu hình, biến môi trường) không?