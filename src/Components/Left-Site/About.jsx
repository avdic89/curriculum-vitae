import React from 'react'
import adress from "./adress.png"
import sex from "./gender.png"
import birthday from "./birthday-card.png"
import phone from "./phone-call.png"
import email from "../Right-Site/email.png"
import mstatus from "./Icons/wedding-rings.png"

function About() {
  return (
    <div id="about-div">
        <h1>Elmin Avdic</h1>
        <h2>developer</h2>
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
        ____________________________________________________________________
    </div>
  )
}

export default About

