export const attackDefenseTeams = [
  { rank: 1, name: 'CyberWarriors', ip: '10.0.1.10', score: 2500, status: 'up' },
  { rank: 2, name: '0xDeadBeef', ip: '10.0.1.11', score: 2350, status: 'up' },
  { rank: 3, name: 'PTIT_Pwners (Bạn)', ip: '10.0.1.12', score: 2100, status: 'up', isMe: true },
  { rank: 4, name: 'NullPointers', ip: '10.0.1.13', score: 1800, status: 'down' },
  { rank: 5, name: 'SecKitten', ip: '10.0.1.14', score: 1550, status: 'corrupt' },
  { rank: 6, name: 'ByteMe', ip: '10.0.1.15', score: 1400, status: 'up' },
  { rank: 7, name: 'KernelPanic', ip: '10.0.1.16', score: 1200, status: 'down' },
  { rank: 8, name: 'FlagHunters', ip: '10.0.1.17', score: 1100, status: 'up' },
  { rank: 9, name: 'ScriptKiddies', ip: '10.0.1.18', score: 950, status: 'corrupt' },
  { rank: 10, name: 'DogeSec', ip: '10.0.1.19', score: 800, status: 'up' },
  { rank: 11, name: 'WhiteHats', ip: '10.0.1.20', score: 500, status: 'down' },
  { rank: 12, name: 'L33tH4x0rs', ip: '10.0.1.21', score: 250, status: 'up' }
];

export const recentLogs = [
  { id: 1, type: 'victory', message: 'Đội bạn đã khai thác thành công flag của NullPointers (+50đ)' },
  { id: 2, type: 'warning', message: 'Dịch vụ Web của bạn đang trả về mã lỗi 500 (Corrupt SLA)' },
  { id: 3, type: 'defense_failed', message: '0xDeadBeef đã lấy mất flag của bạn (-50đ)' },
  { id: 4, type: 'victory', message: 'Đội bạn đã khai thác thành công flag của WhiteHats (+50đ)' },
  { id: 5, type: 'warning', message: 'Dịch vụ SSH của bạn không thể truy cập (Corrupt SLA)' },
  { id: 6, type: 'defense_failed', message: 'CyberWarriors đã lấy mất flag của bạn (-50đ)' },
  { id: 7, type: 'victory', message: 'Đội bạn đã khai thác thành công flag của DogeSec (+50đ)' },
  { id: 8, type: 'victory', message: 'Đội bạn đã khai thác thành công flag của KernelPanic (+50đ)' },
  { id: 9, type: 'defense_failed', message: 'SecKitten đã đẩy payload RCE thành công (-50đ)' },
  { id: 10, type: 'warning', message: 'Máy chủ Database của bạn đang bị Tấn công từ chối dịch vụ (DDoS)' }
];

export const competitions = [
  {
    id: 'hack-day-2026',
    title: 'Hack Day 2026',
    status: 'LIVE',
    type: 'PRIVATE',
    start: '28 Mar, 08:00, 2026',
    end: '29 Mar, 08:00, 2026',
    duration: '24h',
    theme: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(15, 23, 42, 1) 100%)',
    iconColor: '#10b981',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'flag-wars',
    title: 'Flag Wars',
    status: 'LIVE',
    type: 'PUBLIC',
    start: '10 Apr, 10:00, 2026',
    end: '12 Apr, 10:00, 2026',
    duration: '48h',
    theme: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(15, 23, 42, 1) 100%)',
    iconColor: '#f59e0b',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'ptit-cybergames-2026',
    title: 'PTIT Cybergames 2026',
    status: 'LIVE',
    type: 'INTERNAL',
    start: '01 May, 07:00, 2026',
    end: '02 May, 19:00, 2026',
    duration: '36h',
    theme: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(15, 23, 42, 1) 100%)',
    iconColor: '#6366f1',
    image: '/ptit-ctf-cover.png'
  }
];
