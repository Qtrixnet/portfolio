import "./About.css";
import React from "react";
import "boxicons";
import { myTargets } from "../../utils/constants";

function About() {
  return (
    <section className="about container" id="about">
      <h3 className="about__title">Обо мне</h3>
      <ul className="about__techs-list">
        {myTargets.map((target, index) => {
          return <li key={index} className="about__techs-list-item">{target}</li>;
        })}
      </ul>
      <p className="about__techs pt-4 pb-4">Используемые языки и технологии:</p>
      <ul className="about__my-techs-list row justify-content-md-center row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6">
        <li title="javascript" className="about__my-techs-list-item mb-5 col">
          <i className="bx bxl-javascript"></i>
          <span className="about__my-techs-list-text">javascript</span>
        </li>
        <li title="react" className="about__my-techs-list-item mb-5 col">
          <i className="bx bxl-react"></i>
          <span className="about__my-techs-list-text">react js</span>
        </li>
        <li title="redux" className="about__my-techs-list-item mb-5 col">
          <i className="bx bxl-redux"></i>
          <span className="about__my-techs-list-text">redux</span>
        </li>
        <li title="node js" className="about__my-techs-list-item mb-5 col">
          <i className="bx bxl-nodejs"></i>
          <span className="about__my-techs-list-text">node js</span>
        </li>
        <li title="git" className="about__my-techs-list-item mb-5 col">
          <i className="bx bxl-git"></i>
          <span className="about__my-techs-list-text">git</span>
        </li>
        <li title="sass" className="about__my-techs-list-item mb-5 col">
          <i className="bx bxl-sass"></i>
          <span className="about__my-techs-list-text">sass</span>
        </li>
        <li title="css3" className="about__my-techs-list-item mb-5 col">
          <i className="bx bxl-css3"></i>
          <span className="about__my-techs-list-text">css3</span>
        </li>
        <li title="html5" className="about__my-techs-list-item mb-5 col">
          <i className="bx bxl-html5"></i>
          <span className="about__my-techs-list-text">html5</span>
        </li>
      </ul>
    </section>
  );
}

export default About;
