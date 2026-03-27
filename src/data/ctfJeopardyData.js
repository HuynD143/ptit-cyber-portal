export const ctfChallengesData = [
  { id: 1, title: 'Hidden Message in PNG', difficulty: 'Dễ', points: 100, status: 'Solved' },
  { id: 2, title: 'Classic Caesar Cipher', difficulty: 'Dễ', points: 100, status: 'Solved' },
  { id: 3, title: 'Base64 Chained Encoding', difficulty: 'Dễ', points: 100, status: 'Attempted' },
  { id: 4, title: 'EXIF Data Leak', difficulty: 'Dễ', points: 100, status: 'Pending' },
  { id: 5, title: 'Broken RSA Public Key', difficulty: 'Trung bình', points: 300, status: 'Attempted' },
  { id: 6, title: 'SQL Injection Login Bypass', difficulty: 'Trung bình', points: 300, status: 'Pending' },
  { id: 7, title: 'JWT None Algorithm Attack', difficulty: 'Trung bình', points: 300, status: 'Solved' },
  { id: 8, title: 'PCAP Flag Recovery', difficulty: 'Trung bình', points: 300, status: 'Pending' },
  { id: 9, title: 'XOR Keystream Recovery', difficulty: 'Trung bình', points: 300, status: 'Attempted' },
  { id: 10, title: 'Blind XXE via SVG Upload', difficulty: 'Trung bình', points: 300, status: 'Pending' },
  { id: 11, title: 'Format String Leak (PIE bypass)', difficulty: 'Khó', points: 500, status: 'Pending' },
  { id: 12, title: 'Heap Feng Shui', difficulty: 'Khó', points: 500, status: 'Pending' },
  { id: 13, title: 'Kernel ROP Chain', difficulty: 'Khó', points: 500, status: 'Pending' },
  { id: 14, title: 'Reverse Engineering Obfuscated VM', difficulty: 'Khó', points: 500, status: 'Pending' },
  { id: 15, title: 'ECDSA Nonce Reuse Attack', difficulty: 'Khó', points: 500, status: 'Pending' },
  { id: 16, title: 'DNS Exfiltration via PCAP', difficulty: 'Trung bình', points: 300, status: 'Pending' },
  { id: 17, title: 'HTTP Request Smuggling', difficulty: 'Khó', points: 500, status: 'Pending' },
  { id: 18, title: 'LSB Steganography Extraction', difficulty: 'Dễ', points: 100, status: 'Solved' },
  { id: 19, title: 'Android APK Secret Flag', difficulty: 'Khó', points: 500, status: 'Attempted' },
  { id: 20, title: 'Padding Oracle Attack (CBC)', difficulty: 'Khó', points: 500, status: 'Pending' },
  { id: 21, title: 'Python Pickle Deserialization', difficulty: 'Trung bình', points: 300, status: 'Pending' },
  { id: 22, title: 'Flask Session Cookie Forgery', difficulty: 'Khó', points: 500, status: 'Pending' },
  { id: 23, title: 'SSTi to RCE in Jinja2', difficulty: 'Khó', points: 500, status: 'Pending' },
  { id: 24, title: 'Linux Capabilities Escalation', difficulty: 'Trung bình', points: 300, status: 'Attempted' },
  { id: 25, title: 'Audio Forensics (Spectrogram)', difficulty: 'Dễ', points: 100, status: 'Pending' },
  { id: 26, title: 'Insecure Direct Object Reference', difficulty: 'Dễ', points: 100, status: 'Solved' },
  { id: 27, title: 'Out of Bounds Read (C++)', difficulty: 'Trung bình', points: 300, status: 'Pending' },
  { id: 28, title: 'Command Injection via Ping', difficulty: 'Dễ', points: 100, status: 'Solved' },
  { id: 29, title: 'Race Condition (File Upload)', difficulty: 'Khó', points: 500, status: 'Pending' },
  { id: 30, title: 'Bluetooth LE Packet Sniffing', difficulty: 'Trung bình', points: 300, status: 'Pending' },
  { id: 31, title: 'WPA2 Handshake Cracking', difficulty: 'Trung bình', points: 300, status: 'Pending' },
  { id: 32, title: 'WebRTC IP Leak', difficulty: 'Dễ', points: 100, status: 'Attempted' },
  { id: 33, title: 'V8 Engine Typer Bug', difficulty: 'Khó', points: 500, status: 'Pending' },
  { id: 34, title: 'Ghidra Auto-Analysis Defeating', difficulty: 'Khó', points: 500, status: 'Pending' },
  { id: 35, title: 'Malicious Macro PDF', difficulty: 'Trung bình', points: 300, status: 'Pending' },
  { id: 36, title: 'Elasticsearch Open Cluster', difficulty: 'Dễ', points: 100, status: 'Solved' }
];

const generateCTFHistory = () => {
  const data = [];
  for (let i = 1; i <= 60; i++) {
    const c = ctfChallengesData[Math.floor(Math.random() * ctfChallengesData.length)];
    const isAC = Math.random() > 0.4;
    data.push({
      id: 20500 - i,
      time: `2026-03-${Math.floor(Math.random() * 26 + 1).toString().padStart(2, '0')} 14:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}:22`,
      taskId: c.id,
      task: c.title,
      points: isAC ? c.points : 0,
      status: isAC ? 'AC' : 'WA'
    });
  }
  return data;
};

