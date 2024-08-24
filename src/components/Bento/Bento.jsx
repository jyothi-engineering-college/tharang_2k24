import React from 'react';
import './bento.css';
import LogTharang from '../../img/headerlog.jpg';
import BentoBg from '../../img/bentobg.png';
import ArrowUp from '../../img/arrow-up.png';
import CodePlus from '../../img/code.png';
import Marquee from 'react-fast-marquee';
import SocialM from "../../img/social.png";

function Bento() {
  return (
    <div>
        <div className="liner">
            <img src={LogTharang} alt="Logo" />
            <p>Tharang 2024</p>
        </div>
        <div className="thazhevara"></div>
        <div className="bentoup">
        <div className="bento1">
            <div className="bhead">
                <h3>Tharang Events 2024</h3>
                <p>Loading the power !</p>
            </div>
            <div className="bdesc">
                <p>Tharang typically includes a range of events such as coding challenges, hackathons, robotics competitions, workshops, exhibitions, and talks by experts in the tech industry. </p>
                <img src={BentoBg} alt="Bento Bg" />
            </div>
            <button className='bevn'>Go To Events</button>
        </div>
        
        <div className="bento2">
            <div className="b2head">
                <p>Event of the time</p>
                <img src={ArrowUp} alt="arrow" />
            </div>
            <div className="bevent">
                <img src={CodePlus} alt="code" />
                <div className="bedet">
                    <h3>CODE +</h3>
                    <p className='dpp'>Dept of CSE</p>
                    <p className='locc'>EAB 415</p>
                </div>
            </div>
            <Marquee className='marke'> THARANG THARANG </Marquee>
            </div>
            
        </div>
        <div className="bento3">
            <img src={SocialM} alt="Social Media" />
            <div className="b3det">
                <p>get our Showcase</p>
                <h3>Follow our social Media</h3>
            </div>
        </div>
    </div>
  )
}

export default Bento;