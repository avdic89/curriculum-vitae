import React from 'react'
import leftarrow from "../Icons/leftarrow.png";
import rightarrow from "../Icons/rightarrow.png"

function BtnSlider(moveSlide, direction) {
  return (
    <button onClick={moveSlide} className={direction === "next" ? "btn-slide next": "btn-slide prev"}>
        <img src={direction === "next" ? rightarrow : leftarrow} alt=""></img>
    </button>
  )
}

export default BtnSlider