# Lesson Learned — Laptop Thịnh Vượng × Claude

> Cập nhật liên tục sau mỗi session bằng skill `/hand-off`.
> Mỗi entry có ngày để theo dõi độ mới. Không xóa entry cũ — chỉ thêm.

---

## ✅ Pattern hiệu quả

| Ngày | Tình huống | Cách làm hiệu quả | Domain |
|------|-----------|-------------------|--------|
| 2026-05-11 | Tạo skill mới cho Claude Code | Viết skill dưới dạng `.md` trong `~/.claude/skills/`, mô tả rõ từng bước tuần tự thay vì dùng prompt mỗi lần | Chung |
| 2026-05-11 | Hệ thống hóa lesson learned | Dùng `/hand-off` ngay cuối session thay vì để tích lũy nhiều ngày rồi mới tổng hợp | Chung |
| 2026-05-12 | Tạo skill trong project-level (không phải global) | Skill đặt trong `.claude/skills/<name>/SKILL.md` của project — chỉ available trong repo đó. Global skill đặt trong `~/.claude/skills/` | Chung |
| 2026-05-12 | Audit chất lượng session | Yêu cầu Claude "check quality of job in last N sessions" + liệt kê rõ: commit hygiene, skipped steps, code rules, CSS safety → nhận được báo cáo cụ thể kèm file:line | Chung — Claude Code |

---

## ❌ Cần tránh

| Ngày | Vấn đề | Nguyên nhân | Cách khắc phục |
|------|--------|-------------|----------------|
| 2026-05-11 | File `lesson_learned.md` rỗng dù đã làm việc nhiều session | Không có quy trình tổng hợp cuối session | Gọi `/hand-off` trước khi đóng mỗi session |
| 2026-05-12 | `/hand-off` không check code quality — chỉ sync docs | Nhầm lẫn giữa "doc sync" và "quality audit" → bỏ sót bug thực trong code | Dùng `/quality-check` để audit code, `/hand-off` để sync docs — hai việc khác nhau |
| 2026-05-12 | Commit messages vô nghĩa (`dfg`, `sdag`) trong 4/5 sessions | Không có habit đặt tên commit — git log trở nên vô dụng | Luôn format: `[type]: [task-id] [short description]` — ví dụ `feat: P-PD-4 zone D+E qty stepper` |

---

## 💡 Insight & Discovery

| Ngày | Insight | Áp dụng vào |
|------|---------|-------------|
| 2026-05-11 | Skill trong Claude Code là file `.md` chứa instructions — Claude đọc và thực thi, không cần code | Tất cả workflow tự động hóa |
| 2026-05-11 | Tool `tool_quan)ly.md` đang được dùng như backlog yêu cầu skill mới cần xây dựng | Quản lý roadmap skill |
| 2026-05-12 | `/hand-off` và `/quality-check` bổ sung nhau, không thay thế nhau: `/hand-off` = "docs đúng không?", `/quality-check` = "code đúng không?" | Thiết kế skill hệ thống — workflow cuối session |
| 2026-05-12 | Mỗi project nên có `docs/pm/SLASH_COMMANDS.md` làm registry tất cả skills/commands — dễ tìm, dễ onboard | Tổ chức docs dự án |

---

## 🔧 Config & Setup đã làm

| Ngày | Thay đổi | Lý do | File bị ảnh hưởng |
|------|----------|-------|-------------------|
| 2026-05-11 | Tạo skill `/hand-off` tại `~/.claude/skills/hand-off.md` | Cần quy trình tổng hợp lesson learned có cấu trúc | `lesson_learned.md`, các CLAUDE.md, memory |
| 2026-05-12 | Tạo skill `/quality-check` tại `.claude/skills/quality-check/SKILL.md` (BanhCuon project) | Cần audit 5 loại: commit hygiene · task tracking · skipped steps · code rules · CSS safety | `docs/pm/SLASH_COMMANDS.md` |

---

## 📋 Backlog cải thiện

- [ ] Chạy `/hand-off` sau mỗi session làm việc với Claude
- [ ] Xây dựng thêm các skill theo roadmap trong `tool/các skill_công_viêc.md`
- [ ] Liên kết lesson learned với từng CLAUDE.md domain khi đủ entries
- [ ] Review và gom nhóm lesson sau mỗi 10 sessions
