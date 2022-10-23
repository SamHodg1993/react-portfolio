import React, { useState } from 'react'

import AboutYoung from './AboutYoung';
import AboutSectMain from './AboutSectMain';
import AboutArmy from './AboutArmy';
import AboutNow from './AboutNow'

export default function About() {

    const [aboutPage, setAboutPage] = useState('default');

    const scrollRight = () => {
        if(aboutPage === 'default') {
            setAboutPage('sect2');
        }
        if(aboutPage === 'sect2') {
            setAboutPage('army');
        }
        if(aboutPage === 'army') {
            setAboutPage('now');
        }
    }

    const scrollLeft = () => {
        if(aboutPage === 'now') {
            setAboutPage('army');
        }
        if(aboutPage === 'army') {
            setAboutPage('sect2');
        }
        if(aboutPage === 'sect2') {
            setAboutPage('default');
        }
    }

    const mountedStyle = {
        animation: 'inAnimation 0.9s ease-in'
    }
    
    const unmountedStyle = {
        animation: 'outAnimation 1.1s ease-out'
    }

  return (
    <div className='about-slider' id="about">
        {aboutPage === 'default' && <AboutSectMain scrollRight={scrollRight} mountedStyle={mountedStyle} unmountedStyle={unmountedStyle} aboutPage={aboutPage}/>}
        {aboutPage === 'sect2' && <AboutYoung scrollRight={scrollRight} scrollLeft={scrollLeft} mountedStyle={mountedStyle} unmountedStyle={unmountedStyle} aboutPage={aboutPage}/>}
        {aboutPage === 'army' && <AboutArmy scrollRight={scrollRight} scrollLeft={scrollLeft} mountedStyle={mountedStyle} unmountedStyle={unmountedStyle} aboutPage={aboutPage}/>}
        {aboutPage === 'now' && <AboutNow scrollRight={scrollRight} scrollLeft={scrollLeft} mountedStyle={mountedStyle} unmountedStyle={unmountedStyle} aboutPage={aboutPage}/>}
    </div>
  )
}

 