import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../Supabaseconffig";

const Form = () => {
  const [deptName, setDeptName] = useState("");
  const [eventName, setEventName] = useState("");
  const [locationDateTime, setLocationDateTime] = useState("");
  const [description, setDescription] = useState("");
  const [driveLink, setDriveLink] = useState("");
  const [googleFormLink, setGoogleFormLink] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Check if the user is authenticated
  useEffect(() => {
    const userSession = localStorage.getItem("userSession");
    if (!userSession) {
      navigate("/login");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const locationDateTimeRegex =
      /^.+ \| \d{1,2} [a-zA-Z]{3} \| \d{1,2}\.\d{2}(am|pm)$/;
    if (!locationDateTimeRegex.test(locationDateTime)) {
      setError(
        "Location | Date | Time must be in the format: EAB 415 | 2 oct | 10.00am"
      );
      return;
    }

    const { error: supabaseError } = await supabase.from("events").insert([
      {
        department: deptName,
        event_name: eventName,
        loc_dt_tm: locationDateTime,
        description: description,
        poster_url: driveLink,
        registerlink: googleFormLink,
        contact: contact,
      },
    ]);

    if (supabaseError) {
      console.log(supabaseError);
      setError(supabaseError.message);
    } else {
      setSuccess("Event saved successfully!");
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ color: "wheat" }}>
      <label>
        Department Name:
        <select
          value={deptName}
          onChange={(e) => setDeptName(e.target.value)}
          required
        >
          <option value="">Select Department</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="MECH">MECH</option>
        </select>
      </label>
      <br />

      <label>
        Event Name:
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Location | Date | Time (format:EAB 415 | 2 oct | 10.00am):
        <input
          type="text"
          value={locationDateTime}
          onChange={(e) => setLocationDateTime(e.target.value)}
          placeholder="Location | yyyy-mm-dd | hh:mm"
          required
        />
      </label>
      <br />

      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </label>
      <br />

      <label>
        Contact:
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Enter phone number"
          required
        />
      </label>
      <br />

      <label>
        Drive Link:
        <input
          type="url"
          value={driveLink}
          onChange={(e) => setDriveLink(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Google Form Link:
        <input
          type="url"
          value={googleFormLink}
          onChange={(e) => setGoogleFormLink(e.target.value)}
          required
        />
      </label>
      <br />

      <button type="submit">Submit</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </form>
  );
};

export default Form;
