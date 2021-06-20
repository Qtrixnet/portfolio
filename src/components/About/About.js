import "./About.css";
import React from "react";
import "boxicons";

function About() {
  return (
    <section className="about" id="about">
      <h3 className="about__title">Обо мне</h3>
      <ul className="about__techs-list">
        <li className="about__techs-list-item">
          🧼 Стараюсь писать чистый код
        </li>
        <li className="about__techs-list-item">
          😎 Хочу работать в команде опытных профессионалов
        </li>
        <li className="about__techs-list-item">🚀 Осваиваю новые технологии</li>
        <li className="about__techs-list-item">
          🔥 Хочу работать в высоконагруженных проектах
        </li>
        <li className="about__techs-list-item">
          ⏱ Учусь анализировать сложность алгоритмов / улучшать
          производительность
        </li>
      </ul>
      <p className="about__techs">Используемые языки и технологии:</p>
      <ul className="about__my-techs-list">
        <li title="javascript" className="about__my-techs-list-item">
          <i className="bx bxl-javascript"></i>
          <span className="about__my-techs-list-text">javascript</span>
        </li>
        <li title="react" className="about__my-techs-list-item">
          <i className="bx bxl-react"></i>
          <span className="about__my-techs-list-text">react js</span>
        </li>
        <li title="redux" className="about__my-techs-list-item">
          <i className="bx bxl-redux"></i>
          <span className="about__my-techs-list-text">redux</span>
        </li>
        <li title="node js" className="about__my-techs-list-item">
          <i className="bx bxl-nodejs"></i>
          <span className="about__my-techs-list-text">node js</span>
        </li>
        <li title="git" className="about__my-techs-list-item">
          <i className="bx bxl-git"></i>
          <span className="about__my-techs-list-text">git</span>
        </li>
        <li title="sass" className="about__my-techs-list-item">
          <i className="bx bxl-sass"></i>
          <span className="about__my-techs-list-text">sass</span>
        </li>
        <li title="css3" className="about__my-techs-list-item">
          <i className="bx bxl-css3"></i>
          <span className="about__my-techs-list-text">css3</span>
        </li>
        <li title="html5" className="about__my-techs-list-item">
          <i className="bx bxl-html5"></i>
          <span className="about__my-techs-list-text">html5</span>
        </li>
      </ul>
      {/* <div className="about__cards">
        <div className="about__card">
          <div className="about__card-icon"></div>
          <h4 className="about__card-title">Имя</h4>
          <p className="about__card-subtitle">Кирилл Шашичев</p>
        </div>
        <div className="about__card">
          <div className="about__card-icon"></div>
          <h4 className="about__card-title">Email</h4>
          <p className="about__card-subtitle">qtrixnet@yandex.ru</p>
        </div>
        <div className="about__card">
          <div className="about__card-icon"></div>
          <h4 className="about__card-title">Телефон / WhatsApp</h4>
          <p className="about__card-subtitle">+7 700 651 7000</p>
        </div>
        <div className="about__card">
          <div className="about__card-icon"></div>
          <h4 className="about__card-title">Telegram</h4>
          <p className="about__card-subtitle">@ciryl_sv</p>
        </div>
        <div className="about__card">
          <div className="about__card-icon"></div>
          <h4 className="about__card-title">Github</h4>
          <p className="about__card-subtitle">Qtrixnet</p>
        </div>
      </div> */}
    </section>
  );
}

export default About;
