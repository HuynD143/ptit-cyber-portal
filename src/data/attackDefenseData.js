export const attackDefenseTeams = [
  { rank: 1, name: 'CyberWarriors', ip: '10.0.1.10', score: 2500, status: 'up' },
  { rank: 2, name: '0xDeadBeef', ip: '10.0.1.11', score: 2350, status: 'up' },
  { rank: 3, name: 'PTIT_Pwners (Bạn)', ip: '10.0.1.12', score: 2100, status: 'up', isMe: true },
  { rank: 4, name: 'NullPointers', ip: '10.0.1.13', score: 1800, status: 'down' },
  { rank: 5, name: 'SecKitten', ip: '10.0.1.14', score: 1550, status: 'corrupt' }
];

export const recentLogs = [
  { id: 1, type: 'victory', message: 'Đội bạn đã khai thác thành công flag của NullPointers (+50đ)' },
  { id: 2, type: 'warning', message: 'Dịch vụ Web của bạn đang trả về mã lỗi 500 (Corrupt SLA)' },
  { id: 3, type: 'defense_failed', message: '0xDeadBeef đã lấy mất flag của bạn (-50đ)' },
];
