const generateStatusData = () => {
  const data = [];
  const users = ['B23DCKH056', 'B22DCCN999', 'B22DCCN888', 'B22DCCN777', 'B23DCCN111', 'B23DCAT123', 'B23DCVT098', 'B21DCAT404'];
  const tasks = ['Warmup Web Exploitation', 'Buffer Overflow Master', 'SQLi Injection Lab', 'Packet Analysis Pro', 'Crackme Level 5'];
  const verdicts = ['AC', 'WA', 'WFN', 'CPY', 'CE', 'RTE'];

  for (let i = 1; i <= 120; i++) {
    const isHuy = i % 5 === 0;
    data.push({
      id: 10450 - i,
      time: `2026-03-${Math.floor(Math.random() * 20 + 1).toString().padStart(2, '0')} 10:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}:00`,
      user: isHuy ? 'B23DCKH056' : users[Math.floor(Math.random() * users.length)],
      task: tasks[Math.floor(Math.random() * tasks.length)],
      type: Math.random() > 0.5 ? 'CTF' : 'Upload',
      status: verdicts[Math.floor(Math.random() * verdicts.length)],
      mem: Math.floor(Math.random() * 20) + ' MB',
      exec: Math.floor(Math.random() * 500) + ' ms'
    });
  }
  return data;
};

export const mockSubmissions = [
  { id: 10452, time: '2026-03-23 10:15:02', user: 'B23DCKH056', task: 'Warmup Web Exploitation', type: 'CTF', status: 'AC', mem: '0 MB', exec: '0 ms' },
  { id: 10451, time: '2026-03-23 10:14:15', user: 'B23DCCN012', task: 'SQL Injection Basic', type: 'CTF', status: 'WA', mem: '0 MB', exec: '0 ms' },
  { id: 10450, time: '2026-03-23 10:12:00', user: 'ADMIN01', task: 'Reverse Engineering 101', type: 'Upload', status: 'CPY', mem: '5 MB', exec: '120 ms' },
  ...generateStatusData()
];
