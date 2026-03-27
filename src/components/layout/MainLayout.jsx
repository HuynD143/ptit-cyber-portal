import React, { useState, useEffect, useRef } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { userProfileDetails } from '../../data/profileData';

const MainLayout = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [avatar, setAvatar] = useState(localStorage.getItem('user_avatar') || userProfileDetails.avatarDefault);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    // Listen for avatar updates
    const handleAvatarUpdate = () => {
      setAvatar(localStorage.getItem('user_avatar') || 'https://seclab.ptit.edu.vn/2020/images/avt.png');
    };
    window.addEventListener('avatarUpdate', handleAvatarUpdate);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener('avatarUpdate', handleAvatarUpdate);
    };
  }, []);

  const closeDropdown = () => setProfileOpen(false);

  const isActive = (path) => {
    return location.pathname === path || (path !== '/' && location.pathname.startsWith(path))
      ? 'nav__menu__item homepage' // Using homepage class for active styling per original CSS
      : 'nav__menu__item';
  };

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="container-fluid">
      <div className="nav">
        <div className="row w-100 m-0 align-items-center" style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          {/* Menu Links */}
          <div className="menu" style={{ display: 'flex' }}>
            <div className="nav__menu" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div className="nav__menu__item" id="nav__logo">
                <Link to="/" className="nav__menu__item__logo">
                  <img src="https://seclab.ptit.edu.vn/2020/images/logo_ptit.png" alt="Logo" style={{ height: '35px' }} />
                </Link>
              </div>
              <div className={isActive('/')}><Link to="/">Bài tập</Link></div>
              <div className={isActive('/status')}><Link to="/status">Trạng thái</Link></div>
              <div className={isActive('/history')}><Link to="/history">Lịch sử</Link></div>
              <div className={isActive('/leaderboard')}><Link to="/leaderboard">Bảng xếp hạng</Link></div>
              <div className={isActive('/ctf-jeopardy')}><Link to="/ctf-jeopardy">CTF Jeopardy</Link></div>
              <div className={isActive('/ctf-competition')}><Link to="/ctf-competition">CTF Competition</Link></div>
              <div className={isActive('/guide')}><Link to="/guide">Hướng dẫn</Link></div>
            </div>
          </div>

          {/* Profile Dropdown */}
          <div>
            <div className="nav__profile" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div className="nav__profile__img nav__lang" style={{ display: 'center', alignItems: 'center', cursor: 'pointer' }}>
                <img src="https://seclab.ptit.edu.vn/2020/images/VN.png" alt="VN" style={{ height: '24px' }} />
              </div>

              <div className="nav__profile__img nav__profile__user" ref={dropdownRef} style={{ position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={() => setProfileOpen(!profileOpen)}>
                  <img className="nav__profile__avatar" src={avatar} alt="Avatar" style={{ height: '32px', borderRadius: '50%' }} />
                </div>

                {profileOpen && (
                  <div className="nav__profile__menu profile__dropdown" style={{ position: 'absolute', right: 0, top: '45px', minWidth: '220px' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <p className="nav__profile__menu__name" style={{ margin: 0, fontSize: '1rem', fontWeight: 'bold' }}>{userProfileDetails.fullName}</p>
                        <p className="nav__profile__menu__code" style={{ margin: 0, fontSize: '0.85rem', color: '#6b4cff' }}>{userProfileDetails.studentId}</p>
                      </li>
                      <li style={{ paddingTop: '0.5rem' }}><Link to="/profile" onClick={closeDropdown} style={{ display: 'block', padding: '8px 0', color: '#acaab1', textDecoration: 'none' }}>Hồ sơ</Link></li>
                      <li><Link to="/courses" onClick={closeDropdown} style={{ display: 'block', padding: '8px 0', color: '#acaab1', textDecoration: 'none' }}>Danh sách lớp học</Link></li>
                      <li style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '0.5rem', paddingTop: '0.5rem' }}>
                        <a href="/login" onClick={handleLogout} style={{ display: 'block', padding: '8px 0', color: '#ff3366', textDecoration: 'none' }}>Đăng xuất</a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Route Content Area */}
      <div className="wrapper" style={{ minHeight: 'calc(100vh - 70px)' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
