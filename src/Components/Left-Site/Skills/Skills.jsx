import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SkillBar from 'react-skillbars';
import itskills from "./It_Skills"
import socialskills from "./Social_skills"
import languageskills from "./LinguisticProficiency";
import otherskills from "./Other_Skills"





function Skills() {
  useEffect(()=>{AOS.init({duration: 1500});},[]);

  return (
    <div id="skills-div" data-aos="fade-up">
      <h2>skills</h2>
        
        <div id="index1">
          <h3>social skills</h3>
          <p><SkillBar font-size={"8px"} height={20} skills={socialskills}/></p>
        </div>
        
        <div id="index2">
          <h3>informatics skills</h3>
          <p><SkillBar height={20} skills={itskills}/></p>
        </div>
      
        
        <div id="index4">
          <h3>linguistic proficiency</h3>
          <p ><SkillBar height={20} skills={languageskills}/></p>
        </div>
        <div id="index4">
          <h3>other skills</h3>
          <p ><SkillBar height={20} skills={otherskills}/></p>
        </div>
      
    
      ____________________________________________________________________
    </div>
  )
}

export default Skills