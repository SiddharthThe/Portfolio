import React from 'react';
import './App.css';
import Home from './pages/home';
import {Navbar} from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='app-sub'>
        <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </div>

    </div>
  );
}

export default App;
