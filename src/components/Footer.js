import React from "react";
import "../stylesheets/layout/Footer.scss";
import "../stylesheets/components/_buttons.scss";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <button className="footer__up">
        <a href="#header">
          <i className="fas fa-angle-up"></i>
        </a>
      </button>

      <div className="footer__info-container">
        <div className="footer__content">
          <a
            className="footer__github-link"
            href="https://github.com/eva-lm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="footer__twitter-link"
            href="https://twitter.com/Eva_lm9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="foooter__insta-link"
            href="https://www.instagram.com/eva.lm.design/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div> */}
        <small className="footer__small-name">
          Eva Lorenzo Mendieta &copy;2019
        </small>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
