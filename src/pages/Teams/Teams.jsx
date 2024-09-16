import React from 'react';
import "./teams.css";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import teamData from './teamData.json';

function Teams() {
  return (
    <div className='teamsall'>
      <Navbar />
      <div className="teamhd">
        <p>The brilliant heads behind this</p>
        <h3>Meet The Developers</h3>
      </div>
      <div className="devpad">
        {teamData.map((member, index) => (
          <div key={index} className={`devi ${member.name.split(' ')[0].toLowerCase()}`}>
            <div className="sidevara"></div>
            <div className="devit">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Teams;