import React from 'react'
import Navbar from "./Navbar"
import About from "./About"
import Work from "./Work"
import Edu from "./Edu"
import Hobbies from "./Hobbies"
import Skills from "./Skills"

function LeftMain() {
  return (
    <div className="left-main">
      <>
        <Navbar />
        <About />
        <Work />
        <Edu />
        <Skills/>
        <Hobbies />
      </>
    </div>
  )
}

export default LeftMain
