import "./Hero.css";
import React, { useState } from "react";
import avatar from "../../images/avatar.png";
import { aboutMe } from "../../utils/constants";
import cv from "../../images/Kirill-Shashichev.pdf"

function Hero() {
  const [cursorPositionX, setCursorPositionX] = useState(0);
  const [cursorPositionY, setCursorPositionY] = useState(0);

  const linkHoverEffect = (e) => {
    setCursorPositionX(e.pageX - e.target.offsetLeft);
    setCursorPositionY(e.pageY - e.target.offsetTop);
  }

  const linkStyle = {
    top: cursorPositionY,
    left: cursorPositionX,
    backgroundColor: '#0b7939',
  }

  return (
    <section className="hero">
      <div className="hero__info">
        <h2 className="hero__title">👋 Привет, я</h2>
        <h2 className="hero__title">{aboutMe.name}</h2>
        <h1 className="hero__subtitle">
          &lt;h1&gt; {aboutMe.profession} &lt;/h1&gt;
        </h1>
        <ul className="hero__list">
          <li className="hero__list-item">
            <a href={cv} onMouseMove={linkHoverEffect} download className="hero__link">
              {/* <div style={linkStyle} className="hero__link_circle"></div> */}
              <span>Скачать резюме</span>
            </a>
          </li>
          <li className="hero__list-item">
            <a
              href={aboutMe.github}
              onMouseMove={linkHoverEffect}
              rel="noreferrer"
              target="_blank"
              className="hero__link"
            >
              {/* <div style={linkStyle} className="hero__link_circle"></div> */}
              <span>Аккаунт на Github</span>
            </a>
          </li>
        </ul>
      </div>
      <img src={avatar} className="hero__avatar" alt="Аватар" />
    </section>
  );
}

export default Hero;
