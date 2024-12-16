
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer({ links = [], text = "" }) {
  const iconMap = {
    Twitter: faTwitter,
    Facebook: faFacebook,
    Youtube: faYoutube,
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">{text}</p>
          <div className="footer-links">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <FontAwesomeIcon
                  icon={iconMap[link.name]}
                  className="footer-icon"
                />
              </a>
            ))}
          </div>

        </div>
        <Link to="/">
          <div className="logo-footer">
            <img src="./ico.png" alt="Logo" />
          </div>
        </Link>
      </footer>
    </>
  );
}

export default Footer;
