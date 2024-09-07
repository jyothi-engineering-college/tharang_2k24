import React from 'react';
import CodooTharang from "../../img/code+.jpeg";
import LsTg from "../../img/lasertag.jpg";
import VrFu from "../../img/vr4u.jpg";
import Playtopia from "../../img/playtopia.jpg";

function EventInd() {
  return (
    <div className='evegrid'>
       {/* CODE */}
        <div className="ecardi">
           
            <div className="event-card">
              <div className="econtainer">
                <img className='codooo' src={CodooTharang} alt="Event" />
                <div className="eoverlay">
                  <h3 className='etext'>Code +</h3>
                  <p>EAB 415 | 2 OCT | 10.00am</p>

                </div>
              </div>
            </div> 
        </div>
        {/* CODE */}
        {/* LASERT */}
        <div className="ecardi">
           
            <div className="event-card">
              <div className="econtainer">
                <img className='codooo' src={LsTg} alt="Event" />
                <div className="eoverlay">
                  <h3 className='etext'>Laser Tag</h3>
                  <p>EAB 415 | 2 OCT | 10.00am</p>

                </div>
              </div>
            </div> 
        </div>
        {/* hi */}
        {/* hi */}
        <div className="ecardi">
           
            <div className="event-card">
              <div className="econtainer">
                <img className='codooo' src={VrFu} alt="Event" />
                <div className="eoverlay">
                  <h3 className='etext'>Vr4u</h3>
                  <p>EAB 415 | 2 OCT | 10.00am</p>

                </div>
              </div>
            </div> 
        </div>
        {/* hi */}
        {/* hi */}
        <div className="ecardi">
           
            <div className="event-card">
              <div className="econtainer">
                <img className='codooo' src={Playtopia} alt="Event" />
                <div className="eoverlay">
                  <h3 className='etext'>Playtopia</h3>
                  <p>EAB 415 | 2 OCT | 10.00am</p>

                </div>
              </div>
            </div> 
        </div>
        {/* hi */}
    </div>
  )
}

export default EventInd;