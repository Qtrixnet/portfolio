import "./Hero.css";
import React from "react";
import avatar from '../../images/avatar.png'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__info">
        <h2 className="hero__title">Привет, я</h2>
        <h2 className="hero__title">Кирилл Шашичев</h2>
        <h1 className="hero__subtitle">Junior frontend разработчик</h1>
        <ul className="hero__list">
          <li className="hero__list-item">
            <a href={avatar} download className="hero__link">Скачать резюме</a>
          </li>
          <li className="hero__list-item">
            <a href="https://github.com/Qtrixnet" rel="noreferrer" target="_blank" className="hero__link">Аккаунт на Github</a>
          </li>
        </ul>
      </div>
      <img src={avatar} className="hero__avatar" alt="Аватар" />
    </section>
  );
}

export default Hero;
