import React from 'react';
import './App.css';
import Home from './pages/home';
import Contact from './pages/contact';
import {Navbar} from './components/navbar';
import {Footer} from './components/footer'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='app-sub'>
        <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        <Footer/>
        </Router>
      </div>

    </div>
  );
}

export default App;
