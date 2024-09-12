import React, { useState, useEffect } from 'react';
import Tharangam from "../../img/headerlog.jpg";
import UserLog from "../../img/userlog.svg";
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setIsHidden(true); // Scrolling down
      } else {
        setIsHidden(false); // Scrolling up
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // Prevent negative scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <div className={`navb ${isHidden ? 'hidden' : ''}`}>
      <img src={Tharangam} alt="TharangLogo" />
      <div className="nav-content">
        <div className={`ruter ${menuOpen ? 'hidden' : ''}`}>
          <Link className="rutl" to="/">
            Home
          </Link>
          <Link
            className="rutl"
            to="/"
            onClick={() => handleScrollToSection("abtt")}
          >
            About
          </Link>
          <Link className="rutl" to="/events">
            Events
          </Link>
          <Link className="rutl" to="/sponsor">
            Sponsor
          </Link>
          <Link className="rutl" to="/team">
            Team
          </Link>
        </div>
        <div className={`hlog ${menuOpen ? 'hidden' : ''}`}>
          <Link className="rutl" to="/login">
            <div className="hlog">
              <img src={UserLog} alt="userlogin" />
              <p>Login</p>
            </div>
          </Link>
        </div>
        {/* Hamburger Menu Button */}
        <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link className="rutl" to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link className="rutl" to="/" onClick={() => { handleScrollToSection("abtt"); setMenuOpen(false); }}>
            About
          </Link>
          <Link className="rutl" to="/events" onClick={() => setMenuOpen(false)}>
            Events
          </Link>
          <Link className="rutl" to="/sponsor" onClick={() => setMenuOpen(false)}>
            Sponsor
          </Link>
          <Link className="rutl" to="/team" onClick={() => setMenuOpen(false)}>
            Team
          </Link>
          <Link className="rutl login-link" to="/login" onClick={() => setMenuOpen(false)}>
            <div className="hlogphone">
              <img src={UserLog} alt="userlogin" />
              <p>Login</p>
            </div>
          </Link>
  
        </div>
      )}
    </div>
  );
}

export default Navbar;
