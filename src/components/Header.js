import React from "react";
import "../stylesheets/layout/Header.scss";
import "../stylesheets/components/_buttons.scss";
import hero from "../images/bg__.png";
import flowers from "../images/_6.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__nav-content">
        <nav className="header__nav">
          <a href="#" alt="about me">
            Sobre mí
          </a>
          <a href="#">Proyectos</a>
          <a href="#">Contacto</a>
        </nav>
      </div>

      <div className="header__info-content">
        <div className="header__img-content">
          <img className="header__img" src={hero} alt="header image" />
        </div>
        <div className="header__title-and-btn">
          <h1 className="header__title">Eva Lorenzo Mendieta</h1>
          <h2 className="header__subtitle">Front-end Developer</h2>
          <button className="header__button">Ver mis proyectos</button>
        </div>
      </div>
      <div className="header__flowers-img-content">
        <img
          className="header__img-flowers"
          src={flowers}
          alt="flowers image"
        />
      </div>
    </header>
  );
};

export default Header;
