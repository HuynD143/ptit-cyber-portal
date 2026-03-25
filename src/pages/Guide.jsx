import React from 'react';
import { Link } from 'react-router-dom';

const SettingsSidebar = ({ active }) => (
  <div style={{ width: '280px', background: 'var(--bg-glass)', borderRadius: 'var(--radius-md)', padding: '1rem', height: 'fit-content', border: '1px solid rgba(255,255,255,0.05)' }}>
    <h3 style={{ margin: '0 0 1rem 0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Cấu hình chung</h3>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <li>
        <Link 
          to="/guide" 
          style={{ display: 'block', padding: '10px 15px', borderRadius: 'var(--radius-sm)', background: active === 'guide' ? 'rgba(255,51,102,0.1)' : 'transparent', color: active === 'guide' ? 'var(--primary)' : 'var(--text-main)', fontWeight: active === 'guide' ? 'bold' : 'normal', borderLeft: active === 'guide' ? '3px solid var(--primary)' : '3px solid transparent' }}
        >
          Hướng dẫn nộp bài
        </Link>
      </li>
      <li>
        <Link 
          to="/user/edit" 
          style={{ display: 'block', padding: '10px 15px', borderRadius: 'var(--radius-sm)', background: active === 'edit' ? 'rgba(255,51,102,0.1)' : 'transparent', color: active === 'edit' ? 'var(--primary)' : 'var(--text-main)', fontWeight: active === 'edit' ? 'bold' : 'normal', borderLeft: active === 'edit' ? '3px solid var(--primary)' : '3px solid transparent' }}
        >
          Sửa thông tin
        </Link>
      </li>
      <li>
        <Link 
          to="/password/change" 
          style={{ display: 'block', padding: '10px 15px', borderRadius: 'var(--radius-sm)', background: active === 'password' ? 'rgba(255,51,102,0.1)' : 'transparent', color: active === 'password' ? 'var(--primary)' : 'var(--text-main)', fontWeight: active === 'password' ? 'bold' : 'normal', borderLeft: active === 'password' ? '3px solid var(--primary)' : '3px solid transparent' }}
        >
          Đổi mật khẩu
        </Link>
      </li>
    </ul>
  </div>
);

const Guide = () => {
  return (
    <div style={{ padding: '2rem', display: 'flex', gap: '2rem' }}>
      <SettingsSidebar active="guide" />
      
      <div style={{ flex: 1, background: 'var(--bg-surface-elevated)', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
        <h2 style={{ marginTop: 0 }}>Hướng dẫn nộp bài trực tuyến</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
          Tài liệu này hướng dẫn cách cấu hình môi trường chuẩn để làm bài thực hành an toàn thông tin trên hệ thống. 
          Vui lòng đọc kỹ trước khi bắt đầu.
        </p>

        <h3 style={{ marginTop: '2rem', color: 'var(--secondary)' }}>1. Cài đặt OpenVPN</h3>
        <p style={{ lineHeight: '1.6' }}>
          Hệ thống yêu cầu mạng nội bộ thông qua OpenVPN để truy cập vào các dải IP đích của phòng lab ảo.
          Bạn cần thiếp lập VPN với chứng chỉ đã được cấp.
        </p>
        <div style={{ background: '#000', padding: '1rem', borderRadius: '8px', margin: '1rem 0', fontFamily: 'monospace', borderLeft: '4px solid var(--secondary)' }}>
          <p style={{ margin: 0, color: '#00cc66' }}>$ sudo apt install openvpn</p>
          <p style={{ margin: 0, color: '#00cc66' }}>$ sudo openvpn --config student-b23dckh056.ovpn</p>
        </div>

        <h3 style={{ marginTop: '2rem', color: 'var(--secondary)' }}>2. SSH Vào Máy Chủ Mục Tiêu (Challenge)</h3>
        <div style={{ background: 'rgba(255, 170, 0, 0.1)', borderLeft: '4px solid #ffaa00', padding: '1rem', borderRadius: '4px', marginBottom: '1rem' }}>
          <strong style={{ color: '#ffaa00' }}>Cảnh báo:</strong> Mọi hành động Brute Force hoặc DDoS vào gateway sẽ bị cấm tài khoản vĩnh viễn.
        </div>
        <p style={{ lineHeight: '1.6' }}>
          Sử dụng username là mã sinh viên (in thường) đính kèm port được cấp riêng ở bảng thông tin bài tập.
        </p>
        <div style={{ background: '#000', padding: '1rem', borderRadius: '8px', margin: '1rem 0', fontFamily: 'monospace', borderLeft: '4px solid var(--secondary)' }}>
          <p style={{ margin: 0, color: '#00cc66' }}>$ ssh b23dckh056@challenges.seclab.ptit.edu.vn -p 20022</p>
        </div>
        
      </div>
    </div>
  );
};

export default Guide;
