import React from 'react';
import './App.css';

import List from './components/List';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <List />
      </header>
    </div>
  );
}

export default App;
