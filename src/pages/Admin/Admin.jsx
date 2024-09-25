import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from "../../Supabaseconffig";
import './admin.css';

const Admin = () => {
  const location = useLocation();
  const userId = location.state.userId;
  const [eventData, setEventData] = useState([]);
  const [liveState, setLiveState] = useState({});

  useEffect(() => {
    const fetchUserEvents = async () => {
      const { data, error } = await supabase.from("events").select("*").eq("uid", userId);
      if (error) {
        console.error(error);
      } else {
        setEventData(data);
        
        // Initialize liveState based on fetched data
        const initialLiveState = data.reduce((acc, event) => {
          acc[event.id] = event.live_now; // Set the initial state based on the live_now field
          return acc;
        }, {});
        setLiveState(initialLiveState);
      }
    };
    fetchUserEvents();
  }, [userId]);

  const handleBusy = (value, status) => {
    const updateBusy = async () => {
      const { data, error } = await supabase.from("events").update({ busy: value }).eq("id", status);
      if (error) {
        console.error(error);
      } else {
        console.log(data);
      }
    };
    updateBusy();
  };

  const handleLive = (eveid) => {
    setLiveState(prevState => {
      const newToggleValue = !prevState[eveid]; 
      console.log("New Toggle Value:", newToggleValue);
  
      const meToggle = async () => {
        const { error } = await supabase
          .from("events")
          .update({ live_now: newToggleValue }) // Update the live_now field
          .eq("id", eveid);
  
        if (error) {
          console.error("Error updating live status:", error.message);
        } else {
          console.log("Update successful!");
          // Reflect the updated value in the state after a successful update
          setLiveState(prevState => ({
            ...prevState,
            [eveid]: newToggleValue // Update only the specific event's live state
          }));
        }
      };
  
      meToggle(); // Call the async update function
  
      // Return the previous state temporarily, actual state will be updated in meToggle
      return prevState; 
    });
  };

  return (
    <div>
      {eventData.map((event) => (
        <div key={event.id}>
          <h1>{event.event_name}</h1>
          <p>Live status</p>
          <button onClick={() => handleLive(event.id)}>
            {liveState[event.id] ? 'Live Now' : 'Go Live'} {/* Update the button label based on liveState */}
          </button>

          <p>{event.location} | {event.date} | {event.time}</p>
          <input type='radio' name='busy' onChange={(e) => handleBusy(e.target.value, event.id)} value='free' /> Free than usual
          <input type='radio' name='busy' onChange={(e) => handleBusy(e.target.value, event.id)} value='normal' /> Normal
          <input type='radio' name='busy' onChange={(e) => handleBusy(e.target.value, event.id)} value='rush' /> Heavy rush
          <img className='vepadam' src={event.poster_url} alt="Event" />
        </div>
      ))}
    </div>
  );
};

export default Admin;
