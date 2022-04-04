import React, {useEffect} from 'react'
import Navbar from "./Navbar"
import Me from "./Icons/me.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const CurrentYear = new Date().getFullYear();
const Phrase_1 = 'Copyright \u00A9';
const Phrase_2 = "created by Elmin Avdic";
const copyright = `${Phrase_1} ${CurrentYear} ${Phrase_2}`;

function RightMain() {
  useEffect(()=>{AOS.init({duration: 1500});},[]);
  return (
    <div className="right-main" data-aos="fade-right">
    
        <Navbar />
        <div data-aos="zoom-in" id="div-image-of-me"><img id="image-of-me" src={Me} alt="Elmin Avdic"></img></div>
        <p id="copyright">{copyright}</p>
  
    </div>
  )
}

export default RightMain