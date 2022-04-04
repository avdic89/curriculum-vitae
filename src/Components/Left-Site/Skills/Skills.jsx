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
      <h3>skills</h3>
        
        <div id="index1">
          <h4>social skills</h4>
          <p><SkillBar height={20} skills={socialskills}/></p>
        </div>
        
        <div id="index2">
          <h4>informatics skills</h4>
          <p><SkillBar height={20} skills={itskills}/></p>
        </div>
      
        
        <div>
          <h4>linguistic proficiency</h4>
          <p ><SkillBar height={20} skills={languageskills}/></p>
        </div>
        <div>
          <h4>other skills</h4>
          <p ><SkillBar height={20} skills={otherskills}/></p>
        </div>
    </div>
  )
}

export default Skills