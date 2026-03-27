import React, { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2, PlayCircle, Lock, Flag, Trophy } from 'lucide-react';

// Leaderboard data 
const firstNames = ['Tuấn', 'Hải', 'Hùng', 'Minh', 'Long', 'Hoàng', 'Duy', 'Sơn', 'Quang', 'Đức', 'Toàn', 'Doanh', 'Kiết', 'Sinh', 'Bình', 'An'];
const lastNames = ['Phạm', 'Trần', 'Lý', 'Vũ', 'Đinh', 'Bùi', 'Hoàng', 'Ngô', 'Lê', 'Hoắc'];

const allUsers = [
  { id: 'B23DCKH072', lastName: 'Lê Việt', firstName: 'Tú', points: 2500 },
  { id: 'B23DCKH124', lastName: 'Nguyễn Việt', firstName: 'Tín', points: 2200 },
  { id: 'B23DCKH036', lastName: 'Phan Việt', firstName: 'Thành', points: 2000 },
  { id: 'B23DCKH056', lastName: 'Đặng Ngọc', firstName: 'Huy', points: 1800 },
  { id: 'B23DCCN111', lastName: 'Phạm Thị', firstName: 'D', points: 1500 },
  ...Array.from({ length: 15 }, (_, i) => ({
    id: `B23DCCN${(112 + i).toString()}`,
    lastName: lastNames[(i + 2) % lastNames.length],
    firstName: firstNames[(i + 5) % firstNames.length],
    points: Math.max(100, 1400 - i * 80),
  })),
];

// Shuffle once at module level so it's stable during re-renders
const shuffled = [...allUsers].sort((a, b) => b.points - a.points).slice(0, 15);
const MY_ID = 'B23DCKH056';

// ─── Challenge list ───────────────────────────────────────────────
const challengesData = [
  { id: 1, title: 'Hidden Message in PNG', difficulty: 'Dễ', points: 100, status: 'Solved' },
  { id: 2, title: 'Classic Caesar Cipher', difficulty: 'Dễ', points: 100, status: 'Solved' },
  { id: 3, title: 'Base64 Chained Encoding', difficulty: 'Dễ', points: 100, status: 'Attempted' },
  { id: 4, title: 'EXIF Data Leak', difficulty: 'Dễ', points: 100, status: 'Pending' },
  { id: 5, title: 'Broken RSA Public Key', difficulty: 'Trung bình', points: 300, status: 'Attempted' },
  { id: 6, title: 'SQL Injection Login Bypass', difficulty: 'Trung bình', points: 300, status: 'Pending' },
  { id: 7, title: 'JWT None Algorithm Attack', difficulty: 'Trung bình', points: 300, status: 'Solved' },
  { id: 8, title: 'PCAP Flag Recovery', difficulty: 'Trung bình', points: 300, status: 'Pending' },
  { id: 9, title: 'XOR Keystream Recovery', difficulty: 'Trung bình', points: 300, status: 'Attempted' },
  { id: 10, title: 'Blind XXE via SVG Upload', difficulty: 'Trung bình', points: 300, status: 'Pending' },
  { id: 11, title: 'Format String Leak (PIE bypass)', difficulty: 'Khó', points: 500, status: 'Pending' },
  { id: 12, title: 'Heap Feng Shui', difficulty: 'Khó', points: 500, status: 'Pending' },
  { id: 13, title: 'Kernel ROP Chain', difficulty: 'Khó', points: 500, status: 'Pending' },
  { id: 14, title: 'Reverse Engineering Obfuscated VM', difficulty: 'Khó', points: 500, status: 'Pending' },
  { id: 15, title: 'ECDSA Nonce Reuse Attack', difficulty: 'Khó', points: 500, status: 'Pending' },
  { id: 16, title: 'DNS Exfiltration via PCAP', difficulty: 'Trung bình', points: 300, status: 'Pending' },
  { id: 17, title: 'HTTP Request Smuggling', difficulty: 'Khó', points: 500, status: 'Pending' },
  { id: 18, title: 'LSB Steganography Extraction', difficulty: 'Dễ', points: 100, status: 'Solved' },
  { id: 19, title: 'Android APK Secret Flag', difficulty: 'Khó', points: 500, status: 'Attempted' },
  { id: 20, title: 'Padding Oracle Attack (CBC)', difficulty: 'Khó', points: 500, status: 'Pending' },
];

// ─── Mock CTF History/Status Data ─────────────────────────────────
const generateCTFHistory = () => {
  const data = [];
  for (let i = 1; i <= 60; i++) {
    const c = challengesData[Math.floor(Math.random() * challengesData.length)];
    const isAC = Math.random() > 0.4;
    data.push({
      id: 20500 - i,
      time: `2026-03-${Math.floor(Math.random() * 26 + 1).toString().padStart(2, '0')} 14:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}:22`,
      taskId: c.id,
      task: c.title,
      points: isAC ? c.points : 0,
      status: isAC ? 'AC' : 'WA'
    });
  }
  return data;
};

