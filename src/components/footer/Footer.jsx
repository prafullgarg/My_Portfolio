import React from "react";
import "./footer.css";
import {AiFillFacebook} from 'react-icons/ai'
import {RiInstagramFill} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>
      <a href="/" className="footer__logo">
        Portfolio
      </a>
      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facbook.com"><AiFillFacebook/></a>
        <a href="https://instagram.com"><RiInstagramFill/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Prafull Garg. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
