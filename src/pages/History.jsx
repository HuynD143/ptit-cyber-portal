import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const generateHistoryData = () => {
  const data = [];
  const tasks = ['Warmup Web Exploitation', 'Buffer Overflow Master', 'SQLi Injection Lab', 'Packet Analysis Pro', 'Crackme Level 5', 'Basic Stack Smashing'];
  const verdicts = ['AC', 'AC', 'WA', 'WFN', 'RTE'];

  for (let i = 1; i <= 30; i++) {
    data.push({
      id: 10440 - i,
      time: `2026-03-${Math.floor(Math.random() * 24 + 1).toString().padStart(2, '0')} 09:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}:00`,
      course: 'ATTT',
      task: tasks[Math.floor(Math.random() * tasks.length)],
      type: 'CTF',
      status: verdicts[Math.floor(Math.random() * verdicts.length)]
    });
  }
  return data;
};

const mockHistory = [
  { id: 10452, time: '2026-03-23 10:15:02', course: 'ATTT', task: 'Warmup Web Exploitation', type: 'CTF', status: 'AC' },
  { id: 10440, time: '2026-03-23 09:20:00', course: 'ATTT', task: 'Warmup Web Exploitation', type: 'CTF', status: 'WA' },
  ...generateHistoryData()
];

const History = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const totalPages = Math.ceil(mockHistory.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = mockHistory.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div style={{ padding: '2rem', display: 'flex', gap: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ flex: 1 }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Lịch sử nộp bài cá nhân</h2>

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
          <li><strong style={{ color: '#ffaa00' }}>WFN</strong>: Wrong Flag Format (Sai định dạng cờ)</li>
          <li><strong style={{ color: '#6b4cff' }}>CPY</strong>: Copy (Nghi vấn sao chép)</li>
          <li><strong style={{ color: '#acaab1' }}>CE</strong>: Compile Error (Lỗi dịch)</li>
          <li><strong style={{ color: '#ff8d90' }}>RTE</strong>: Run Time Error (Lỗi thực thi)</li>
        </ul>
      </div>
    </div>
  );
};

export default History;
