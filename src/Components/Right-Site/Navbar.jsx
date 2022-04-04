import React, {useEffect} from 'react'
import github from "./Icons/github.png"
import linkedin from "./Icons/linkedin.png"
import email from "./Icons/email.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar() {
  useEffect(()=>{AOS.init({duration: 1500});},[]);
  return (
    <div data-aos="fade-down">
        <ul>
            
                    <li className="navbar-main">  
                        <a className="Navbar-right" href="https://github.com/avdic89"><img id="navbar-img-left" src={github} alt="github"></img></a>
                    </li>
                    <li className="navbar-main">  
                        <a className="Navbar-right" href="https://www.linkedin.com/in/elmin-avdic-679415156/"><img id="navbar-img-left" src={linkedin} alt="linkedin"></img></a>
                    </li>
                    <li className="navbar-main">  
                        <a className="Navbar-right" href="https://github.com/avdic89"><img id="navbar-img-left" src={email} alt="e-mail"></img></a>
                    </li>
          
        </ul>
        
    </div>
  )
}

export default Navbar
