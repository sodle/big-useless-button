import React, { useState } from 'react';
import { post } from 'request-promise';
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
        onClick={() => {
          // post('https://6cgg3ga8jl.execute-api.us-west-2.amazonaws.com/default/trigger_celebrity_doppelganger_picture').then(v => console.log(v)).catch(e => console.error(e));
        }}
      >
        Fire
        <div className='filter' />
      </div>
    </div>
  );
}

export default App;
