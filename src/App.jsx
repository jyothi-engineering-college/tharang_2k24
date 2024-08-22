import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/events' element={<h1>Events</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
