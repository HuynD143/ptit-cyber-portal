import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Key, Eye, EyeOff, ShieldCheck, Info } from 'lucide-react';

const SettingsSidebar = ({ active }) => (
  <div style={{ width: '280px', background: 'var(--bg-glass)', borderRadius: 'var(--radius-md)', padding: '1rem', height: 'fit-content', border: '1px solid rgba(255,255,255,0.05)' }}>
    <h3 style={{ margin: '0 0 1rem 0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Cấu hình chung</h3>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <li><Link to="/guide" style={{ display: 'block', padding: '10px 15px', borderRadius: 'var(--radius-sm)', color: active === 'guide' ? 'var(--primary)' : 'var(--text-main)', fontWeight: active === 'guide' ? 'bold' : 'normal', borderLeft: active === 'guide' ? '3px solid var(--primary)' : '3px solid transparent' }}>Hướng dẫn nộp bài</Link></li>
      <li><Link to="/user/edit" style={{ display: 'block', padding: '10px 15px', borderRadius: 'var(--radius-sm)', color: active === 'edit' ? 'var(--primary)' : 'var(--text-main)', fontWeight: active === 'edit' ? 'bold' : 'normal', borderLeft: active === 'edit' ? '3px solid var(--primary)' : '3px solid transparent' }}>Sửa thông tin</Link></li>
      <li><Link to="/password/change" style={{ display: 'block', padding: '10px 15px', borderRadius: 'var(--radius-sm)', background: active === 'password' ? 'rgba(255,51,102,0.1)' : 'transparent', color: active === 'password' ? 'var(--primary)' : 'var(--text-main)', fontWeight: active === 'password' ? 'bold' : 'normal', borderLeft: active === 'password' ? '3px solid var(--primary)' : '3px solid transparent' }}>Đổi mật khẩu</Link></li>
    </ul>
  </div>
);

const ChangePassword = () => {
  const [oldPw, setOldPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [showOldPw, setShowOldPw] = useState(false);
  const [showNewPw, setShowNewPw] = useState(false);
  const [showConfirmPw, setShowConfirmPw] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPw === confirmPw) {
      alert('Đổi mật khẩu thành công!');
      setOldPw('');
      setNewPw('');
      setConfirmPw('');
    } else {
      alert('Mật khẩu xác nhận không khớp.');
    }
  };

  const getStrength = (pw) => {
    if (!pw) return 0;
    let strength = 0;
    if (pw.length >= 8) strength++;
    if (/[A-Z]/.test(pw)) strength++;
    if (/[0-9]/.test(pw)) strength++;
    if (/[^A-Za-z0-9]/.test(pw)) strength++;
    return strength;
  };

  const strength = getStrength(newPw);

  return (
    <div style={{ padding: '2rem', display: 'flex', gap: '2rem', minHeight: 'calc(100vh - 80px)', background: '#0b1020' }}>
      <SettingsSidebar active="password" />
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '1rem' }}>
        <div style={{
          background: 'linear-gradient(180deg, #1a1b26 0%, #12131a 100%)',
          padding: '2.5rem 2.2rem',
          borderRadius: 'var(--radius-lg)',
          width: '100%',
          maxWidth: '450px',
          boxShadow: 'var(--shadow-ambient)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          position: 'relative'
        }}>
          {/* Header Icon */}
          <div style={{
            width: '42px',
            height: '42px',
            background: '#000',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
          }}>
            <Key size={20} color="#ff4d6d" fill="#ff4d6d" style={{ opacity: 0.9 }} />
          </div>

          <h1 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            margin: '0 0 0.5rem 0',
            color: '#fff',
            fontFamily: 'var(--font-display)'
          }}>Đổi mật khẩu</h1>
          
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '0.9rem',
            lineHeight: '1.5',
            margin: '0 0 2.5rem 0'
          }}>
            Enter your current password and choose a new secure password.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Current Password */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '0.75rem',
                fontWeight: '600',
                color: 'var(--text-muted)',
                letterSpacing: '0.05em',
                marginBottom: '0.75rem',
                textTransform: 'uppercase'
              }}>MẬT KHẨU CŨ</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showOldPw ? 'text' : 'password'}
                  value={oldPw}
                  onChange={e => setOldPw(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  style={{
                    background: '#242533',
                    border: '1px solid rgba(255,255,255,0.02)',
                    borderRadius: '12px',
                    color: '#fff',
                    width: '100%',
                    padding: '14px 45px 14px 16px',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowOldPw(!showOldPw)}
                  style={{
                    position: 'absolute',
                    right: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: 'auto'
                  }}
                >
                  {showOldPw ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '0.75rem',
                fontWeight: '600',
                color: 'var(--text-muted)',
                letterSpacing: '0.05em',
                marginBottom: '0.75rem',
                textTransform: 'uppercase'
              }}>MẬT KHẨU MỚI</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showNewPw ? 'text' : 'password'}
                  value={newPw}
                  onChange={e => setNewPw(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  style={{
                    background: '#242533',
                    border: '1px solid rgba(255,255,255,0.02)',
                    borderRadius: '12px',
                    color: '#fff',
                    width: '100%',
                    padding: '14px 45px 14px 16px',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPw(!showNewPw)}
                  style={{
                    position: 'absolute',
                    right: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: 'auto'
                  }}
                >
                  {showNewPw ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Strength Indicator */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px' }}>
                <div style={{ display: 'flex', gap: '4px', flex: 1, marginRight: '16px' }}>
                  {[1, 2, 3, 4].map((step) => (
                    <div
                      key={step}
                      style={{
                        height: '3px',
                        flex: 1,
                        borderRadius: '10px',
                        background: step <= strength 
                          ? (strength <= 2 ? '#ff4d6d' : (strength === 3 ? '#fbbf24' : '#10b981'))
                          : '#242533'
                      }}
                    />
                  ))}
                </div>
                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: '700',
                  color: strength === 0 ? 'transparent' : (strength <= 2 ? '#ff4d6d' : (strength === 3 ? '#fbbf24' : '#10b981')),
                  textTransform: 'uppercase'
                }}>
                  {strength === 0 ? '' : (strength <= 2 ? 'WEAK' : (strength === 3 ? 'MEDIUM' : 'STRONG'))}
                </span>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '0.75rem',
                fontWeight: '600',
                color: 'var(--text-muted)',
                letterSpacing: '0.05em',
                marginBottom: '0.75rem',
                textTransform: 'uppercase'
              }}>XÁC NHẬN LẠI</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showConfirmPw ? 'text' : 'password'}
                  value={confirmPw}
                  onChange={e => setConfirmPw(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  style={{
                    background: '#242533',
                    border: '1px solid rgba(255,255,255,0.02)',
                    borderRadius: '12px',
                    color: '#fff',
                    width: '100%',
                    padding: '14px 45px 14px 16px',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPw(!showConfirmPw)}
                  style={{
                    position: 'absolute',
                    right: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: 'auto'
                  }}
                >
                  {showConfirmPw ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              style={{
                marginTop: '1.5rem',
                background: '#ff4d6d',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                padding: '16px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                boxShadow: '0 8px 16px rgba(255, 77, 109, 0.2)'
              }}
            >
              <ShieldCheck size={20} />
              Đổi mật khẩu
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <Link
              to="/profile"
              style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'none' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              Cancel and return
            </Link>
          </div>
        </div>

        {/* Security Tip Footer */}
        <div style={{
          marginTop: '4rem',
          maxWidth: '450px',
          display: 'flex',
          gap: '12px',
          color: 'var(--text-muted)',
          fontSize: '0.85rem',
          lineHeight: '1.5'
        }}>
          <div style={{ 
            width: '20px', 
            height: '20px', 
            borderRadius: '50%', 
            background: '#7c3aed', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            flexShrink: 0,
            marginTop: '2px'
          }}>
            <Info size={14} color="#fff" />
          </div>
          <p style={{ margin: 0 }}>
            Security tip: Choose a password with at least 12 characters, including numbers, symbols, and a mix of uppercase and lowercase letters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
