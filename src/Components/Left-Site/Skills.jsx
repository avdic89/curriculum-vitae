import React from 'react'
import circle from "./circle.png"
import circlef from "./circleFull.png"


function stars(number){
  for (let i =0; i<number+1; i++) {
    var full = 0;
    full = number*circle
    return full
  }
}


function Skills() {
  return (
    <div id="skills-div">
      <h2>skills</h2>
      <div>
        <div>
          <h3>social skills</h3>
          <p>empathic <span><img id="img-right-skills" src={circle} alt=""></img></span></p>
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