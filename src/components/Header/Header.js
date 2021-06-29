import "./Header.css";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Header() {
  return (
    <header className="header">
      <p className="header__title">
        <svg
          className="header__logo"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44.1461 15.0122L23.5797 0.852005C22.8777 0.405868 22.1285 0.401784 21.4201 0.852005L0.853768 15.0122C0.326425 15.3752 0 16.0237 0 16.6719V30.832C0 31.4804 0.326425 32.1288 0.853856 32.4919L21.4202 46.6541C22.1222 47.1002 22.8714 47.1043 23.5798 46.6541L44.1461 32.4919C44.6735 32.1289 45 31.4804 45 30.832V16.6719C44.9999 16.0237 44.6735 15.3752 44.1461 15.0122ZM24.4335 6.24622L39.5758 16.6719L32.8208 21.3402L24.4335 15.5567V6.24622ZM20.5664 6.24622V15.5567L12.1791 21.3402L5.42407 16.6719L20.5664 6.24622ZM3.86718 20.4065L8.71372 23.752L3.86718 27.0976V20.4065ZM20.5664 41.2578L5.42407 30.8321L12.1791 26.1639L20.5664 31.9473V41.2578ZM22.5 28.4721L15.6695 23.752L22.5 19.032L29.3304 23.752L22.5 28.4721ZM24.4335 41.2578V31.9473L32.8208 26.1639L39.5758 30.8321L24.4335 41.2578ZM41.1327 27.0976L36.2862 23.752L41.1327 20.4065V27.0976Z"
            fill="var(--icon-color)"
          />
        </svg>
        Kirill S.
      </p>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__list-item">
            <Link to="#about" className="header__link">
              <span className="header__link-effect">&lt;a&gt;</span> Обо мне{" "}
              <span className="header__link-effect">&lt;/a&gt;</span>
            </Link>
          </li>
          <li className="header__list-item">
            <Link to="#projects" className="header__link">
              <span className="header__link-effect">&lt;a&gt;</span> Проекты{" "}
              <span className="header__link-effect">&lt;/a&gt;</span>
            </Link>
          </li>
          <li className="header__list-item">
            <Link to="#contacts" className="header__link">
              <span className="header__link-effect">&lt;a&gt;</span> Контакты{" "}
              <span className="header__link-effect">&lt;/a&gt;</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
