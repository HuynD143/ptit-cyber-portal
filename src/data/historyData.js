const generateHistoryData = () => {
  const data = [];
  const tasks = ['Warmup Web Exploitation', 'Buffer Overflow Master', 'SQLi Injection Lab', 'Packet Analysis Pro', 'Crackme Level 5', 'Basic Stack Smashing'];
  const verdicts = ['AC', 'AC', 'WA', 'WFN', 'RTE'];

  for (let i = 1; i <= 30; i++) {
    data.push({
      id: 10440 - i,
      time: `2026-03-${Math.floor(Math.random() * 24 + 1).toString().padStart(2, '0')} 09:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}:00`,
      course: 'ATTT',
      task: tasks[Math.floor(Math.random() * tasks.length)],
      type: 'CTF',
      status: verdicts[Math.floor(Math.random() * verdicts.length)]
    });
  }
  return data;
};

export const mockHistory = [
  { id: 10452, time: '2026-03-23 10:15:02', course: 'ATTT', task: 'Warmup Web Exploitation', type: 'CTF', status: 'AC' },
  { id: 10440, time: '2026-03-23 09:20:00', course: 'ATTT', task: 'Warmup Web Exploitation', type: 'CTF', status: 'WA' },
  ...generateHistoryData()
];
