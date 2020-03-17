import React from 'react';
import './App.css';

import HeaderBox from './components/header-box/header-box.component';
import OutwardBox from './components/outward-journey-box/outward-journey-box.component';
import ReturnBox from './components/return-journey-box/return-journey-box.component';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <HeaderBox />
          <OutwardBox />
          <ReturnBox />
        </div>
      </header>
    </div>
  );
}

export default App;
