import React from 'react'
import "./Service.css";
import { BiCheck } from "react-icons/bi";

const Service = () => {
  return (
    <section id='service'>
     <h5>What I Offer</h5>
     <h2>Services</h2>

     <div className='container services__container'>
      <article className='service'>
        <div className="service__head">
          {/* UI/UX Design */}
          <h3>UI/UX Design</h3>
        </div>
        <ul className='service__list'>
       
          <li>
          <BiCheck className='service__list-icon'/>
          <p>lorem lorem lorem  lorem lorem lorem  lorem</p>
          </li>
          <li>
          <BiCheck className='service__list-icon'/>
          <p>lorem lorem lorem  lorem lorem lorem  lorem</p>
          </li>
          <li>
          <BiCheck className='service__list-icon'/>
          <p>lorem lorem lorem  lorem lorem lorem  lorem</p>
          </li>
          
          <li>
          <BiCheck className='service__list-icon'/>
          <p>lorem lorem lorem  lorem lorem lorem  lorem</p>
          </li>
          <li>
          <BiCheck className='service__list-icon'/>
          <p>lorem lorem lorem  lorem lorem lorem  lorem</p>
          </li>

        </ul>
      </article>
      {/* End of UI/UX Design */}
      <article className='service'>
        <div className="service__head">
          {/* Web Developer */}
          <h3>Web Developer</h3>
        </div>
        <ul className='service__list'>
          <li>
          <BiCheck className='service__list-icon'/>
          <p>lorem lorem lorem  lorem lorem lorem  lorem</p>
          </li>
          <li>
          <BiCheck className='service__list-icon'/>
          <p>lorem lorem lorem  lorem lorem lorem  lorem</p>
          </li>
          <li>
          <BiCheck className='service__list-icon'/>
          <p>lorem lorem lorem  lorem lorem lorem  lorem</p>
          </li>
          <li>
          <BiCheck className='service__list-icon'/>
          <p>lorem lorem lorem  lorem lorem lorem  lorem</p>
          </li>
          <li>
          <BiCheck className='service__list-icon'/>
          <p>lorem lorem lorem  lorem lorem lorem  lorem</p>
          </li>
          <li>
          <BiCheck className='service__list-icon'/>
          <p>lorem lorem lorem  lorem lorem lorem  lorem</p>
          </li>
          <li>
          <BiCheck className='service__list-icon'/>
          <p>lorem lorem lorem  lorem lorem lorem  lorem</p>
          </li>
       

        </ul>
      </article>
       {/* End of Web Developer */}
      <article className='service'>
        <div className="service__head">
          {/*  Content Create */}
          <h3> Content Create</h3>
        </div>
        <ul className='service__list'>
          <li>
          <BiCheck className='service__list-icon'/>
          <p>lorem Ahmed lorem  lorem lorem lorem  lorem</p>
          </li>
          <li>
          <BiCheck className='service__list-icon'/>
          <p>lorem lorem lorem  lorem lorem lorem  lorem</p>
          </li>
       
         
          <li>
          <BiCheck className='service__list-icon'/>
          <p>lorem lorem lorem  lorem lorem lorem  lorem</p>
          </li>
          <li>
          <BiCheck className='service__list-icon'/>
          <p>lorem lorem lorem  lorem lorem lorem  lorem</p>
          </li>
          <li>
          <BiCheck className='service__list-icon'/>
          <p>lorem lorem lorem  lorem lorem lorem  lorem</p>
          </li>

        </ul>
      </article>
      {/* End of  Content Create */}
     </div>
    </section>
  )
}

export default Service
