import React from "react";
import "../stylesheets/layout/Header.scss";
import "../stylesheets/components/_buttons.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__nav-content">
        <nav className="header__nav" id="header">
          <a href="#about_me" alt="about me">
            Sobre mí <i class="fas fa-circle"></i>
          </a>
          <a href="#projects">
            Proyectos <i class="fas fa-circle"></i>
          </a>
          <a href="#contact">Contacto</a>
        </nav>
      </div>

      <div className="header__info-content">
        <div className="header__img-content"></div>
        <div className="header__title-and-btn">
          <h1 className="header__title">Eva Lorenzo Mendieta</h1>
          <h1 className="header__subtitle">Front-end Developer</h1>
          <a href="#projects">
            <button className="header__button">Ver mis proyectos</button>
          </a>
        </div>
      </div>
      <div className="header__flowers-img-content"></div>
    </header>
  );
};

export default Header;
