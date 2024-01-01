import React from 'react'
import "./About.css";
import ME from "../../assets/me_about.jpg";
import { FaAward } from "react-icons/fa6";
import { LuUsers2 } from "react-icons/lu";
import { VscFolderActive } from "react-icons/vsc";
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>About me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME}  alt="about Image" />
          </div>

        </div>
 <div className='about__content'>
   <div className="about__cards">
    <article className='about__card'>
     <FaAward className='about__icon' />
        <h5>Experience</h5>
        <small> 2+ Years <br /> Working</small>
    </article>
    <article className='about__card'>
     <LuUsers2  className='about__icon' />
        <h5>Clients</h5>
        <small>10+ Woldwide </small>
    </article>
    <article className='about__card'>
    <VscFolderActive className='about__icon' />
        <h5>Projects</h5>
        <small> 10+ Completed</small>
    </article>
   </div>
   <p>Holder of a Specialized Technician
diploma in  digital development, I
am currently seeking an internship
in companies or public structures
to apply my knowledge in digital
development. This profession
fulfills me as I have a perfect
mastery of web development
languages and I am versatile in
computer science. </p>

     <a href="#contact" className='btn btn-primary'>Let's Talk</a>
 </div>
      </div>
    </section>
  )
}

export default About