import React, {useEffect} from 'react'
import Navbar from "./Navbar"
import Me from "./me.png"
import AOS from 'aos';
import 'aos/dist/aos.css';


function RightMain() {
  useEffect(()=>{AOS.init({duration: 1500});},[]);
  return (
    <div className="right-main" data-aos="fade-right">
    
        <Navbar />
        <div data-aos="zoom-in" id="div-image-of-me"><img id="image-of-me" src={Me} alt="Elmin Avdic"></img></div>
        
    
    </div>
  )
}

export default RightMain