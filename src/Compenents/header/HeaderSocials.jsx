import React from 'react'
import {FaInstagram} from "react-icons/fa";
import {FaLinkedin}  from "react-icons/fa";
import {FaGithub}  from "react-icons/fa"
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a  href="https://github.com/Adnane-elKanbouji" target='_blank'><FaGithub/></a>
        <a  href="https://www.instagram.com/adnane_elkan/" target='_blank'><FaInstagram/></a>
        <a  href="https://www.linkedin.com/in/adnane-el-kanbouji-a06922282" target='_blank'><FaLinkedin/></a>
        
    </div>
  )
}

export default HeaderSocials
