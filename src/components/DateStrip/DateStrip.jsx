import React from 'react';
import './date.css';
import Marquee from "react-fast-marquee";

function DateStrip() {
  return (
    <div className='dtst'>
        <div className="wstrip">
            <Marquee className='indu' speed={60}>
            <h3>OCTOBER - 2,3   OCTOBER - 2,3</h3>
            </Marquee>
        </div>
        <div className="nstrip">
        <Marquee className='indu' speed={20}> 
        <h3>OCTOBER - 2,3   OCTOBER - 2,3</h3>
            </Marquee>
        </div>
    </div>
  )
}

export default DateStrip