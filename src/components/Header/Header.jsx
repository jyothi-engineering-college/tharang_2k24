import React from 'react';
import './header.css';
import ThreeDModel from '../Collada/ThreeDModel';
import 'animate.css';
import Countdown from '../Countdown/Countdown';
import Aadi from '../../img/tarangweb.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='headu'>
        
        <div className="hall">
        <div className="hdet animate__animated animate__backInUp">
        <p>Let's Get</p>
        <h3>Tharangified !</h3>
        </div>
        <div className="collada">
        <ThreeDModel/>
        </div>
        </div>
        {/* <img src={Aadi} alt="aadi" className='aadi' /> */}
        <Link to="/live" className='tit animate__animated animate__fadeInUp'>See The Tharang</Link>
        {/* <Countdown/> */}
    </div>
  )
}

export default Header;  