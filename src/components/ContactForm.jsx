import { useState } from 'react';
import axios from "axios";

const ContactForm = () => {
  let [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = 
    async () => {
      try {
        setLoading(true);
        // Make a POST request to your backend API
        const response = await axios.post(
          import.meta.env.VITE_SERVER_URL,
          formData,
          { headers: { "Content-Type": "application/json" } }
        );
        // Check the response and show success message
        if (response.status === 200) { 
          alert('Thank you for contacting us!');
        }
        // success message
        setLoading(false);
        console.log(response.data);
      } 
      catch (error) {
        setLoading(false);
        // show error
        console.error("Error submitting the form", error);
        alert(
          `Error, ${error.message}.\nEmail not sent, please refresh and try again.`
        );
      }
    };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission
    sendEmail();
  };

  return (
    <>
      <h3>Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>
        {loading ? 'loading...' : <button type="submit">Send</button>}
      </form>
    </>
  );
};

export default ContactForm;
