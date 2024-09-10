import React from "react";
import { useLocation } from "react-router-dom";

const EventDetails = () => {
  const location = useLocation();
  const { state } = location;
  const event = state?.event || {};

  return (
    <div>
      <h1>{event.event_name}</h1>
      <img
        src={event.poster_url}
        alt="Event"
        style={{ width: "300px", height: "auto" }}
      />
      <p>
        <strong>Location | Date | Time:</strong> {event.loc_dt_tm}
      </p>
      <p>
        <strong>Description:</strong> {event.description}
      </p>
      <p>
        <strong>Contact:</strong> {event.contact}
      </p>
      <a href={event.registerlink} target="_blank" rel="noopener noreferrer">
        Register Here
      </a>
    </div>
  );
};

export default EventDetails;
