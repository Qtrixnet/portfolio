import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__cards">
        <div className="footer__card">
          <div className="footer__card-icon"><i className='bx bx-id-card'></i></div>
          <h4 className="footer__card-title">Имя</h4>
          <p className="footer__card-subtitle">Кирилл Шашичев</p>
        </div>
        <div className="footer__card">
          <div className="footer__card-icon"><i className='bx bx-mail-send'></i></div>
          <h4 className="footer__card-title">Email</h4>
          <p className="footer__card-subtitle">qtrixnet@yandex.ru</p>
        </div>
        <div className="footer__card">
          <div className="footer__card-icon"><i className='bx bxl-whatsapp' ></i></div>
          <h4 className="footer__card-title">Телефон / WhatsApp</h4>
          <p className="footer__card-subtitle">+7 700 651 7000</p>
        </div>
        <div className="footer__card">
          <div className="footer__card-icon"><i className='bx bxl-telegram' ></i></div>
          <h4 className="footer__card-title">Telegram</h4>
          <p className="footer__card-subtitle">@ciryl_sv</p>
        </div>
        <div className="footer__card">
          <div className="footer__card-icon"><i className='bx bxl-github' ></i></div>
          <h4 className="footer__card-title">Github</h4>
          <p className="footer__card-subtitle">@Qtrixnet</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
