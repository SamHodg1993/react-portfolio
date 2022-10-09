import React from 'react'
import {Link} from 'react-scroll'

export default function Navbar() {
  return (
    <nav className='nav-container'>
        <div className='tobe-logo'>logo here</div>
        <ul className='nav-list'>
            <li className='nav-item'>
                <Link smooth={true} offset={-100} duration={500} to="home">
                  Home
                </Link>
              </li>
            <li className='nav-item'>
                <Link smooth={true} offset={-50} duration={500} to="about">
                  About
                </Link>  
              </li>
            <li className='nav-item'>Portfolio</li>
            <li className='nav-item'>Contact</li>
        </ul>
    </nav>
  )
}