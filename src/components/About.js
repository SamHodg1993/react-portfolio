import React from 'react'
import SamAndSon from '../images/SamAndSon.jpg'

export default function About() {
  return (
    <div className='about-container' id="about">
        <img src={SamAndSon} alt="an pic of Sam and his son" className='main-image'/>
        <div className='about-details'>
            <h3 className='about-details-item title'>I am Sam, a tech enthusiast and my career in devlopment started as just a hobby...</h3>
            <p className='about-details-item details'>For the past 10 years I have led an interesting life, starting out as an Infantryman in 
                the British Army and more recently a Truck Driver in Scotland. All the while I have been
                persuing my passion for tech and devleoping. Currently I am most confident devleoping in 
                React and Typescript using Redux for state management. However my list of competencies is 
                forever growing. If you like what you hear, dont be a stranger, get in touch...
            </p>
        </div>
    </div>
  )
}

 