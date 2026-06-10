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
| 2026-05-13 | Hỏi clarifying questions khi task mơ hồ | User nói "research about customer" — hỏi trước về loại research + output mong muốn → user xác nhận "all of above" thay vì Claude làm sai hướng | CRM · Content |
| 2026-05-13 | Xây tài liệu cross-domain trong 1 session | Persona (04_CRM) và content framework (02_Nội_dung) được xây song song + cross-reference nhau → team dùng được ngay cả 2 tài liệu, không cần session riêng | CRM · Content |
| 2026-05-14 | Rearrange `02_content/` thành subfolders | Nhóm 12 files flat thành 5 subfolder: onboarding/, process/, calendar/, framework/, reference/ → dễ navigate, rõ ownership | Content |
| 2026-05-14 | Phân tích ý tưởng content cũ vs mới | Khi user nói "ý tưởng cũ" = cần đọc framework + calendar hiện có → xác định pattern nào đã bão hòa → sinh ý tưởng mới từ insight khách hàng thực tế (customer_research.md), không từ template | Content |
| 2026-05-29 | Font cho dự án có tiếng Việt | Dùng `next/font/local` + self-hosted `.woff2` thay vì Google Fonts → tránh GDPR issue + Google Fonts `vietnamese` subset không ổn định + load nhanh hơn | FE — Next.js |
| 2026-05-29 | Verify FE component bằng Playwright MCP | Dùng Playwright MCP browser tools để screenshot và verify UI component trong browser thực thay vì chỉ đọc code → phát hiện layout bug sớm hơn | FE — Dev workflow |
| 2026-05-31 | Dùng sentinel class cho SSE auth error | `class AuthError extends Error {}` throw trong `onopen` để phân biệt auth failure (không retry) vs network error (retry) trong SSE hook — tránh retry loop vô tận khi token hết hạn | FE — SSE/Realtime |

---

## ❌ Cần tránh

| Ngày | Vấn đề | Nguyên nhân | Cách khắc phục |
|------|--------|-------------|----------------|
| 2026-05-11 | File `lesson_learned.md` rỗng dù đã làm việc nhiều session | Không có quy trình tổng hợp cuối session | Gọi `/hand-off` trước khi đóng mỗi session |
| 2026-05-12 | `/hand-off` không check code quality — chỉ sync docs | Nhầm lẫn giữa "doc sync" và "quality audit" → bỏ sót bug thực trong code | Dùng `/quality-check` để audit code, `/hand-off` để sync docs — hai việc khác nhau |
| 2026-05-12 | Commit messages vô nghĩa (`dfg`, `sdag`) trong 4/5 sessions | Không có habit đặt tên commit — git log trở nên vô dụng | Luôn format: `[type]: [task-id] [short description]` — ví dụ `feat: P-PD-4 zone D+E qty stepper` |
| 2026-05-13 | User nói "yes" sau 2 offer cùng lúc — Claude chỉ làm 1 action | Offer cuối session có 2 lựa chọn: "lưu file" hoặc "viết thử bài cụ thể" → user "yes" nhưng Claude chỉ lưu file, bỏ sót bước viết thử | Khi user confirm "yes" sau >1 offer, hỏi ngắn: "Ý bạn là lưu file hay viết thử bài luôn?" |
| 2026-05-29 | Commit messages vẫn vô nghĩa sau nhiều session nhắc nhở | 5/5 commits gần nhất là `asdg`, `sdgf`, `df`, `dfhg`, `sdf` — habit chưa thay đổi | Nhắc trước khi user commit: đề xuất commit message cụ thể luôn, không chỉ nhắc format |
| 2026-05-29 | Uncommitted changes bị bỏ lại cuối session | `layout.tsx`, `Dockerfile`, font files đã làm nhưng không commit → state lơ lửng gây confuse session sau | Cuối mỗi session, check `git status` và nhắc user commit hoặc stash trước khi đóng |
| 2026-05-29 | `.playwright-mcp/` snapshots không được gitignore | Playwright MCP tạo snapshot YAML mỗi lần browser test → commit vào git, bloat history (336 dòng/snapshot) | Thêm `.playwright-mcp/` vào `.gitignore` ngay khi dự án bắt đầu dùng Playwright MCP |
| 2026-05-31 | `.playwright-mcp/` VẪN không gitignore sau 2 lần nhắc | Đã log vào lesson_learned 2026-05-29, đã log vào memory, vẫn không fix → tích lũy thêm 40+ snapshot mới | `/hand-off` phải tự fix `.gitignore` ngay trong session, không chỉ nhắc |
| 2026-05-31 | 30+ files uncommitted khi session kết thúc | P-MON work (BE SQL+sqlc+service+handler + FE tracking+hooks+api-client) không được commit trước khi `/hand-off` | Trước khi gọi `/hand-off`, luôn commit hoặc stash tất cả changes. `/hand-off` nên nhắc user commit nếu `git status` có changes |

