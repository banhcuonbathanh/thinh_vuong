# SƠ ĐỒ TÀI LIỆU & SKILL – LAPTOP THỊNH VƯỢNG

> File quản lý trung tâm: muốn biết tài liệu/skill nào đang có, ở đâu, để làm gì — xem ở đây.
> Khi thêm/xóa file hoặc skill mới → **cập nhật file này luôn** (Claude tự cập nhật khi chạy `/hand-off`).
> Cập nhật lần cuối: **2026-06-10**

---

## 1. CÂY TÀI LIỆU (theo thư mục thực tế)

```
lap top thinh vuong/
│
├── CLAUDE.md                        Vai trò Claude + 7 bước thực thi task
├── lesson_learned.md                Bài học tích lũy qua các session (root)
├── diagram.md                       ← File này
├── README.md
├── Digital_Plan_Laptop_Thinh_Vuong.csv
│
├── 01_strategy/                 ← Trưởng phòng (Full)
│   ├── MASTER_WORKFLOW.md           Workflow tổng thể toàn phòng
│   ├── doc_map.md                   Phân tích sâu 10 tài liệu gốc (mục đích, độ ưu tiên đọc)
│   ├── organization.md              Cơ cấu team, ngân sách, KPI
│   ├── improvement.md               Lỗ hổng hệ thống + ưu tiên bổ sung
│   ├── input_data.md                Dữ liệu nền: công ty, thị trường, đối thủ, xu hướng 2026
│   ├── team_Doc.md                  Phân công nhân sự
│   └── management_model_overview.md Tổng quan mô hình quản lý & công cụ
│
├── 02_content/                  ← Content (Full)
│   ├── framework/
│   │   ├── content_writing_framework_by_persona.md   Cấu trúc bài theo 3 persona
│   │   ├── content_for_potential_customers.md        Content cho khách tiềm năng
│   │   └── communication_commitment_compliance_check.md  Checklist 10 điểm cam kết
│   ├── process/
│   │   ├── weekly_content_writing_process.md         Lịch content tuần (T2→T6)
│   │   ├── daily_workflow_content_process.md         Workflow ngày
│   │   └── cowork_with_claude_content_process.md     Viết 1 bài post co-work với Claude (8 bước)
│   ├── calendar/
│   │   ├── content_calendar_template.md              Template lịch đăng
│   │   ├── content_calendar_week21_19-5.md           Lịch tuần 21
│   │   ├── TIEN_DO_TUAN21.md                         Tiến độ tuần 21
│   │   ├── fb_posts_draft_10-06-2026.md              Nháp bài FB 10/06
│   │   ├── workflow_contend.md
│   │   └── bai12rẻence.md                            ⚠️ tên file lỗi — cần rename/dọn
│   ├── reference/
│   │   ├── tai_lieu_laptoptv_vn.md                   Sản phẩm + giá thật từ website (14/05)
│   │   ├── data_congty_vs_doithu_t6-2026.md          Giá + cam kết ta vs đối thủ (10/06, tươi ~2 tuần)
│   │   ├── competitor_posts_log.md                   Log bài fanpage đối thủ (ghi bởi /competitor-posts)
│   │   ├── competitor_screenshots/                   Nơi thả file trích từ extension
│   │   ├── data_request_for_content.md               Dữ liệu nội bộ cần cung cấp (tiếng nói khách hàng)
│   │   ├── content_ideas_fresh_t5-2026.md            Kho ý tưởng T5/2026
│   │   └── creative_ideas_and_failure_lessons.md     Quy trình sáng tạo + kho bài học thất bại
│   └── onboarding/
│       ├── onboard_new_product.md                    Onboard sản phẩm mới (kho → web 3 ngày)
│       └── onboarding_content_member.md              Onboard nhân sự content mới
│
├── 03_advertising/              ← Digital (Full)
│   └── data_sharing_handover_marketing_sales.md      Bàn giao lead marketing → sales
│
├── 04_CRM/                      ← CRM (Full)
│   ├── customer_research.md         3 persona + customer journey (desk research, chưa kiểm chứng)
│   └── negative_review_crisis_management.md          Xử lý review xấu + khủng hoảng 3 cấp
│
├── 05_reports/                  ← Trưởng phòng (Full) / team thêm mới
│   ├── periodic_brand_audit.md      Brand audit định kỳ
│   └── lesson_learned.md            Bài học cấp báo cáo
│
├── manage_claude/               ← Hướng dẫn Claude theo vai trò
│   ├── CLAUDE.md                    Tổng thể
│   ├── CLAUDE_Manager.md / CLAUDE_Content.md / CLAUDE_Digital.md / CLAUDE_CRM.md
│   ├── SUPPORT_TruongPhong.md / SUPPORT_Content.md / SUPPORT_Digital.md / SUPPORT_CRM.md
│   └── AI_workflow.md               Cách team dùng AI trong workflow
│
└── tool/                        ← Công cụ & roadmap skill
    ├── competitor_extension/        Chrome extension trích bài fanpage (README hướng dẫn cài + dùng)
    ├── work_skills.md               Roadmap 10 skill tự động hóa CẦN XÂY (chưa làm)
    └── management_tools.md          Backlog yêu cầu tool/skill mới
```

