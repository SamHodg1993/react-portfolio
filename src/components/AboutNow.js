import React from 'react';
import './Styles/AboutNow.css';
import CSS from './Technologies/css3-alt.svg';
import git from './Technologies/git.svg';
import github from './Technologies/github.svg';
import html5 from './Technologies/html5.svg';
import react from './Technologies/react.svg';
import linux from './Technologies/linux.svg';
import ubuntu from './Technologies/ubuntu.svg';
import javascript from './Technologies/square-js.svg'

function AboutNow({scrollRight, scrollLeft}) {
  return (
    <div className='about-container-now'>
        <div className="arrow-left" onClick={() => scrollLeft()}>
            <div className="line-top-left"></div>
            <div className="line-bottom-left"></div>
        </div>
        <div className="skills">
            <img src={html5} alt="html5" className='tech-logo'/>
            <img src={CSS} alt="css" className='tech-logo'/>
            <img src={javascript} alt="github" className='tech-logo'/>
            <img src={react} alt="react" className='tech-logo'/>
            <img src={git} alt="git" className='tech-logo'/>
            <img src={github} alt="github" className='tech-logo'/>
            <img src={linux} alt="linux" className='tech-logo'/>
            <img src={ubuntu} alt="ubuntu" className='tech-logo'/>
        </div>
        <div className="sect-now-info-wrapper">
            <h1 className='sect-now-title'>Now</h1>
            <p className='now-info'>Nowadays I spend my free time volunteering at the <span>
                <a href='https://www.scottishtecharmy.org/' target="_blank" rel="noreferrer" className='STA'>Scottish Tech Army</a>
                </span>, Learning and experimenting with new Languages, frameworks and packages and crafting custom software 
                solutions for local small businesses, gaming and spending time with my family and friends.
            </p>

            <p>I am enthusiastic and motivated with all things tech. </p>
        </div>
    </div>
  )
}

export default AboutNow