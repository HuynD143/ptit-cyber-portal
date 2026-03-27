export const challengesData = [
  { id: 1, title: 'Web Exploitation 101', tags: ['XSS', 'Web'], difficulty: 'Dễ', status: 'Solved' },
  { id: 2, title: 'Buffer Overflow Master', tags: ['Pwn', 'Buffer'], difficulty: 'Trung bình', status: 'Attempted' },
  { id: 3, title: 'SQLi Injection Lab', tags: ['SQLi', 'Web'], difficulty: 'Khó', status: 'Pending' },
  { id: 4, title: 'Broken RSA Implementation', tags: ['Crypto', 'RSA'], difficulty: 'Trung bình', status: 'Attempted' },
  { id: 5, title: 'Packet Analysis Pro', tags: ['Forensics', 'Network'], difficulty: 'Dễ', status: 'Solved' },
  { id: 6, title: 'Crackme Level 5', tags: ['Reversing', 'Assembly'], difficulty: 'Khó', status: 'Pending' },
  { id: 7, title: 'Linux Privilege Escalation', tags: ['OS', 'Linux'], difficulty: 'Trung bình', status: 'Pending' },
  { id: 8, title: 'Android APK Reversing', tags: ['Mobile', 'Rev'], difficulty: 'Khó', status: 'Pending' },
  { id: 9, title: 'IoT Firmware Analysis', tags: ['Hardware', 'IoT'], difficulty: 'Trung bình', status: 'Pending' },
  { id: 10, title: 'XSS to RCE Chain', tags: ['Web', 'RCE'], difficulty: 'Khó', status: 'Pending' },
  { id: 11, title: 'Basic Stack Smashing', tags: ['Pwn', 'Stack'], difficulty: 'Dễ', status: 'Solved' },
  { id: 12, title: 'Malware Traffic Analysis', tags: ['Forensics', 'Pcap'], difficulty: 'Trung bình', status: 'Attempted' },
  { id: 13, title: 'Advanced Heap Exploitation', tags: ['Pwn', 'Heap'], difficulty: 'Khó', status: 'Pending' },
  { id: 14, title: 'JWT Token Forgery', tags: ['Web', 'Crypto'], difficulty: 'Trung bình', status: 'Solved' },
  { id: 15, title: 'Windows Kernel Pwn', tags: ['Pwn', 'Windows'], difficulty: 'Khó', status: 'Pending' },
  { id: 16, title: 'Steganography Basics', tags: ['Forensics', 'Stego'], difficulty: 'Dễ', status: 'Solved' },
  { id: 17, title: 'Vulnerable Smart Contract', tags: ['Web3', 'Solidity'], difficulty: 'Trung bình', status: 'Pending' },
  { id: 18, title: 'GraphQL Introspection', tags: ['Web', 'API'], difficulty: 'Dễ', status: 'Attempted' },
  { id: 19, title: 'Active Directory Pentesting', tags: ['Network', 'AD'], difficulty: 'Khó', status: 'Pending' },
  { id: 20, title: 'Format String Vulnerability', tags: ['Pwn', 'Fmt'], difficulty: 'Trung bình', status: 'Pending' },
  { id: 21, title: 'Docker Escape', tags: ['OS', 'Docker'], difficulty: 'Khó', status: 'Pending' },
  { id: 22, title: 'Deserialization Attack', tags: ['Web', 'Java'], difficulty: 'Trung bình', status: 'Attempted' },
  { id: 23, title: 'AES Block Cipher Break', tags: ['Crypto', 'AES'], difficulty: 'Khó', status: 'Pending' },
  { id: 24, title: 'PHP LFI to RCE', tags: ['Web', 'PHP'], difficulty: 'Trung bình', status: 'Pending' },
  { id: 25, title: 'Browser Sandbox Escape', tags: ['Pwn', 'V8'], difficulty: 'Khó', status: 'Pending' },
  { id: 26, title: 'Network Protocol Spoofing', tags: ['Network', 'Spoof'], difficulty: 'Trung bình', status: 'Pending' },
  { id: 27, title: 'iOS Jailbreak 101', tags: ['Mobile', 'iOS'], difficulty: 'Khó', status: 'Pending' },
  { id: 28, title: 'Ruby on Rails Magic', tags: ['Web', 'Ruby'], difficulty: 'Trung bình', status: 'Pending' },
  { id: 29, title: 'Bluetooth Sniffing', tags: ['Hardware', 'Wireless'], difficulty: 'Trung bình', status: 'Pending' },
  { id: 30, title: 'VBA Macro Deobfuscation', tags: ['Forensics', 'Malware'], difficulty: 'Dễ', status: 'Solved' },
  { id: 31, title: 'Side Channel Attack', tags: ['Crypto', 'SideChannel'], difficulty: 'Khó', status: 'Pending' },
  { id: 32, title: 'Game Memory Exploitation', tags: ['Reversing', 'Game'], difficulty: 'Trung bình', status: 'Pending' },
  { id: 33, title: 'BGP Hijacking Demo', tags: ['Network', 'Routing'], difficulty: 'Khó', status: 'Pending' },
  { id: 34, title: 'SSRF via Cloud Meta', tags: ['Web', 'Cloud'], difficulty: 'Trung bình', status: 'Pending' },
  { id: 35, title: 'Return Oriented Programming', tags: ['Pwn', 'ROP'], difficulty: 'Khó', status: 'Pending' },
  { id: 36, title: 'Memory Forensics Analysis', tags: ['Forensics', 'RAM'], difficulty: 'Trung bình', status: 'Attempted' }
];

export const allSubCategories = ['Tất cả chủ đề', 'Web', 'Pwn', 'Crypto', 'Forensics', 'Reversing', 'Mobile', 'OS', 'Hardware', 'Network', 'Web3', 'Malware', 'Cloud'];

export const getChallengeDetails = (id) => {
  const c = challengesData.find(c => c.id === parseInt(id));
  return c ? { title: c.title } : { title: 'Unknown Challenge' };
};
