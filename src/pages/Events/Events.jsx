import EventInd from "../../components/Events/EventInd"
import EventsNav from "../../components/Events/EventsNav"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import "./Events.css"
const Events = () => {
  return (
    <div className="eventsall">
    <Navbar/>
    <h3 className="evhd">Events</h3>
    
    <EventsNav/>
    <EventInd/>
    <Footer/>    
    </div>
  )
}

export default Events
