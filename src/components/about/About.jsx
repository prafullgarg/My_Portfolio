import React from "react";
import "./about.css";
import MY from "../../assets/about.jpg";
import {FaAward} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MY} className="me-img " alt="about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experince</h5>
              <small>System Engineer</small> 
              {/* <h5>Tata Consultancy Services</h5>  */}
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>
          Hello! I am Prafull Garg, a dedicated and passionate System Engineer at Tata Consultancy Services (TCS). With couple of months  experience in the IT industry.          </p>
          <button className="btn btn-primary"> Let's Talk</button>
        </div>
      </div>
    </section>
  );
};

export default About;
