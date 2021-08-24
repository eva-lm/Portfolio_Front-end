import React, { useEffect } from "react";
import Skills from "./Skills";
import { Menu } from "./Menu";
import "../stylesheets/layout/Home.scss";
import "../stylesheets/components/_buttons.scss";


const Home = (props) => {

function handleScroll() {
  props.showComponentSkills();
}
  return (
    <React.Fragment>
    <section className="home">
      <div className="home__info-content">
        <div className="home__img-content"></div>
        <div className="home__title-and-btn">
          <h1 className="home__title">Eva ~ Portfolio</h1>
          <h2 className="home__subtitle">Desarrollo web front-end.</h2>
          <h2 className="home__subtitle_sub">Ilustración digital y diseño de interfaces.</h2>
        </div>
      </div>
       <div className="home__show-more">
        <button className="home__arrow-up" onClick={handleScroll}>
          <i className="fas fa-angle-down"></i>
      </button>
      </div> 
    </section>
  {props.renderSkills === true ?
    <Skills /> : null}
    </React.Fragment>
  );
};

export default Home;
