import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../Supabaseconffig";

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
    <div>
      <h1>{eventData.event_name}</h1>
      <img
        src={eventData.poster_url}
        alt="Event"
        style={{ width: "300px", height: "auto" }}
      />
      <p>
        <strong>Location | Date | Time:</strong> {eventData.loc_dt_tm}
      </p>
      <p>
        <strong>Description:</strong> {eventData.description}
      </p>
      <p>
        <strong>Contact:</strong> {eventData.contact}
      </p>
      <a
        href={eventData.registerlink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Register Here
      </a>
    </div>
  );
};

export default EventDetails;
