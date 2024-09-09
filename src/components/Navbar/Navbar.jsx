import React from 'react';
import Tharangam from "../../img/headerlog.jpg";
import UserLog from "../../img/userlog.svg";
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='navb'>
      <img src={Tharangam} alt="TharangLogo" />
      <div className="ruter">
        <Link className='rutl' to="/">Home</Link>
        <Link className='rutl' to="/" onClick={() => handleScrollToSection('abtt')}>About</Link> 
        <Link className='rutl' to="/events">Events</Link>
        <Link className='rutl' to="/sponsor">Sponsor</Link>
        <Link className='rutl' to="/contact">Contact</Link>
      </div>
      <div className="hlog">
        <img src={UserLog} alt="userlogin" />
        <p>Login</p>
        <div className="nervara"></div>
      </div>
    </div>
  )
}

export default Navbar;