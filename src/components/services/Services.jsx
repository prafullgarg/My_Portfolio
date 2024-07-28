import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container service__container">
        <article className="service">
          {/* <div className="service__head">
            <h3>Web Development</h3>
          </div> */}
          <ul className="service__list">
            <li>
              <BiCheck/>
              <p>Linux Administration</p>
            </li>
            
            <li>
              <BiCheck/>
              <p>Front-End Development</p>
            </li>

            <li>
              <BiCheck/>
              <p>Back-End Development</p>
            </li>

            <li>
              <BiCheck/>
              <p>Software Development</p>
            </li>

            <li>
              <BiCheck/>
              <p>Devops</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        {/* <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article> */}
        {/* END OF UI/UX DESIGN */}

      </div>
    </section>
  )
}

export default Services