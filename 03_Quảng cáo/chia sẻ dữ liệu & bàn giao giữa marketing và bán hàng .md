Dưới đây là **Quy trình chia sẻ dữ liệu & bàn giao giữa Marketing và Bán hàng (Sales Handoff)** được thiết kế riêng cho Laptop Thịnh Vượng. Quy trình này giải quyết lỗ hổng lớn nhất trong `improvement.md`: hiện tại không có cơ chế chuyển leads từ quảng cáo, website, CRM sang đội ngũ bán hàng (thường là nhân viên showroom, tư vấn online, chăm sóc khách hàng). Mục tiêu: **không thất thoát khách, biết được khách đến từ kênh nào, đo được tỷ lệ chốt đơn từ marketing**.

---

## QUY TRÌNH CHIA SẺ DỮ LIỆU & BÀN GIAO MARKETING – BÁN HÀNG (SALES HANDOFF)  
**Áp dụng cho:** Mọi chiến dịch marketing (quảng cáo trả tiền, email, bài blog có form đăng ký, tin nhắn chatbot, livestream bán hàng)  
**Mục tiêu:**  
- 100% lead (thông tin khách hàng tiềm năng) từ marketing được ghi nhận và chuyển đến bộ phận bán hàng trong vòng **2 giờ làm việc** (giờ hành chính) hoặc **sáng hôm sau** (nếu sau 17h).  
- Đo được **tỷ lệ chuyển đổi từ lead thành khách hàng** (MQL → SQL → cơ hội → chốt đơn).  
- Xác định được **kênh marketing hiệu quả nhất** dựa trên doanh thu thực tế.

---

### 1. Các khái niệm & vai trò

| Thuật ngữ | Định nghĩa | Ví dụ tại Laptop Thịnh Vượng |
|-----------|------------|-------------------------------|
| **Lead (MQL – Marketing Qualified Lead)** | Khách hàng tiềm năng đã tương tác với marketing, có dữ liệu liên hệ (ít nhất số điện thoại hoặc email). | Khách điền form *“Nhận báo giá laptop gaming”* trên website; khách inbox Facebook hỏi *“Tư vấn Thinkpad dưới 8tr”*; khách gọi hotline sau khi xem quảng cáo. |
| **SQL (Sales Qualified Lead)** | Lead đã được sales xác nhận có nhu cầu, đủ điều kiện, sẵn sàng chốt đơn trong vòng 7 ngày. | Khách đã được tư vấn, yêu cầu gửi thông tin thanh toán, hẹn xem máy. |
| **Handoff** | Bàn giao lead từ marketing sang sales kèm theo thông tin chi tiết (sản phẩm quan tâm, ngân sách, ghi chú từ marketing). | Chuyển file lead từ Google Sheet của marketing sang `Lead_sales.xlsx` có quyền chỉnh sửa cho sales. |

**Phân công trách nhiệm:**

| Vai trò | Trách nhiệm |
|---------|--------------|
| **Chuyên viên Digital / CRM (Marketing)** | Thu thập lead từ các kênh, kiểm tra sơ bộ (số điện thoại hợp lệ), ghi nhận nguồn, chuyển vào hệ thống dùng chung. |
| **Trưởng phòng Marketing** | Định nghĩa tiêu chí lead chất lượng, giám sát tỷ lệ handoff đúng hạn, báo cáo hiệu quả kênh. |
| **Bộ phận Bán hàng (Sales – online/offline)** | Nhận lead, gọi/tư vấn trong thời gian quy định, cập nhật trạng thái, ghi nhận doanh thu từ marketing. |
| **Quản lý Bán hàng** | Đảm bảo sales xử lý lead kịp thời, phản hồi marketing về chất lượng lead. |

---

### 2. Các nguồn lead chính từ marketing (cần thu thập)

