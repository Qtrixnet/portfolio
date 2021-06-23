import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="footer__cards">
        <div className="footer__card">
          <div className="footer__card-icon">
            <i className="bx bx-id-card"></i>
          </div>
          <h4 className="footer__card-title">Имя</h4>
          <p className="footer__card-subtitle">Кирилл Шашичев</p>
        </div>
        <div className="footer__card">
          <a
            href="mailto:qtrixnet@yandex.ru?subject=Переход со страницы портфолио"
            className="footer__card-icon footer__card-icon_active"
            target="_blank"
            title="Написать на почту"
            rel="noopener noreferrer"
          >
            <i className="bx bx-mail-send"></i>
          </a>
          <h4 className="footer__card-title">Email</h4>
          <p className="footer__card-subtitle">qtrixnet@yandex.ru</p>
        </div>
        <div className="footer__card">
          <a
            href="https://api.whatsapp.com/send?phone=77006517000"
            className="footer__card-icon footer__card-icon_active"
            target="_blank"
            title="Написать в Whatsapp"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>
          <h4 className="footer__card-title">Телефон / WhatsApp</h4>
          <p className="footer__card-subtitle">+7 700 651 7000</p>
        </div>
        <div className="footer__card">
          <a
            href="https://t.me/cyril_sv"
            className="footer__card-icon footer__card-icon_active"
            target="_blank"
            title="Написать в Whatsapp"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-telegram"></i>
          </a>
          <h4 className="footer__card-title">Telegram</h4>
          <p className="footer__card-subtitle">@ciryl_sv</p>
        </div>
        <div className="footer__card">
          <a
            href="https://github.com/Qtrixnet"
            className="footer__card-icon footer__card-icon_active"
            target="_blank"
            title="Перейти к профилю GitHub"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <h4 className="footer__card-title">Github</h4>
          <p className="footer__card-subtitle">@Qtrixnet</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
