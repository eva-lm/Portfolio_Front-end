import React from "react";
import Skills from "./Skills";
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
          <h1 className="home__title">Evamyarts portfolio</h1>
          <h2 className="home__subtitle">Diseño de interfaces y desarrollo web front-end.</h2>
          <h2 className="home__subtitle_sub">Ilustración digital y animación 3D.</h2>
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
