import "./Header.css";
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";


function Header() {
  console.log('Header')
  const [isClicked, setIsClicked] = useState(false);

  function handleClose() {
    setIsClicked(false)
  }

  function handleOpen() {
    setIsClicked(true)
  }
  return (
    <header className="header container pt-4 pb-5">
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
            <button onClick={handleClose} className="header__menu-close">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
          : ''
      }
    </header>
  );
}

export default Header;
