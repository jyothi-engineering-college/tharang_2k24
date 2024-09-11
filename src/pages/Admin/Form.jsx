import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import './form.css';
import Jyolog from "../../img/jyosmall.png";
import Tharangam from "../../img/tharangsmall.png";
import { supabase } from "../../Supabaseconffig";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeqgUErZvfAE2ODyXjTfCxSJnYKo-qhRg",
  authDomain: "tharang-b7367.firebaseapp.com",
  projectId: "tharang-b7367",
  storageBucket: "tharang-b7367.appspot.com",
  messagingSenderId: "7396366719",
  appId: "1:7396366719:web:734bbc6b84b9239c12624a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const Form = () => {
  const [deptName, setDeptName] = useState("");
  const [eventName, setEventName] = useState("");
  const [locationDateTime, setLocationDateTime] = useState("");
  const [description, setDescription] = useState("");
  const [poster, setPoster] = useState(null); // For storing selected poster
  const [posterURL, setPosterURL] = useState(""); // URL to store in the database
  // const [fileError, setFileError] = useState("");
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

  // Handle file input change
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
  
    if (!file) {
      setError("Please select a file.");
      return;
    }
  
    // Check if the file is less than 1MB
    if (file.size > 1 * 1024 * 1024) {
      setError("File size must be less than 1 MB.");
      return;
    }
  
    // Check if the image is in 1:1 ratio
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = async () => {
      if (img.width !== img.height) {
        setError("Image must be in 1:1 ratio.");
        return;
      }
  
      // Clear error and set the poster file
      setError("");
      setPoster(file);
  
      // Upload the file to Firebase Storage
      const storageRef = ref(storage, `posters/${file.name}`);
      try {
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        setPosterURL(downloadURL); // Set the download URL for database storage
      } catch (uploadError) {
        setError("Failed to upload poster image.");
      }
    };
  
    img.onerror = () => {
      setError("Invalid image file.");
    };
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // // Validate input fields
    // const locationDateTimeRegex =
    //   /^.+ \| \d{1,2} [a-zA-Z]{3} \| \d{1,2}\.\d{2}(am|pm)$/;
    // if (!locationDateTimeRegex.test(locationDateTime)) {
    //   setError(
    //     "Location | Date | Time must be in the format: EAB 415 | 2 oct | 10.00am"
    //   );
    //   return;
    // }

    // Check if the poster URL is available
    if (!posterURL) {
      setError("Please upload the poster image first.");
      return;
    }

    // Insert data into the database (replace with your database logic)
    const { error: supabaseError } = await supabase.from("events").insert([
      {
        department: deptName,
        event_name: eventName,
        loc_dt_tm: locationDateTime,
        description: description,
        poster_url: posterURL, // Use the Firebase Storage URL
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

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
  
    if (error) {
      console.error("Error logging out:", error.message);
    } else {
      // Clear the session data from localStorage
      localStorage.removeItem("userSession");
      navigate("/login"); // Redirect to login page or any other desired page
    }
  };

  return (
    <>
      <div className="loghd">
        <img src={Tharangam} alt="tharang" />
        <img src={Jyolog} alt="jyohi" />
      </div>
      <p className="submithead">Event Submission Form</p>
      <div className="submitform">
        <p>Department</p>
        <select
          className="submitselect"
          value={deptName}
          onChange={(e) => setDeptName(e.target.value)}
          required
        >
          <option value="">Select Department</option>
          <option value="AD">AD</option>
          <option value="BSH">BSH</option>
          <option value="CE">CE</option>
          <option value="CSE">CSE</option>
          <option value="CY">CY</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="ME">ME</option>
          <option value="MR">MR</option>
          <option value="RA">RA</option>
        </select>
        <p>Event Name</p>
        <input
          className="submitselect"
          type="text"
          placeholder="Event name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />
        <p>Location | Date | Time</p>
        <input
          className="submitselect"
          type="text"
          value={locationDateTime}
          onChange={(e) => setLocationDateTime(e.target.value)}
          placeholder="Location | yyyy-mm-dd | hh:mm"
          required
        />
        <h3 className="submitspec">NB: format: EAB 415 | 2 oct | 10.00am</h3>
        <p>Description</p>
        <textarea
          className="submitselect"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <p>Contact</p>
        <input
          className="submitselect"
          type="number"
          placeholder="Contact no"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
        <p>Poster Image</p>
<input
  className="submitselect"
  type="file"
  accept="image/*"
  onChange={handleFileChange}
  required
/>
{error && <h3 className="submitspec" style={{ color: "red" }}>{error}</h3>}
{posterURL && (
  <p>
    Poster uploaded successfully! <br />
    <a href={posterURL} target="_blank" rel="noopener noreferrer">
      View Poster
    </a>
  </p>
)}
        <p>Google Form Link</p>
        <input
          className="submitselect"
          type="url"
          value={googleFormLink}
          onChange={(e) => setGoogleFormLink(e.target.value)}
          required
        />
        <button onClick={handleSubmit}>Submit</button>
        
      </div>
      <button className="poyko" onClick={handleLogout}>Logout</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </>
  );
};

export default Form;
