import React from 'react'
import "./App.css"
import RightMain from "./Components/Right-Site/RightMain"
import LeftMain from "./Components/Left-Site/LeftMain"

export default function App() {
  return (
    <div>
        <>
            <LeftMain />
            <RightMain/>
        </>
    </div>
  )
}