const generateCTFStatus = () => {
  const data = [];
  const users = ['B23DCKH056', 'B22DCCN999', 'B22DCCN888', 'B21DCAT404', 'B23DCCN111'];
  for (let i = 1; i <= 60; i++) {
    const c = ctfChallengesData[Math.floor(Math.random() * ctfChallengesData.length)];
    const isAC = Math.random() > 0.5;
    data.push({
      id: 30800 - i,
      time: `2026-03-27 16:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}:15`,
      user: users[Math.floor(Math.random() * users.length)],
      taskId: c.id,
      task: c.title,
      points: isAC ? c.points : 0,
      status: isAC ? 'AC' : 'WA'
    });
  }
  return data;
};

export const mockCTFHistory = generateCTFHistory();
export const mockCTFStatus = generateCTFStatus();

const firstNames = ['Tuấn', 'Hải', 'Hùng', 'Minh', 'Long', 'Hoàng', 'Duy', 'Sơn', 'Quang', 'Đức', 'Toàn', 'Doanh', 'Kiết', 'Sinh', 'Bình', 'An'];
const lastNames = ['Phạm', 'Trần', 'Lý', 'Vũ', 'Đinh', 'Bùi', 'Hoàng', 'Ngô', 'Lê', 'Hoắc'];

const allUsers = [
  { id: 'B23DCKH072', lastName: 'Lê Việt', firstName: 'Tú', points: 5000 },
  { id: 'B23DCKH124', lastName: 'Nguyễn Việt', firstName: 'Tín', points: 4800 },
  { id: 'B23DCKH036', lastName: 'Phan Việt', firstName: 'Thành', points: 4500 },
  { id: 'B23DCKH056', lastName: 'Đặng Ngọc', firstName: 'Huy', points: 4000 },
  { id: 'B23DCCN111', lastName: 'Phạm Thị', firstName: 'D', points: 3800 },
  ...Array.from({ length: 25 }, (_, i) => ({
    id: `B23DCCN${(112 + i).toString()}`,
    lastName: lastNames[(i + 2) % lastNames.length],
    firstName: firstNames[(i + 5) % firstNames.length],
    points: Math.max(100, Math.floor((3800 - i * 150) / 100) * 100),
  })),
];

export const ctfLeaderboard = [...allUsers].sort((a, b) => b.points - a.points).slice(0, 20);
export const MY_ID = 'B23DCKH056';

export const ctfChallengeDetails = {
  1: { title: 'Hidden Message in PNG', difficulty: 'Dễ', points: 100, downloadUrl: '#', externalUrl: '#' },
  2: { title: 'Classic Caesar Cipher', difficulty: 'Dễ', points: 100, downloadUrl: '#', externalUrl: '#' },
  3: { title: 'Base64 Chained Encoding', difficulty: 'Dễ', points: 100, downloadUrl: '#', externalUrl: '#' },
  4: { title: 'EXIF Data Leak', difficulty: 'Dễ', points: 100, downloadUrl: '#', externalUrl: '#' },
  5: { title: 'Broken RSA Public Key', difficulty: 'Trung bình', points: 300, downloadUrl: '#', externalUrl: '#' },
  6: { title: 'SQL Injection Login Bypass', difficulty: 'Trung bình', points: 300, downloadUrl: '#', externalUrl: '#' },
  7: { title: 'JWT None Algorithm Attack', difficulty: 'Trung bình', points: 300, downloadUrl: '#', externalUrl: '#' },
  8: { title: 'PCAP Flag Recovery', difficulty: 'Trung bình', points: 300, downloadUrl: '#', externalUrl: '#' },
  9: { title: 'XOR Keystream Recovery', difficulty: 'Trung bình', points: 300, downloadUrl: '#', externalUrl: '#' },
  10: { title: 'Blind XXE via SVG Upload', difficulty: 'Trung bình', points: 300, downloadUrl: '#', externalUrl: '#' },
  11: { title: 'Format String Leak (PIE bypass)', difficulty: 'Khó', points: 500, downloadUrl: '#', externalUrl: '#' },
  12: { title: 'Heap Feng Shui', difficulty: 'Khó', points: 500, downloadUrl: '#', externalUrl: '#' },
  13: { title: 'Kernel ROP Chain', difficulty: 'Khó', points: 500, downloadUrl: '#', externalUrl: '#' },
  14: { title: 'Reverse Engineering Obfuscated VM', difficulty: 'Khó', points: 500, downloadUrl: '#', externalUrl: '#' },
  15: { title: 'ECDSA Nonce Reuse Attack', difficulty: 'Khó', points: 500, downloadUrl: '#', externalUrl: '#' },
  16: { title: 'DNS Exfiltration via PCAP', difficulty: 'Trung bình', points: 300, downloadUrl: '#', externalUrl: '#' },
  17: { title: 'HTTP Request Smuggling', difficulty: 'Khó', points: 500, downloadUrl: '#', externalUrl: '#' },
  18: { title: 'LSB Steganography Extraction', difficulty: 'Dễ', points: 100, downloadUrl: '#', externalUrl: '#' },
  19: { title: 'Android APK Secret Flag', difficulty: 'Khó', points: 500, downloadUrl: '#', externalUrl: '#' },
  20: { title: 'Padding Oracle Attack (CBC)', difficulty: 'Khó', points: 500, downloadUrl: '#', externalUrl: '#' },
};
