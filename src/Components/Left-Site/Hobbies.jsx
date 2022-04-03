import React from 'react'
import chess from "./Icons/chess.png"
import reading from "./Icons/book.png"
import piano from "./Icons/grand-piano.png"
import coding from "./Icons/coding.png"
import sports from "./Icons/sports.png"
import audiobooks from "./Icons/audiobook.png"


function Hobbies() {
  return (
    <div id="hobbies-div">
      <h2>hobbies</h2>
      <div id="hobby-div-left">
          <div><img id="img-right-hobbies" src={piano} alt=""></img><p><span>piano</span></p></div>
          <div><img id="img-right-hobbies" src={reading} alt=""></img><p><span>reading</span></p></div>
          <div><img id="img-right-hobbies" src={coding} alt=""></img><p><span>coding</span></p></div>
      </div>
      <div id="hobby-div-right">
          <div><img id="img-right-hobbies" src={sports} alt=""></img><p><span>sports</span></p></div>
          <div><img id="img-right-hobbies" src={chess} alt=""></img><p><span>chess</span></p></div>
          <div><img id="img-right-hobbies" src={audiobooks} alt=""></img><p><span>audiobooks</span></p></div>
      </div>
    </div>
  )
}

export default Hobbies