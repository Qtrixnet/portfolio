import "./Projects.css";
import React from "react";
import howToLearn from "../../images/how-to-learn.png";

const data = {
  HowToLearn: {
    picture: howToLearn,
    name: "Научиться учиться",
    details: "Сайт со статичной версткой",
    demo: "Github pages",
    github: "Репозиторий",
  },
};

const { HowToLearn } = data;

function Projects() {
  return (
    <section className="projects">
      <h3 className="projects__title">Проекты</h3>
      <div className="projects__container">
        <div className="projects__project">
          <img
            className="projects__image"
            alt={HowToLearn.name}
            src={HowToLearn.picture}
          />
          <div className="project__details">
            <span className="project__details-text">Проект: {HowToLearn.name}</span>
            <span className="project__details-text">{HowToLearn.details}</span>
            <a href="#" className="project__details-link">{HowToLearn.demo}</a>
            <a href="#" className="project__details-link">{HowToLearn.github}</a>
          </div>
        </div>
        <div className="projects__project">
          <img
            className="projects__image"
            alt={HowToLearn.name}
            src={HowToLearn.picture}
          />
          <div className="project__details">
            <span className="project__details-text">Проект: {HowToLearn.name}</span>
            <span className="project__details-text">{HowToLearn.details}</span>
            <a href="#" className="project__details-link">{HowToLearn.demo}</a>
            <a href="#" className="project__details-link">{HowToLearn.github}</a>
          </div>
        </div>
        <div className="projects__project">
          <img
            className="projects__image"
            alt={HowToLearn.name}
            src={HowToLearn.picture}
          />
          <div className="project__details">
            <span className="project__details-text">Проект: {HowToLearn.name}</span>
            <span className="project__details-text">{HowToLearn.details}</span>
            <a href="#" className="project__details-link">{HowToLearn.demo}</a>
            <a href="#" className="project__details-link">{HowToLearn.github}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
