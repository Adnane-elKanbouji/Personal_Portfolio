import React from 'react'
import Header from './Compenents/header/Header';
import Nav from './Compenents/nav/Nav';
import About from './Compenents/about/About';
import Service from './Compenents/sevice/Service';
import Experience from './Compenents/experience/Experience';
import Footer from './Compenents/footer/Footer';

import Contact from './Compenents/contact/Contact';
import "./index.css";
import Portfolio from './Compenents/portfolio/Portfolio';
const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    
    <Service/>
    <Portfolio/>
    <Contact/>
   
    <Footer/>
    
    
    </>
  )
}

export default App
