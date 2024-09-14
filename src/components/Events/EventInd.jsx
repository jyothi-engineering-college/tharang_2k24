import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../Supabaseconffig";
import { slugify } from "../../utils/Utils"; // We'll create this utility function

function EventInd({ sendDeptChild }) {
  const [deptData, setDeptData] = useState([]);
  const navigate = useNavigate();

  const fetchAllEvents = async () => {
    let query = supabase.from("events").select("*");
    if (sendDeptChild) {
      query = query.eq("department", sendDeptChild);
    }
    const { data, error } = await query;
    if (error) {
      console.error(error);
    } else {
      setDeptData(data);
    }
  };

  useEffect(() => {
    fetchAllEvents();
  }, [sendDeptChild]);

  const handleClick = (event) => {
    const slug = slugify(event.event_name); // Generate slug for the event name
    navigate(`/event/${slug}`, { state: { event } }); // Use dynamic URL based on event name
  };

  return (
    <div className="evegrid">
      {deptData.map((event, index) => (
        <div onClick={() => handleClick(event)} key={index} className="ecardi">
          <div className="event-card">
            <div className="econtainer">
              <img className="codooo" src={event.poster_url} alt="Event" />
              <div className="eoverlay">
                <h3 className="etext">{event.event_name}</h3>
                <p>{event.loc_dt_tm}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventInd;
