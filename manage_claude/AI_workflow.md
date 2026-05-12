# AI Workflow — Cách Claude Làm Việc

> Mở file này trong VSCode với extension **Markdown Preview** (hoặc `Cmd+Shift+V`) để xem sơ đồ.

---

## Sơ đồ tổng thể

```mermaid
flowchart TD
    START([👤 Owner giao task]) --> S1

    subgraph STARTUP ["🔁 KHỞI ĐỘNG SESSION"]
        S1[📄 Đọc CLAUDE.md\nHiểu vai trò & nguyên tắc] --> S2
        S2[📚 Đọc lesson_learned.md\nKế thừa kinh nghiệm cũ] --> S3
        S3{Task thuộc\ndomain nào?}
        S3 -->|Content| S4A[📄 Đọc CLAUDE_Content.md]
        S3 -->|CRM| S4B[📄 Đọc CLAUDE_CRM.md]
        S3 -->|Digital| S4C[📄 Đọc CLAUDE_Digital.md]
        S3 -->|Tổng hợp| S4D[📄 Đọc CLAUDE_TruongPhong.md]
        S4A & S4B & S4C & S4D --> S5[📋 Đọc Task được giao]
    end

    S5 --> STEP1

    subgraph EXECUTE ["⚙️ 7 BƯỚC THỰC THI"]
        STEP1["**Bước 1** — Hiểu Task\nMục tiêu? Output? Ai dùng?"] --> STEP2
        STEP2["**Bước 2** — Tra tài liệu tham chiếu\nĐọc file liên quan trong dự án"] --> STEP3
        STEP3{"**Bước 3** — Task có\nđiểm mơ hồ?"}
        STEP3 -->|Có| ASK["🛑 Dừng lại\nĐặt câu hỏi cụ thể cho Owner"]
        ASK --> ANSWER["✅ Owner trả lời\n& làm rõ"]
        ANSWER --> STEP4
        STEP3 -->|Không| STEP4
        STEP4["**Bước 4** — Lên kế hoạch\nLiệt kê các bước, ước tính rủi ro"] --> IMPROVE{Phát hiện\nvấn đề hệ thống?}
        IMPROVE -->|Có| SUGGEST["💡 Đề xuất cải tiến\n(sau khi hoàn thành task chính)"]
        IMPROVE -->|Không| STEP5
        SUGGEST --> STEP5
        STEP5["**Bước 5** — Thực thi\nTheo đúng kế hoạch Bước 4"] --> ISSUE{Phát hiện\nvấn đề mới?}
        ISSUE -->|Có| STOP["🛑 Dừng & Báo cáo\nKhông tự xử lý ngoài phạm vi"]
        STOP --> OWNER_DECIDE{Owner\nquyết định}
        OWNER_DECIDE -->|Mở rộng scope| STEP5
        OWNER_DECIDE -->|Giữ nguyên| STEP6
        ISSUE -->|Không| STEP6
        STEP6{"**Bước 6** — Kiểm tra\nOutput có đúng mục tiêu?"}
        STEP6 -->|Chưa đạt| STEP5
        STEP6 -->|Đạt| STEP7
        STEP7["**Bước 7** — Lesson Learned\nGhi lại: tốt / cần tránh / insight"]
    end

    STEP7 --> UPDATE["📝 Cập nhật lesson_learned.md"]
    UPDATE --> DONE([✅ Task hoàn thành])

    style STARTUP fill:#e8f4f8,stroke:#4a90d9
    style EXECUTE fill:#f0f8e8,stroke:#5a9a3a
    style ASK fill:#fff3cd,stroke:#f0ad4e
    style STOP fill:#fde8e8,stroke:#d9534f
    style SUGGEST fill:#e8f0ff,stroke:#6c7ae0
```

---

## Sơ đồ quyết định — Khi nào Claude dừng lại?

```mermaid
flowchart LR
    INPUT[Nhận thông tin\nhoặc tình huống] --> Q1{Task mơ hồ\nhoặc đa nghĩa?}
    Q1 -->|Có| D1["🛑 HỎI\nĐặt câu hỏi\ncụ thể"]
    Q1 -->|Không| Q2{Thay đổi có\ntác động rộng?}
    Q2 -->|Có| D2["🛑 TRÌNH BÀY PLAN\nXin xác nhận\ntrước khi làm"]
    Q2 -->|Không| Q3{Hệ thống có\nvấn đề tiềm ẩn?}
    Q3 -->|Có| D3["💡 NÊU VẤN ĐỀ\nĐề xuất cải tiến\nOwner quyết định"]
    Q3 -->|Không| Q4{Kết quả có thể\nkhông đúng mục tiêu?}
    Q4 -->|Có| D4["🛑 VERIFY\nXác nhận lại\nmục tiêu với Owner"]
    Q4 -->|Không| GO["✅ TIẾN HÀNH\nThực thi bình thường"]

    style D1 fill:#fff3cd
    style D2 fill:#fff3cd
    style D3 fill:#e8f0ff
    style D4 fill:#fde8e8
    style GO fill:#d4edda
```

---

## Vòng lặp kế thừa kiến thức

```mermaid
flowchart LR
    subgraph SESSION_N ["Session trước"]
        T1[Làm task] --> L1[Ghi lesson_learned.md]
    end

    subgraph SESSION_NOW ["Session hiện tại"]
        R1[Đọc lesson_learned.md] --> T2[Làm task tốt hơn]
        T2 --> L2[Cập nhật lesson_learned.md]
    end

    subgraph SESSION_NEXT ["Session tiếp theo"]
        R2[Đọc lesson_learned.md\ncập nhật] --> T3[Làm task tốt hơn nữa]
    end

    L1 -->|Kế thừa| R1
    L2 -->|Kế thừa| R2

    style SESSION_N fill:#f8f8f8,stroke:#999
    style SESSION_NOW fill:#e8f4f8,stroke:#4a90d9
    style SESSION_NEXT fill:#f0f8e8,stroke:#5a9a3a
```

---

## Vai trò — Senior Co-worker vs Công cụ thụ động

| | Công cụ thụ động | Claude (Senior Co-worker) |
|--|:--:|:--:|
| Nhận task không rõ | Tự đoán, làm sai | 🛑 Dừng hỏi trước |
| Phát hiện vấn đề hệ thống | Bỏ qua | 💡 Nêu ra + đề xuất |
| Làm xong task | Dừng | ✅ Ghi lesson learned |
| Session mới | Bắt đầu từ đầu | 📚 Đọc lại kinh nghiệm cũ |
| Phạm vi task | Làm đúng yêu cầu | Làm đúng + đề xuất cải tiến |

---

## Tài liệu liên quan

- [CLAUDE.md](CLAUDE.md) — Nguyên tắc & 7 bước chi tiết
- [../lesson_learned.md](../lesson_learned.md) — Kinh nghiệm tích lũy
- [../sơ_đồ.md](../sơ_đồ.md) — Cấu trúc toàn bộ dự án
