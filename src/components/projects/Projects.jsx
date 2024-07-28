import React from "react";
import "./projects.css";
import Texormer from "../../assets/Texormer.png";

const Projects = () => {
  const projects_data= [{
    id:1,
    image:Texormer,
    title:'Texormer',
    github:'https://github.com/prafullgarg/texormer',
    demo:'https://prafullgarg.github.io/texormer/'
    },]
  return (
    <section id="projects">
      <h5>My Work</h5>
      <h2>Projects</h2>
      <div className="container project__container">
        {projects_data.map(({id,image,title,github,demo})=>{
          return (
            <article jey={id} className="project__card">
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
          >
            <div className="project__image">
              <img
                src={image}
                alt={title}
              />
            </div>
          </a>
          <h3>{title}</h3>
          <div className="project__card-cta">
            <a
              href={github}
              className="btn "
              target="_blank"
              rel="noreferrer"
            >
              Gitthub
            </a>
            <a
              href={demo}
              className="btn btn-primary "
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </div>
        </article>
          )
        })}
      </div>
    </section>
  );
};

export default Projects;
