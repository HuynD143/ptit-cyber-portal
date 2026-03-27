import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { mockSubmissions } from '../../data/statusData';

const Status = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  const totalPages = Math.ceil(mockSubmissions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = mockSubmissions.slice(startIndex, startIndex + itemsPerPage);

  const renderStatus = (s) => {
    switch (s) {
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

      {/* RESULT STATUS LEGEND - CENTERED WITH NARROW WIDTH */}
      <div style={{ marginTop: '2rem', background: 'var(--bg-surface-elevated)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(148, 163, 184, 0.1)', maxWidth: '800px', margin: '8rem auto 2rem' }}>
        <h3 style={{ marginTop: 0, marginBottom: '1.5rem', textAlign: 'center' }}>Các trạng thái kết quả</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', textAlign: 'center' }}>
          <div><strong style={{ color: '#00cc66' }}>AC</strong>: Accepte</div>
          <div><strong style={{ color: '#ff3366' }}>WA</strong>: Wrong Answer</div>
          <div><strong style={{ color: '#ffaa00' }}>WFN</strong>: Wrong File Name</div>
          <div><strong style={{ color: '#6b4cff' }}>CPY</strong>: Copy</div>
          <div><strong style={{ color: '#94a3b8' }}>CE</strong>: Compile Error</div>
          <div><strong style={{ color: '#ef4444' }}>RTE</strong>: Runtime Error</div>
        </div>
      </div>
    </div>
  );
};

export default Status;
