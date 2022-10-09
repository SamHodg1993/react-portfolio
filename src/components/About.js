import React from 'react'
import SamAndSon from '../images/SamAndSon.jpg'

export default function About() {
  return (
    <div className='about-container' id="about">
        <img src={SamAndSon} alt="Sam with his son" className='main-image' />
        <title>I'm Sam, a Developer looking for his next challenge</title>
        <p>I am a self taught devleoper experienced in...</p>
        <ul className='about-list'>
            <li>React</li>
            <li>TypeScript</li>
            <li>Git</li>
            <li>TailwindCSS</li>
            <li>Bootstrap</li>
            <li>Resposive design</li>
            <li>NPM</li>
            <li>Linux</li>
            <li>Web Delvelopment</li>
        </ul>
    </div>
  )
}

 