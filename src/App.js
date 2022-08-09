import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Covid from './views/Covid';
const App = () => {
  // name la bien, setName la ham khi name thay doi
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Covid />

      </header>

    </div>
  );
}


export default App;
