import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { MdTextsms } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_isy68bb', 'template_ikxhwzl', form.current, '-LkP4Z3SNI_Yhbt8D')
    e.target.reset();
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__choices">
          <article className="contact__choice">
            <HiOutlineMail className="contact__choice-icon"/>
            <h4>Email</h4>
            <h5>gargprafull55@gmail.com</h5>
            <a
              href="mailto:gargprafull55@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__choice">
            <MdTextsms className="contact__choice-icon"/>
            <h4>SMS</h4>
            <h5>+91 8854863969</h5>
            <a href="sms:+8854863969">Send a message</a>
          </article>
          <article className="contact__choice">
            <IoLogoWhatsapp className="contact__choice-icon" />
            <h4>Whatsapp</h4>
            <h5>+91 8854863969</h5>
            <a href="https://wa.me/918854863969/?text=Hi Prafull, Whatsup"  rel="noreferrer" target="_blank">
              Click to Chat
            </a>
          </article>
        </div>
        {/* End Of choices */}
        <form ref={form} onSubmit={sendEmail}> 
          <input type="text" name="name" placeholder="Your Full Name"  required/> 
          <textarea  name="message" placeholder="Your Meassage" rows="7" required/>
          <button type="submit" className="btn btn-primary">Send Message</button> 
        </form>
      </div>
    </section>
  );
};

export default Contact;
