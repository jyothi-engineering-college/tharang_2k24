import React from "react";
import LogTharang from "../../img/headerlog.jpg";

const EventsNav = ({ sendDept }) => {
  const handleClick = (dept) => {
    sendDept(dept);
  };

  return (
    <>
      <div className="liner">
        <img src={LogTharang} alt="Logo" />
        <p>Tharang 2024</p>
      </div>
      <div className="thazhevara"></div>
      <div className="navEvents">
        <div onClick={() => handleClick("AD")} className="navTab">
          <p className="navTabcontent">AD</p>
        </div>
        <div onClick={() => handleClick("BSH")} className="navTab">
          <p className="navTabcontent">BSH</p>
        </div>
        <div onClick={() => handleClick("CE")} className="navTab">
          <p className="navTabcontent">CE</p>
        </div>
        <div onClick={() => handleClick("CSE")} className="navTab">
          <p className="navTabcontent">CSE</p>
        </div>
        {/* <div onClick={() => handleClick("CY")} className="navTab">
          <p className="navTabcontent">CY</p>
        </div> */}
        <div onClick={() => handleClick("ECE")} className="navTab">
          <p className="navTabcontent">ECE</p>
        </div>
        <div onClick={() => handleClick("EEE")} className="navTab">
          <p className="navTabcontent">EEE</p>
        </div>
        <div onClick={() => handleClick("ME")} className="navTab">
          <p className="navTabcontent">ME</p>
        </div>
        <div onClick={() => handleClick("MR")} className="navTab">
          <p className="navTabcontent">MR</p>
        </div>
        <div onClick={() => handleClick("RA")} className="navTab">
          <p className="navTabcontent">RA</p>
        </div>
        <div onClick={() => handleClick("Common")} className="navTab">
          <p className="navTabcontent">Common</p>
        </div>
      </div>
    </>
  );
};

export default EventsNav;
