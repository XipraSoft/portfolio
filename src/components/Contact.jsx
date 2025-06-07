import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='cover' id='contact'>
        <h2 id='main'>Contact <span id='me'>Me!</span></h2>
    <div className="contact-form">
      <div className="form-grid">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="text" placeholder="Subject" />
        <input type="text" placeholder="Your Phone" />
        <textarea placeholder="Your Message"></textarea>
      </div>
      <button className="submit-button">Send Message</button>
    </div>
    </div>
  );
};

export default Contact;