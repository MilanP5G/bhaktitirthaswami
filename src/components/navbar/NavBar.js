import React from 'react';
import btswamiLogo from '../../assets/BTSwamiLogo.png'
import '../../styling/navbar.css'

const NavBar = () => {

  return (
    <div className='nav-bar'>
      <div className='nav-logo'>
        <img alt='BTSwami Signature' src={btswamiLogo} />
      </div>
    </div>
  )

}

export default NavBar;
