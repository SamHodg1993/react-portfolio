import React from 'react'
import {Link} from 'react-scroll'

export default function Navbar() {
  return (
    <nav className='nav-container'>
        <div className='tobe-logo'>logo here</div>
        <ul className='nav-list'>
            <Link smooth={true} offset={-100} duration={700} to="home">
              <li className='nav-item'>
                Home
              </li>
            </Link>
            <Link smooth={true} offset={-50} duration={700} to="about">
              <li className='nav-item'>
                About
              </li>
            </Link> 
            <Link smooth={true} offset={-100} duration={700} to="portfolio"> 
              <li className='nav-item'>Portfolio</li>
            </Link>
            <Link smooth={true} offset={-50} duration={700} to="footer">
              <li className='nav-item'>Contact</li>
            </Link>
        </ul>
    </nav>
  )
}