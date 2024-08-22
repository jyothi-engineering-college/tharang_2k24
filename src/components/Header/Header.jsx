import React from 'react';
import './header.css';
import ThreeDModel from '../Collada/ThreeDModel';
import Navbar from '../Navbar/Navbar';
import 'animate.css';

function Header() {
  return (
    <div className='headu'>
      <Navbar/>
        <div className="hall">
        <div className="hdet animate__animated animate__backInUp">
        <p>Let's Get</p>
        <h3>Tharangified !</h3>
        </div>
        <ThreeDModel/>
        </div>
        <h3 className='tit animate__animated animate__fadeInUp'>This is Tharang 2024 !</h3>
    </div>
  )
}

export default Header