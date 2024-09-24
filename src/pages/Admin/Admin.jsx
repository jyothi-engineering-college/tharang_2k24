import React from 'react';
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from "../../Supabaseconffig";
import './admin.css';

const Admin = () => {

    const location = useLocation();
    const userId = location.state.userId;
    const [busy, setBusy] = useState('free');
    const [eventData, setEventData] = useState([]);
    useEffect(() => {
        const fetchUserEvents = async () => {
            const { data, error } = await supabase.from("events").select("*").eq("uid", userId);
            if (error) {
              console.error(error);
            } else {
              setEventData(data);
            }
          };
          fetchUserEvents();
    }, [userId]);

    function handleBusy()
    {
        dataEvent = dataEvent.map((event) =>
        {
            if (event.id === event) {
                return { ...event, busy: busyStatus };
            }
            return event;
        });
    }

  return (
    <div>
      {eventData.map((event, index) => (
        <div key={index}>
          <h1>{event.event_name}</h1>
          <p>{event.location} | {event.date} | {event.time}</p>
          <input type='radio' name='busy' onChange={()=>handleBusy(event.target.value, event.id)} value='free'/> Free than usual
          <input type='radio' name='busy' onChange={()=>handleBusy(event.target.value, event.id)} value='normal'/> Normal
          <input type='radio' name='busy' onChange={()=>handleBusy(event.target.value, event.id)} value='rush'/> Heavy rush
          <img className='vepadam' src={event.poster_url} alt="Event" />
        </div>
      ))}
    </div>
  )
}

export default Admin
