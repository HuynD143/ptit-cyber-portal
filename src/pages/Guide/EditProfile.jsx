import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { userProfileDetails } from '../../data/profileData';

const SettingsSidebar = ({ active }) => (
  // Identical sidebar as Guide
  <div style={{ width: '280px', background: 'var(--bg-glass)', borderRadius: 'var(--radius-md)', padding: '1rem', height: 'fit-content', border: '1px solid rgba(255,255,255,0.05)' }}>
    <h3 style={{ margin: '0 0 1rem 0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Cấu hình chung</h3>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <li><Link to="/guide" style={{ display: 'block', padding: '10px 15px', borderRadius: 'var(--radius-sm)', color: active === 'guide' ? 'var(--primary)' : 'var(--text-main)', fontWeight: active === 'guide' ? 'bold' : 'normal', borderLeft: active === 'guide' ? '3px solid var(--primary)' : '3px solid transparent' }}>Hướng dẫn nộp bài</Link></li>
      <li><Link to="/user/edit" style={{ display: 'block', padding: '10px 15px', borderRadius: 'var(--radius-sm)', background: active === 'edit' ? 'rgba(255,51,102,0.1)' : 'transparent', color: active === 'edit' ? 'var(--primary)' : 'var(--text-main)', fontWeight: active === 'edit' ? 'bold' : 'normal', borderLeft: active === 'edit' ? '3px solid var(--primary)' : '3px solid transparent' }}>Sửa thông tin</Link></li>
      <li><Link to="/password/change" style={{ display: 'block', padding: '10px 15px', borderRadius: 'var(--radius-sm)', color: active === 'password' ? 'var(--primary)' : 'var(--text-main)', fontWeight: active === 'password' ? 'bold' : 'normal', borderLeft: active === 'password' ? '3px solid var(--primary)' : '3px solid transparent' }}>Đổi mật khẩu</Link></li>
    </ul>
  </div>
);

const EditProfile = () => {
  const [profile, setProfile] = useState({
    name: userProfileDetails.fullName,
    email: userProfileDetails.email,
    studentId: userProfileDetails.studentId,
    clazz: userProfileDetails.clazz,
    phone: userProfileDetails.phone,
    cmnd: userProfileDetails.idCard
  });

  const [avatar, setAvatar] = useState(localStorage.getItem('user_avatar') || userProfileDetails.avatarDefault);
  const fileInputRef = React.useRef(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('Dung lượng ảnh tối đa là 2MB!');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setAvatar(base64String);
        localStorage.setItem('user_avatar', base64String);
        // Dispatch custom event to notify other components (e.g. Navbar)
        window.dispatchEvent(new Event('avatarUpdate'));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thông tin đã được cập nhật thành công!');
  }

  return (
    <div style={{ padding: '2rem', display: 'flex', gap: '2rem' }}>
      <SettingsSidebar active="edit" />
      
      <div style={{ flex: 1, background: 'var(--bg-surface-elevated)', padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
        <h2 style={{ marginTop: 0, marginBottom: '2rem' }}>Cập nhật thông tin tài khoản</h2>
        
        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          
          <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
            <img src={avatar} alt="Avatar" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--bg-surface-highest)' }} />
            <div>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleAvatarChange} 
                accept="image/*" 
                style={{ display: 'none' }} 
              />
              <button 
                type="button" 
                className="button" 
                style={{ padding: '8px 16px', fontSize: '0.9rem', marginBottom: '0.5rem' }}
                onClick={() => fileInputRef.current.click()}
              >Tải ảnh thẻ lên</button>
              <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.85rem' }}>JPG, PNG hoặc GIF dung lượng tối đa 2MB.</p>
            </div>
          </div>

          <div>
            <label style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', display: 'block' }}>Họ và Tên</label>
            <input type="text" value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} />
          </div>

          <div>
            <label style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', display: 'block' }}>Mã sinh viên</label>
            <input type="text" value={profile.studentId} disabled style={{ opacity: 0.5, cursor: 'not-allowed' }} />
          </div>

          <div>
            <label style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', display: 'block' }}>Email liên hệ</label>
            <input type="email" value={profile.email} onChange={e => setProfile({...profile, email: e.target.value})} />
          </div>

          <div>
            <label style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', display: 'block' }}>Số điện thoại</label>
            <input type="tel" value={profile.phone} onChange={e => setProfile({...profile, phone: e.target.value})} />
          </div>

          <div>
            <label style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', display: 'block' }}>Số CMND/CCCD</label>
            <input type="text" value={profile.cmnd} onChange={e => setProfile({...profile, cmnd: e.target.value})} />
          </div>

          <div>
            <label style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', display: 'block' }}>Lớp chuyên ngành</label>
            <input type="text" value={profile.clazz} onChange={e => setProfile({...profile, clazz: e.target.value})} />
          </div>

          <div style={{ gridColumn: '1 / -1', marginTop: '1rem' }}>
            <button type="submit">Lưu thông tin hồ sơ</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
