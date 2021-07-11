import React from "react";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function FooterCard({ hoverTitle, link, logo, title, subtitle }) {
  return (
    <div className="footer__card col mb-3">
      {link ?
        <OverlayTrigger
          placement="top"
          overlay={
            <Tooltip id={`tooltip-top`}>
              {hoverTitle}
            </Tooltip>
          }
        >
          <a
            href={link}
            className="footer__card-icon footer__card-icon_active"
            target="_blank"
            rel="noopener noreferrer"
          >
            {logo}
          </a>
        </OverlayTrigger> :
        <span
          className="footer__card-icon"
        >
          {logo}
        </span>
      }
      <h4 className="footer__card-title">{title}</h4>
      <p className="footer__card-subtitle">{subtitle}</p>
    </div>
  )
}

export default FooterCard;