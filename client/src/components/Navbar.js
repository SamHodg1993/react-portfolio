import React from 'react';
import {Link} from 'react-scroll';
import Logo from '../images/SH.png';
import './Styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className='nav-container'>
        <img src={Logo} alt="Sam's Logo" className='nav-logo' />
        <ul className='nav-list'>
            <Link smooth={true} offset={-100} duration={700} to="home">
              <li className='nav-item'>
                Home
              </li>
            </Link>
            <Link smooth={true} offset={-100} duration={700} to="about">
              <li className='nav-item'>
                About
              </li>
            </Link> 
            <Link smooth={true} offset={0} duration={700} to="portfolio"> 
              <li className='nav-item'>Portfolio</li>
            </Link>
            <Link smooth={true} offset={-50} duration={700} to="footer">
              <li className='nav-item'>Contact</li>
            </Link>
        </ul>
    </nav>
  )
}