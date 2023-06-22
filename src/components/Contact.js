import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6lygob9', 'template_xp26kaz', form.current, 'KSzZyIIVZAPtbc77U')
      .then((result) => {
        console.log(result.text);
        alert("Email sent successfully");
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact-container" id='contact'>
      
      <div className="contact-info">
        <h2>CONTACT</h2>
        <p>
          Email: toyeshshende02@gmail.com
          <br />
          Phone: +91 9359391285
          <br />
          Address: Kondhwa Budruk, Pune-411048
        </p>
      </div>
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};
