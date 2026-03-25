import React, { useEffect } from 'react';
import TerminalWindow from '../components/ui/TerminalWindow';

const TerminalFullScreen = () => {
  useEffect(() => {
    // Attempt to set document title
    document.title = 'Web Terminal - PTIT Cyber Portal';
  }, []);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: '#0b1020',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{ width: '75vw', height: '75vh' }}>
        <TerminalWindow
          ip="ctf.ptit.edu.vn"
          user="root"
          height="75vh"
          onClose={() => window.close()}
        />
      </div>
    </div>
  );
};

export default TerminalFullScreen;
