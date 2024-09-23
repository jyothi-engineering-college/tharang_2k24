import React from 'react';
import "./committee.css";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


function Committee() {
  return (
<div className='teamsall'>
  <Navbar />
  <div className="teamhd">
    <p>THARANG LEADS</p>
  </div>
  <div className='committees'>
    {/* TShirt Committee */}
    <h3>TShirt Committee</h3>
    <div className="devpad">
      <div className="devi irfan">
        <div className="sidevara"></div>
        <div className="devit">
          <h3>Mohammed Irfan</h3>
          <p>TShirt Committee</p>
        </div>
      </div>
    </div>

    {/* Proshow Committee */}
    <h3>Proshow Committee</h3>
    <div className="devpad">
      <div className="devi ajay">
        <div className="sidevara"></div>
        <div className="devit">
          <h3>Ajay Joseph Pm</h3>
          <p>PRO Show</p>
        </div>
      </div>

      <div className="devi anand">
        <div className="sidevara"></div>
        <div className="devit">
          <h3>Anand Antony</h3>
          <p>Proshow</p>
        </div>
      </div>
    </div>

    {/* Design and Printing Committee */}
    <h3>Design and Printing Committee</h3>
    <div className="devpad">
      <div className="devi vismaya">
        <div className="sidevara"></div>
        <div className="devit">
          <h3>Vismaya Thankam John</h3>
          <p>Design and Printing Committee Lead</p>
        </div>
      </div>
    </div>

    {/* Technical Committee */}
    <h3>Technical Committee</h3>
    <div className="devpad">
      <div className="devi mekha">
        <div className="sidevara"></div>
        <div className="devit">
          <h3>Mekha Rajagopal</h3>
          <p>Technical Committee Student Coordinator</p>
        </div>
      </div>
    </div>

    {/* Finance Committee */}
    <h3>Finance Committee</h3>
    <div className="devpad">
      <div className="devi amarnath">
        <div className="sidevara"></div>
        <div className="devit">
          <h3>Amarnath S</h3>
          <p>Finance Committee Student Coordinator</p>
        </div>
      </div>
    </div>

    {/* Media and Publicity Committee */}
    <h3>Media and Publicity Committee</h3>
    <div className="devpad">
      <div className="devi gokul">
        <div className="sidevara"></div>
        <div className="devit">
          <h3>Gokul P Menon</h3>
          <p>Publicity Committee</p>
        </div>
      </div>
    </div>

    {/* Sponsorship Committee */}
    <h3>Sponsorship Committee</h3>
    <div className="devpad">
      <div className="devi naveen">
        <div className="sidevara"></div>
        <div className="devit">
          <h3>Naveen Wilson</h3>
          <p>Sponsorship Committee Student Coordinator</p>
        </div>
      </div>
    </div>

    {/* Empty Committees */}
    <h3>Food Committee</h3>
    <div className="devpad">
      <div className="devi aasad">
        <div className="sidevara"></div>
        <div className="devit">
        <h3>Aasad M S</h3>
          <p>Refreshment Committee Coordinator</p>
        </div>
      </div>
    </div>

    <h3>Cultural Committee</h3>
    <div className="devpad">
      
    </div>
  </div>
  <Footer />
</div>


  )
}

export default Committee;