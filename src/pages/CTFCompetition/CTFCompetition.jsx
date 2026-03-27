import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, Trophy, Clock, AlertTriangle, Flag } from 'lucide-react';
import { competitions } from '../../data/ctfCompetitionData';

const CTFCompetition = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '3rem', background: 'var(--bg-surface-elevated)', border: '1px solid rgba(148,163,184,0.1)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.05, transform: 'translate(20%, -20%)' }}>
          <Shield size={300} />
        </div>
        <h1 style={{ margin: '0 0 1rem', fontSize: '2.2rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Shield color="var(--primary)" size={36} /> CTF (Attack-Defense)
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '800px', lineHeight: '1.6', marginBottom: '2rem' }}>
          Hệ thống các cuộc thi Attack-Defense CTF chuyên nghiệp. Mỗi đội sẽ được cấp một máy chủ ảo chứa các dịch vụ có lỗ hổng. Nhiệm vụ của đội là vừa phải tìm cách khai thác lỗ hổng từ các đội khác (Attack) để lấy cờ (Flag), vừa phải vá lỗ hổng trên hệ thống của mình (Defense) để bảo vệ điểm số.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
            <h3 style={{ margin: '0 0 1rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)' }}><Target size={20} color="var(--primary)" /> Điểm Tấn Công (Attack)</h3>
            <p style={{ margin: 0, color: 'var(--text-soft)', fontSize: '0.95rem', lineHeight: '1.5' }}>Ghi điểm khi khai thác thành công server đội bạn và submit Flag hợp lệ lên hệ thống. Flag thay đổi theo từng Tick.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
            <h3 style={{ margin: '0 0 1rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)' }}><Shield size={20} color="#10b981" /> Điểm Phòng Thủ (Defense)</h3>
            <p style={{ margin: 0, color: 'var(--text-soft)', fontSize: '0.95rem', lineHeight: '1.5' }}>Mất điểm nếu bị đội khác lấy cờ. Điểm được cộng dồn theo mỗi Tick nếu duy trì dịch vụ hoạt động (Service Up) và không bị khai thác.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
            <h3 style={{ margin: '0 0 1rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)' }}><AlertTriangle size={20} color="#f59e0b" /> SLA (Service Level Agreement)</h3>
            <p style={{ margin: 0, color: 'var(--text-soft)', fontSize: '0.95rem', lineHeight: '1.5' }}>Checker Bot sẽ kiểm tra tính khả dụng của dịch vụ mỗi Tick. Bị trừ điểm (Penalty) nếu làm sập dịch vụ trong nỗ lực vá lỗi.</p>
          </div>
        </div>
      </div>

      <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Trophy size={24} color="var(--primary)" /> Danh sách cuộc thi Attack-Defense
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '2rem' }}>
        {competitions.map(comp => (
          <Link to={`/ctf-competition/${comp.id}`} key={comp.id} style={{ textDecoration: 'none' }}>
            <div style={{ 
              background: 'var(--bg-surface-elevated)', borderRadius: '16px', overflow: 'hidden', 
              border: '1px solid rgba(148,163,184,0.1)', transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%'
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = `0 10px 30px -10px ${comp.iconColor}40`;
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{ 
                height: '180px', 
                background: comp.image ? `url(${comp.image}) center/cover no-repeat` : comp.theme, 
                position: 'relative', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' 
              }}>
                {comp.image && <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,23,42,0.1) 0%, rgba(15,23,42,0.95) 100%)' }} />}
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                  <span style={{ background: '#ef4444', color: '#fff', fontSize: '0.75rem', fontWeight: 'bold', padding: '4px 10px', borderRadius: '4px' }}>
                    {comp.status}
                  </span>
                  <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '1px' }}>
                    {comp.type}
                  </span>
                </div>
              </div>
              
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--bg-surface)' }}>
                <h3 style={{ margin: 0, color: 'var(--text-main)', fontSize: '1.5rem' }}>{comp.title}</h3>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <p style={{ margin: '0 0 0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}><Clock size={16} /> {comp.start} - {comp.end}</p>
                </div>
                
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(148,163,184,0.1)' }}>
                  <span style={{ fontSize: '0.7rem', background: '#eab308', color: '#000', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>AD</span>
                  <span style={{ fontSize: '0.7rem', background: '#a855f7', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>PWN</span>
                  <span style={{ fontSize: '0.7rem', background: '#3b82f6', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>WEB</span>
                  <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--text-soft)' }}>{comp.duration} remaining</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CTFCompetition;
