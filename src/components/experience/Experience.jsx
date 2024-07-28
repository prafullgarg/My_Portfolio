import React from "react";
import "./experience.css";
import { HiBadgeCheck} from "react-icons/hi";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>ReactJs</h4>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONT-END */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>NodeJs</h4>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>ExpressJs</h4>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Mongodb</h4>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>SQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Python</h4>
              </div>
            </article>
          </div>
        </div>
        {/* END OF BACK-END */}
        <div className="experience__other">
          <h3>Others</h3>
          <div className="experience__content">
          <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>RHEL(Linux)</h4>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Problem Solving</h4>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>DSA</h4>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>OOPS</h4>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>DBMS</h4>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Networking</h4>
              </div>
            </article>
            <article className="experience__details">
              <HiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Software Engineering</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
