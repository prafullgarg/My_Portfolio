import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/prafull-garg-611835196/" target='_blank'  rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/prafullgarg" target='_blank'  rel="noreferrer"><BsGithub/></a>
     </div>
  )
}

export default HeaderSocials