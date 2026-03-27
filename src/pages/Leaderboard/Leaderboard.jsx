import React from 'react';
import { leaderboardData as users } from '../../data/leaderboardData';

const PodiumCard = ({ rank, user, isFirst }) => {
  const userAvatar = (user.id === 'B23DCKH056' && localStorage.getItem('user_avatar')) 
    ? localStorage.getItem('user_avatar') 
    : `https://i.pravatar.cc/150?img=${user.avatar}`;

  return (
    <div style={{
      background: 'var(--bg-surface-elevated)',
      borderRadius: '16px',
      padding: '1.5rem',
      textAlign: 'center',
      width: '300px',
      borderTop: isFirst ? '4px solid gold' : rank === 2 ? '4px solid silver' : '4px solid #cd7f32',
      boxShadow: isFirst ? '0 10px 40px rgba(255,215,0,0.1)' : 'var(--shadow-soft)',
      transform: isFirst ? 'scale(1.05) translateY(-20px)' : 'none',
      zIndex: isFirst ? 10 : 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: '1px solid rgba(148, 163, 184, 0.1)'
    }}>
      <div style={{ width: '100%' }}>
        <h3 style={{ margin: '0 0 1rem', color: isFirst ? 'gold' : rank === 2 ? 'silver' : '#cd7f32', fontSize: '1.5rem' }}>{rank}</h3>
        <div style={{ position: 'relative', width: '90px', height: '90px', margin: '0 auto 1.5rem' }}>
          {isFirst && <div style={{ position: 'absolute', top: '-25px', right: '-15px', fontSize: '2.5rem', filter: 'drop-shadow(0 0 10px rgba(255,215,0,0.5))' }}>👑</div>}
          <img src={userAvatar} alt="avt" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: `3px solid ${isFirst ? 'gold' : rank === 2 ? 'silver' : '#cd7f32'}` }} />
        </div>
        <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem', color: 'var(--text-main)' }}>{user.lastName} {user.firstName}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0 0 1rem' }}>{user.id}</p>
        <div style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: 'var(--text-soft)', fontSize: '0.85rem', margin: 0, lineHeight: '1.4' }}>{user.course}<br />Nhóm {user.clazz}</p>
        </div>
      </div>

      <div style={{ display: 'flex', width: '100%', borderTop: '1px solid rgba(148,163,184,0.15)', paddingTop: '1.2rem', marginTop: '1.5rem' }}>
        <div style={{ flex: 1, borderRight: '1px solid rgba(148,163,184,0.15)' }}>
          <h2 style={{ margin: 0, color: '#22c55e', fontSize: '2rem' }}>{user.correct}</h2>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Làm đúng</span>
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: 0, color: 'var(--secondary)', fontSize: '2rem' }}>{user.tried}</h2>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Đã nộp</span>
        </div>
      </div>
    </div>
  );
};

const Leaderboard = () => {


  return (
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>

      {/* HEADER & FILTER */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <h2 style={{ margin: 0 }}>Bảng xếp hạng</h2>
        <select style={{ width: '350px', padding: '10px 15px' }}>
          <option>Học kỳ 2 năm học 2025-2026</option>
          <option>An toàn và bảo mật hệ thống thông tin - INT1303-19</option>
        </select>
      </div>

      {/* PODIUM CARDS */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3rem', marginBottom: '5rem', marginTop: '2rem' }}>
        <PodiumCard rank={2} user={users[1]} isFirst={false} />
        <PodiumCard rank={1} user={users[0]} isFirst={true} />
        <PodiumCard rank={3} user={users[2]} isFirst={false} />
      </div>

      {/* DETAILED TABLE */}
      <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 4px' }}>
        <thead>
          <tr style={{ background: 'var(--bg-surface-elevated)' }}>
            <th style={{ textAlign: 'center', padding: '1rem', borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' }}>STT</th>
            <th style={{ padding: '1rem', textAlign: 'center' }}>Ảnh đại diện</th>
            <th style={{ padding: '1rem' }}>Tài khoản</th>
            <th style={{ padding: '1rem' }}>Họ</th>
            <th style={{ padding: '1rem' }}>Tên</th>
            <th style={{ padding: '1rem' }}>Lớp học</th>
            <th style={{ padding: '1rem' }}>Lớp</th>
            <th style={{ textAlign: 'center', padding: '1rem' }}>Làm đúng</th>
            <th style={{ textAlign: 'center', padding: '1rem', borderTopRightRadius: '8px', borderBottomRightRadius: '8px' }}>Đã thử</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id} style={{ background: u.id === 'B23DCKH056' ? 'rgba(34, 197, 94, 0.15)' : 'var(--bg-surface)', transition: 'all 0.2s', borderLeft: u.id === 'B23DCKH056' ? '4px solid #22c55e' : 'none' }}>
              <td style={{ textAlign: 'center', padding: '1rem', fontWeight: 'bold' }}>{u.rank}</td>
              <td style={{ textAlign: 'center', padding: '0.5rem 1rem' }}>
                <img 
                  src={(u.id === 'B23DCKH056' && localStorage.getItem('user_avatar')) ? localStorage.getItem('user_avatar') : `https://i.pravatar.cc/150?img=${u.avatar}`} 
                  alt="avt" 
                  style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} 
                />
              </td>
              <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{u.id}</td>
              <td style={{ padding: '1rem', color: u.id === 'B23DCKH056' ? 'var(--text-main)' : 'var(--text-soft)', fontWeight: u.id === 'B23DCKH056' ? 'bold' : 'normal' }}>{u.lastName}</td>
              <td style={{ padding: '1rem', color: u.id === 'B23DCKH056' ? 'var(--text-main)' : 'var(--text-soft)', fontWeight: u.id === 'B23DCKH056' ? 'bold' : 'normal' }}>{u.firstName}</td>
              <td style={{ padding: '1rem' }}>{u.course}</td>
              <td style={{ padding: '1rem' }}>{u.clazz}</td>
              <td style={{ textAlign: 'center', padding: '1rem', fontFamily: 'monospace', fontSize: '1.2rem', color: '#22c55e' }}>{u.correct}</td>
              <td style={{ textAlign: 'center', padding: '1rem', fontFamily: 'monospace', fontSize: '1.2rem', color: 'var(--secondary)' }}>{u.tried}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
