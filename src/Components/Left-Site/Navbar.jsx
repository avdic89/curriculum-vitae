import React, {useEffect} from 'react'
import NavbarItems from "./NavbarItems"
import AOS from 'aos';
import 'aos/dist/aos.css';



function Navbar() {
  useEffect(()=>{AOS.init({duration: 1500});},[]);
  return (
    <div id="navbar-div" data-aos="fade-down">
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