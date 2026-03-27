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
import ChangePassword from './pages/Guide/ChangePassword';
import EditProfile from './pages/Guide/EditProfile';
import Profile from './pages/Profile/Profile';
import Courses from './pages/Profile/Courses';
import CTFCompetition from './pages/CTFCompetition/CTFCompetition';
import HackDay2026 from './pages/CTFCompetition/HackDay2026';
import FlagWars from './pages/CTFCompetition/FlagWars';
import PTITCybergames2026 from './pages/CTFCompetition/PTITCybergames2026';
import CTFJeopardy from './pages/CTFJeopardy/CTFJeopardy';
import JeoStatus from './pages/CTFJeopardy/JeoStatus';
import JeoHistory from './pages/CTFJeopardy/JeoHistory';
import CTFJeopardyDetail from './pages/CTFJeopardy/CTFJeopardyDetail';
import TerminalFullScreen from './pages/Terminal/TerminalFullScreen';
import ScrollToTop from './components/utils/ScrollToTop';

import './assets/modern-theme.css'; // The new Digital Vault aesthetic

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
          <Route path="/ctf-competition" element={<CTFCompetition />} />
          <Route path="/ctf-competition/hack-day-2026" element={<HackDay2026 />} />
          <Route path="/ctf-competition/flag-wars" element={<FlagWars />} />
          <Route path="/ctf-competition/ptit-cybergames-2026" element={<PTITCybergames2026 />} />
          <Route path="/ctf-jeopardy" element={<CTFJeopardy />} />
          <Route path="/ctf-jeopardy/status" element={<JeoStatus />} />
          <Route path="/ctf-jeopardy/history" element={<JeoHistory />} />
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
