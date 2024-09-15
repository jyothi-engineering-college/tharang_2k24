import React from "react";
import "./bento.css";
import LogTharang from "../../img/headerlog.jpg";
import BentoBg from "../../img/bentobg.png";
import ArrowUp from "../../img/arrow-up.png";
import CodePlus from "../../img/code.png";
import Marquee from "react-fast-marquee";
import SocialM from "../../img/social.png";
import { supabase } from "../../Supabaseconffig";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Bento() {
  const [eventsingle, setEventsingle] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllEvents = async () => {
      const { data, error } = await supabase.from("events").select("*");
      if (error) {
        console.error(error);
      } else {
        const random = Math.floor(Math.random() * data.length);
        setEventsingle(data[random]);
      }
    };

    fetchAllEvents();
  }, []);

  const handleViewDetails = () => {
    if (eventsingle) {
      const eventId = eventsingle.id; // Get the event's id
      navigate(`/event-details/${eventId}`, { state: { event: eventsingle } }); // Navigate using the event's id
    }
  };
  

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
            <p>
              Tharang typically includes a range of events such as coding
              challenges, hackathons, robotics competitions, workshops,
              exhibitions, and talks by experts in the tech industry.{" "}
            </p>
            <img src={BentoBg} alt="Bento Bg" />
          </div>
        </div>

        <div onClick={handleViewDetails} className="bento2">
          <div className="b2head">
            <p>Event of the time</p>
            {/* <img src={ArrowUp} alt="arrow" /> */}
          </div>
          {eventsingle && (
            <div className="bevent">
              <img src={eventsingle.poster_url} alt="code" />
              <div className="bedet">
                <h3>{eventsingle.event_name}</h3>
                <p className="dpp">Dept of {eventsingle.department}</p>
                <p className="locc">{eventsingle.loc_dt_dm}</p>
              </div>
            </div>
          )}
          <Marquee className="marke"> THARANG THARANG </Marquee>
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
  );
}

export default Bento;
