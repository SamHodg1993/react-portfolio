import React, { useState } from 'react';
// import Link from 'react-scroll'


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
            <li className='burger-menu-item' onClick={() => handleShowMenu()}>Home</li>
            <li className='burger-menu-item' onClick={() => handleShowMenu()}>About</li>
            <li className='burger-menu-item' onClick={() => handleShowMenu()}>Portfolio</li>
            <li className='burger-menu-item' onClick={() => handleShowMenu()}>Contact</li>
        </ul>
        }
        
    </nav>
  )
}
