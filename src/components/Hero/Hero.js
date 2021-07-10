import "./Hero.css";
import React from "react";
import { aboutMe } from "../../utils/constants";
import cv from "../../images/Kirill-Shashichev.pdf"

function Hero() {

  return (
    <section className="hero container">
      <div className="row align-items-center justify-content-md-center row-cols-1 row-cols-sm-1 row-cols-md-2">
        <div className="hero__info col">
          <h2 className="hero__title">👋 Привет, я</h2>
          <h2 className="hero__title">{aboutMe.name}</h2>
          <h1 className="hero__subtitle">
            &lt;h1&gt; {aboutMe.profession} &lt;/h1&gt;
          </h1>
          <ul className="hero__list">
            <li className="hero__list-item">
              <a href={cv} download className="hero__link">
                Скачать резюме
              </a>
            </li>
            <li className="hero__list-item">
              <a
                href={aboutMe.github}
                rel="noreferrer"
                target="_blank"
                className="hero__link"
              >
                Аккаунт на Github
              </a>
            </li>
          </ul>
        </div>
        <div className="hero__avatar col"></div>
      </div>
    </section>
  );
}

export default Hero;
