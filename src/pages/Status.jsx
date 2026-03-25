import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const generateStatusData = () => {
  const data = [];
  const users = ['B23DCKH056', 'B22DCCN999', 'B22DCCN888', 'B22DCCN777', 'B23DCCN111', 'B23DCAT123', 'B23DCVT098', 'B21DCAT404'];
  const tasks = ['Warmup Web Exploitation', 'Buffer Overflow Master', 'SQLi Injection Lab', 'Packet Analysis Pro', 'Crackme Level 5'];
  const verdicts = ['AC', 'WA', 'WFN', 'CPY', 'CE', 'RTE'];
  
  for (let i = 1; i <= 120; i++) {
     const isHuy = i % 5 === 0;
     data.push({
        id: 10450 - i,
        time: `2026-03-${Math.floor(Math.random()*20+1).toString().padStart(2, '0')} 10:${Math.floor(Math.random()*60).toString().padStart(2, '0')}:00`,
        user: isHuy ? 'B23DCKH056' : users[Math.floor(Math.random() * users.length)],
        task: tasks[Math.floor(Math.random() * tasks.length)],
        type: Math.random() > 0.5 ? 'CTF' : 'Upload',
        status: verdicts[Math.floor(Math.random() * verdicts.length)],
        mem: Math.floor(Math.random() * 20) + ' MB',
        exec: Math.floor(Math.random() * 500) + ' ms'
     });
  }
  return data;
};

const mockSubmissions = [
  { id: 10452, time: '2026-03-23 10:15:02', user: 'B23DCKH056', task: 'Warmup Web Exploitation', type: 'CTF', status: 'AC', mem: '0 MB', exec: '0 ms' },
  { id: 10451, time: '2026-03-23 10:14:15', user: 'B23DCCN012', task: 'SQL Injection Basic', type: 'CTF', status: 'WA', mem: '0 MB', exec: '0 ms' },
  { id: 10450, time: '2026-03-23 10:12:00', user: 'ADMIN01', task: 'Reverse Engineering 101', type: 'Upload', status: 'CPY', mem: '5 MB', exec: '120 ms' },
  ...generateStatusData()
];

const Status = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  const totalPages = Math.ceil(mockSubmissions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = mockSubmissions.slice(startIndex, startIndex + itemsPerPage);

  const renderStatus = (s) => {
    switch(s) {
      case 'AC': return <span className="status-ac" style={{ color: '#00cc66' }}>AC - Accepted</span>;
      case 'WA': return <span className="status-wa" style={{ color: '#ff3366' }}>WA - Wrong Answer</span>;
      case 'WFN': return <span className="status-wa" style={{ color: '#ffaa00' }}>WFN - Wrong Flag Format</span>;
      case 'CPY': return <span className="status-wa" style={{ color: '#6b4cff' }}>CPY - Copy</span>;
      default: return <span>{s}</span>;
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ margin: 0 }}>Trạng thái giải bài</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input type="text" placeholder="Người dùng..." style={{ width: '150px' }} />
          <input type="text" placeholder="Bài tập..." style={{ width: '150px' }} />
          <select style={{ width: '150px' }}>
            <option>Tất cả trạng thái</option>
            <option>AC</option>
            <option>WA</option>
          </select>
        </div>
      </div>

      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>RunID</th>
            <th>Thời gian nộp</th>
            <th>Người dùng</th>
            <th>Tên bài</th>
            <th>Kiểu</th>
            <th>Trạng thái</th>
            <th style={{ textAlign: 'right' }}>Bộ nhớ</th>
            <th style={{ textAlign: 'right' }}>Thời gian chạy</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(s => (
            <tr key={s.id}>
              <td>#{s.id}</td>
              <td style={{ color: 'var(--text-muted)' }}>{s.time}</td>
              <td style={{ fontWeight: 600, color: s.user === 'B23DCKH056' ? 'var(--primary)' : 'inherit' }}>{s.user}</td>
              <td><Link to={`/challenge/1`} style={{ fontWeight: 500 }}>{s.task}</Link></td>
              <td>{s.type}</td>
              <td>{renderStatus(s.status)}</td>
              <td style={{ textAlign: 'right', fontFamily: 'monospace' }}>{s.mem}</td>
              <td style={{ textAlign: 'right', fontFamily: 'monospace' }}>{s.exec}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            style={{ 
              padding: '8px 16px', background: 'var(--bg-surface)', border: '1px solid rgba(148,163,184,0.2)', color: currentPage === 1 ? 'var(--text-muted)' : 'var(--text-main)', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', borderRadius: '8px' 
            }}
          >Trước</button>
          
          {[...Array(totalPages)].map((_, idx) => {
            // Show first, last, and neighbors
            const p = idx + 1;
            if (p === 1 || p === totalPages || (p >= currentPage - 1 && p <= currentPage + 1)) {
              return (
                <button key={p} onClick={() => setCurrentPage(p)}
                  style={{ padding: '8px 16px', background: currentPage === p ? 'var(--primary)' : 'var(--bg-surface)', border: currentPage === p ? 'none' : '1px solid rgba(148,163,184,0.2)', color: currentPage === p ? '#fff' : 'var(--text-main)', cursor: 'pointer', borderRadius: '8px', fontWeight: currentPage === p ? 'bold' : 'normal' }}
                >{p}</button>
              );
            } else if (p === currentPage - 2 || p === currentPage + 2) {
              return <span key={p} style={{ padding: '8px' }}>...</span>;
            }
            return null;
          })}

          <button 
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            style={{ 
              padding: '8px 16px', background: 'var(--bg-surface)', border: '1px solid rgba(148,163,184,0.2)', color: currentPage === totalPages ? 'var(--text-muted)' : 'var(--text-main)', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', borderRadius: '8px' 
            }}
          >Tiếp</button>
        </div>
      )}
    </div>
  );
};

export default Status;
