const generateExtraUsers = () => {
  const extras = [];
  const firstNames = ['Tuấn', 'Hải', 'Hùng', 'Minh', 'Long', 'Hoàng', 'Duy', 'Sơn', 'Quang', 'Đức', 'Toàn', 'Doanh', 'Kiết', 'Sinh', 'Bình', 'An'];
  const lastNames = ['Phạm', 'Trần', 'Lý', 'Vũ', 'Đinh', 'Bùi', 'Hoàng', 'Ngô', 'Lê', 'Hoắc'];
  for (let i = 6; i <= 40; i++) {
     extras.push({
        rank: i,
        avatar: ((i * 13) % 70) + 1,
        id: `B23DCCN${(100 + i).toString()}`,
        lastName: lastNames[i % lastNames.length],
        firstName: firstNames[i % firstNames.length],
        course: 'An toàn và bảo mật hệ thống thông tin',
        clazz: 'INT1303-19',
        correct: Math.max(0, 30 - Math.floor(i/1.5)),
        tried: Math.max(0, 35 - Math.floor(i/1.5))
     });
  }
  return extras;
};

export const leaderboardData = [
  { rank: 1, avatar: '11', id: 'B23DCKH072', lastName: 'Lê Việt', firstName: 'Tú', course: 'An toàn và bảo mật hệ thống thông tin', clazz: 'INT1303-19', correct: 50, tried: 55 },
  { rank: 2, avatar: '68', id: 'B23DCKH124', lastName: 'Nguyễn Việt', firstName: 'Tín', course: 'An toàn và bảo mật hệ thống thông tin', clazz: 'INT1303-19', correct: 48, tried: 50 },
  { rank: 3, avatar: '33', id: 'B23DCKH036', lastName: 'Phan Việt', firstName: 'Thành', course: 'An toàn và bảo mật hệ thống thông tin', clazz: 'INT1303-19', correct: 45, tried: 48 },
  { rank: 4, avatar: '10', id: 'B23DCKH056', lastName: 'Đặng Ngọc', firstName: 'Huy', course: 'An toàn và bảo mật hệ thống thông tin', clazz: 'INT1303-19', correct: 35, tried: 40 },
  { rank: 5, avatar: '12', id: 'B23DCCN111', lastName: 'Phạm Thị', firstName: 'D', course: 'An toàn và bảo mật hệ thống thông tin', clazz: 'INT1303-19', correct: 30, tried: 35 },
  ...generateExtraUsers()
];
