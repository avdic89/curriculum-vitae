import React, {useEffect} from 'react'
import WorkItems from "./WorkItems"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Work() {
  useEffect(()=>{AOS.init({duration: 1500});},[]);
  return (
    <div id="work-div" data-aos="fade-up" >
        <h3>work experience</h3>
        {WorkItems.map((item, index) => {
          return(
            <div>
            <p key={index}>{item.date} <span></span></p>
            <p><span>{item.company}</span></p>
            <p><span>{item.position}</span></p>
            <p><span>{item.explination}</span></p>
            </div>
          )
        })}
        
        
    </div>
  )
}

export default Work