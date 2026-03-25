# Luồng hoạt động hệ thống PTIT Cyber Portal

```mermaid
graph TD
    BatDau[Bắt đầu] --> MoHeThong[Mở hệ thống]
    MoHeThong --> TrangDangNhap[Trang Đăng nhập]
    
    TrangDangNhap --> NhapThong Tin{Người dùng nhập thông tin}
    NhapThongTin --> KiemTraDangNhap{Hệ thống xác thực}
    
    KiemTraDangNhap -- Thất bại --> TrangDangNhapThongBaoLoi[Trang Đăng nhập hiển thị cảnh báo đỏ]
    TrangDangNhapThongBaoLoi --> NhapThongTin
    
    KiemTraDangNhap -- Thành công --> TrangChu[Vào Trang chủ Dashboard]
    
    TrangChu --> LocBaiTap[Lọc bài tập theo Học kỳ và Môn học]
    LocBaiTap --> DanhSachBaiTap[Xem danh sách bài tập dạng lưới]
    
    DanhSachBaiTap --> ChiTietBaiTap[Chọn một bài tập và xem Chi tiết bài tập]
    ChiTietBaiTap --> DocYeuCau[Đọc mô tả và yêu cầu thực hành]
    DocYeuCau --> ThucHienLab[Thực hiện bài Lab theo hướng dẫn]
    ThucHienLab --> NopFileBaiLam[Duyệt file từ máy tính và nộp bài]
    NopFileBaiLam --> TrangLichSu[Chuyển hướng đến trang Lịch sử cá nhân]
    
    TrangLichSu --> XemKetQua[Xem trạng thái chấm bài như Accepted hoặc Wrong Answer]
    
    TrangChu --> MenuCTFJeopardy[Chuyển sang trang CTF Jeopardy]
    MenuCTFJeopardy --> BangXepHangNho[Theo dõi bảng xếp hạng Top 15 thời gian thực]
    BangXepHangNho --> ChonBaiCTF[Chọn bài tập Jeopardy từ danh sách]
    ChonBaiCTF --> ChiTietJeopardy[Xem chi tiết thử thách CTF]
    
    ChiTietJeopardy --> KhoiDongInstance[Yêu cầu khởi động máy chủ ảo]
    KhoiDongInstance --> TuongTacTerminal[Truy cập thông qua Web Terminal hoặc SSH]
    TuongTacTerminal --> TimCo[Tìm kiếm flag trong môi trường thực hành]
    TimCo --> NopFlagCTF[Nhập chuỗi flag và xác nhận nộp]
    NopFlagCTF --> PhanHoiKetQua[Hệ thống phản hồi Đúng hoặc Sai ngay lập tức]
    
    TrangChu --> MenuAttackDefense[Chuyển sang trang Attack Defense]
    MenuAttackDefense --> TheoDoiDiem[Theo dõi điểm số và thời gian thi đấu]
    TheoDoiDiem --> DashboardMucTieu[Quan sát trạng thái dịch vụ của các đội thi]
    DashboardMucTieu --> KhaiThacDoiThu[Tấn công đối thủ và nộp flag]
    KhaiThacDoiThu --> VaLoiDichVu[Cấu hình Terminal để vá lỗ hổng dịch vụ đội mình]
    
    TrangChu --> MenuBangXepHang[Chuyển sang trang Bảng xếp hạng tổng]
    MenuBangXepHang --> XemThuHang[So sánh thành tích với toàn bộ sinh viên]
    
    TrangChu --> MenuTrangThai[Chuyển sang trang Trạng thái hệ thống]
    MenuTrangThai --> XemLuotNopBai[Theo dõi các lượt nộp bài mới nhất của toàn hệ thống]
    
    TrangChu --> MenuHoSo[Vào trang Hồ sơ cá nhân]
    MenuHoSo --> TongQuanHoSo[Xem thông tin sinh viên và các môn học tham gia]
    TongQuanHoSo --> CapNhatHoSo[Chuyển sang trang Chỉnh sửa thông tin]
    CapNhatHoSo --> LuuThongTin[Cập nhật ảnh đại diện và chi tiết liên lạc]
    LuuThongTin --> DoiMatKhau[Chuyển sang trang Đổi mật khẩu]
    DoiMatKhau --> XacNhanDoiMatKhau[Nhập mật khẩu cũ và mới kèm xác nhận]
    
    TrangChu --> MenuHuongDan[Vào trang Hướng dẫn]
    MenuHuongDan --> XemTaiLieu[Đọc tài liệu cấu hình VPN và lệnh SSH mẫu]
```
