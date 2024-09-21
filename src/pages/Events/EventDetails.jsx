import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../Supabaseconffig";
import './eventdetails.css';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import locSvg from "../../img/locsvg.svg";
import timeSvg from "../../img/closvg.svg";
import dateSvg from "../../img/calsvg.svg";
import phoneSvg from "../../img/phosvg.svg";

const EventDetails = () => {
  const { id } = useParams(); // Get the id from the URL (corrected from eventId to id)
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchEventDetails = async () => {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("id", id); // Query by the event id

    if (error) {
      console.error("Error fetching event details:", error);
    } else if (data.length > 0) {
      setEventData(data[0]); // Use the first matching event
    } else {
      console.log("No event found with the provided id.");
    }
    setLoading(false);
  };
  const shareEventLink = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title, // Use the current document title
        url: window.location.href, // Share the current URL
      })
      .then(() => console.log('Successfully shared'))
      .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Sharing is not supported on this device.');
    }
  };
  

  useEffect(() => {
    fetchEventDetails();
  }, [id]);

  if (loading) {
    return <p>Loading event details...</p>;
  }

  if (!eventData) {
    return <p>No event details found.</p>;
  }

  return (
    <div className="eventmotham">
      <Navbar />
      <div className="tideim">
        <div className="evndep">
          <h3>{eventData.event_name}</h3>
          {eventData.department === "Common" ? (<p>Common Events</p>) : (
          <p>Dept of {eventData.department}</p>
        )}
        </div>
        <img src={eventData.poster_url} alt="poster" />
      </div>
      <p className="evdetdesc">
        {eventData.description}
      </p>
      <div className="eventmain">
        <p><img src={locSvg}/> {eventData.location}</p>
        <p><img src={timeSvg}/> {eventData.time}</p>
        <p><img src={dateSvg}/> {eventData.date}</p>
        <p><img src={phoneSvg}/> {eventData.contact}</p>
      </div>
      <div className="registevent">
      <button className="vellayalla" onClick={shareEventLink}>
  Share Event Link
</button>

{eventData.id ===107 ? (<a
  className="vellakkaran"
  href={eventData.registerlink}
  target="_blank"
  rel="noopener noreferrer"
>
  Book Your Tickets !
</a>)  : (<a
  className="vellakkaran"
  href={eventData.registerlink}
  target="_blank"
  rel="noopener noreferrer"
>
  Register Now!
</a>)}
{/* <a
  className="vellakkaran"
  href={eventData.registerlink}
  target="_blank"
  rel="noopener noreferrer"
>
  Register Now!
</a> */}

      </div>
      {/* <a
        href={eventData.registerlink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Register Here
      </a> */}
      <Footer/>
    </div>
  );
};

export default EventDetails;
