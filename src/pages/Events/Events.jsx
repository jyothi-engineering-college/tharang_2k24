import { useState } from "react";
import EventInd from "../../components/Events/EventInd";
import EventsNav from "../../components/Events/EventsNav";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Events.css";
const Events = () => {
   const [data, setData] = useState("");

   const handleDept = (childDept) => {
     setData(childDept);
     
   };
  return (
    <div className="eventsall">
      <Navbar />
      <h3 className="evhd">Events</h3>

      <EventsNav sendDept={handleDept} />
      <EventInd sendDeptChild={data} />
      <Footer />
    </div>
  );
};

export default Events;
