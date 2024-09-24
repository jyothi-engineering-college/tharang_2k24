import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Sponsor from "./pages/Sponsor/Sponsor";
import About from "./components/About/About"; // Ensure this path is correct
import Teams from "./pages/Teams/Teams";
import Login from "./pages/Admin/Login";
import Form from "./pages/Admin/Form";
import EventDetails from "./pages/Events/EventDetails";
import './App.css';
import LiveEvents from "./pages/LiveEvents/LiveEvents";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event-details/:id" element={<EventDetails />} /> {/* Dynamic route */}
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/live" element={<LiveEvents/>} />
      </Routes>
    </Router>
  );
}

export default App;
