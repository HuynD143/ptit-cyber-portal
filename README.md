# 🛡️ PTIT Cyber Portal — Hướng dẫn chạy dự án

## Luồng hệ thống

Xem chi tiết trong thư mục system_flow

## Yêu cầu hệ thống

| Công cụ | Phiên bản tối thiểu |
|---------|----------------------|
| [Node.js](https://nodejs.org) | v18 trở lên |
| npm | v9 trở lên (đi kèm Node.js) |

---

## Cài đặt và chạy

### Bước 1 — Clone hoặc mở thư mục dự án

```bash
cd /Users/haidangstore/Documents/ATTT_UI_UX/ptit-cyber-portal
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

## Công nghệ sử dụng

- **React 19** + **React Router v7**
- **Vite 8** — build tool & dev server
- **xterm.js** — terminal giả lập trong trình duyệt
- **lucide-react** — icon library

---

> 💡 **Gợi ý:** Nếu gặp lỗi sau khi pull code mới, hãy chạy lại `npm install` trước khi `npm run dev`.
