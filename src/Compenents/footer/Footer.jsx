import React from 'react'
import './Footer.css';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>DevFs 203</a>
     <ul className='pernalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#service">Service</a></li>
      <li><a href="#contact">Contact</a></li>
     </ul>
     <div className="footer__socials">
      <a href="https://www.instagram.com/adnane_elkan/"><FaInstagram className="footer__socials-icon" /></a>
      <a href=""><FaFacebookF className="footer__socials-icon" /></a>
      <a href=""><FaXTwitter className="footer__socials-icon" /></a>
     </div>
     <div className="footer_copyright">
      <small>
        &copy; ADNANE EL KANBOUGI Tutorials. All rights reserved.
      </small>
     </div>
   
    </footer>
  )
}

export default Footer
