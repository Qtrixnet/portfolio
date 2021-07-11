import "./Footer.css";
import React from "react";
import FooterCard from '../FooterCard/FooterCard';
import { footerInfo } from '../../utils/footer-constants';

function Footer() {
  return (
    <footer className="footer container pt-4 pb-5" id="contacts">
      <div className="footer__cards row justify-content-md-center row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-6">
        {
          footerInfo.map((icon) => {
            const { id, hoverTitle, link, logo, title, subtitle } = icon;
            return <FooterCard
              key={id}
              hoverTitle={hoverTitle}
              link={link}
              logo={logo}
              title={title}
              subtitle={subtitle} />
          })
        }
      </div>
    </footer>
  );
}

export default Footer;