---

## 2. SKILL ĐÃ CÓ (dùng được ngay)

| Skill | Gõ gì | Làm gì | File liên quan |
|---|---|---|---|
| **Competitor Posts** | `/competitor-posts` | Tóm tắt bài fanpage đối thủ từ file trích/screenshot, ghi log, rút góc content phản công | `.claude/skills/competitor-posts/SKILL.md` → ghi vào `competitor_posts_log.md` |
| **Hand-off** | `/hand-off` | Cuối session: tổng hợp lesson learned, cập nhật docs, bàn giao | `~/.claude/skills/hand-off.md` (skill cá nhân, dùng chung mọi project) → ghi vào `lesson_learned.md` |

**Tool kèm theo:**

| Tool | Ở đâu | Làm gì |
|---|---|---|
| Chrome Extension "Trích bài fanpage" | `tool/competitor_extension/` | Bấm 1 nút trích 5–10 bài đang hiển thị trên fanpage ra file `.md` → thả vào `competitor_screenshots/` → chạy `/competitor-posts` |

---

## 3. SKILL TRONG ROADMAP (chưa xây — xem chi tiết `tool/work_skills.md`)

| # | Skill | Độ khó | Trạng thái |
|---|---|---|---|
| 1 | Google Sheets (đọc/ghi lead, ROAS) | Dễ | ⬜ Chưa làm |
| 2 | Zalo Notify (lead hot, báo cáo) | Dễ | ⬜ Chưa làm |
| 3 | Scheduler (chạy task theo giờ) | Dễ | ⬜ Chưa làm |
| 4 | Lead Scoring (Hot/Warm/Cold) | Trung bình | ⬜ Chưa làm |
| 5 | ROAS Monitor (tự dừng ads kém) | Khó | ⬜ Chưa làm |
| 6 | Facebook Comment Scanner (review xấu) | Trung bình | ⬜ Chưa làm |
| 7 | Template Auto-Reply (phản hồi cấp 1) | Trung bình | ⬜ Chưa làm |
| 8 | Onboard Product Trigger | Dễ | ⬜ Chưa làm |
| 9 | Failure Library (file 5 Whys tự động) | Trung bình | ⬜ Chưa làm |
| 10 | Brand Audit Reminder | Dễ | ⬜ Chưa làm |

Khi xây xong skill nào → chuyển dòng đó lên Mục 2 và tick ✅.

---

## 4. QUYỀN TRUY CẬP THEO VAI TRÒ

| Thư mục | Trưởng phòng | Content | Digital | CRM |
|---------|:-----------:|:-------:|:-------:|:---:|
| `01_strategy/` | Full | Đọc | Đọc | Đọc |
| `02_content/` | Duyệt | Full | Đọc | Đọc |
| `03_advertising/` | Xem | Đọc | Full | – |
| `04_CRM/` | Xem | – | – | Full |
| `05_reports/` | Full | Thêm mới | Thêm mới | Thêm mới |

---

## 5. TÌM NHANH — "TÔI MUỐN... THÌ MỞ FILE NÀO?"

| Tôi muốn... | Mở |
|---|---|
| Viết 1 bài post với Claude | `02_content/process/cowork_with_claude_content_process.md` |
| Xem đối thủ tuần này đăng gì | `/competitor-posts` → `02_content/reference/competitor_posts_log.md` |
| Lấy giá/cam kết ta vs đối thủ | `02_content/reference/data_congty_vs_doithu_t6-2026.md` |
| Check bài trước khi đăng | `02_content/framework/communication_commitment_compliance_check.md` |
| Xem lịch làm việc tuần của content | `02_content/process/weekly_content_writing_process.md` |
| Onboard sản phẩm mới về kho | `02_content/onboarding/onboard_new_product.md` |
| Xử lý review xấu / phốt | `04_CRM/negative_review_crisis_management.md` |
| Bàn giao lead cho sales | `03_advertising/data_sharing_handover_marketing_sales.md` |
| Biết nên xây skill gì tiếp | `tool/work_skills.md` + `tool/management_tools.md` |
| Xem bài học cũ trước khi làm | `lesson_learned.md` (root) |
