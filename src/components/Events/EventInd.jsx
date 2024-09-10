import React from "react";
import CodooTharang from "../../img/code+.jpeg";
import LsTg from "../../img/lasertag.jpg";
import VrFu from "../../img/vr4u.jpg";
import Playtopia from "../../img/playtopia.jpg";
import { supabase } from "../../Supabaseconffig";
import { useEffect } from "react";
import { useState } from "react";

function EventInd({ sendDeptChild }) {
  const [deptData, setdeptData] = useState();

  const fetchAllEvents = async () => {
    if (sendDeptChild === "") {
      console.log(sendDeptChild, "NULL");

      const { data, error } = await supabase.from("events").select("*");
      if (error) {
        console.error(error);
      } else {
        setdeptData(data);
      }
    } else {
      console.log(sendDeptChild,"NOt NULL");

      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("department", sendDeptChild);
      if (error) {
        console.error(error);
      } else {
        setdeptData(data);
      }
    }
  };

  useEffect(() => {
    console.log("working");

    fetchAllEvents();
  }, [sendDeptChild]);

  return (
    <div className="evegrid">
      {deptData?.map((event, index) => {
        return (
          <div key={index} className="ecardi">
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
        );
      })}
      {/* LASER TAG */}
    </div>
  );
}

export default EventInd;
