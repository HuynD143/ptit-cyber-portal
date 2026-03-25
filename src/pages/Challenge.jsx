import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const getChallengeData = (id) => {
  const titles = {
    1: 'Web Exploitation 101', 2: 'Buffer Overflow Master', 3: 'SQLi Injection Lab',
    4: 'Broken RSA Implementation', 5: 'Packet Analysis Pro', 6: 'Crackme Level 5',
    7: 'Linux Privilege Escalation', 8: 'Android APK Reversing', 9: 'IoT Firmware Analysis',
    10: 'XSS to RCE Chain', 11: 'Basic Stack Smashing', 12: 'Malware Traffic Analysis',
    13: 'Advanced Heap Exploitation', 14: 'JWT Token Forgery', 15: 'Windows Kernel Pwn',
    16: 'Steganography Basics', 17: 'Vulnerable Smart Contract', 18: 'GraphQL Introspection',
    19: 'Active Directory Pentesting', 20: 'Format String Vulnerability'
  };
  return { title: titles[id] || 'Sử dụng Nmap nâng cao' };
};

const Challenge = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = getChallengeData(id);

  const [comment, setComment] = useState('');
  const [file, setFile] = useState(null);

  const handleBack = () => navigate(-1);

  const handleSubmit = () => {
    if (!file) {
      alert('Vui lòng chọn tệp trước khi nộp!');
      return;
    }
    alert(`Đã nộp bài: ${file.name}`);
    navigate('/history');
  };

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
        Quay lại bài tập
      </button>

      {/* Main Container */}
      <div style={{ background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-lg)', padding: '3rem', border: '1px solid rgba(148,163,184,0.1)', boxShadow: 'var(--shadow-soft)' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid rgba(148,163,184,0.1)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
          <h1 style={{ color: 'var(--primary)', margin: 0, fontSize: '1.8rem', fontWeight: 'bold' }}>{data.title}</h1>
          <span
            style={{ color: 'var(--primary)', cursor: 'pointer', fontWeight: '500', transition: 'opacity 0.2s' }}
            onMouseOver={e => e.currentTarget.style.opacity = '0.8'}
            onMouseOut={e => e.currentTarget.style.opacity = '1'}
          >
            Bài làm tốt nhất
          </span>
        </div>

        {/* Content Section */}
        <div style={{ color: 'var(--text-main)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '4rem' }}>

          <h3 style={{ margin: '1.5rem 0 1rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)', fontSize: '1.2rem' }}>
            <span style={{ color: 'var(--primary)' }}>1.</span> Mục đích
          </h3>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--text-muted)' }}>
            <li style={{ marginBottom: '0.5rem' }}>Bài thực hành này sử dụng nmap và các kỹ năng đã thực hiện trong các bài lab trước để xác định và khai thác điểm yếu trong hệ thống.</li>
            <li>Thực hiện kiểm tra bảo mật đặc biệt cho một khách hàng, họ tin rằng máy chủ SSH nội bộ của họ tương đối an toàn, nhưng lại muốn xác nhận tính hợp lệ của việc này. Mục tiêu là cố gắng truy cập từ xa vào máy chủ SSH đó và xem nội dung của một tệp đã chọn.</li>
          </ul>

          <h3 style={{ margin: '2rem 0 1rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)', fontSize: '1.2rem' }}>
            <span style={{ color: 'var(--primary)' }}>2.</span> Yêu cầu với sinh viên
          </h3>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--text-muted)' }}>
            <li>Tìm hiểu về nmap, tshark, tcpdump</li>
          </ul>

          <h3 style={{ margin: '2rem 0 1rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)', fontSize: '1.2rem' }}>
            <span style={{ color: 'var(--primary)' }}>3.</span> Nội dung thực hành
          </h3>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: 'var(--text-muted)' }}>
            <li style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--text-main)' }}>Khởi động lab:</strong>
              <ul style={{ paddingLeft: '1.5rem', listStyleType: 'circle', marginTop: '0.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Chạy lệnh: <code style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', color: '#c084fc' }}>labtainer -r nmap-ssh</code> trong terminal của Labtainer <br /><em style={{ fontSize: '0.95em' }}>(chú ý: sinh viên sử dụng tên tài khoản của mình để nhập thông tin email người thực hiện bài lab khi có yêu cầu trong terminal, để sử dụng khi chấm điểm. Thông thường tên tài khoản của sinh viên chính là Mã sinh viên)</em></li>
                <li style={{ marginBottom: '0.5rem' }}>Kết quả có một thiết bị ảo bao gồm một bash shell trên một máy tính có tên "MyComputer". Tiện ích nmap được cài đặt sẵn trên máy tính đó. Bạn cũng sẽ có một thiết bị ảo được kết nối với "bộ định tuyến" ...</li>
                <li style={{ marginBottom: '0.5rem' }}>Để kiểm tra kết quả khi trong khi làm bài thực hành sử dụng lệnh: <code style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', color: '#c084fc' }}>checkwork &lt;tên bài thực hành&gt;</code></li>
              </ul>
            </li>
            <li>
              <strong style={{ color: 'var(--text-main)' }}>Khởi động lại bài lab:</strong>
              <ul style={{ paddingLeft: '1.5rem', listStyleType: 'circle', marginTop: '0.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Trong quá trình làm bài sinh viên cần thực hiện lại bài lab, dùng câu lệnh:</li>
                <li><code style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', color: '#c084fc' }}>labtainer -r nmap-ssh</code></li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Limits */}
        <div style={{ marginBottom: '2rem', color: 'var(--primary)', opacity: 0.8, fontSize: '0.95rem', fontWeight: '500' }}>
          <p style={{ margin: '0 0 0.5rem' }}>Giới hạn thời gian: 2s</p>
          <p style={{ margin: 0 }}>Giới hạn bộ nhớ: 65536 Kb</p>
        </div>

        {/* Upload Form */}
        <div style={{ borderTop: '1px solid rgba(148,163,184,0.1)', paddingTop: '3rem', marginBottom: '3rem' }}>
          <h3 style={{ margin: '0 0 1.5rem', fontSize: '1.2rem', color: 'var(--text-main)', borderLeft: '3px solid var(--primary)', paddingLeft: '10px' }}>
            Nộp Bài
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Dành cho các bài thực hành yêu cầu nộp file báo cáo hoặc file chứa mã nguồn script.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1, border: '1px solid rgba(148,163,184,0.3)', borderRadius: 'var(--radius-md)', padding: '0.8rem 1rem', color: file ? 'var(--text-main)' : 'var(--text-muted)', display: 'flex', alignItems: 'center', background: 'var(--bg-surface)' }}>
                {file ? file.name : 'Chọn tệp đính kèm...'}
              </div>
              <label
                style={{ cursor: 'pointer', background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.2)', padding: '0 1.5rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', color: 'var(--primary)', fontWeight: '600', transition: 'background 0.2s' }}
                onMouseOver={e => e.currentTarget.style.background = 'rgba(220,38,38,0.15)'}
                onMouseOut={e => e.currentTarget.style.background = 'rgba(220,38,38,0.08)'}
              >
                Duyệt
                <input type="file" style={{ display: 'none' }} onChange={e => setFile(e.target.files[0])} />
              </label>
            </div>
            <button
              onClick={handleSubmit}
              style={{ background: 'var(--primary)', color: '#fff', padding: '0.8rem', fontWeight: 'bold', fontSize: '1rem', borderRadius: 'var(--radius-md)' }}
            >
              Xác nhận nộp bài
            </button>
          </div>
        </div>

        {/* Comments Section */}
        <div>
          <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem' }}>Bình luận</h3>
          <p style={{ margin: '0 0 1.2rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>Sinh viên có thể đặt câu hỏi về bài tập và chia sẻ cách giải bài tập.</p>
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

export default Challenge;
