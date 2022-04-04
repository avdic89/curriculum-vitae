import React from 'react'
import Navbar from "./Navbar/Navbar"
import About from "./About"
import Work from "./Work/Work"
import Edu from "./Edu/Edu"
import Hobbies from "./Hobbies"
import Skills from "./Skills/Skills"

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