| Nguồn | Ví dụ | Ai thu thập | Hình thức lưu |
|-------|-------|-------------|----------------|
| Quảng cáo Facebook/Google/TikTok | Form lead gen, nhắn tin tự động, gọi điện từ quảng cáo | Digital | Google Sheet `Lead_tu_QC` |
| Website – Form liên hệ / đặt hàng | Khách điền “Nhận tư vấn”, “Đăng ký bảo hành”, “Mua ngay” | Hệ thống tự động (cài plugin) + CRM | CRM (HubSpot hoặc Getfly) |
| Inbox Facebook / Zalo / TikTok | Khách nhắn tin hỏi giá, tình trạng máy | CRM (chăm sóc khách hàng) | Ghi tay vào sheet nếu không có tích hợp |
| Hotline (gọi vào) | Khách gọi số 0928939666 sau khi xem quảng cáo | Nhân viên trực tổng đài (nếu có) hoặc CRM | Nhập vào sheet chung |
| Livestream / sự kiện | Khách comment “em muốn mua” + để lại SĐT | CRM (support livestream) | Google Sheet `Lead_Live` |
| Email marketing | Khách click CTA “Nhận ưu đãi”, điền form trong email | CRM (automatic) | CRM export |

> **Nguyên tắc:** Mọi lead dù từ bất kỳ đâu đều phải được ghi nhận vào **MỘT HỆ THỐNG DUY NHẤT** (khuyến nghị: Google Sheet dùng chung + CRM). Tránh tình trạng mỗi người ghi một nơi.

---

### 3. Template bàn giao lead (Google Sheet – dùng chung cho marketing & sales)

**Tên file:** `00_Lead_CRM/Lead_tu_Marketing_[Thang].xlsx`  
**Quyền:** Marketing (chỉnh sửa + xem), Sales (chỉnh sửa cột “Trạng thái xử lý” và “Ghi chú sales”), Quản lý (full).

**Các cột bắt buộc:**

| Cột | Ý nghĩa | Ai nhập | Ví dụ |
|-----|---------|---------|-------|
| Ngày nhận lead | Thời gian marketing ghi nhận | Marketing | 20/5/2026 9:30 |
| Kênh | Nguồn lead (FB, Google, Website, Hotline, Livestream, Email) | Marketing | Facebook Ads |
| Chiến dịch (Campaign) | Tên chiến dịch quảng cáo/nội dung | Marketing | *“Back to school – Dell XPS”* |
| Họ tên khách | Nếu có | Marketing | Nguyễn Văn A |
| Số điện thoại | Bắt buộc (thiếu → lead không hợp lệ) | Marketing | 0987654321 |
| Email (nếu có) | Marketing | a@gmail.com |
| Sản phẩm quan tâm | Model, dòng máy | Marketing | Thinkpad T480, pin 85% |
| Ngân sách dự kiến (triệu) | Khoảng giá khách đề cập | Marketing | 6-8tr |
| Ghi chú từ marketing | Thông tin bổ sung: “khách hỏi trả góp”, “cần giao hàng nhanh”, “đã xem video review” | Marketing | *Khách muốn cài sẵn win 11, cần mượn bàn phím ngoại* |
| Thời gian bàn giao | Thời điểm marketing chuyển lead (có thể cùng ngày nhận) | Marketing (hoặc tự động) | 20/5/2026 10:00 |
| Người phụ trách sales | Nhân viên bán hàng được phân công | Quản lý sales | Ms. Hoa |
| Trạng thái xử lý (dropdown) | Chưa gọi, Đã gọi – chưa nghe, Đang tư vấn, Hẹn xem máy, Đã chốt đơn (kèm doanh thu), Không mua, Không liên lạc được | Sales cập nhật | Đã chốt đơn |
| Doanh thu (triệu) | Nếu chốt đơn được, ghi giá bán | Sales | 7.2 |
| Ngày chốt | Sales | 22/5/2026 |
| Ghi chú sales | Lý do không mua, khách hàng phản hồi thế nào | Sales | *Khách chê pin chai, đã giải thích ổn* |

> **Lưu ý:** Không được xóa lead dù khách không mua. Dữ liệu “Không mua” giúp marketing biết được lý do và cải tiến.

---

### 4. Quy trình handoff chi tiết (theo dòng thời gian)

