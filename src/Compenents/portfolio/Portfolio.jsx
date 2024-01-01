import React from 'react'
import "./Portfolio.css";
import Img2 from "../../assets/haj3tmani.gif"
import Img1 from "../../assets/cc1.gif"
import Img3 from "../../assets/can23.gif";
import Img4 from "../../assets/qatar22.gif"
const Portfolio = () => {
  const data=[
    {
      id:1,
      image:Img1,
      title:"Projet React",
      demo:"https://adnane-elkanbouji.github.io/CC1_react/",
      github:"https://github.com/Adnane-elKanbouji/CC1_react"
    },
    {
      id:2,
      image:Img2,
      title:"Gestion de Pâtisserie",
      demo:"",
      github:""
    },
    {
      id:3,
      image:Img3,
      title:"Site de Billetterie CAN 2023",
      demo:"https://adnane-elkanbouji.github.io/MiniProjet_react/",
      github:"https://github.com/Adnane-elKanbouji/MiniProjet_react"
    },
    {
      id:4,
      image:Img4,
      title:"Gestion de Word cup Qatar 2022",
      demo:"https://adnane-elkanbouji.github.io/World_Cup/",
      github:"https://github.com/Adnane-elKanbouji/World_Cup"
    },
    

  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div  className='container portfolio__container'>
      {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article id={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
               <h3>{title}</h3>
                <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
               <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
            )
          })
        }  
       
     

     
       
 
       
      </div>
    </section >
  )
}

export default Portfolio
