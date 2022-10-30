import React, { useState } from 'react'

import AboutData from './Data/AboutData';
import SamAndSon from '../images/SamAndSon.jpg';
import YoungSam from '../images/YoungSam.jpg';
import ArmyImage from '../images/ArmyImage.jpg';
import '../App.css';
import './Styles/AboutCR.css';

import CSS from './Technologies/css3-alt.svg';
import git from './Technologies/git.svg';
import github from './Technologies/github.svg';
import html5 from './Technologies/html5.svg';
import react from './Technologies/react.svg';
import linux from './Technologies/linux.svg';
import python from './Technologies/python.svg';
import javascript from './Technologies/square-js.svg'
import sass from './Technologies/sass.svg'

export default function About() {

    const [count, setCount] = useState(0)

    const scrollRight = () => {
        if(count < 3) {
            setCount(count + 1)
        }else {
            setCount(3)
        }
    }

    const scrollLeft = () => {
        if(count > 0) {
            setCount(count - 1)
        }else {
            setCount(0)
        }
    }

    // const mountedStyle = {
    //     animation: 'inAnimation 0.9s ease-in'
    // }
    
    // const unmountedStyle = {
    //     animation: 'outAnimation 1.1s ease-out'
    // }

  return (
    <div className='about-slider' id="about">
        <div className='about-buttons'>
            <div className="arrow-left" onClick={() => scrollLeft()}>
                <div className="line-top-left"></div>
                <div className="line-bottom-left"></div>
            </div>
            <div className="arrow-right" onClick={() => scrollRight()}>
                <div className="line-top"></div>
                <div className="line-bottom"></div>
            </div>
        </div>
        <div className='about-info-container'>
            {count < 3 ? <img src={count === 0 ? SamAndSon : count === 1 ? YoungSam : ArmyImage} alt="sam in the relevent year" className='about-image'/> : 
            <div className="skills">
                <img src={html5} alt="html5" className='tech-logo'/>
                <img src={CSS} alt="css" className='tech-logo'/>
                <img src={javascript} alt="github" className='tech-logo'/>
                <img src={react} alt="react" className='tech-logo'/>
                <img src={git} alt="git" className='tech-logo'/>
                <img src={github} alt="github" className='tech-logo'/>
                <img src={linux} alt="linux" className='tech-logo'/>
                <img src={python} alt="python" className='tech-logo'/>
                <img src={sass} alt="sass" className='tech-logo'/>
            </div>}
            <div>
            <h1 className='about-header'>{AboutData[count].header}</h1>
            <p className='about-info-text'>{AboutData[count].info}</p>
            </div>
        </div>

    </div>
  )
}
