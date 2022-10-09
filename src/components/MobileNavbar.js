import React, { useState, useEffect } from 'react';


export default function MobileNavbar() {

    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        if(showMenu === false) {
            setShowMenu(true);
        } else{
            setShowMenu(false);
        }
    }

    useEffect(() => {
        
    }, [showMenu])

  return (
    <nav className='mobile-nav-container'>
        <div className='burger-icon' onClick={handleShowMenu}>
            <div className='burger-line'></div>
            <div className='burger-line'></div>
            <div className='burger-line'></div>
        </div>

        {showMenu === true && 
        <ul className='burger-menu'>
            <li className='burger-menu-item'>Home</li>
            <li className='burger-menu-item'>About</li>
            <li className='burger-menu-item'>Portfolio</li>
            <li className='burger-menu-item'>Contact</li>
        </ul>
        }
        
    </nav>
  )
}