#### Bước 1: Marketing thu thập lead (liên tục)
- **Hành động:** Mỗi khi có cuộc gọi, tin nhắn, form điền → Digital hoặc CRM nhập ngay vào Google Sheet `Lead_tu_Marketing` (sử dụng shortcut hoặc mẫu nhập nhanh).
- **Thời gian tối đa từ khi tiếp xúc đến khi ghi nhận:** 15 phút (trong giờ làm việc).
- **Kiểm tra lead hợp lệ:** Số điện thoại đủ 10 chữ số, không trùng lặp trong 30 ngày (nếu trùng thì ghi chú bổ sung thông tin mới).

#### Bước 2: Phân loại lead mức độ ưu tiên (Marketing làm)
- **Lead nóng (Hot)** – gọi ngay:
  - Khách hỏi giá + yêu cầu gọi lại trong giờ.
  - Khách đã xem video, điền form “Mua ngay”.
  - Khách từ livestream có tương tác cao.
- **Lead ấm (Warm)** – ưu tiên trong 4h:
  - Khách để lại SĐT để “tư vấn thêm”.
  - Khách từ email marketing click vào sản phẩm cụ thể.
- **Lead nguội (Cold)** – có thể bàn giao hàng ngày một lần:
  - Khách download tài liệu, đọc blog không yêu cầu gọi lại.
- **Thêm cột `Mức độ ưu tiên` vào sheet:** `Hot / Warm / Cold`.

#### Bước 3: Bàn giao cho sales (Marketing)
- **Cách bàn giao:**
  - Marketing đặt quyền truy cập shared sheet cho toàn bộ sales (hoặc nhóm sales trên Zalo có link sheet).
  - Với lead Hot: Marketing **gửi tin nhắn trực tiếp** vào nhóm `#lead-hot` trên Zalo/Slack với nội dung: *“Lead mới: Nguyễn A, 098xxx, muốn mua Thinkpad T480, ngân sách 7tr, cần gọi ngay”*.
  - Với lead Warm và Cold: Chỉ cần cập nhật sheet, sales tự xem và xử lý theo lịch quay vòng.
- **Thời gian bàn giao tối đa:**
  - Hot: ngay lập tức (trong vòng 5 phút sau khi ghi nhận).
  - Warm: 2 giờ.
  - Cold: trước 17h hàng ngày.

#### Bước 4: Sales tiếp nhận & xử lý (Sales)
- **Quy định thời gian phản hồi lead tối đa:**
  - Hot: gọi / nhắn lại trong vòng 15 phút.
  - Warm: trong vòng 2 giờ.
  - Cold: trong vòng 24 giờ (ngày làm việc tiếp theo).
- **Hành động:** Gọi điện, zalo, sms để tư vấn. Nếu khách không nghe máy, nhắn tin và gọi lại tối đa 3 lần trong 2 ngày.
- **Cập nhật trạng thái** vào sheet (cột `Trạng thái xử lý`), kèm ghi chú ngắn.

#### Bước 5: Đo lường & báo cáo vòng đời lead (Hàng tuần)
- **Marketing** xuất báo cáo từ sheet:
  - Tổng số lead theo kênh.
  - Tỷ lệ chuyển đổi lead → chốt đơn (theo kênh, chiến dịch).
  - Doanh thu từ marketing (tổng giá trị đơn hàng của các lead có `Trạng thái = Đã chốt đơn`).
  - Chi phí marketing / doanh thu (ROAS theo lead).
- **Sales** báo cáo ngược: Những lead không chốt được do chất lượng kém, thiếu thông tin, giá không hợp lý, chính sách bảo hành chưa rõ.
- **Cuộc họp chung marketing – sales** mỗi tuần 30 phút để review handoff, điều chỉnh tiêu chí lead.

---

### 5. Xử lý các trường hợp đặc biệt

