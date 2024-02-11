import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  

  emailjs.sendForm('service_6n0j4am', 'template_sah6fxc', form.current, '_elpkSEn77eg6t-mW')
  .then((result) =>{
    console.log(result.text);
    e.target.reset();
    alert('Email sent !')
  }, (error)=>{
    console.log(error.text);
  });
};
  
  return (
   <>
     <section id='contact'>
     <div className="contact-name"><h3>Contact Me</h3></div>
     <div className="form-container">
     <form ref={form} onSubmit={sendEmail}  >
          <input type="text" placeholder='Your Name' name='your_name' />
          <input type="email" placeholder='Your Email' name='your_email' />
          <input type="password" placeholder='Your Password' />
          <textarea name="massage" cols="50" rows="10" placeholder='Your Massage' ></textarea>
          <button type='submit' className='email-btn' value="send">Send Email</button>
     </form>

     </div>
     </section>
   </>
  )
}

export default Contact;