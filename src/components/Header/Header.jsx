import React from 'react';
import './header.css';
import ThreeDModel from '../Collada/ThreeDModel';

function Header() {
  return (
    <div className='headu'>
        <div className="hall">
        <div className="hdet">
        <p>Let's Get</p>
        <h3>Tharangified !</h3>
        </div>
        <ThreeDModel className="thmd"/>
        </div>
    </div>
  )
}

export default Header