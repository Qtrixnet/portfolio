import "./Header.css";
import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../images/block.svg'

function Header() {
  return (
    <header className="header">
      <p className="header__title"><img className="header__logo" alt="лого" src={logo}></img>Kirill S.</p>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__list-item"><Link to="#about" className="header__link"><span className="header__link-effect">&lt;a&gt;</span> Обо мне <span className="header__link-effect">&lt;/a&gt;</span></Link></li>
          <li className="header__list-item"><Link to="#projects" className="header__link"><span className="header__link-effect">&lt;a&gt;</span> Проекты <span className="header__link-effect">&lt;/a&gt;</span></Link></li>
          <li className="header__list-item"><Link to="#contacts" className="header__link"><span className="header__link-effect">&lt;a&gt;</span> Контакты <span className="header__link-effect">&lt;/a&gt;</span></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
