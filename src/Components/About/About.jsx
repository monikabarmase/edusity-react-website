import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
      <h3>ABOUT UNIVERSITY</h3>
      <h2>Nurturing Tomorrow's Leaders Today</h2>
      <p>Our university is a center of excellence committed to academic quality,
         innovation, and holistic development. We provide a dynamic learning 
         environment where knowledge meets real-world application.</p>
      <p>With experienced faculty, modern infrastructure, and industry-focused programs,
         we empower students to think critically, grow confidently, and achieve their goals.
          Learning here goes beyond classrooms to inspire creativity and leadership. </p>
      <p>We nurture future leaders by promoting values, research, and global perspectives. 
        Our mission is to shape responsible individuals ready to make a positive impact on society.
         </p>
    </div>
    </div>
  )
}

export default About