const generateCTFStatus = () => {
  const data = [];
  const users = ['B23DCKH056', 'B22DCCN999', 'B22DCCN888', 'B21DCAT404', 'B23DCCN111'];
  for (let i = 1; i <= 60; i++) {
    const c = challengesData[Math.floor(Math.random() * challengesData.length)];
    const isAC = Math.random() > 0.5;
    data.push({
      id: 30800 - i,
      time: `2026-03-27 16:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}:15`,
      user: users[Math.floor(Math.random() * users.length)],
      taskId: c.id,
      task: c.title,
      points: isAC ? c.points : 0,
      status: isAC ? 'AC' : 'WA'
    });
  }
  return data;
};

const mockCTFHistory = generateCTFHistory();
const mockCTFStatus = generateCTFStatus();

// ─── Helpers ──────────────────────────────────────────────────────
const renderStatusIcon = (status) => {
  if (status === 'Solved') return <CheckCircle2 size={22} color="#22c55e" fill="#22c55e" />;
  if (status === 'Attempted') return <PlayCircle size={22} color="#fca5a5" fill="#fca5a5" />;
  return <Lock size={18} color="var(--text-muted)" />;
};

const getDifficultyColor = (diff) => {
  if (diff === 'Dễ') return '#22c55e';
  if (diff === 'Trung bình') return '#f59e0b';
  return '#ef4444';
};

const getPointsBg = (pts) =>
  pts === 100 ? 'rgba(34,197,94,0.12)' :
    pts === 300 ? 'rgba(245,158,11,0.12)' :
      'rgba(239,68,68,0.12)';

const getPointsColor = (pts) =>
  pts === 100 ? '#22c55e' : pts === 300 ? '#f59e0b' : '#ef4444';

const getRankStyle = (rank) => {
  if (rank === 1) return { color: 'gold', fontWeight: '800' };
  if (rank === 2) return { color: 'silver', fontWeight: '700' };
  if (rank === 3) return { color: '#cd7f32', fontWeight: '700' };
  return { color: 'var(--text-soft)', fontWeight: '500' };
};

