import React from 'react'
import Navbar from "./Navbar"
import About from "./About"
import Work from "./Work"
import Edu from "./Edu"

function LeftMain() {
  return (
    <div className="left-main">
      <>
        <Navbar />
        <About />
        <Work />
        <Edu />
      </>
    </div>
  )
}

export default LeftMain
