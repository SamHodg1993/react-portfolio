import React from 'react';
import Link from 'react-scroll';

export default function AltMobileNavbar() {
  return (
    <div>
        <ul className='alt-nav-list'>
            <Link smooth={true} offset={-100} duration={700} to="home">
              <li className='alt-nav-item'>
                Home
              </li>
            </Link>
            <Link smooth={true} offset={-50} duration={700} to="about">
              <li className='alt-nav-item'>
                About
              </li>
            </Link> 
            <Link smooth={true} offset={-100} duration={700} to="portfolio"> 
              <li className='alt-nav-item'>Portfolio</li>
            </Link>
            <Link smooth={true} offset={-50} duration={700} to="footer">
              <li className='alt-nav-item'>Contact</li>
            </Link>
        </ul>
    </div>
  )
}