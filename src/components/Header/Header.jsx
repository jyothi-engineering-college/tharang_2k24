import React from 'react';
import './header.css';
import ThreeDModel from '../Collada/ThreeDModel';
import 'animate.css';
import Countdown from '../Countdown/Countdown';
import Aadi from '../../img/tarangweb.png';

function Header() {
  return (
    <div className='headu'>
        {/* <img src={Aadi} alt="aadi" className='aadi' /> */}
        <div className="hall">
        <div className="hdet animate__animated animate__backInUp">
        <p>Let's Get</p>
        <h3>Tharangified !</h3>
        </div>
        <div className="collada">
        <ThreeDModel/>
        </div>
        </div>
        
        {/* <h3 className='tit animate__animated animate__fadeInUp'>This is Tharang 2024 !</h3> */}
        <Countdown/>
    </div>
  )
}

export default Header;  