import React, {useEffect} from 'react'
import EduItems from "./EduItems"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Edu() {
  useEffect(()=>{AOS.init({duration: 1500});},[]);
  return (
    <div id="edu-div" data-aos="fade-up">
         <h3>education</h3>
        {EduItems.map((item, index) => {
            return(
                <div>
                    <p className={item.cName} key={index}>{item.date} </p>
                    <p><span>{item.university}</span></p>
                    <p className={item.cName}><span>{item.degree}</span></p>
                </div>
            )
        })}
    </div>
  )
}

export default Edu;