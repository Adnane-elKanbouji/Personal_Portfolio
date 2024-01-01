import React from 'react'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
   
    emailjs.sendForm('service_sxl0goh', 'template_z4pbfoj', form.current, 'nQgxhMo0NOpy5pdzv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
   e.target.reset();
      
  };
  
  return (
    <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>
     <div className='container contact__container'>
         <div className="contact__options">
          <article className='contact__option'>
          <HiOutlineMail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>adnaneelkanbouji@gmail.com</h5>
              <a href="mailto:adnaneelkanbouji@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
          <FaWhatsapp  className='contact__option-icon' /> 
              <h4>WhatsApp</h4>
              <h5>+212 6 17 65 39 24 </h5>
              <a href="https://api.whatsapp.com/send?phone=0617653924" target='_blank'>Send a message</a>
          </article>
          {/* END OF CONTACT OPTIONS */}
         </div>
         <form ref={form} onSubmit={sendEmail}>
           <input type="text" name="name"  placeholder='Your Full Name' id="" required/>
           <input type="email" name="email"  placeholder='Your Email' id=""  required/>
           <textarea name="message" id=""  rows="7" placeholder='Your Message' required></textarea>
           <button type='submit' className='btn btn-primary'>Send Message</button>

         </form>
     </div>
    </section >
  )
}

export default Contact
