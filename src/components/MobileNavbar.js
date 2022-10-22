import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Styles/Navbar.css';


export default function MobileNavbar() {

    const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='mobile-nav-container'>
        <div className='burger-icon' onClick={() => setShowMenu(!showMenu)}>
            <div className='burger-line'></div>
            <div className='burger-line'></div>
            <div className='burger-line'></div>
        </div>

        {showMenu === true && 
        <ul className='burger-menu'>
            <Link smooth={true} offset={-100} duration={700} to="home" >
                <li className='burger-menu-item' onClick={() => setShowMenu(!showMenu)}>Home</li>
            </Link>
            <Link smooth={true} offset={-50} duration={700} to="about">
                <li className='burger-menu-item' onClick={() => setShowMenu(!showMenu)}>About</li>
            </Link>
            <Link smooth={true} offset={-65} duration={700} to="portfolio">
                <li className='burger-menu-item' onClick={() => setShowMenu(!showMenu)}>Portfolio</li>
            </Link>
            <Link smooth={true} offset={-50} duration={700} to="footer">
                <li className='burger-menu-item' onClick={() => setShowMenu(!showMenu)}>Contact</li>
            </Link>
        </ul>
        }
        
    </nav>
  )
}
