import React from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ThSpon from '../../img/spons.png';
import './sponsors.css';

function Sponsor() {
  return (
    <div className='sponsbg'>
        <Navbar/>
            <div className="sphd">
              <div className="valyah">
                <p>Beloved Supporters of</p>
                <h3>Our Tech Fest</h3>
              </div>
              <div className="cheriyah">
                <p>Join us at THARANG 24 and discover our amazing Sponsors who make this event possible. Our Sponsors are dedicated to supporting our mission and helping us create an unforgettable experience for all attendees.</p>
              </div>
            </div>
            <div className="thazhevaras"></div>
            <div className="sponsind">
              <h3>Diamond<br></br> Sponsors</h3>
              <img src={ThSpon} alt="Sponsors"/>
            </div>
            {/* goll */}
            <div className="thazhevaras"></div>
            <div className="sponsind">
              <h3>Gold<br></br> Sponsors</h3>
              <img src={ThSpon} alt="Sponsors"/>
            </div>
            {/* goll */}
            <div className="thazhevaras"></div>
            <div className="sponsind">
              <h3>Silver<br></br> Sponsors</h3>
              <img src={ThSpon} alt="Sponsors"/>
            </div>
        <Footer/>
    </div>
  )
}

export default Sponsor