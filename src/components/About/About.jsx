import React, { useEffect } from 'react';
import './about.css';
import Thara from "../../img/thara.png";
import { useLocation } from 'react-router-dom';

function About() {
  const { pathname } = useLocation(); // Hook to get the current URL path

  useEffect(() => {
    // Scroll to the element with ID 'abtt' when the path is '/about'
    if (pathname === '/about') {
      const element = document.getElementById('abtt');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname]);

  return (
    <>
      <div className='abt' id='abtt'>
        <div className="abh">
          <div className="wner"></div>
          <h3>A Word on ..</h3>
        </div>
        <div className="abdet">
          <p>
            Tharang is the largest Techno Cultural Fest conducted annually by the students of Jyothi Engineering College, Thrissur. Tharang, since its inception, has evolved into one of the biggest events for tech-wits and creative minds across the state. The new edition "Tharang 2024" is not different either. The fest brings together the latest in technology, automobiles, workshops, games, arts, dance, and music, all inside a jam-packed session of two days, October 1 and 2.
            <br />
            Jyothi Engineering College (JEC), set up in 2002 under the aegis of Thrissur Educational Trust, founded by the Catholic Archdiocese of Trichur, is a leading engineering college in Kerala. The Archdiocese of Trichur has an illustrious track record of a century and a quarter in the education sector. Jyothi Engineering College is a NAAC accredited institution, and five of the undergraduate programs offered have NBA accreditation, which indicates our recognition for the quality of education we provide.
          </p>
          <img src={Thara} alt="Tharang" />
        </div>
      </div>
    </>
  );
}

export default About;
