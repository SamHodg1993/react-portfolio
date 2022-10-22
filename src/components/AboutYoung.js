import React from 'react';
import YoungSam from '../images/YoungSam.jpg';
import './Styles/AboutYoung.css';

function AboutYoung({scrollRight, scrollLeft}) {
  return (
  <div className='about-container-2'>
    <div className="arrow-left" onClick={() => scrollLeft()}>
      <div className="line-top-left"></div>
      <div className="line-bottom-left"></div>
    </div>
    <img  src={YoungSam} alt="Sam, young and in his prime" className='about-sect-2-img'/>

    <div className='sect-2-info-wrapper'>
      <h1 className='sect-2-title'>Young Sam</h1>
      <p className='sec-2-info details'>I have always held an intrest for tech, even as a mop headed teen &#128513;. My first notable 
        involvement in tech was when I was around 15 years old. I got my first  iPhone, the 'iPhone 5'. I 
        gained 'Jailbreak' status and loved exploring the mod stores, installing new launchers and 
        customising to my hearts content.
      </p>
      <p className='sec-2-info details'>
        One of my absolute favourite mods added cursor scroll functionality to the default keyboards 
        spacebar. Nowadays, this is a common feature, but back then, to me, this was a game changer.
        This spurred on a thirst for knowledge, to learn how tech worked and how I could become
        an 'iPhone modder'!
      </p>
      <p className='sec-2-info details'>
        This dream never came to fruition, however...
      </p>
    </div>

    <div className="arrow-right" onClick={() => scrollRight()}>
      <div className="line-top"></div>
      <div className="line-bottom"></div>
    </div>
  </div>
    
  )
}

export default AboutYoung