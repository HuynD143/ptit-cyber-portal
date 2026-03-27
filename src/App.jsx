import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import AuthLayout from './components/layout/AuthLayout';

// Pages
import Login from './pages/Auth/Login';
import Home from './pages/Challenges/Home';
import Challenge from './pages/Challenges/Challenge';
import Status from './pages/SystemLogs/Status';
import History from './pages/SystemLogs/History';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import Guide from './pages/Guide/Guide';
import ChangePassword from './pages/Profile/ChangePassword';
import EditProfile from './pages/Profile/EditProfile';
import Profile from './pages/Profile/Profile';
import Courses from './pages/Guide/Courses';
import AttackDefense from './pages/AttackDefense/AttackDefense';
import CTFJeopardy from './pages/CTFJeopardy/CTFJeopardy';
import CTFJeopardyDetail from './pages/CTFJeopardy/CTFJeopardyDetail';
import TerminalFullScreen from './pages/Terminal/TerminalFullScreen';

import './assets/modern-theme.css'; // The new Digital Vault aesthetic

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Route */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Protected Routes inside MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/challenge/:id" element={<Challenge />} />
          <Route path="/status" element={<Status />} />
          <Route path="/history" element={<History />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/password/change" element={<ChangePassword />} />
          <Route path="/user/edit" element={<EditProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/attack-defense" element={<AttackDefense />} />
          <Route path="/ctf-jeopardy" element={<CTFJeopardy />} />
          <Route path="/ctf-jeopardy/:id" element={<CTFJeopardyDetail />} />
        </Route>

        {/* Standalone Terminal Route */}
        <Route path="/terminal" element={<TerminalFullScreen />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
