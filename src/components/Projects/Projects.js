import "./Projects.css";
import React from "react";
import { projects } from "../../utils/projects-constants";

function Projects() {
  return (
    <section className="projects container pb-5 pt-4" id="projects">
      <h3 className="projects__title pb-5 pt-4">Проекты</h3>
      <div className="projects__container">
        {projects.map((project) => {
          return (
            <div key={project.id} className="projects__project">
              <img
                className="projects__image"
                alt={project.name}
                src={project.picture}
                width="405px"
                height="261px"
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
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default Projects;
