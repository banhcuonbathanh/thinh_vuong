# Lesson Learned — Laptop Thịnh Vượng × Claude

> Cập nhật liên tục sau mỗi session bằng skill `/hand-off`.
> Mỗi entry có ngày để theo dõi độ mới. Không xóa entry cũ — chỉ thêm.

---

## ✅ Pattern hiệu quả

| Ngày | Tình huống | Cách làm hiệu quả | Domain |
|------|-----------|-------------------|--------|
| 2026-05-11 | Tạo skill mới cho Claude Code | Viết skill dưới dạng `.md` trong `~/.claude/skills/`, mô tả rõ từng bước tuần tự thay vì dùng prompt mỗi lần | Chung |
| 2026-05-11 | Hệ thống hóa lesson learned | Dùng `/hand-off` ngay cuối session thay vì để tích lũy nhiều ngày rồi mới tổng hợp | Chung |

---

## ❌ Cần tránh

| Ngày | Vấn đề | Nguyên nhân | Cách khắc phục |
|------|--------|-------------|----------------|
| 2026-05-11 | File `lesson_learned.md` rỗng dù đã làm việc nhiều session | Không có quy trình tổng hợp cuối session | Gọi `/hand-off` trước khi đóng mỗi session |

---

## 💡 Insight & Discovery

| Ngày | Insight | Áp dụng vào |
|------|---------|-------------|
| 2026-05-11 | Skill trong Claude Code là file `.md` chứa instructions — Claude đọc và thực thi, không cần code | Tất cả workflow tự động hóa |
| 2026-05-11 | Tool `tool_quan)ly.md` đang được dùng như backlog yêu cầu skill mới cần xây dựng | Quản lý roadmap skill |

---

## 🔧 Config & Setup đã làm

| Ngày | Thay đổi | Lý do | File bị ảnh hưởng |
|------|----------|-------|-------------------|
| 2026-05-11 | Tạo skill `/hand-off` tại `~/.claude/skills/hand-off.md` | Cần quy trình tổng hợp lesson learned có cấu trúc | `lesson_learned.md`, các CLAUDE.md, memory |

---

## 📋 Backlog cải thiện

- [ ] Chạy `/hand-off` sau mỗi session làm việc với Claude
- [ ] Xây dựng thêm các skill theo roadmap trong `tool/các skill_công_viêc.md`
- [ ] Liên kết lesson learned với từng CLAUDE.md domain khi đủ entries
- [ ] Review và gom nhóm lesson sau mỗi 10 sessions
