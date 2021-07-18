import "./About.css";
import React from "react";
import "boxicons";
import { myTargets } from "../../utils/about-constants";
import { techs } from '../../utils/about-constants'

function About() {
  return (
    <section className="about container pt-4 pb-5" id="about">
      <h3 className="about__title">Обо мне</h3>
      <ul className="about__techs-list pt-4 pb-5">
        {myTargets.map((target, index) => {
          return <li key={index} className="about__techs-list-item">{target}</li>;
        })}
      </ul>
      <p className="about__techs pt-4 pb-5">Используемые языки, технологии и инструменты:</p>
      <ul className="about__my-techs-list row justify-content-md-center row-cols-2 row-cols-sm-3 row-cols-md-6 row-cols-lg-7">
        {
          techs.map((iconBox, index) => {
            const { icon, name } = iconBox;
            return <li title={name} key={index} className="about__my-techs-list-item mb-5 col">
              <img className="about__my-techs_icon" width="48px" height="48px" src={icon} alt={name} />
              <span className="about__my-techs-list-text">{name}</span>
            </li>
          })
        }
      </ul>
    </section>
  );
}

export default About;
