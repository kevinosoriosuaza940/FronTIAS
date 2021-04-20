import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="FrontIAS">
        </header>
        <div>
          <Routes />
        </div>
      </div>
    </Router>
  );
}

export default App;
