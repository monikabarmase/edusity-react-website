import React from 'react'
import'./Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure better education for a better world.</h1>
        <p>Obtaining a quality education is the foundation to creating sustainable development.
        In addition to improving quality of life, access to inclusive education can help equip
        locals with the tools required to develop 
        innovative solutions to the world's greatest problems.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
