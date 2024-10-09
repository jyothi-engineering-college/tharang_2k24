import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { supabase } from '../../Supabaseconffig'; // Import Supabase client
import './lucky.css';
import '../Admin/form.css';

const Lucky = () => {
  const [personname, setPersonName] = useState('');
  const [personphone, setPersonPhone] = useState('');
  const [personcollege, setPersonCollege] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if the user with this phone number has already submitted
      const { data: existingEntry, error: fetchError } = await supabase
        .from('lucky_people')
        .select('*')
        .eq('personphone', personphone); // Restrict by phone number

      if (fetchError) {
        console.error('Error checking existing submissions:', fetchError);
        return;
      }

      if (existingEntry.length > 0) {
        alert('User has already registered for the lucky draw!');
        return;
      }

      // Insert the form data into the `lucky_people` table in Supabase
      const { data, error } = await supabase
        .from('lucky_people')
        .insert([
          {
            personname: personname,
            personphone: personphone,
            personcollege: personcollege,
          },
        ]);

      if (error) {
        console.error('Error submitting form:', error);
      } else {
        console.log('Form submitted successfully:', data);
        alert('Your entry has been submitted!');
      }
    } catch (error) {
      console.error('Error during submission:', error);
    }
  };

  return (
    <div className="luckyl">
      <Navbar />
      <div className="luckyh">
        <h3>The Lucky Vault</h3>
        <p>"We are excited to announce a special Lucky Draw competition as part of the Tharang Tech Fest website! Participate for a chance to win from a prize pool of ₹1,000. Don’t miss out on this exciting opportunity—enter now and try your luck!"</p>
        <div className="ppool1">
          <h3 className="ppool">1st Prize : Rs.500 Amazon Voucher</h3>
          <h3 className="ppool">2nd Prize : Rs.300 Flipkart Voucher</h3>
          <h3 className="ppool">3rd Prize : Rs.200 Mobile Recharge</h3>
        </div>
        <form className="submitform" onSubmit={handleSubmit}>
          <p>Name</p>
          <input
            className="submitselect"
            type="text"
            placeholder="name"
            value={personname}
            onChange={(e) => setPersonName(e.target.value)}
            required
          />
          <p>Phone No</p>
          <input
            className="submitselect"
            type="number"
            placeholder="Phone Number"
            value={personphone}
            onChange={(e) => setPersonPhone(e.target.value)}
            required
          />
          <p>College</p>
          <input
            className="submitselect"
            type="text"
            placeholder="College"
            value={personcollege}
            onChange={(e) => setPersonCollege(e.target.value)}
            required
          />
          <button type="submit" className="submitbutton">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Lucky;
