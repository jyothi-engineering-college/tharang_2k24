import React, { useEffect, useState } from "react";
import "./countdown.css";
import 'animate.css';

export default function Countdown() {
  const calculateTimeLeft = () => {
    const endDate = new Date("2024-10-02T00:00:00"); // Target date
    const now = new Date();
    const difference = endDate - now;

    if (difference <= 0) {
      return 0; // Time has passed
    }

    return Math.floor(difference / 1000); // Convert milliseconds to seconds
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    if (time <= 0) return; // Stop the interval if the time is up

    const timer = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [time]);

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(time / (24 * 3600));
  const hours = Math.floor((time % (24 * 3600)) / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div className="countdown animate__animated animate__flipInX animate__zoomInDown">
      <div className="countdown-container">
        <div className="time-unit">
          <span className="time-value">{`${days}`.padStart(2, '0')}</span>
          <span className="time-label">Days</span>
        </div>
        <div className="time-unit">
          <span className="time-value">{`${hours}`.padStart(2, '0')}</span>
          <span className="time-label">Hours</span>
        </div>
        <div className="time-unit">
          <span className="time-value">{`${minutes}`.padStart(2, '0')}</span>
          <span className="time-label">Minutes</span>
        </div>
        <div className="time-unit">
          <span className="time-value">{`${seconds}`.padStart(2, '0')}</span>
          <span className="time-label">Seconds</span>
        </div>
      </div>
    </div>
  );
}
