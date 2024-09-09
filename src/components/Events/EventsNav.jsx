import React from 'react';
import LogTharang from "../../img/headerlog.jpg";

const EventsNav = () => {
  return (
    <>
    <div className="liner">
            <img src={LogTharang} alt="Logo" />
            <p>Tharang 2024</p>
        </div>
        <div className="thazhevara"></div>
        <div className="navEvents">
        <div className="navTab">
            <p className="navTabcontent">
                AD
            </p>
        </div>
        <div className="navTab">
            <p className="navTabcontent">
                BSH
            </p>
        </div>  <div className="navTab">
            <p className="navTabcontent">
                CE
            </p>
        </div>  <div className="navTab">
            <p className="navTabcontent">
                CSE
            </p>
        </div>  <div className="navTab">
            <p className="navTabcontent">
                CY
            </p>
        </div>  <div className="navTab">
            <p className="navTabcontent">
                ECE
            </p>
        </div>
        <div className="navTab">
            <p className="navTabcontent">
                EEE
            </p>
        </div>
        <div className="navTab">
            <p className="navTabcontent">
                ME
            </p>
        </div>
        <div className="navTab">
            <p className="navTabcontent">
                MR
            </p>
        </div>
        <div className="navTab">
            <p className="navTabcontent">
                RA
            </p>
        </div>

      </div>
    </>
  )
}

export default EventsNav
