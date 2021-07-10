import "./Projects.css";
import React from "react";
import { projects } from "../../utils/constants";

function Projects() {
  return (
    <section className="projects container" id="projects">
      <h3 className="projects__title">Проекты</h3>
      <div className="projects__container row justify-content-md-center row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-3">
        {projects.map((project) => {
          return (<div key={project.id} className="projects__project mb-4 col">
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
                href={project.githubLink}
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