| Tình huống | Hành động |
|------------|-----------|
| Lead bị trùng (cùng SĐT xuất hiện 2 lần trong 30 ngày) | Marketing gộp thông tin, chỉ bàn giao 1 lead với ghi chú “đã quan tâm lần trước, sản phẩm mới”. |
| Lead từ marketing nhưng khách không muốn chia sẻ thông tin liên hệ | Không coi là lead, chỉ ghi thống kê “tương tác ẩn danh”. |
| Sales phản hồi lead “số máy không tồn tại” | Marketing kiểm tra lại nguồn, báo lỗi kênh (ví dụ: form bị spam). |
| Lead quá lớn (doanh nghiệp mua số lượng > 10 máy) | Marketing thông báo ngay cho Trưởng phòng + Quản lý sales để xử lý ưu tiên. |

---

### 6. Công cụ & tự động hóa khuyến nghị

- **Google Sheet dùng chung** – đơn giản, dễ bắt đầu.
- **Tích hợp CRM nhẹ:** HubSpot CRM (miễn phí) cho phép tạo form, tự động ghi lead, gán cho sales, gửi thông báo.
- **Tự động gửi lead vào kênh Zalo:** Dùng công cụ như n8n, Zapier (miễn phí) để khi có dòng mới trong sheet, tự động gửi tin nhắn vào nhóm Zalo sales.

**Ví dụ luồng tự động hóa đơn giản:**
1. Khách điền form trên website → HubSpot ghi lead.
2. HubSpot gửi email thông báo cho sales (hoặc webhook qua Zapier → Zalo).
3. Sales click link xem chi tiết.

---

### 7. KPI giám sát chất lượng handoff

| KPI | Công thức | Mục tiêu cho tháng đầu |
|-----|-----------|-------------------------|
| Tỷ lệ lead được bàn giao đúng hạn | Số lead có `Thời gian bàn giao` ≤ quy định / Tổng lead | ≥ 95% |
| Tỷ lệ sales phản hồi lead đầu tiên trong khung giờ | Số lead có `Ngày gọi đầu` ≤ thời gian quy định / Tổng lead giao | ≥ 90% (cho Hot, Warm) |
| Tỷ lệ chốt đơn từ lead marketing | Số lead chốt đơn / Tổng lead (không tính cold) | 15-20% (tùy sản phẩm) |
| Thời gian trung bình từ lead đến chốt đơn | `Ngày chốt` - `Ngày nhận lead` | ≤ 5 ngày |

> **Báo cáo hàng tuần** vào thứ 6: Trưởng phòng Marketing gửi bảng tổng hợp cho BGĐ và Quản lý bán hàng.

---

### 8. Tài liệu mẫu cần tạo

1. `Lead_tu_Marketing_template.xlsx` – file mẫu với đầy đủ cột và dropdown.
2. `Huong_dan_su_dung_lead_sheet.docx` – hướng dẫn cho sales cách cập nhật trạng thái.
3. `Bieu_mau_phieu_ban_giao_lead.docx` – dùng trong trường hợp offline (không có máy tính), điền giấy rồi nhập sau.

---

### 9. Quy trình xử lý lead giả / spam (quan trọng với laptop cũ)

- **Dấu hiệu:** Số điện thoại không có thật, email dạng test@test.com, nội dung “bán hàng”, “làm đẹp”.
- **Marketing** kiểm tra bằng cách gọi lại thử 1-2 số ngẫu nhiên trong lô lead nghi ngờ. Nếu phát hiện spam → xoá khỏi sheet và báo cáo nền tảng quảng cáo.
- **Ngăn chặn:** Thêm captcha vào form website, không chạy quảng cáo lead gen mở mục tiêu quá rộng.

---

**Lưu ý cuối cho Laptop Thịnh Vượng:**  
Vì công ty bán cả online lẫn showroom, nên có thể có trường hợp khách tự đến cửa hàng mà không qua marketing. Để không bỏ sót, quy trình handoff nên áp dụng **chiều ngược lại**: nếu sales chốt được đơn từ khách lạ (không có trong sheet lead), sales phải hỏi *“Anh/chị biết đến shop qua đâu?”* rồi báo lại marketing để ghi nhận kênh. Điều này giúp đánh giá đúng hiệu quả của các kênh nhận diện thương hiệu.

Bạn muốn tôi thiết kế thêm **mẫu biểu báo cáo tuần** hoặc **hướng dẫn cài đặt tự động hóa lead trên Google Sheets + Zalo** không?