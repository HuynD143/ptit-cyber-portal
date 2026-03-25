import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SettingsSidebar = ({ active }) => (
  // Identical sidebar as Guide
  <div style={{ width: '280px', background: 'var(--bg-glass)', borderRadius: 'var(--radius-md)', padding: '1rem', height: 'fit-content', border: '1px solid rgba(255,255,255,0.05)' }}>
    <h3 style={{ margin: '0 0 1rem 0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Cấu hình chung</h3>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <li><Link to="/guide" style={{ display: 'block', padding: '10px 15px', borderRadius: 'var(--radius-sm)', color: active === 'guide' ? 'var(--primary)' : 'var(--text-main)', fontWeight: active === 'guide' ? 'bold' : 'normal', borderLeft: active === 'guide' ? '3px solid var(--primary)' : '3px solid transparent' }}>Hướng dẫn nộp bài</Link></li>
      <li><Link to="/user/edit" style={{ display: 'block', padding: '10px 15px', borderRadius: 'var(--radius-sm)', color: active === 'edit' ? 'var(--primary)' : 'var(--text-main)', fontWeight: active === 'edit' ? 'bold' : 'normal', borderLeft: active === 'edit' ? '3px solid var(--primary)' : '3px solid transparent' }}>Sửa thông tin</Link></li>
      <li><Link to="/password/change" style={{ display: 'block', padding: '10px 15px', borderRadius: 'var(--radius-sm)', background: active === 'password' ? 'rgba(255,51,102,0.1)' : 'transparent', color: active === 'password' ? 'var(--primary)' : 'var(--text-main)', fontWeight: active === 'password' ? 'bold' : 'normal', borderLeft: active === 'password' ? '3px solid var(--primary)' : '3px solid transparent' }}>Đổi mật khẩu</Link></li>
    </ul>
  </div>
);

const ChangePassword = () => {
  const [oldPw, setOldPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPw === confirmPw) {
      alert('Đổi mật khẩu thành công!');
      setOldPw(''); setNewPw(''); setConfirmPw('');
    } else {
      alert('Mật khẩu xác nhận không khớp.');
    }
  }

  return (
    <div style={{ padding: '2rem', display: 'flex', gap: '2rem' }}>
      <SettingsSidebar active="password" />

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <div style={{ background: 'var(--bg-surface-elevated)', padding: '3rem', borderRadius: 'var(--radius-lg)', width: '100%', maxWidth: '500px', height: 'fit-content', boxShadow: 'var(--shadow-ambient)' }}>
          <h2 style={{ marginTop: 0, textAlign: 'center', marginBottom: '2rem' }}>Đổi mật khẩu</h2>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', display: 'block' }}>Mật khẩu hiện tại</label>
              <input type="password" value={oldPw} onChange={e => setOldPw(e.target.value)} required />
            </div>

            <div>
              <label style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', display: 'block' }}>Mật khẩu mới</label>
              <input type="password" value={newPw} onChange={e => setNewPw(e.target.value)} required />
            </div>

            <div>
              <label style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', display: 'block' }}>Xác nhận mật khẩu mới</label>
              <input type="password" value={confirmPw} onChange={e => setConfirmPw(e.target.value)} required />
            </div>

            <button type="submit" style={{ marginTop: '1rem' }}>Lưu thay đổi</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
