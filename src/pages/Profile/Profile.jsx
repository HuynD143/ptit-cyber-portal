import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { userProfileDetails } from '../../data/profileData';
import { myCourses } from '../../data/coursesData';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: '📖 Tổng quan' },
    { id: 'history', label: '🕒 Lịch sử' },
    { id: 'labs', label: '💻 Thực hành' },
  ];

  const userAvatar = localStorage.getItem('user_avatar') || userProfileDetails.avatarDefault;

  return (
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
      
      {/* LEFT SIDEBAR - PROFILE INFO */}
      <div style={{ 
        width: '320px', 
        flexShrink: 0, 
        background: 'var(--bg-surface-elevated)', 
        borderRadius: 'var(--radius-lg)', 
        padding: '2rem', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        border: '1px solid rgba(148, 163, 184, 0.12)',
        boxShadow: 'var(--shadow-soft)'
      }}>
        <img 
          src={userAvatar} 
          alt="Avatar" 
          style={{ width: '130px', height: '130px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', border: '4px solid var(--bg-surface-highest)', boxShadow: 'var(--shadow-ambient)' }} 
        />
        <h2 style={{ margin: '0 0 1.5rem', fontSize: '1.4rem' }}>{userProfileDetails.fullName}</h2>
        
        <Link to="/user/edit" className="button" style={{ 
          width: '100%', 
          marginBottom: '2rem', 
          background: 'rgba(148, 163, 184, 0.1)', 
          color: 'var(--text-main)', 
          border: '1px solid rgba(148, 163, 184, 0.2)',
          boxShadow: 'none'
        }}>
          Cập nhật thông tin
        </Link>
        
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px dashed rgba(148,163,184,0.1)', paddingBottom: '1rem' }}>
            <span style={{ fontSize: '1.2rem' }}>🧑‍🎓</span>
            <div>
              <p style={{ margin: 0, fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-soft)' }}>Tài khoản:</p>
              <p style={{ margin: 0, color: 'var(--primary)', fontWeight: 'bold', fontSize: '1rem' }}>{userProfileDetails.studentId}</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px dashed rgba(148,163,184,0.1)', paddingBottom: '1rem' }}>
            <span style={{ fontSize: '1.2rem' }}>🎓</span>
            <div>
              <p style={{ margin: 0, fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-soft)' }}>Lớp:</p>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem' }}>{userProfileDetails.clazz}</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px dashed rgba(148,163,184,0.1)', paddingBottom: '1rem' }}>
            <span style={{ fontSize: '1.2rem' }}>📧</span>
            <div>
              <p style={{ margin: 0, fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-soft)' }}>Email:</p>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', wordBreak: 'break-all' }}>{userProfileDetails.email}</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px dashed rgba(148,163,184,0.1)', paddingBottom: '1rem' }}>
            <span style={{ fontSize: '1.2rem' }}>📞</span>
            <div>
              <p style={{ margin: 0, fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-soft)' }}>Số điện thoại:</p>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem' }}>{userProfileDetails.phone}</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '1.2rem' }}>🪪</span>
            <div>
              <p style={{ margin: 0, fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-soft)' }}>Số CMND/CCCD:</p>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem' }}>{userProfileDetails.idCard}</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT AREA */}
      <div style={{ flex: 1, background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-lg)', padding: '2rem', border: '1px solid rgba(148, 163, 184, 0.12)', minHeight: '600px', boxShadow: 'var(--shadow-soft)' }}>
        
        {/* TABS */}
        <div style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid rgba(148,163,184,0.15)', marginBottom: '2rem' }}>
          {tabs.map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: activeTab === tab.id ? 'var(--text-main)' : 'var(--text-soft)', 
                padding: '0.5rem 1rem 1rem',
                fontSize: '1rem',
                fontWeight: activeTab === tab.id ? '600' : 'normal',
                borderBottom: activeTab === tab.id ? '3px solid var(--primary)' : '3px solid transparent',
                borderRadius: 0,
                boxShadow: 'none',
                minHeight: 'auto',
                transition: 'all 0.2s'
              }}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB CONTENTS */}
        <div style={{ paddingTop: '1rem' }}>
          {activeTab === 'overview' && (
            <div>
              <h3 style={{ marginBottom: '1.5rem', fontWeight: '500', color: 'var(--text-main)' }}>Danh sách lớp học đã tham gia</h3>
              
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: 'rgba(220, 38, 38, 0.08)', borderBottom: '1px solid rgba(220, 38, 38, 0.2)' }}>
                    <th style={{ padding: '1rem', color: 'var(--text-soft)', fontWeight: '600', width: '50px', textAlign: 'center' }}>STT</th>
                    <th style={{ padding: '1rem', color: 'var(--text-soft)', fontWeight: '600' }}>Môn học</th>
                    <th style={{ padding: '1rem', color: 'var(--text-soft)', fontWeight: '600' }}>Mã môn</th>
                    <th style={{ padding: '1rem', color: 'var(--text-soft)', fontWeight: '600' }}>Học kỳ</th>
                    <th style={{ padding: '1rem', color: 'var(--text-soft)', fontWeight: '600' }}>Trạng thái</th>

                  </tr>
                </thead>
                <tbody>
                  {myCourses.map(c => (
                    <tr key={c.stt} style={{ borderBottom: '1px solid rgba(148,163,184,0.1)', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                      <td style={{ padding: '1rem', textAlign: 'center', color: 'var(--text-muted)' }}>{c.stt}</td>
                      <td style={{ padding: '1rem', fontWeight: '500' }}>{c.subject}</td>
                      <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{c.group}</td>
                      <td style={{ padding: '1rem', color: 'var(--text-muted)', lineHeight: '1.4' }} dangerouslySetInnerHTML={{ __html: c.term.replace(' năm học', '<br/>học') }} />
                      <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{c.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'history' && (
            <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)' }}>
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem', opacity: 0.5 }}>⏳</span>
              <p style={{ margin: '0 0 1rem' }}>Đang hiển thị lịch sử nộp bài gần đây của bạn...</p>
              <Link to="/history" style={{ color: 'var(--primary)', fontWeight: '500' }}>Xem chi tiết tại trang Lịch sử &rarr;</Link>
            </div>
          )}
          
          {activeTab === 'labs' && (
            <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)' }}>
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem', opacity: 0.5 }}>⚡️</span>
              <p style={{ margin: 0 }}>Hệ thống Lab Thực hành đang Offline.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Profile;
