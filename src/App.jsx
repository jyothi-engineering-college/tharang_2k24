import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
import Events from './pages/Events/Events';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/contact' element={<h1>Contact</h1>} />
          <Route path='/events' element={<Events/>} />
          <Route path='sponsor' element={<h1>Sponsor</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
