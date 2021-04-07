import React, { useState } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import Skills from "./Skills";
import "../stylesheets/layout/Header.scss";
import "../stylesheets/components/_buttons.scss";

import logo from "../images/logo__.png";

const Home = (props) => {

// function handleScroll() {
//   props.showComponentSkills();
// }
const [renderSkills, setRenderSkills] = useState(false);

function handleShowComponentSkills() {
  setRenderSkills(value => !renderSkills);
  console.log("hook", renderSkills)
    window.scroll({
  top: document.body.offsetHeight,
  left: 0, 
  behavior: 'smooth',
}) 
}
//  () => {
//   window.scroll({
//   top: document.body.offsetHeight,
//   left: 0, 
//   behavior: 'smooth',
// }) 
// });
// }

function gradientHover(e) {
  const x = e.pageX - e.target.offsetLeft
  const y = e.pageY - e.target.offsetTop
  e.target.style.setProperty('--x', `${ x }px`)
  e.target.style.setProperty('--y', `${ y }px`)
}
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
              <img src={logo} alt="logo web" className="header__logo-img" />
        </div>
      <div className="header__nav-content">
          <nav className="header__nav" id="header">

          <button className="gradientHover" href="#front" alt="front end projectos" onMouseMove={gradientHover}>
          <span className="header__link">front-end</span>
          </button>
          <Link to="/ux">
          <button className="gradientHover" href="" alt="ux ui projectos" onMouseMove={gradientHover}>
            <span className="header__link">ux projects</span>
          </button>
          </Link>

          <button className="gradientHover" href="#illus" alt="projectos de ilustración digital" onMouseMove={gradientHover}>
          <span className="header__link">illustrations</span>
          </button>

          <button className="gradientHover" href="#3d" alt="3D projectos" onMouseMove={gradientHover}>
          <span className="header__link">3D animation</span>
          </button>

          <button className="gradientHover contact" href="#contact" alt="contacto" onMouseMove={gradientHover}>
          <span className="header__link">contacto</span>
          </button>
        </nav>

        <nav className="header__social" id="header-social">
          <a 
            className="header__social-insta"
            href="https://www.instagram.com/evamyarts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="header__social-github"
            href="https://github.com/eva-lm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="social__social-twitter"
            href="https://twitter.com/Eva_lm9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>        
        </nav>

      </div>
      </div>
      <div className="header__info-content">
        <div className="header__img-content"></div>
        <div className="header__title-and-btn">
          <h1 className="header__title">Evamyarts portfolio</h1>
          <h2 className="header__subtitle">Diseño de interfaces y desarrollo web front-end.</h2>
<h2 className="header__subtitle_sub">Ilustración digital y animación 3D.</h2>

          {/* <a href="#projects">
            <button className="header__button">Ver más</button>
          </a> */}
        </div>
      </div>
       <div className="header__show-more">
        <button className="header__arrow-up" onClick={handleShowComponentSkills}>
          <i className="fas fa-angle-down"></i>
      </button>
      </div> 
      <Skills renderSkills={props.renderSkills} />

    </header>
  );
};

export default Home;
