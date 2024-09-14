import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../Supabaseconffig";

const EventDetails = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchEventDetails = async () => {
    // Fetch the event from the database using a case-insensitive query
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .ilike("event_name", `%${slug.replace(/-/g, " ")}%`); // Case-insensitive match

    if (error) {
      console.error("Error fetching event details:", error);
    } else {
      setEventData(data[0]); // Assume the first match is correct
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!eventData) {
      fetchEventDetails(); // Fetch the data if eventData is not available
    }
  }, [slug]);

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
