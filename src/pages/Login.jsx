import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username) {
      navigate('/');
    }
  };

  return (
    <>
      {/* BACKGROUND IMAGE */}
      <div className="bg-image--left" style={{ position: 'fixed', left: 0, bottom: 0, opacity: 0.5, zIndex: -1 }}>
        <img src="https://seclab.ptit.edu.vn/2020/images/bg_left.png" alt="" />
      </div>
      <div className="bg-image--right" style={{ position: 'fixed', right: 0, top: 0, opacity: 0.5, zIndex: -1 }}>
        <img src="https://seclab.ptit.edu.vn/2020/images/bg_right.png" alt="" />
      </div>

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
                  <label htmlFor="login__user">Tài khoản</label>
                  <input
                    type="text"
                    name="username"
                    id="login__user"
                    className={username ? "input--active" : ""}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoFocus
                  />
                  <label htmlFor="login__pw">Mật khẩu</label>
                  <input
                    type="password"
                    name="password"
                    id="login__pw"
                    className={password ? "input--active" : ""}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
