import React, {useEffect} from 'react'
import circle from "./circle.png"
import circlef from "./circleFull.png"
import AOS from 'aos';
import 'aos/dist/aos.css';



function stars(number){
    var imgs = <img id="img-right-skills" src={require('./circle.png')} alt=""></img>;
    for(let i = 0; i===number; i++){
      var clones = imgs.cloneNode(true)
    }
    
    return clones
  
}

function Skills() {
  useEffect(()=>{AOS.init({duration: 1500});},[]);
  return (
    <div id="skills-div" data-aos="fade-up">
      <h2>skills</h2>
      <div>
        <div>
          <h3>social skills</h3>
          <p>empathic <span>{stars(5)}</span></p>
        </div>
        <div>
          <h3>informatics skills</h3>
          <p></p>
        </div>
      </div>
      <div>
        <div>
          <h3>other sills</h3>
        </div>
        <div>
          <h3>linguistic proficiency</h3>
        </div>
      </div>
      ____________________________________________________________________
    </div>
  )
}

export default Skills