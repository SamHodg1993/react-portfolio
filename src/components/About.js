import React, { useState } from 'react'

import AboutData from './Data/AboutData';
import SamAndSon from '../images/SamAndSon.jpg';
import YoungSam from '../images/YoungSam.jpg';
import ArmyImage from '../images/ArmyImage.jpg';
import '../App.css'

export default function About() {

    const [aboutPage, setAboutPage] = useState(0);
    const [count, setCount] = useState(0)

    const scrollRight = () => {
        if(count < 3) {
            setCount(count + 1)
        }else {
            setCount(2)
        }
        setAboutPage(count);
    }

    const scrollLeft = () => {
        if(count > 0) {
            setCount(count - 1)
        }else {
            setCount(0)
        }
        setAboutPage(count);
    }

    const mountedStyle = {
        animation: 'inAnimation 0.9s ease-in'
    }
    
    const unmountedStyle = {
        animation: 'outAnimation 1.1s ease-out'
    }

  return (
    <div className='about-slider' id="about">
        <button onClick={() => scrollLeft()}>Left</button>
        <button onClick={() => scrollRight()}>Right</button>
        <img src={count === 0 ? SamAndSon : count === 1 ? YoungSam : ArmyImage} alt="sam in the relevent year" style={{width:'30%'}}/>
        <h1>{AboutData[count].header}</h1>
        <p>{AboutData[count].info}</p>

    </div>
  )
}

 