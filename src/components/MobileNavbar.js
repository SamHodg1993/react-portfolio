import React, { useState } from 'react';
import { Link } from 'react-scroll'


export default function MobileNavbar() {

    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        if(showMenu === false) {
            setShowMenu(true);
        } else{
            setShowMenu(false);
        }
    }

  return (
    <nav className='mobile-nav-container'>
        <div className='burger-icon' onClick={() => handleShowMenu()}>
            <div className='burger-line'></div>
            <div className='burger-line'></div>
            <div className='burger-line'></div>
        </div>

        {showMenu === true && 
        <ul className='burger-menu'>
            <Link smooth={true} offset={-100} duration={700} to="home" >
                <li className='burger-menu-item' onClick={() => handleShowMenu()}>Home</li>
            </Link>
            <Link smooth={true} offset={-50} duration={700} to="about">
                <li className='burger-menu-item' onClick={() => handleShowMenu()}>About</li>
            </Link>
            <Link smooth={true} offset={-65} duration={700} to="portfolio">
                <li className='burger-menu-item' onClick={() => handleShowMenu()}>Portfolio</li>
            </Link>
            <Link smooth={true} offset={-50} duration={700} to="footer">
                <li className='burger-menu-item' onClick={() => handleShowMenu()}>Contact</li>
            </Link>
        </ul>
        }
        
    </nav>
  )
}
