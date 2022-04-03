import React from 'react'
import WorkItems from "./WorkItems"

function Work() {
  return (
    <div id="about-div">
        <h2>work expirience</h2>
        {WorkItems.map((item, index) => {
          return(
            <div>
            <p key={index}>{item.date} <span>{item.company}</span></p>
            <p><span>{item.position}</span></p>
            {item.end}
            </div>
          )
        })}
        
        
    </div>
  )
}

export default Work