---

## 💡 Insight & Discovery

| Ngày | Insight | Áp dụng vào |
|------|---------|-------------|
| 2026-05-11 | Skill trong Claude Code là file `.md` chứa instructions — Claude đọc và thực thi, không cần code | Tất cả workflow tự động hóa |
| 2026-05-11 | Tool `tool_quan)ly.md` đang được dùng như backlog yêu cầu skill mới cần xây dựng | Quản lý roadmap skill |
| 2026-05-12 | `/hand-off` và `/quality-check` bổ sung nhau, không thay thế nhau: `/hand-off` = "docs đúng không?", `/quality-check` = "code đúng không?" | Thiết kế skill hệ thống — workflow cuối session |
| 2026-05-12 | Mỗi project nên có `docs/pm/SLASH_COMMANDS.md` làm registry tất cả skills/commands — dễ tìm, dễ onboard | Tổ chức docs dự án |
| 2026-05-13 | Persona và content framework cần cross-reference nhau — khi update 1 cái, review cái kia | Nếu persona thay đổi (phân khúc mới, insight mới), content framework cũng cần cập nhật hook/CTA tương ứng. Và ngược lại | CRM · Content |
| 2026-05-13 | Request tiếng Anh vague từ user dự án tiếng Việt = dấu hiệu task chưa clear | User gõ "need to make research about customer how to do..." bằng tiếng Anh ngắn → thường là chưa hình dung rõ output → cần hỏi clarify ngay, không tự assume | Chung — tất cả domain |
| 2026-05-29 | P-ARCH tasks hoàn thành sạch trong 1 session | P-ARCH-1 (storage-keys.ts) + P-ARCH-2 (wireframe doc corrections) hoàn thành đúng scope, không scope creep | FE Architecture |
| 2026-05-31 | P-MON split BE+FE sub-tasks cho phép progress rõ ràng | P-MON-BE-1→3 (SQL+sqlc+repo+service+handler) tách hoàn toàn khỏi FE-1→6 → dễ verify từng layer độc lập | BE+FE — Task planning |
| 2026-06-10 | Quy trình co-work với Claude nên ghi rõ việc gì KHÔNG giao cho Claude | Tạo `cowork_with_claude_content_process.md` — bảng "việc không giao" (chọn góc cuối, đăng bài, bịa số liệu, duyệt) giúp user giữ quyền quyết định kinh doanh, Claude chỉ nháp + check | Content — quy trình |
| 2026-06-10 | `diagram.md` = registry trung tâm (cây file + skill đã có + roadmap + bảng "tôi muốn... mở file nào") | Sơ đồ cũ lỗi thời sau khi đổi tên folder sang tiếng Anh — registry phải được cập nhật mỗi khi thêm file/skill, gắn vào `/hand-off`. Bảng tra "tôi muốn → mở file nào" hữu ích hơn cây thư mục thuần | Quản lý docs |

---

## 🔧 Config & Setup đã làm

| Ngày | Thay đổi | Lý do | File bị ảnh hưởng |
|------|----------|-------|-------------------|
| 2026-05-11 | Tạo skill `/hand-off` tại `~/.claude/skills/hand-off.md` | Cần quy trình tổng hợp lesson learned có cấu trúc | `lesson_learned.md`, các CLAUDE.md, memory |
| 2026-05-12 | Tạo skill `/quality-check` tại `.claude/skills/quality-check/SKILL.md` (BanhCuon project) | Cần audit 5 loại: commit hygiene · task tracking · skipped steps · code rules · CSS safety | `docs/pm/SLASH_COMMANDS.md` |
| 2026-05-29 | Thêm `.playwright-mcp/` vào `.gitignore` của BanhCuon project | Auto-generated Playwright MCP YAML snapshots đang bị commit vào git — bloat không cần thiết | `.gitignore` |
| 2026-05-31 | `.playwright-mcp/` đã được thêm vào `.gitignore` (lần thứ 2 — fix thực sự) | Lesson 2026-05-29 chỉ nhắc, không fix. Lần này `/hand-off` skill tự edit file luôn | `.gitignore` |

---

## 📋 Backlog cải thiện

- [ ] Chạy `/hand-off` sau mỗi session làm việc với Claude
- [ ] Xây dựng thêm các skill theo roadmap trong `tool/các skill_công_viêc.md`
- [ ] Liên kết lesson learned với từng CLAUDE.md domain khi đủ entries
- [ ] Review và gom nhóm lesson sau mỗi 10 sessions
- [x] Thêm `.playwright-mcp/` vào `.gitignore` của BanhCuon restaurant project (done 2026-05-31)
- [ ] Tạo habit: Claude đề xuất commit message cụ thể ngay khi chuẩn bị commit (không chỉ nhắc format)
