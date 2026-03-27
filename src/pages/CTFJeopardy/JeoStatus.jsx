import React, { useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { Flag, Trophy } from 'lucide-react';
import { mockCTFStatus, ctfLeaderboard as shuffled, MY_ID } from '../../data/ctfJeopardyData';

const getRankStyle = (rank) => {
  if (rank === 1) return { color: 'gold', fontWeight: '800' };
  if (rank === 2) return { color: 'silver', fontWeight: '700' };
  if (rank === 3) return { color: '#cd7f32', fontWeight: '700' };
  return { color: 'var(--text-soft)', fontWeight: '500' };
};

const getPointsColor = (pts) => pts === 100 ? '#22c55e' : pts === 300 ? '#f59e0b' : '#ef4444';

const JeoStatus = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [filterUser, setFilterUser] = useState('');
  const [filterTask, setFilterTask] = useState('');
  const [filterStatus, setFilterStatus] = useState('Tất cả trạng thái');

  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const itemsPerPage = 20;

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage.toString() });
  };

  const filteredData = mockCTFStatus.filter(s => {
    const matchUser = s.user.toLowerCase().includes(filterUser.toLowerCase());
    const matchTask = s.task.toLowerCase().includes(filterTask.toLowerCase());
    const matchStatus = filterStatus === 'Tất cả trạng thái' || s.status === filterStatus;
    return matchUser && matchTask && matchStatus;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const activeTab = 'status';

  const TabButton = ({ id, label, path }) => (
    <button
      onClick={() => navigate(path)}
      style={{
        padding: '0.6rem 1.25rem',
        background: activeTab === id ? 'rgba(148, 163, 184, 0.1)' : 'transparent',
        border: 'none',
        borderRadius: '8px 8px 0 0',
        color: activeTab === id ? 'var(--primary)' : 'var(--text-soft)',
        fontWeight: '600',
        fontSize: '0.95rem',
        cursor: 'pointer',
        transition: 'all 0.2s',
        borderBottom: activeTab === id ? '2px solid var(--primary)' : '2px solid transparent',
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ padding: '2rem', maxWidth: '1600px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Flag size={26} color="var(--primary)" />
            <h2 style={{ margin: 0 }}>CTF Jeopardy</h2>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid rgba(148,163,184,0.1)' }}>
            <TabButton id="challenges" label="Bài tập" path="/ctf-jeopardy" />
            <TabButton id="history" label="Lịch sử" path="/ctf-jeopardy/history" />
            <TabButton id="status" label="Trạng thái" path="/ctf-jeopardy/status" />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <input type="text" placeholder="Người dùng..." value={filterUser} onChange={e => { setFilterUser(e.target.value); handlePageChange(1); }} style={{ width: '150px', padding: '0.6rem 1rem', background: 'var(--bg-surface-elevated)', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: 'var(--text-main)' }} />
          <input type="text" placeholder="Tìm kiếm bài tập..." value={filterTask} onChange={e => { setFilterTask(e.target.value); handlePageChange(1); }} style={{ width: '230px', padding: '0.6rem 1rem', background: 'var(--bg-surface-elevated)', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: 'var(--text-main)' }} />
          <select value={filterStatus} onChange={e => { setFilterStatus(e.target.value); handlePageChange(1); }} style={{ width: '150px', padding: '0.6rem 1rem', background: 'var(--bg-surface-elevated)', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '8px', color: 'var(--text-main)' }}>
            <option value="Tất cả trạng thái">Tất cả trạng thái</option>
            <option value="AC">AC</option>
            <option value="WA">WA</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr minmax(0, 380px)', gap: '2rem', alignItems: 'start' }}>
        <div style={{ minWidth: 0 }}>
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

          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2.5rem' }}>
              <button disabled={currentPage === 1} onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                style={{ padding: '8px 16px', background: 'var(--bg-surface)', border: '1px solid rgba(148,163,184,0.2)', color: currentPage === 1 ? 'var(--text-muted)' : 'var(--text-main)', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', borderRadius: '8px' }}>
                Trước
              </button>
              {[...Array(totalPages)].map((_, idx) => {
                const p = idx + 1;
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

        <div style={{ background: 'var(--bg-surface-elevated)', borderRadius: '16px', border: '1px solid rgba(148,163,184,0.1)', boxShadow: 'var(--shadow-soft)', overflow: 'hidden', position: 'sticky', top: '90px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '1rem 1.25rem', borderBottom: '1px solid rgba(148,163,184,0.1)', background: 'rgba(148,163,184,0.04)' }}>
            <Trophy size={18} color="#f59e0b" />
            <span style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-main)' }}>Bảng xếp hạng · Top 15</span>
          </div>
          <div style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
              <thead>
                <tr style={{ background: 'rgba(148,163,184,0.06)' }}>
                  <th style={{ padding: '0.6rem 0.75rem', textAlign: 'center', color: 'var(--text-muted)', fontWeight: '600' }}>STT</th>
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
                    <tr key={u.id} style={{ background: isMe ? 'rgba(34,197,94,0.1)' : 'transparent', borderLeft: isMe ? '3px solid #22c55e' : '3px solid transparent', transition: 'background 0.15s' }}
                      onMouseOver={e => { if (!isMe) e.currentTarget.style.background = 'rgba(148,163,184,0.05)'; }}
                      onMouseOut={e => { if (!isMe) e.currentTarget.style.background = 'transparent'; }}>
                      <td style={{ padding: '0.55rem 0.75rem', textAlign: 'center', ...rankSt }}>{rank <= 3 ? ['🥇', '🥈', '🥉'][rank - 1] : rank}</td>
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
export default JeoStatus;
