import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { Button} from './Button';

function Navbar() {
    const [button,setButton] = useState(true);
    const [click,setClick] =useState(false)


    const handleClick = () => setClick(!click)
    const closeMobileMenu = () =>setClick(false)
    const showButton = () => {
      if(window.innerWidth <= 960) {
        setButton(false)
      }
      else {
      setButton(true)
    }
    }

    window.addEventListener('resize', showButton )

    useEffect(() => {
      showButton();
    },[])
  return (
    <>
    <nav className  = 'navbar'>
        <div className = 'navbar-container'>
            <Link to ='/' className = 'navbar-logo' onClick={closeMobileMenu}> DRG<i class="fa-brands fa-d-and-d"></i> </Link>
            <div className='navbar-icon' onClick={handleClick}>
                <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
            </div>
            <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
              <li className='navbar-item'>
                <Link to='/' className='navbar-link' onClick={closeMobileMenu}>Home</Link>
              </li>
              <li className='navbar-item'>
                <Link to='/Services' className='navbar-link' onClick={closeMobileMenu}>Services</Link>
              </li>
              <li className='navbar-item'>
                <Link to='/Products' className='navbar-link' onClick={closeMobileMenu}>Products</Link>
              </li>
              <li className='navbar-item'>
                <Link to='/Sign-Up' className='navbar-link-mobile' onClick={closeMobileMenu}>Sign-Up</Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar