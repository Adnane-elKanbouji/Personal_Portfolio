import React from 'react';
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
       <div className='experience__frontend'>
        <h3>Frontend Development</h3>
        <div className='experience__content'>
       <article className='experience__details'>
       <BsPatchCheckFill className='experience__details-icon' />
       <div>
       <h4>HTML</h4>
       <small className='text-light'>Experienced</small>
       </div>
       </article>
       <article className='experience__details'>
       <BsPatchCheckFill className='experience__details-icon' />
       <div>
       <h4>CSS</h4>
       <small className='text-light'>Experienced</small>
       </div>
       </article>
       <article className='experience__details'>
       <BsPatchCheckFill className='experience__details-icon' />
       <div>
       <h4>JAVASCRIPT</h4>
       <small className='text-light'>Experienced</small>
       </div>
       </article>
       <article className='experience__details'>
       <BsPatchCheckFill className='experience__details-icon' />
      <div>
      <h4>BOOTSTRAP</h4>
       <small className='text-light'>Experienced</small>
      </div>
       </article>
       <article className='experience__details'>
       <BsPatchCheckFill className='experience__details-icon' />
     <div>
     <h4>TAILWIND</h4>
       <small className='text-light'>Intermediate</small>
     </div>
       </article>
       <article className='experience__details'>
       <BsPatchCheckFill className='experience__details-icon' />
     <div>
     <h4>REACT</h4>
       <small className='text-light'>Experienced</small>
     </div>
       </article>
      
        </div>
       </div>
       <div className='experience__backend'>
       <h3>Backend Development</h3>
        <div className='experience__content'>
       <article className='experience__details'>
       <BsPatchCheckFill className='experience__details-icon' />
      <div>
      <h4>Laravel</h4>
       <small className='text-light'>Experienced</small>
      </div>
       </article>
       <article className='experience__details'>
       <BsPatchCheckFill className='experience__details-icon' />
       <div>
       <h4>Node Js</h4>
       <small className='text-light'>Experienced</small>
       </div>
       </article>
       <article className='experience__details'>
       <BsPatchCheckFill className='experience__details-icon' />
       <div>
       <h4>PHP</h4>
       <small className='text-light'>Experienced</small>
       </div>
       </article>
       <article className='experience__details'>
       <BsPatchCheckFill className='experience__details-icon' />
      <div>
      <h4>Python</h4>
       <small className='text-light'>Experienced</small>
      </div>
       </article>
       <article className='experience__details'>
       <BsPatchCheckFill className='experience__details-icon' />
     <div>
     <h4>MongoDB</h4>
       <small className='text-light'>Intermediate</small>
     </div>
       </article>
       <article className='experience__details'>
       <BsPatchCheckFill className='experience__details-icon' />
       <div>
       <h4>MySQL</h4>
       <small className='text-light'>Experienced</small>
       </div>
       </article>
      
        </div>
       </div>
       
      </div>
    </section>
  )
}

export default Experience

