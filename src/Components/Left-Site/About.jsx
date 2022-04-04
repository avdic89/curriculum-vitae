import React, {useEffect} from 'react'
import adress from "./Icons/adress.png"
import sex from "./Icons/gender.png"
import birthday from "./Icons/birthday-card.png"
import phone from "./Icons/phone-call.png"
import email from "../Right-Site/Icons/email.png"
import mstatus from "./Icons/wedding-rings.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(()=>{AOS.init({duration: 1500});},[]);
  return (
    
    <div id="about-div" data-aos="fade-up">
        <h1>Elmin Avdic</h1>
        <h2>junior developer</h2>
        <div id="about-div-left">
            <div><img id="img-right" src={phone} alt=""></img><p>phone <span id="span">+49 162 7635312</span></p></div>
            <div><img id="img-right" src={adress} alt=""></img><p>adress <span>weil der stadt, germany</span></p></div>
            <div><img id="img-right" src={sex} alt=""></img><p>sex <span>male</span></p></div>
        </div>
        <div id="about-div-right">
            <div><img id="img-right" src={email} alt=""></img><p>e-mail <span>avdic89@hotmail.de</span></p></div>
            <div><img id="img-right" src={birthday} alt=""></img><p>birthdate <span>13 july 1989</span></p></div>
            <div><img id="img-right" src={mstatus} alt=""></img><p>marital status <span>single</span></p></div>
        </div>
        <div id="space"></div>
    </div>
    
  )
}

export default About

