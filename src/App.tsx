import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [hover, setHover] = useState(false);
  const [depressed, setDepressed] = useState(false);
  function getButtonClasses() {
    const classes = ['fireBtn'];
    if (hover) {
      classes.push('hover');
    }
    if (depressed) {
      classes.push('depressed');
    }
    return classes.join(' ');
  }
  return (
    <div className="App">
      <div
        className={getButtonClasses()}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => {
          setHover(false);
          setDepressed(false);
        }}
        onMouseDown={() => setDepressed(true)}
        onMouseUp={() => setDepressed(false)}
        onTouchStart={() => setDepressed(true)}
        onTouchEnd={() => setDepressed(false)}
        onTouchCancel={() => setDepressed(false)}
      >
        Fire
        <div className='filter' />
      </div>
    </div>
  );
}

export default App;
