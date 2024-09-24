import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../Supabaseconffig";
// import locSvg from "../../img/locsvg.svg";
import Tharangam from "../../img/headerlog.jpg";
import GoButt from "../../img/gobutt.png";
import liveGif from "../../img/livegif.gif";

function LiveEvents() {
    const [liveEvents, setLiveEvents] = useState([]);
    const navigate = useNavigate();

    const fetchLiveEvents = async () => {
        const { data, error } = await supabase.from("events").select("*").eq("live", true);
        if (error) {
            console.error(error);
        } else {
            setLiveEvents(data);
        }
    }

    useEffect(() => {
        fetchLiveEvents();
    }, []);

    const handleClick = (event) => {
        const eventId = event.id; // Use event_id instead of slug
        navigate(`/event-details/${eventId}`, { state: { event } }); // Navigate to the details page using event_id
      };


    const liveEventsCircle = (busyStatus) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill={busyStatus === 'free' ? '#50D890' : busyStatus === 'normal ' ? '#484848' : '#FF1E00' }>
            <circle cx="5" cy="5.5" r="5" fill="#50D890" />
        </svg>
    );
  return (
    <div className="liveey">
        <h1>
            Live Events
        </h1>
        {/* deptview */}
        {liveEvents.map((levent, index) => (
        <div className="lecard" key={index}>
            <div className="lechead">
                <img src={Tharangam} alt="Tharang logo" />
                <section>
                    <h3>Dept of CSE</h3>
                    <p>@tharangjyothi</p>
                </section>
                <img onClick={() => handleClick(levent)} src={GoButt} alt="Go button" />
            
            </div>
            <div className="lelive">
                <div className="lelivegif">
                    <img src={liveGif} alt="live" />
                    <p>Live Now</p>
                </div>
                <div className="lebusy">
                {liveEventsCircle(levent.busy)}
                {levent.busy === 'free' ? (<p>Free than Usual</p>) : levent.busy === 'normal' ? (<p>Normal</p>) : (<p>Heavy Rush</p>)}
                </div>
                <img src={levent.poster_url} alt="poster" />
                <h3>{levent.name}</h3>
                <p>{levent.location}</p>
            </div>
        </div>))}
    </div>
  )
}

export default LiveEvents