import React, { useEffect, useState } from 'react';
import { useLocation,Link } from 'react-router-dom';
import { supabase } from "../../Supabaseconffig";
import './admin.css';
import Jyolog from "../../img/jyosmall.png";
import Tharangam from "../../img/tharangsmall.png";

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
      <div className="loghd">
        <img src={Tharangam} alt="tharang" />
        <img src={Jyolog} alt="jyohi" />
      </div>
      <p className="submithead">Control Events</p>
      
      <Link to = "/form" className='evepo' >Go Back</Link>
      {eventData.map((event) => (
        <div className='controlme' key={event.id}>
          <div className="controldet">
          <h1>{event.event_name}</h1>
          <p>Dept of {event.department}</p>
          <p>Event ID : {event.id}</p>
          <p>{event.location} | {event.date} | {event.time}</p>
          <div className="controllive">
          <p>Live status : </p>
          
            {liveState[event.id] ? (<button style={{background: "#FF1E00"}} onClick={() => handleLive(event.id)}>Live Now</button>) : (<button  style={{background: "#50D890"}} onClick={() => handleLive(event.id)}>Go Live</button>)} {/* Update the button label based on liveState */}

          </div>

          <p>Busy Status : </p>
          <input type='radio' name='busy' onChange={(e) => handleBusy(e.target.value, event.id)} value='free' /> <label className='inplace'> Free than usual</label>
          <input type='radio' name='busy' onChange={(e) => handleBusy(e.target.value, event.id)} value='normal' /> <label className='inplace'> Normal</label>
          <input type='radio' name='busy' onChange={(e) => handleBusy(e.target.value, event.id)} value='rush' /> <label className='inplace'> Heavy Rush</label>
          <Link className='evepo1' to="https://docs.google.com/forms/d/e/1FAIpQLSfrbBrq7ppjw5rHO7Hy1cm_MxdkcQquxdDv8W4LNHpKAzm3JA/viewform?usp=sf_link" >Edit</Link>
          </div>
          <img className='vepadam' src={event.poster_url} alt="Event" />
          
        </div>
      ))}
    </div>
  );
};

export default Admin;
