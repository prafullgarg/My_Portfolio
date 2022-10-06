// This component is created to add functionalities like download cv and contact me to the portfolio
import React from 'react'
import CV from '../../assets/Prafull_Garg_Main.pdf'
const Topbuttons = () => {
  return (
    <div className='topbuttons'>
        <a href={CV} download className='btn'>Download CV</a>
        {/* This button will take the visitor to contact section */}
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default Topbuttons