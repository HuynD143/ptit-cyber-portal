import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Shield, Server, Activity, TerminalSquare, Flag, ExternalLink, ArrowLeft } from 'lucide-react';
import TerminalWindow from '../../components/ui/TerminalWindow';
import { attackDefenseTeams as teams, recentLogs } from '../../data/ctfCompetitionData';

const PTITCybergames2026 = () => {
  const navigate = useNavigate();
  const [flagInput, setFlagInput] = useState('');
  const [currentTime, setCurrentTime] = useState(0); // Elapsed time in seconds
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(t => t + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const handleFlagSubmit = (e) => {
    e.preventDefault();
    if (flagInput) {
      alert(`Đã gửi cờ: ${flagInput}\nHệ thống đang kiểm tra...`);
      setFlagInput('');
    }
  };



  const getStatusColor = (status) => {
    if (status === 'up') return '#22c55e';
    if (status === 'down') return '#ef4444';
    return '#f59e0b';
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
      <button 
        onClick={() => navigate('/ctf-competition')} 
        style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', border: 'none', color: 'var(--text-soft)', cursor: 'pointer', marginBottom: '1.5rem', padding: 0, fontSize: '1rem', fontWeight: '500', transition: 'color 0.2s' }}
        onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'}
        onMouseOut={e => e.currentTarget.style.color = 'var(--text-soft)'}
      >
        <ArrowLeft size={20} /> Danh sách cuộc thi
      </button>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ margin: '0 0 0.5rem', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-main)' }}>
            <Shield color="var(--primary)" size={32} />
            PTIT Cybergames 2026
          </h1>
          <p style={{ color: 'var(--text-muted)', margin: 0 }}>Vòng 2: Khai thác và Vá lỗi dịch vụ Nội bộ (Tick Rate: 60s)</p>
        </div>
        <div style={{ background: 'var(--bg-surface-elevated)', padding: '1rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(148,163,184,0.1)', textAlign: 'center' }}>
          <p style={{ margin: '0 0 0.5rem', color: 'var(--text-soft)', fontSize: '0.9rem', fontWeight: 'bold' }}>TGBB (Thời gian bắt đầu)</p>
          <div style={{ fontSize: '1.5rem', color: 'var(--primary)', fontFamily: 'var(--font-display)', fontWeight: 'bold' }}>
            {formatTime(currentTime)}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 350px', gap: '2rem' }}>
        
        {/* Left Column: Teams Dashboard */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Main Board */}
          <div style={{ background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-lg)', padding: '2rem', border: '1px solid rgba(148,163,184,0.1)', boxShadow: 'var(--shadow-soft)' }}>
            <h2 style={{ margin: '0 0 1.5rem', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Target size={22} color="var(--primary)" /> Bảng xếp hạng
            </h2>
            <div style={{ maxHeight: '350px', overflowY: 'auto', paddingRight: '0.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(148,163,184,0.1)' }}>
                  <th style={{ padding: '1rem', color: 'var(--text-soft)' }}>#</th>
                  <th style={{ padding: '1rem', color: 'var(--text-soft)' }}>Tên Đội</th>
                  <th style={{ padding: '1rem', color: 'var(--text-soft)' }}>IP Address</th>
                  <th style={{ padding: '1rem', color: 'var(--text-soft)' }}>Trạng thái Dịch vụ</th>
                  <th style={{ padding: '1rem', color: 'var(--text-soft)' }}>Điểm (Score)</th>
                </tr>
              </thead>
              <tbody>
                {teams.map(t => (
                  <tr key={t.rank} style={{ borderBottom: '1px solid rgba(148,163,184,0.05)', background: t.isMe ? 'rgba(220, 38, 38, 0.05)' : 'transparent' }}>
                    <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{t.rank}</td>
                    <td style={{ padding: '1rem', fontWeight: '600', color: t.isMe ? 'var(--primary)' : 'var(--text-main)' }}>{t.name}</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: 'var(--text-soft)' }}>{t.ip}</td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: getStatusColor(t.status), boxShadow: `0 0 8px ${getStatusColor(t.status)}` }} />
                        <span style={{ textTransform: 'capitalize', fontSize: '0.9rem', color: 'var(--text-soft)' }}>{t.status}</span>
                      </div>
                    </td>
                    <td style={{ padding: '1rem', fontFamily: 'var(--font-display)', fontWeight: 'bold', color: 'var(--secondary)' }}>{t.score}</td>
                  </tr>
                ))}
              </tbody>
              </table>
            </div>
          </div>

          {/* Quick Logs */}
          <div style={{ background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-lg)', padding: '2rem', border: '1px solid rgba(148,163,184,0.1)', boxShadow: 'var(--shadow-soft)' }}>
            <h2 style={{ margin: '0 0 1.5rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Activity size={20} color="var(--primary)" /> Log Tấn công/Phòng thủ gần đây
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontFamily: 'monospace', fontSize: '0.9rem', maxHeight: '300px', overflowY: 'auto', paddingRight: '0.5rem' }}>
              {recentLogs.map(log => {
                let colorBase, title;
                if (log.type === 'victory') { colorBase = '#22c55e'; title = '[VICTORY]'; }
                else if (log.type === 'warning') { colorBase = '#f59e0b'; title = '[WARNING]'; }
                else { colorBase = '#ef4444'; title = '[DEFENSE FAILED]'; }

                return (
                  <div key={log.id} style={{ background: `rgba(${colorBase === '#22c55e' ? '34, 197, 94' : colorBase === '#f59e0b' ? '245, 158, 11' : '239, 68, 68'}, 0.1)`, borderLeft: `3px solid ${colorBase}`, padding: '0.8rem', color: 'var(--text-soft)' }}>
                    <span style={{ color: colorBase }}>{title}</span> {log.message}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Interaction */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Submit Flag Panel */}
          <div style={{ background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-lg)', padding: '2rem', border: '1px solid rgba(220, 38, 38, 0.2)', boxShadow: 'var(--shadow-soft)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'var(--primary)' }} />
            <h2 style={{ margin: '0 0 1.5rem', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Flag size={20} color="var(--primary)" /> Nộp Cờ (Submit Flag)
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
              Hệ thống tự động tính toán đối tượng bị tấn công thông qua mã hash của Flag. Hãy nộp cờ ngay khi bắt được!
            </p>
            <form onSubmit={handleFlagSubmit}>
              <input 
                type="text" 
                placeholder="KCSC{...}" 
                value={flagInput}
                onChange={e => setFlagInput(e.target.value)}
                style={{ 
                  width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', 
                  border: '1px solid rgba(148,163,184,0.3)', background: 'var(--bg-surface)', 
                  color: 'var(--text-main)', marginBottom: '1rem', fontFamily: 'monospace'
                }} 
              />
              <button type="submit" style={{ width: '100%', background: 'var(--primary)', color: '#fff', padding: '1rem', fontWeight: 'bold', borderRadius: 'var(--radius-md)', fontSize: '1rem' }}>
                Tiến Hành Khai Thác
              </button>
            </form>
          </div>

          {/* Your Service Env */}
          <div style={{ background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-lg)', padding: '2rem', border: '1px solid rgba(148,163,184,0.1)' }}>
            <h2 style={{ margin: '0 0 1.5rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Server size={20} color="var(--primary)" /> Môi trường của bạn
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Địa chỉ kết nối để vá lỗi (Patching) ứng dụng cục bộ của đội hình.
            </p>
            
            {isTerminalOpen ? (
              <TerminalWindow ip="10.0.1.12" user="root" onClose={() => setIsTerminalOpen(false)} />
            ) : (
              <>
                <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(148,163,184,0.2)', fontFamily: 'monospace', fontSize: '0.9rem', color: '#38bdf8', marginBottom: '1.5rem',wordBreak: 'break-all' }}>
                  ssh root@10.0.1.12 -p 22<br/>
                  <span style={{ color: '#94a3b8' }}>Password:</span> pwnm3plz
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <button 
                    onClick={() => setIsTerminalOpen(true)}
                    style={{ width: '100%', background: 'rgba(148,163,184,0.1)', border: '1px solid rgba(148,163,184,0.2)', color: 'var(--text-main)', padding: '0.8rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer', fontWeight: '500', transition: 'background 0.2s' }}
                    onMouseOver={e => e.currentTarget.style.background = 'rgba(148,163,184,0.2)'}
                    onMouseOut={e => e.currentTarget.style.background = 'rgba(148,163,184,0.1)'}
                  >
                    <TerminalSquare size={18} /> Terminal Tại đây
                  </button>

                  <button 
                    onClick={() => window.open('/terminal', '_blank', 'width=1000,height=600,menubar=no,toolbar=no,location=no,status=no')}
                    style={{ width: '100%', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', color: '#10b981', padding: '0.8rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer', fontWeight: '500', transition: 'background 0.2s' }}
                    onMouseOver={e => e.currentTarget.style.background = 'rgba(16,185,129,0.15)'}
                    onMouseOut={e => e.currentTarget.style.background = 'rgba(16,185,129,0.1)'}
                  >
                    <ExternalLink size={18} /> Mở Cửa Sổ Mới
                  </button>
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default PTITCybergames2026;
