import React from 'react'
import Navbar from "./Navbar"
import Me from "./me.png"


function RightMain() {
  return (
    <div className="right-main">
    
        <Navbar />
        <div id="div-image-of-me"><img id="image-of-me" src={Me} alt="Elmin Avdic"></img></div>
        
    
    </div>
  )
}

export default RightMain