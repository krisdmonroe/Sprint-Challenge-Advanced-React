import React from 'react';
import './App.css';
import {useDarkMode} from '../src/Hooks/useDarkMode'

import PlayerList from './components/PlayerList'


const App =()=>{
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };


  return (
    
    <div className="App">
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
      <h1>Player List</h1>
      <div>
    <PlayerList />
      </div>
    </div>
  );
}

export default App;
