import React from 'react';
import ArmyImage from '../images/ArmyImage.jpg';
import './Styles/AboutArmy.css';

function AboutArmy({scrollRight, scrollLeft}) {
  return (
    <div className='about-container-3'>
    <div className="arrow-left" onClick={() => scrollLeft()}>
      <div className="line-top-left"></div>
      <div className="line-bottom-left"></div>
    </div>
        
        <img src={ArmyImage} alt="Sam and some of his fellow soldiers in their Number 1 Military dress" className='about-sect-3-img'/>
        <div className='sect-3-info-wrapper'>
            <h1 className='sect-3-title'>Army</h1>
            <p className='sect-3-info'>Overall I spent just under 8 years serving in the British Army. After completing basic training in Caterick, 
                England, I moved to my first Battalion, 5 Scots, Royal Regiment of Scotland (The Argyle and Sutheland Highlanders).
            </p>
            <p className='sect-3-info'>5 Scots were disbanded in 2013. At which time I was placed in 2 Scots, Royal Regiment of Scotland (Royal Higland 
                Fusiliers). Here I was placed in the Motor Transport Platoon and focussed on becoming a driving instructor. Training soldiers
                to drive in a range of military vehicles in challenging environments, competently and safely. Developing each individual to reach their
                full potential and solidify their tactical training.</p>
        </div>
        <div className="arrow-right" onClick={() => scrollRight()}>
            <div className="line-top"></div>
            <div className="line-bottom"></div>
        </div>
    </div>
  )
}

export default AboutArmy