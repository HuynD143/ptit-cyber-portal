# 🛡️ PTIT Cyber Portal

**🌐 Live Demo:** [https://ptit-cyber-portal.vercel.app]

## Luồng hệ thống

Xem chi tiết trong thư mục system_flow

---

## 📂 Cấu trúc thư mục (Folder Structure)

```text
📦 ptit-cyber-portal
├── public/                # Tài nguyên tĩnh 
├── src/                   # Thư mục mã nguồn chính của ứng dụng
│   ├── assets/            # Các tệp định dạng CSS và tài nguyên đa phương tiện
│   ├── components/        # Các UI component tái sử dụng (Layout, UI, Utils...)
│   ├── data/              # Dữ liệu mẫu (Mock data) 
│   ├── pages/             # Chứa toàn bộ trang giao diện (Routing Views)
│   │   ├── Auth/          # Trang Đăng nhập, Đăng ký, Quên mật khẩu
│   │   ├── Challenges/    # Bảng danh sách bài tập (Trang chủ)
│   │   ├── CTFCompetition/# Tính năng giải đấu Attack-Defense 
│   │   ├── CTFJeopardy/   # Dashboard và tính năng giải đấu Jeopardy
│   │   ├── Guide/         # Trang Hướng dẫn sử dụng
│   │   ├── Leaderboard/   # Bảng xếp hạng hệ thống tổng quát
│   │   ├── Profile/       # Trang hồ sơ cá nhân, lịch sử khóa học
│   │   ├── SystemLogs/    # Trang theo dõi Nhật ký hệ thống (System Logs)
│   │   └── Terminal/      # Giao diện giả lập môi trường SSH Web Terminal
│   ├── system_flow/       # Diagram phân tích luồng hoạt động
│   ├── App.jsx            # Tệp cấu hình phân luồng các Route chính yếu
│   └── main.jsx           # Tệp gốc khởi chạy ứng dụng React
├── vercel.json            # Cấu hình luật chuyển hướng để deploy SPA lên Vercel
└── vite.config.js         # Cấu hình môi trường dev server và build từ Vite
```

## Yêu cầu hệ thống

| Công cụ | Phiên bản tối thiểu |
|---------|----------------------|
| [Node.js](https://nodejs.org) | v18 trở lên |
| npm | v9 trở lên (đi kèm Node.js) |

---

## Cài đặt và chạy

### Bước 1 — Clone hoặc tải thư mục dự án

```bash
git clone https://github.com/HuynD143/ptit-cyber-portal.git
cd ptit-cyber-portal
```

### Bước 2 — Cài đặt các thư viện

```bash
npm install
```

> Chỉ cần chạy một lần. Bỏ qua nếu thư mục `node_modules` đã tồn tại.

### Bước 3 — Chạy môi trường phát triển

```bash
npm run dev
```

Vite sẽ khởi động server và mặc định lắng nghe tại:

```
http://localhost:5173
```

Mở trình duyệt rồi truy cập địa chỉ trên để xem ứng dụng.

---

## Ép cổng cụ thể là 5173

Để **luôn buộc dùng cổng 5173**, thêm option `--port` vào lệnh:

```bash
npm run dev -- --port 5173
```

Hoặc cập nhật `vite.config.js`:

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true, // Báo lỗi thay vì tự đổi cổng
  },
})
```

---

## Các lệnh khác

| Lệnh | Mô tả |
|------|-------|
| `npm run dev` | Chạy môi trường phát triển (hot-reload) |
| `npm run build` | Build production vào thư mục `dist/` |
| `npm run preview` | Xem trước bản build production |
| `npm run lint` | Kiểm tra lỗi ESLint |

---

## Công nghệ và Tính năng nổi bật

- **React 19** + **React Router v7**
- **Vite 8** — Build tool & Web dev server
- **xTerm.js** — Tích hợp Terminal giả lập kết nối SSH mượt mà trực tiếp trên trình duyệt web.
- **lucide-react** — Thư viện icon chuyên nghiệp.
- **Dynamic CTF Engine** — Hệ thống giải đấu **CTF Attack-Defense** & **CTF Jeopardy** giả lập hoàn chỉnh với Dashboard live score, quản lý SLA, Submission history và Bảng xếp hạng.
- **Glassmorphism Dark Theme** — Thiết kế UI/UX theo chuẩn hệ thống bảo mật hiện đại.

---