// ─── Component ────────────────────────────────────────────────────
const CTFJeopardy = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'challenges';
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  
  const itemsPerPage = activeTab === 'challenges' ? 12 : 20;
  let dataSource = challengesData;
  if (activeTab === 'history') dataSource = mockCTFHistory;
  if (activeTab === 'status') dataSource = mockCTFStatus;

  const handlePageChange = (newPage) => {
    setSearchParams({ tab: activeTab, page: newPage.toString() });
  };

  const totalPages = Math.ceil(dataSource.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = dataSource.slice(startIndex, startIndex + itemsPerPage);

  const renderTabContent = () => {
    if (activeTab === 'history') {
      return (
        <div style={{ background: 'var(--bg-surface-elevated)', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(148,163,184,0.1)', boxShadow: 'var(--shadow-soft)' }}>
          <h3 style={{ marginTop: 0, marginBottom: '1.5rem' }}>Lịch sử giải bài của tôi</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '1px solid rgba(148,163,184,0.1)' }}>
                <th style={{ padding: '1rem' }}>RunID</th>
                <th style={{ padding: '1rem' }}>Bài tập</th>
                <th style={{ padding: '1rem' }}>Thời gian</th>
                <th style={{ padding: '1rem', textAlign: 'center' }}>Điểm cộng</th>
                <th style={{ padding: '1rem' }}>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map(h => (
                <tr key={h.id} style={{ borderBottom: '1px solid rgba(148,163,184,0.05)' }}>
                  <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>#{h.id}</td>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>
                    <Link to={`/ctf-jeopardy/${h.taskId}`} style={{ color: 'var(--text-main)', textDecoration: 'none' }}
                      onMouseOver={e => e.currentTarget.style.color = 'var(--secondary)'}
                      onMouseOut={e => e.currentTarget.style.color = 'var(--text-main)'}
                    >{h.task}</Link>
                  </td>
                  <td style={{ padding: '1rem', color: 'var(--text-soft)', fontSize: '0.9rem' }}>{h.time}</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#22c55e', fontWeight: 'bold' }}>+{h.points}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ color: h.status === 'AC' ? '#00cc66' : '#ff3366', fontWeight: 'bold' }}>{h.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    if (activeTab === 'status') {
      return (
        <div style={{ background: 'var(--bg-surface-elevated)', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(148,163,184,0.1)', boxShadow: 'var(--shadow-soft)' }}>
          <h3 style={{ marginTop: 0, marginBottom: '1.5rem' }}>Trạng thái hệ thống CTF</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '1px solid rgba(148,163,184,0.1)' }}>
                <th style={{ padding: '1rem' }}>RunID</th>
                <th style={{ padding: '1rem' }}>Người dùng</th>
                <th style={{ padding: '1rem' }}>Bài tập</th>
                <th style={{ padding: '1rem', textAlign: 'center' }}>Điểm cộng</th>
                <th style={{ padding: '1rem' }}>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map(s => (
                <tr key={s.id} style={{ borderBottom: '1px solid rgba(148,163,184,0.05)' }}>
                  <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>#{s.id}</td>
                  <td style={{ padding: '1rem', fontWeight: 600, color: s.user === MY_ID ? 'var(--primary)' : 'inherit' }}>{s.user}</td>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>
                    <Link to={`/ctf-jeopardy/${s.taskId}`} style={{ color: 'var(--text-main)', textDecoration: 'none' }}
                      onMouseOver={e => e.currentTarget.style.color = 'var(--secondary)'}
                      onMouseOut={e => e.currentTarget.style.color = 'var(--text-main)'}
                    >{s.task}</Link>
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#22c55e', fontWeight: 'bold' }}>+{s.points}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ color: s.status === 'AC' ? '#00cc66' : '#ff3366', fontWeight: 'bold' }}>{s.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    // Default: Challenges
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '1.25rem',
      }}>
        {currentItems.map(c => (
          <Link to={`/ctf-jeopardy/${c.id}`} key={c.id} style={{ textDecoration: 'none' }}>
            <div style={{
              background: c.status === 'Attempted'
                ? 'linear-gradient(135deg, var(--bg-surface-elevated), rgba(220,38,38,0.05))'
                : 'var(--bg-surface-elevated)',
              borderRadius: '16px',
              padding: '1.25rem 1.5rem',
              border: c.status === 'Attempted'
                ? '1px solid rgba(220,38,38,0.2)'
                : '1px solid rgba(148,163,184,0.1)',
              boxShadow: 'var(--shadow-soft)',
              transition: 'all 0.2s',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '120px',
            }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'none'}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.9rem' }}>
                  <span style={{ background: getPointsBg(c.points), color: getPointsColor(c.points), padding: '3px 10px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.06em' }}>
                    {c.points} pts
                  </span>
                  {renderStatusIcon(c.status)}
                </div>
                <h3 style={{ margin: '0 0 0.8rem', fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: '600', lineHeight: '1.3' }}>
                  {c.title}
                </h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: getDifficultyColor(c.difficulty), boxShadow: `0 0 7px ${getDifficultyColor(c.difficulty)}` }} />
                <span style={{ color: 'var(--text-soft)', fontSize: '0.85rem', fontWeight: '500' }}>{c.difficulty}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  };

  const TabButton = ({ id, label }) => (
    <button
      onClick={() => setSearchParams({ tab: id, page: '1' })}
      style={{
        padding: '0.6rem 1.25rem',
        background: activeTab === id ? 'rgba(148, 163, 184, 0.1)' : 'transparent',
        border: 'none',
        borderRadius: '8px',
        color: activeTab === id ? 'var(--primary)' : 'var(--text-soft)',
        fontWeight: '600',
        fontSize: '0.95rem',
        cursor: 'pointer',
        transition: 'all 0.2s',
        borderBottom: activeTab === id ? '2px solid var(--primary)' : '2px solid transparent',
        borderRadius: '8px 8px 0 0'
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ padding: '2rem', maxWidth: '1600px', margin: '0 auto' }}>

      {/* ── Page header ── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Flag size={26} color="var(--primary)" />
            <h2 style={{ margin: 0 }}>CTF Jeopardy</h2>
          </div>

          {/* TABS CONTAINER */}
          <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid rgba(148,163,184,0.1)' }}>
            <TabButton id="challenges" label="Bài tập" />
            <TabButton id="history" label="Lịch sử" />
            <TabButton id="status" label="Trạng thái" />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <input type="text" placeholder="Tìm kiếm bài tập..." style={{ width: '230px' }} />
          <select style={{ width: '150px' }}>
            <option>Tất cả độ khó</option>
            <option>Dễ</option>
            <option>Trung bình</option>
            <option>Khó</option>
          </select>
        </div>
      </div>

      {/* ── Two-column layout ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr minmax(0, 380px)', gap: '2rem', alignItems: 'start' }}>

        {/* ════ LEFT: challenge grid / history / status ════ */}
        <div style={{ minWidth: 0 }}>
          {renderTabContent()}

          {/* Pagination Component - Always rendered below tab content */}
          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2.5rem' }}>
              <button disabled={currentPage === 1} onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                style={{ padding: '8px 16px', background: 'var(--bg-surface)', border: '1px solid rgba(148,163,184,0.2)', color: currentPage === 1 ? 'var(--text-muted)' : 'var(--text-main)', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', borderRadius: '8px' }}>
                Trước
              </button>
              
              {[...Array(totalPages)].map((_, idx) => {
                const p = idx + 1;
                // Only show a few pages around the current page to avoid clutter
                if (p === 1 || p === totalPages || (p >= currentPage - 1 && p <= currentPage + 1)) {
                  return (
                    <button key={p} onClick={() => handlePageChange(p)}
                      style={{ padding: '8px 16px', background: currentPage === p ? 'var(--primary)' : 'var(--bg-surface)', border: currentPage === p ? 'none' : '1px solid rgba(148,163,184,0.2)', color: currentPage === p ? '#fff' : 'var(--text-main)', cursor: 'pointer', borderRadius: '8px', fontWeight: currentPage === p ? 'bold' : 'normal' }}>
                      {p}
                    </button>
                  );
                } else if (p === currentPage - 2 || p === currentPage + 2) {
                  return <span key={p} style={{ padding: '8px' }}>...</span>;
                }
                return null;
              })}

              <button disabled={currentPage === totalPages} onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                style={{ padding: '8px 16px', background: 'var(--bg-surface)', border: '1px solid rgba(148,163,184,0.2)', color: currentPage === totalPages ? 'var(--text-muted)' : 'var(--text-main)', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', borderRadius: '8px' }}>
                Tiếp
              </button>
            </div>
          )}
        </div>

        {/* ════ RIGHT: mini leaderboard (sticky) ════ */}
        <div style={{
          background: 'var(--bg-surface-elevated)',
          borderRadius: '16px',
          border: '1px solid rgba(148,163,184,0.1)',
          boxShadow: 'var(--shadow-soft)',
          overflow: 'hidden',
          position: 'sticky',
          top: '90px',
        }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '1rem 1.25rem', borderBottom: '1px solid rgba(148,163,184,0.1)', background: 'rgba(148,163,184,0.04)' }}>
            <Trophy size={18} color="#f59e0b" />
            <span style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-main)' }}>Bảng xếp hạng · Top 15</span>
          </div>

          {/* Table */}
          <div style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
              <thead>
                <tr style={{ background: 'rgba(148,163,184,0.06)' }}>
                  <th style={{ padding: '0.6rem 0.75rem', textAlign: 'center', color: 'var(--text-muted)', fontWeight: '600', whiteSpace: 'nowrap' }}>STT</th>
                  <th style={{ padding: '0.6rem 0.75rem', textAlign: 'left', color: 'var(--text-muted)', fontWeight: '600' }}>Tài khoản</th>
                  <th style={{ padding: '0.6rem 0.5rem', textAlign: 'left', color: 'var(--text-muted)', fontWeight: '600' }}>Họ</th>
                  <th style={{ padding: '0.6rem 0.5rem', textAlign: 'left', color: 'var(--text-muted)', fontWeight: '600' }}>Tên</th>
                  <th style={{ padding: '0.6rem 0.75rem', textAlign: 'right', color: 'var(--text-muted)', fontWeight: '600' }}>Điểm</th>
                </tr>
              </thead>
              <tbody>
                {shuffled.map((u, idx) => {
                  const rank = idx + 1;
                  const isMe = u.id === MY_ID;
                  const rankSt = getRankStyle(rank);
                  return (
                    <tr key={u.id} style={{
                      background: isMe ? 'rgba(34,197,94,0.1)' : 'transparent',
                      borderLeft: isMe ? '3px solid #22c55e' : '3px solid transparent',
                      transition: 'background 0.15s',
                    }}
                      onMouseOver={e => { if (!isMe) e.currentTarget.style.background = 'rgba(148,163,184,0.05)'; }}
                      onMouseOut={e => { if (!isMe) e.currentTarget.style.background = 'transparent'; }}
                    >
                      <td style={{ padding: '0.55rem 0.75rem', textAlign: 'center', ...rankSt }}>
                        {rank <= 3
                          ? ['🥇', '🥈', '🥉'][rank - 1]
                          : rank}
                      </td>
                      <td style={{ padding: '0.55rem 0.75rem', color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '0.78rem' }}>{u.id}</td>
                      <td style={{ padding: '0.55rem 0.5rem', color: isMe ? 'var(--text-main)' : 'var(--text-soft)', fontWeight: isMe ? '600' : '400', maxWidth: '80px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{u.lastName}</td>
                      <td style={{ padding: '0.55rem 0.5rem', color: isMe ? 'var(--text-main)' : 'var(--text-soft)', fontWeight: isMe ? '600' : '400' }}>{u.firstName}</td>
                      <td style={{ padding: '0.55rem 0.75rem', textAlign: 'right', fontFamily: 'monospace', fontWeight: '700', color: isMe ? '#22c55e' : getPointsColor(u.points) }}>{u.points.toLocaleString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CTFJeopardy;
