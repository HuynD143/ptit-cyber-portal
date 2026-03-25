import React, { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

const TerminalWindow = ({ ip = '10.0.1.12', user = 'root', onClose, height = '400px' }) => {
  const terminalRef = useRef(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    // Initialize xterm
    const term = new Terminal({
      cursorBlink: true,
      theme: {
        background: '#0b1020',
        foreground: '#e2e8f0',
        cursor: '#ef4444',
        selection: 'rgba(239, 68, 68, 0.3)',
      },
      fontFamily: '"Fira Code", monospace',
      fontSize: 14,
      scrollback: 1000,
    });
    
    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);

    // Mount to DOM
    term.open(terminalRef.current);
    fitAddon.fit();

    // Mock Boot Sequence
    const writeLine = (text, delay = 0) => {
      return new Promise(resolve => {
        setTimeout(() => {
          term.writeln(text);
          resolve();
        }, delay);
      });
    };

    const bootSequence = async () => {
      term.writeln('\x1b[36mCTF Portal WebOS Terminal v1.0.0\x1b[0m');
      term.writeln('Connecting to remote instance...');
      await writeLine(`\x1b[32m[OK]\x1b[0m Established SSH Tunnel to ${ip}:22\r`, 500);
      await writeLine(`\x1b[32m[OK]\x1b[0m Authenticated as ${user}\r`, 400);
      term.writeln('\r');
      term.writeln('Welcome to PTIT CyberSec Environment!');
      term.writeln('Type "help" to see available mock commands.');
      term.writeln('\r');
      prompt(term);
    };

    const prompt = (term) => {
      term.write(`\r\n\x1b[31;1m${user}@ctf-box\x1b[0m:\x1b[34;1m~\x1b[0m$ `);
    };

    bootSequence();

    // Mock Keyboard Handler
    let currentLine = '';
    term.onData(e => {
      switch (e) {
        case '\r': // Enter
          term.writeln('');
          const cmd = currentLine.trim();
          if (cmd === 'help') {
            term.writeln('Available commands: \x1b[32mhelp\x1b[0m, \x1b[32mclear\x1b[0m, \x1b[32mls\x1b[0m, \x1b[32mwhoami\x1b[0m, \x1b[32mexit\x1b[0m');
          } else if (cmd === 'clear') {
            term.clear();
          } else if (cmd === 'ls') {
            term.writeln('\x1b[34mopt\x1b[0m  \x1b[34mvar\x1b[0m  flag.txt  server.py');
          } else if (cmd === 'whoami') {
            term.writeln(user);
          } else if (cmd === 'cat flag.txt') {
            term.writeln('KCSC{fake_flag_for_testing}');
          } else if (cmd === 'exit') {
            term.writeln('Connection closed.');
            if (onCloseRef.current) setTimeout(onCloseRef.current, 500);
            return;
          } else if (cmd.length > 0) {
            term.writeln(`bash: ${cmd}: command not found`);
          }
          currentLine = '';
          prompt(term);
          break;
        case '\u007F': // Backspace
          if (currentLine.length > 0) {
            currentLine = currentLine.slice(0, -1);
            term.write('\b \b');
          }
          break;
        default:
          // Make sure it's printable ascii
          if (e >= String.fromCharCode(0x20) && e <= String.fromCharCode(0x7E) || e.length >= 2) {
            currentLine += e;
            term.write(e);
          }
      }
    });

    // Handle Resize
    const resizeObserver = new ResizeObserver(() => fitAddon.fit());
    resizeObserver.observe(terminalRef.current);

    return () => {
      resizeObserver.disconnect();
      term.dispose();
    };
  }, [ip, user]);

  return (
    <div style={{ position: 'relative', width: '100%', height: height, backgroundColor: '#0b1020', borderRadius: height === '100vh' ? '0' : '8px', overflow: 'hidden', border: height === '100vh' ? 'none' : '1px solid rgba(255,255,255,0.1)' }}>
      {/* Mac-like Toolbar Overlay */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '30px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', zIndex: 10 }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <div onClick={onClose} style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56', cursor: 'pointer' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
        </div>
        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
          {user}@{ip} — bash
        </div>
      </div>
      
      {/* xterm Canvas Container */}
      <div style={{ width: '100%', height: 'calc(100% - 30px)', marginTop: '30px', padding: '0.5rem' }}>
        <div ref={terminalRef} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
};

export default TerminalWindow;
