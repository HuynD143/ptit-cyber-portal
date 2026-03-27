import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { mockHistory } from '../../data/historyData';

const History = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState('Tất cả');
  const [filterTask, setFilterTask] = useState('');
  const itemsPerPage = 20;

  const filteredData = mockHistory.filter(h => {
    const matchStatus = filterStatus === 'Tất cả' || h.status === filterStatus;
    const matchTask = h.task.toLowerCase().includes(filterTask.toLowerCase());
    return matchStatus && matchTask;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div style={{ padding: '2rem', display: 'flex', gap: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ margin: 0 }}>Lịch sử nộp bài cá nhân</h2>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <input
              type="text"
              placeholder="Tìm bài tập..."
              value={filterTask}
              onChange={e => { setFilterTask(e.target.value); setCurrentPage(1); }}
              style={{ width: '200px', padding: '8px 12px' }}
            />
            <select
              value={filterStatus}
              onChange={e => { setFilterStatus(e.target.value); setCurrentPage(1); }}
              style={{ width: '160px', padding: '8px 12px' }}
            >
              <option value="Tất cả">Tất cả trạng thái</option>
              <option value="AC">AC - Correct</option>
              <option value="WA">WA - Wrong</option>
              <option value="WFN">WFN - Format</option>
              <option value="RTE">RTE - Error</option>
            </select>
          </div>
        </div>

        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>RunID</th>
              <th>Môn học</th>
              <th>Bài tập</th>
              <th>Thời gian</th>
              <th>Kiểu</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(h => (
              <tr key={h.id}>
                <td>#{h.id}</td>
                <td>{h.course}</td>
                <td><Link to="/challenge/1" style={{ fontWeight: 500 }}>{h.task}</Link></td>
                <td style={{ color: 'var(--text-muted)' }}>{h.time}</td>
                <td>{h.type}</td>
                <td>
                  <span style={{
                    color: h.status === 'AC' ? '#00cc66' : '#ff3366',
                    fontWeight: 'bold'
                  }}>
                    {h.status}
                  </span>
                </td>
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

            {[...Array(totalPages)].map((_, idx) => (
              <button key={idx + 1} onClick={() => setCurrentPage(idx + 1)}
                style={{ padding: '8px 16px', background: currentPage === idx + 1 ? 'var(--primary)' : 'var(--bg-surface)', border: currentPage === idx + 1 ? 'none' : '1px solid rgba(148,163,184,0.2)', color: currentPage === idx + 1 ? '#fff' : 'var(--text-main)', cursor: 'pointer', borderRadius: '8px', fontWeight: currentPage === idx + 1 ? 'bold' : 'normal' }}
              >{idx + 1}</button>
            ))}

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

      <div style={{ width: '300px', background: 'var(--bg-surface-elevated)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', height: 'fit-content', border: '1px solid rgba(148,163,184,0.1)' }}>
        <h3 style={{ marginTop: 0 }}>Các trạng thái kết quả</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <li><strong style={{ color: '#00cc66' }}>AC</strong>: Accepted (Chính xác)</li>
          <li><strong style={{ color: '#ff3366' }}>WA</strong>: Wrong Answer (Sai kết quả)</li>
          <li><strong style={{ color: '#ffaa00' }}>WFN</strong>: Wrong File Name (Sai tên tệp)</li>
          <li><strong style={{ color: '#6b4cff' }}>CPY</strong>: Copy (Nghi vấn sao chép)</li>
          <li><strong style={{ color: '#acaab1' }}>CE</strong>: Compile Error (Lỗi dịch)</li>
          <li><strong style={{ color: '#ff8d90' }}>RTE</strong>: Run Time Error (Lỗi thực thi)</li>
        </ul>
      </div>
    </div>
  );
};

export default History;
