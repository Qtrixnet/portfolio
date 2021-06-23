import "./Projects.css";
import React from "react";
import { projects } from "../../utils/constants";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h3 className="projects__title">Проекты</h3>
      <div className="projects__container">
        {projects.map((project) => {
          return (<div className="projects__project">
            <img
              className="projects__image"
              alt={project.name}
              src={project.picture}
            />
            <div className="project__details">
              <span className="project__details-text">
                Проект: {project.name}
              </span>
              <span className="project__details-text">{project.details}</span>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="project__details-link"
              >
                {project.demo}
              </a>
              <a
                href={project.githuLink}
                target="_blank"
                rel="noreferrer"
                className="project__details-link"
              >
                {project.github}
              </a>
            </div>
          </div>)
        })}
      </div>
    </section>
  );
}

export default Projects;
