// This component will display as the head of the webpage
import React from 'react'
import './header.css'
import Topbuttons from './Topbuttons'
import MY from '../../assets/MY2.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header id='head'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Prafull Garg</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <Topbuttons/> {/*This component will add download cv and contact button to header*/}
        <div className="my">
          {/* Adding Own image to the portfolio*/}
          <img src={MY} alt="Prafull Garg" />
        </div>

        {/* This Scroll link will take the visitor to contact section */}
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      <HeaderSocials/>
      </div>
    </header>
  )
}

export default Header