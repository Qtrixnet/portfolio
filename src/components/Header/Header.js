import "./Header.css";
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

function Header() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClose() {
    setIsClicked(false)
  }

  function handleOpen() {
    setIsClicked(true)
  }
  return (
    <header className="header container pt-4">
      <p className="header__title">
        Kirill S.
      </p>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__list-item">
            <Link to="#about" className="header__link">
              Обо мне <span className="header__link-effect"></span>
            </Link>
          </li>
          <li className="header__list-item">
            <Link to="#projects" className="header__link">
              Проекты <span className="header__link-effect"></span>
            </Link>
          </li>
          <li className="header__list-item">
            <Link to="#contacts" className="header__link">
              Контакты <span className="header__link-effect"></span>
            </Link>
          </li>
        </ul>
      </nav>
      <button onClick={handleOpen} className="header__burger-menu">
        <span></span>
      </button>
      {
        isClicked ?
          <div className="header__menu">
            <Link to="#about" onClick={handleClose} className="header__menu-button">Обо мне</Link>
            <Link to="#projects" onClick={handleClose} className="header__menu-button">Проекты</Link>
            <Link to="#contacts" onClick={handleClose} className="header__menu-button">Контакты</Link>
            <button onClick={handleClose} className="header__menu-close">&#x2716;</button>
          </div>
          : ''
      }
    </header>
  );
}

export default Header;
