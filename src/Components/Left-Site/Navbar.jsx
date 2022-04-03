import React from 'react'
import NavbarItems from "./NavbarItems"



function Navbar() {
  return (
    <div id="navbar-div">
        <ul>
        {NavbarItems.map((item, index)=>{
          return(
            <li className="navbar-main" key={index}>
              <a className={item.cName} href={item.href}>{item.titel}</a>
            </li>
          )
        })}
        </ul>
    </div>
  )
}

export default Navbar;