# 🛡️ PTIT Cyber Portal

**🌐 Live Demo:** [https://ptit-cyber-portal.vercel.app]

## Luồng hệ thống

Xem chi tiết trong thư mục system_flow

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

Cổng **5173 là mặc định của Vite** nên thường không cần cấu hình thêm.  
Nếu cổng bị chiếm, Vite sẽ tự động chuyển sang cổng khác (5174, 5175, …).

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
