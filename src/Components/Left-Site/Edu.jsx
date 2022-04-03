import React from 'react'
import EduItems from "./EduItems"

function Edu() {
  return (
    <div id="edu-div">
         <h2>education</h2>
        {EduItems.map((item, index) => {
            return(
                <div>
                    <p className={item.cName} key={index}>{item.date} <span>{item.university}</span></p>
                    <p className={item.cName}><span>{item.degree}</span></p>
                    {item.end}
                </div>
            )
        })}
    </div>
  )
}

export default Edu;