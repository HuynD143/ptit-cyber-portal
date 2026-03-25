import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2, PlayCircle, Lock } from 'lucide-react';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const itemsPerPage = 12;

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage });
  };

  // 20 bài tập mock data
  const challenges = [
    { id: 1, title: 'Web Exploitation 101', tags: ['XSS', 'Web'], difficulty: 'Dễ', status: 'Solved' },
    { id: 2, title: 'Buffer Overflow Master', tags: ['Pwn', 'Buffer'], difficulty: 'Trung bình', status: 'Attempted' },
    { id: 3, title: 'SQLi Injection Lab', tags: ['SQLi', 'Web'], difficulty: 'Khó', status: 'Pending' },
    { id: 4, title: 'Broken RSA Implementation', tags: ['Crypto', 'RSA'], difficulty: 'Trung bình', status: 'Attempted' },
    { id: 5, title: 'Packet Analysis Pro', tags: ['Forensics', 'Network'], difficulty: 'Dễ', status: 'Solved' },
    { id: 6, title: 'Crackme Level 5', tags: ['Reversing', 'Assembly'], difficulty: 'Khó', status: 'Pending' },
    { id: 7, title: 'Linux Privilege Escalation', tags: ['OS', 'Linux'], difficulty: 'Trung bình', status: 'Pending' },
    { id: 8, title: 'Android APK Reversing', tags: ['Mobile', 'Rev'], difficulty: 'Khó', status: 'Pending' },
    { id: 9, title: 'IoT Firmware Analysis', tags: ['Hardware', 'IoT'], difficulty: 'Trung bình', status: 'Pending' },
    { id: 10, title: 'XSS to RCE Chain', tags: ['Web', 'RCE'], difficulty: 'Khó', status: 'Pending' },
    { id: 11, title: 'Basic Stack Smashing', tags: ['Pwn', 'Stack'], difficulty: 'Dễ', status: 'Solved' },
    { id: 12, title: 'Malware Traffic Analysis', tags: ['Forensics', 'Pcap'], difficulty: 'Trung bình', status: 'Attempted' },
    { id: 13, title: 'Advanced Heap Exploitation', tags: ['Pwn', 'Heap'], difficulty: 'Khó', status: 'Pending' },
    { id: 14, title: 'JWT Token Forgery', tags: ['Web', 'Crypto'], difficulty: 'Trung bình', status: 'Solved' },
    { id: 15, title: 'Windows Kernel Pwn', tags: ['Pwn', 'Windows'], difficulty: 'Khó', status: 'Pending' },
    { id: 16, title: 'Steganography Basics', tags: ['Forensics', 'Stego'], difficulty: 'Dễ', status: 'Solved' },
    { id: 17, title: 'Vulnerable Smart Contract', tags: ['Web3', 'Solidity'], difficulty: 'Trung bình', status: 'Pending' },
    { id: 18, title: 'GraphQL Introspection', tags: ['Web', 'API'], difficulty: 'Dễ', status: 'Attempted' },
    { id: 19, title: 'Active Directory Pentesting', tags: ['Network', 'AD'], difficulty: 'Khó', status: 'Pending' },
    { id: 20, title: 'Format String Vulnerability', tags: ['Pwn', 'Fmt'], difficulty: 'Trung bình', status: 'Pending' }
  ];

  // Pagination Logic
  const totalPages = Math.ceil(challenges.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = challenges.slice(startIndex, startIndex + itemsPerPage);

  const renderStatusIcon = (status) => {
    switch (status) {
      case 'Solved':
        return <CheckCircle2 size={24} color="#22c55e" fill="#22c55e" style={{ color: '#0f172a' }} />;
      case 'Attempted':
        return <PlayCircle size={24} color="#fca5a5" fill="#fca5a5" style={{ color: '#7f1d1d' }} />;
      default:
        return <Lock size={20} color="var(--text-muted)" />;
    }
  };

  const getDifficultyColor = (diff) => {
    if (diff === 'Dễ') return '#22c55e';
    if (diff === 'Trung bình') return '#f59e0b';
    return '#ef4444';
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
      
      {/* HEADER & FILTERS */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <h2 style={{ margin: 0 }}>Danh sách bài tập</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <select style={{ width: '350px', padding: '10px 15px' }}>
            <option>Học kỳ 2 năm học 2025-2026</option>
            <option>An toàn và bảo mật hệ thống thông tin - INT1303-19</option>
          </select>
          <input type="text" placeholder="Nhập từ khóa..." style={{ width: '250px' }} />
          <select style={{ width: '150px' }}>
            <option>Tất cả độ khó</option>
            <option>Dễ</option>
            <option>Trung bình</option>
            <option>Khó</option>
          </select>
        </div>
      </div>

      {/* GRID LAYOUT (3 columns) */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', 
        gap: '1.5rem', 
        marginBottom: '3rem' 
      }}>
        {currentItems.map(c => (
          <Link to={`/challenge/${c.id}`} key={c.id} style={{ textDecoration: 'none' }}>
            <div style={{
              background: c.status === 'Attempted' ? 'linear-gradient(135deg, var(--bg-surface-elevated), rgba(220, 38, 38, 0.05))' : 'var(--bg-surface-elevated)',
              borderRadius: '16px',
              padding: '1.5rem',
              border: c.status === 'Attempted' ? '1px solid rgba(220, 38, 38, 0.2)' : '1px solid rgba(148,163,184,0.1)',
              boxShadow: 'var(--shadow-soft)',
              transition: 'all 0.2s',
              cursor: 'pointer',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={e => e.currentTarget.style.transform = 'none'}
            >
              <div>
                {/* Top row: tags and status */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {c.tags.map(tag => (
                      <span key={tag} style={{ 
                        background: 'rgba(168, 85, 247, 0.1)', 
                        color: '#d8b4fe', 
                        padding: '4px 10px', 
                        borderRadius: '6px', 
                        fontSize: '0.75rem', 
                        fontWeight: '700',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{ marginLeft: '1rem' }}>
                    {renderStatusIcon(c.status)}
                  </div>
                </div>

                {/* Title */}
                <h3 style={{ margin: '0 0 1rem', fontSize: '1.35rem', color: 'var(--text-main)', fontWeight: '600', lineHeight: '1.3' }}>
                  {c.title}
                </h3>
              </div>

              {/* Bottom row: Difficulty (Removed points) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  background: getDifficultyColor(c.difficulty),
                  boxShadow: `0 0 8px ${getDifficultyColor(c.difficulty)}`
                }} />
                <span style={{ color: 'var(--text-soft)', fontSize: '0.9rem', fontWeight: '500' }}>
                  {c.difficulty}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
          <button 
            disabled={currentPage === 1}
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            style={{ 
              padding: '8px 16px', 
              background: 'var(--bg-surface)', 
              border: '1px solid rgba(148,163,184,0.2)',
              color: currentPage === 1 ? 'var(--text-muted)' : 'var(--text-main)',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              borderRadius: '8px'
            }}
          >
            Trước
          </button>
          
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx + 1}
              onClick={() => handlePageChange(idx + 1)}
              style={{
                padding: '8px 16px',
                background: currentPage === idx + 1 ? 'var(--primary)' : 'var(--bg-surface)',
                border: currentPage === idx + 1 ? 'none' : '1px solid rgba(148,163,184,0.2)',
                color: currentPage === idx + 1 ? '#fff' : 'var(--text-main)',
                cursor: 'pointer',
                borderRadius: '8px',
                fontWeight: currentPage === idx + 1 ? 'bold' : 'normal'
              }}
            >
              {idx + 1}
            </button>
          ))}

          <button 
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
            style={{ 
              padding: '8px 16px', 
              background: 'var(--bg-surface)', 
              border: '1px solid rgba(148,163,184,0.2)',
              color: currentPage === totalPages ? 'var(--text-muted)' : 'var(--text-main)',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              borderRadius: '8px'
            }}
          >
            Tiếp
          </button>
        </div>
      )}

    </div>
  );
};

export default Home;
