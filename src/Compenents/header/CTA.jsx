import React from 'react'
import CV from "../../assets/CV-ADNANE-ElKANBOUGI.pdf"
const CTA = () => {
  return (
    <div className='cta' >
      <a  href={CV}  className='btn' download>Download CV</a>
      <a href="#contact" className='btn btn-primary ' >let's Talk</a>
    </div>
  )
}

export default CTA
