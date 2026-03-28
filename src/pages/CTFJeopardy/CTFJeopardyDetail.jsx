import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Terminal, Copy, Power, Server, ExternalLink, Flag, CheckCircle, Download, Globe } from 'lucide-react';
import TerminalWindow from '../../components/ui/TerminalWindow';
import { ctfChallengeDetails } from '../../data/ctfJeopardyData';

const getChallengeData = (id) => {
  return ctfChallengeDetails[id] || { title: 'CTF Challenge', difficulty: 'Trung bình', points: 300, downloadUrl: '#', externalUrl: '#' };
};

const getDifficultyColor = (diff) => {
  if (diff === 'Dễ') return '#22c55e';
  if (diff === 'Trung bình') return '#f59e0b';
  return '#ef4444';
};

const CTFJeopardyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = getChallengeData(parseInt(id, 10));

  const [comment, setComment] = useState('');
  const [flagInput, setFlagInput] = useState('');
  const [flagStatus, setFlagStatus] = useState(null); // null | 'correct' | 'wrong'
  const [instanceStatus, setInstanceStatus] = useState('offline');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const handleBack = () => navigate(-1);

  const handleStartInstance = () => {
    setInstanceStatus('starting');
    setTimeout(() => setInstanceStatus('online'), 2000);
  };

  const handleSubmitFlag = () => {
    if (!flagInput.trim()) {
      alert('Vui lòng nhập flag trước khi nộp!');
      return;
    }
    // Mock: accept flag if it starts with "PTIT{"
    if (flagInput.trim().startsWith('PTIT{')) {
      setFlagStatus('correct');
    } else {
      setFlagStatus('wrong');
    }
  };

  const diffColor = getDifficultyColor(data.difficulty);

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>

      {/* Back Button */}
      <button
        onClick={handleBack}
        style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          background: 'transparent', border: 'none', color: 'var(--text-muted)',
          cursor: 'pointer', padding: 0, marginBottom: '2rem', fontSize: '1rem',
          transition: 'color 0.2s', boxShadow: 'none'
        }}
        onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'}
        onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}
      >
        <ArrowLeft size={18} />
        Quay lại
      </button>

      {/* Main Container */}
      <div style={{ background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-lg)', padding: '3rem', border: '1px solid rgba(148,163,184,0.1)', boxShadow: 'var(--shadow-soft)' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid rgba(148,163,184,0.1)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
          <div>
            <h1 style={{ color: 'var(--primary)', margin: '0 0 0.75rem', fontSize: '1.8rem', fontWeight: 'bold' }}>{data.title}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: diffColor, boxShadow: `0 0 8px ${diffColor}` }} />
                <span style={{ color: 'var(--text-soft)', fontSize: '0.9rem', fontWeight: '500' }}>{data.difficulty}</span>
              </div>
              <span style={{
                background: `rgba(${data.points === 100 ? '34,197,94' : data.points === 300 ? '245,158,11' : '239,68,68'},0.12)`,
                color: data.points === 100 ? '#22c55e' : data.points === 300 ? '#f59e0b' : '#ef4444',
                padding: '3px 10px', borderRadius: '6px', fontSize: '0.82rem', fontWeight: '700'
              }}>
                {data.points} pts
              </span>
            </div>
          </div>
          <span style={{ color: 'var(--primary)', cursor: 'pointer', fontWeight: '500', transition: 'opacity 0.2s' }}
            onMouseOver={e => e.currentTarget.style.opacity = '0.8'}
            onMouseOut={e => e.currentTarget.style.opacity = '1'}
          >
            Bài làm tốt nhất
          </span>
        </div>

        {/* Content Section */}
        <div style={{ color: 'var(--text-main)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '4rem' }}>
          <h3 style={{ margin: '1.5rem 0 1rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)', fontSize: '1.2rem' }}>
            <span style={{ color: 'var(--primary)' }}>1.</span> Mô tả
          </h3>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--text-muted)' }}>
            <li style={{ marginBottom: '0.5rem' }}>Đây là một thử thách CTF Jeopardy kiểu "{data.difficulty}". Bạn cần phân tích, khai thác và tìm ra flag ẩn giấu trong hệ thống.</li>
            <li>Flag có định dạng: <code style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', color: '#c084fc' }}>PTIT&#123;...&#125;</code></li>
          </ul>

          <h3 style={{ margin: '2rem 0 1rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)', fontSize: '1.2rem' }}>
            <span style={{ color: 'var(--primary)' }}>2.</span> Yêu cầu
          </h3>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--text-muted)' }}>
            <li>Tìm và nộp flag đúng định dạng để ghi nhận điểm.</li>
            <li>Được phép sử dụng mọi công cụ hỗ trợ: Wireshark, GDB, strings, binwalk, v.v.</li>
          </ul>

          <h3 style={{ margin: '2rem 0 1rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)', fontSize: '1.2rem' }}>
            <span style={{ color: 'var(--primary)' }}>3.</span> Nội dung thực hành
          </h3>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--text-muted)' }}>
            <li style={{ marginBottom: '0.5rem' }}>Khởi động instance máy ảo bên dưới để kết nối vào môi trường thực hành.</li>
            <li>Phân tích, khai thác và tìm flag. Nộp flag vào ô bên dưới để nhận điểm.</li>
          </ul>
        </div>

        {/* Limits */}
        <div style={{ marginBottom: '2rem', color: 'var(--primary)', opacity: 0.8, fontSize: '0.95rem', fontWeight: '500' }}>
          <p style={{ margin: '0 0 0.5rem' }}>Giới hạn thời gian: 2s</p>
          <p style={{ margin: 0 }}>Giới hạn bộ nhớ: 65536 Kb</p>
        </div>

        {/* Two-column section: Submit Flag (left) | Online Instance (right) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '3rem', borderTop: '1px solid rgba(148,163,184,0.1)', paddingTop: '3rem', marginBottom: '3rem' }}>

          {/* LEFT: Submit Flag */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ margin: '0 0 1.5rem', fontSize: '1.2rem', color: 'var(--text-main)', borderLeft: '3px solid var(--primary)', paddingLeft: '10px' }}>
              Nộp Cờ (Submit Flag)
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Nhập flag tìm được vào ô bên dưới. Flag có định dạng <code style={{ color: '#c084fc' }}>PTIT&#123;...&#125;</code>
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <div style={{ display: 'flex', gap: '0.75rem', width: '100%' }}>
                <input
                  type="text"
                  placeholder="PTIT{your_flag_here}"
                  value={flagInput}
                  onChange={e => { setFlagInput(e.target.value); setFlagStatus(null); }}
                  style={{
                    flex: 1, border: `1px solid ${flagStatus === 'correct' ? '#22c55e' : flagStatus === 'wrong' ? '#ef4444' : 'rgba(148,163,184,0.3)'}`,
                    borderRadius: 'var(--radius-md)', padding: '0.8rem 1rem',
                    color: 'var(--text-main)', background: 'var(--bg-surface)',
                    fontFamily: 'monospace', fontSize: '0.95rem'
                  }}
                />
              </div>

              {flagStatus === 'correct' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#22c55e', fontWeight: '600', fontSize: '0.95rem' }}>
                  <CheckCircle size={18} /> Flag chính xác! +{data.points} điểm
                </div>
              )}
              {flagStatus === 'wrong' && (
                <div style={{ color: '#ef4444', fontWeight: '600', fontSize: '0.95rem' }}>
                  ✗ Flag không đúng. Hãy thử lại!
                </div>
              )}

              <button
                onClick={handleSubmitFlag}
                style={{
                  background: 'var(--primary)', color: '#fff', padding: '0.8rem',
                  fontWeight: 'bold', fontSize: '1rem', borderRadius: 'var(--radius-md)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  cursor: 'pointer', transition: 'opacity 0.2s'
                }}
                onMouseOver={e => e.currentTarget.style.opacity = '0.85'}
                onMouseOut={e => e.currentTarget.style.opacity = '1'}
              >
                <Flag size={18} /> Nộp Flag
              </button>

              {/* Resources Section - Compact Links below Submit Button */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                marginTop: '0.5rem',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(148,163,184,0.08)',
                overflow: 'hidden'
              }}>
                <a href={data.downloadUrl} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--text-soft)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '500', transition: 'all 0.2s', padding: '0.8rem' }}
                  onMouseOver={e => { e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
                  onMouseOut={e => { e.currentTarget.style.color = 'var(--text-soft)'; e.currentTarget.style.background = 'transparent'; }}>
                  <Download size={16} /> Download source
                </a>
                <a href={data.externalUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--text-soft)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '500', transition: 'all 0.2s', padding: '0.8rem', borderLeft: '1px solid rgba(148,163,184,0.1)' }}
                  onMouseOver={e => { e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
                  onMouseOut={e => { e.currentTarget.style.color = 'var(--text-soft)'; e.currentTarget.style.background = 'transparent'; }}>
                  <Globe size={16} /> Link external
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Online Instance */}
          <div style={{ display: 'flex', flexDirection: 'column', borderLeft: '1px solid rgba(148,163,184,0.1)', paddingLeft: '2rem' }}>
            <h3 style={{ margin: '0 0 1.5rem', fontSize: '1.2rem', color: 'var(--text-main)', borderLeft: '3px solid #10b981', paddingLeft: '10px' }}>
              Môi Trường Thực Hành (Online)
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Khởi động máy chủ ảo để tương tác giải bài trực tiếp trên Web Terminal hoặc qua SSH Client.
            </p>

            {instanceStatus === 'offline' && (
              <button
                onClick={handleStartInstance}
                style={{ width: '100%', background: 'transparent', border: '1px solid #10b981', color: '#10b981', padding: '1.5rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseOver={e => { e.currentTarget.style.background = 'rgba(16,185,129,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'none'; }}
              >
                <Power size={32} />
                Khởi động Instance (Máy Ảo)
              </button>
            )}

            {instanceStatus === 'starting' && (
              <div style={{ width: '100%', background: 'rgba(148,163,184,0.05)', border: '1px solid rgba(148,163,184,0.2)', color: 'var(--text-muted)', padding: '1.5rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <div style={{ animation: 'spin 1s linear infinite' }}><Server size={32} color="var(--text-soft)" /></div>
                Đang cấp phát Môi trường phân lập...
              </div>
            )}

            {instanceStatus === 'online' && !isTerminalOpen && (
              <div style={{ width: '100%', background: 'var(--bg-surface)', border: '1px solid #10b981', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <div style={{ background: 'rgba(16,185,129,0.1)', padding: '0.8rem 1rem', borderBottom: '1px solid rgba(16,185,129,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '0.9rem' }}>● Instance Active (01:59:50)</span>
                  <button onClick={() => setInstanceStatus('offline')} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.8rem', padding: 0 }}>Hủy</button>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <p style={{ margin: '0 0 0.5rem', color: 'var(--text-soft)', fontSize: '0.85rem' }}>Dùng thông tin này để SSH:</p>
                  <div style={{ background: '#0f172a', padding: '0.8rem', borderRadius: '6px', fontFamily: 'monospace', color: '#38bdf8', fontSize: '0.9rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>ssh user@ctf.ptit.edu.vn -p 42103</span>
                    <Copy size={16} color="var(--text-muted)" style={{ cursor: 'pointer' }} onClick={() => alert('Đã copy!')} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <button
                      onClick={() => setIsTerminalOpen(true)}
                      style={{ width: '100%', background: 'rgba(16,185,129,0.1)', color: '#10b981', border: '1px solid rgba(16,185,129,0.2)', padding: '0.8rem', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: '600', cursor: 'pointer', transition: 'background 0.2s' }}
                      onMouseOver={e => e.currentTarget.style.background = 'rgba(16,185,129,0.15)'}
                      onMouseOut={e => e.currentTarget.style.background = 'rgba(16,185,129,0.1)'}
                    >
                      <Terminal size={18} /> Tại đây
                    </button>
                    <button
                      onClick={() => window.open('/terminal', '_blank', 'width=1000,height=600,menubar=no,toolbar=no,location=no,status=no')}
                      style={{ width: '100%', background: 'rgba(148,163,184,0.1)', color: 'var(--text-main)', border: '1px solid rgba(148,163,184,0.2)', padding: '0.8rem', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: '600', cursor: 'pointer', transition: 'background 0.2s' }}
                      onMouseOver={e => e.currentTarget.style.background = 'rgba(148,163,184,0.2)'}
                      onMouseOut={e => e.currentTarget.style.background = 'rgba(148,163,184,0.1)'}
                    >
                      <ExternalLink size={18} /> Cửa sổ mới
                    </button>
                  </div>
                </div>
              </div>
            )}

            {isTerminalOpen && (
              <div style={{ marginTop: '1rem' }}>
                <TerminalWindow ip="ctf.ptit.edu.vn" user="user" onClose={() => setIsTerminalOpen(false)} />
              </div>
            )}
          </div>
        </div>

        {/* Comments Section */}
        <div>
          <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem' }}>Bình luận</h3>
          <p style={{ margin: '0 0 1.2rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>Sinh viên có thể đặt câu hỏi về bài tập và chia sẻ cách giải (không tiết lộ flag).</p>
          <textarea
            placeholder="Bây giờ các bạn đã có thể sử dụng tính năng bình luận để thắc mắc, hỏi đáp và trả lời các câu hỏi của các thành viên khác. Chúc các bạn học tập tốt."
            value={comment}
            onChange={e => setComment(e.target.value)}
            style={{
              width: '100%', minHeight: '150px', padding: '1.2rem', borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(148,163,184,0.3)', background: 'var(--bg-surface)',
              color: 'var(--text-main)', resize: 'vertical', fontFamily: 'inherit',
              marginBottom: '1rem', lineHeight: '1.5'
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={() => { if (comment) { alert('Đã gửi bình luận!'); setComment(''); } }}
              style={{ background: 'var(--primary)', color: '#fff', padding: '0.8rem 2.5rem', fontWeight: 'bold' }}
            >
              Bình luận
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CTFJeopardyDetail;

