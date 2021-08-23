import React from 'react';
import PlayerRect from './components/PlayerRect';
import Rect from './components/Rect';
import RobotRect from './components/RobotRect';
import Papel from './components/papel';

function App() {
  return (
    <div className="App" style={{
      display: 'flex',
    }}>
      <PlayerRect color={'#0ff'}/>
      <Rect/>
      <RobotRect color={'rgb(200,10,10)'}/>
    </div>
  );
}

export default App;
