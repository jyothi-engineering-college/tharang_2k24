import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Sponsor from './pages/Sponsor/Sponsor';
import About from './components/About/About'; // Ensure this path is correct
import './App.css';
import Teams from './pages/Teams/Teams';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<Teams/>} />
          <Route path='/events' element={<Events />} />
          <Route path='/sponsor' element={<Sponsor />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
