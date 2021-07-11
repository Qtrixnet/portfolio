import "./Hero.css";
import React from "react";
import { aboutMe } from "../../utils/hero-constants";
import cv from "../../images/Kirill-Shahsichev-Frontend.pdf"

function Hero() {
  const { name, profession, github } = aboutMe
  return (
    <section className="hero container pt-4 pb-5">
      <div className="row align-items-center justify-content-md-center row-cols-1 row-cols-sm-1 row-cols-md-2">
        <div className="hero__info col">
          <h2 className="hero__title">👋 Привет, я</h2>
          <h2 className="hero__title">{name}</h2>
          <h1 className="hero__subtitle">
            &lt;h1&gt; {profession} &lt;/h1&gt;
          </h1>
          <ul className="hero__list">
            <li className="hero__list-item">
              <a href={cv} download className="hero__link">
                Скачать резюме
              </a>
            </li>
            <li className="hero__list-item">
              <a
                href={github}
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
