import "./Header.css";
import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

function Header() {
  return (
    <header className="header">
      <p className="header__title">Kirill S.</p>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__list-item"><Link to="#about" className="header__link">Обо мне</Link></li>
          <li className="header__list-item"><Link to="#projects" className="header__link">Проекты</Link></li>
          <li className="header__list-item"><Link to="#contacts" className="header__link">Контакты</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
