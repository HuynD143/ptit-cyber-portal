import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.');
      return;
    }
    setError('');
    navigate('/');
  };

  return (
    <>
      <style>
        {`
          .error-message {
            background: rgba(255, 77, 109, 0.1);
            border: 1px solid #ff4d6d;
            color: #ff4d6d;
            padding: 0.8rem;
            border-radius: 8px;
            margin-bottom: 1.5rem;
            font-size: 0.85rem;
            display: flex;
            align-items: center;
            gap: 10px;
            animation: fadeIn 0.3s ease;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <div className="container-fluid-login">
        <div className="login">
          <div className="login__main">
            <div className="login__logo" style={{ textAlign: 'center' }}>
              <img src="https://seclab.ptit.edu.vn/2020/images/logo_ptit.png" alt="Logo" />
            </div>
            <div className="row">
              <div className="col">
                <div className="login__main__title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <p>Đăng nhập</p>
                  <p><b>HỆ THỐNG THỰC HÀNH ATTT</b></p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <form onSubmit={handleLogin} className="login__main__form">
                  {error && (
                    <div className="error-message">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      {error}
                    </div>
                  )}
                  <label htmlFor="login__user">Tài khoản</label>
                  <input
                    type="text"
                    name="username"
                    id="login__user"
                    className={username ? "input--active" : ""}
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      if (error) setError('');
                    }}
                    autoFocus
                  />
                  <label htmlFor="login__pw">Mật khẩu</label>
                  <input
                    type="password"
                    name="password"
                    id="login__pw"
                    className={password ? "input--active" : ""}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (error) setError('');
                    }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                    <div className="checkbox__login" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <input type="checkbox" value="1" name="remember" id="login__checkbox" style={{ width: 'auto' }} />
                      <label className="cb__label" htmlFor="login__checkbox" style={{ margin: 0 }}>Ghi nhớ</label>
                    </div>
                    <a href="/password/reset" className="login__main__forgetpass link--red" onClick={e => e.preventDefault()}>Quên mật khẩu?</a>
                  </div>
                  <button type="submit"><span>Đăng nhập</span></button>

                  <div className="separate">
                    Hoặc đăng nhập với
                  </div>
                  <button type="button" className="button" style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)' }} onClick={() => navigate('/')}>
                    <span>PTIT Microsoft Office 365</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="lang" style={{ position: 'absolute', bottom: '2rem', left: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <p style={{ margin: 0, color: '#acaab1' }}>Select language</p>
          <a href="#"><img src="https://seclab.ptit.edu.vn/2020/images/VN.png" alt="vi" width="30"/></a>
          <a href="#"><img src="https://seclab.ptit.edu.vn/2020/images/Eng.png" alt="en" width="30"/></a>
        </div>
      </div>
    </>
  );
};

export default Login;
