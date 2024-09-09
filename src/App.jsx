import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Sponsor from './pages/Sponsor/Sponsor';
import About from './components/About/About'; // Ensure this path is correct
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<h1>Team Developers</h1>} />
          <Route path='/events' element={<Events />} />
          <Route path='/sponsor' element={<Sponsor />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
