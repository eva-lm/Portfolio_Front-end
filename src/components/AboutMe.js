import React from "react";
import "../stylesheets/layout/AboutMe.scss";
import "../stylesheets/components/_buttons.scss";

const AboutMe = () => {
  return (
    <section className="about" id="about_me">
      <div className="bg-container">
        <div className="wrapper-skills">
          <h3 className="about__title">¡Hola!</h3>
          <div className="about__me-content">
            <p className="about__text">
              Soy Eva, desarrolladora front-end junior con ganas de ampliar mis
              conocimientos en el mundo de la programación. Me considero una
              persona creativa, resolutiva, con actitud positiva y habilidades
              para el trabajo en equipo. Mi capacidad de autoaprendizaje y
              superación en el día a día ofrecen buenos resultados en poco
              tiempo, gestionando muy bien el estrés ante situaciones adversas.
              Siempre con ganas de aprender y dar lo mejor de mí.
            </p>
            <div className="about__circle"></div>
          </div>

          <div className="about__skills-content">
            <h3 className="about__title">¿Qué puedo hacer?</h3>
            <h4 className="about__section-title-skill">Diseño web</h4>
            <div className="about__skill-content">
              <p className="about__text-skills">
                Me encanta el diseño y la maquetación web. Cuento con
                conocimientos en HTML5, CSS3, SASS y Bootstrap, enfocados en el
                diseño responsive.
              </p>
              <div className="about__small-circle">
                <i className="fab fa-sass"></i>
              </div>
            </div>
            <h4 className="about__section-title-skill">JavaScript</h4>
            <div className="about__skill-content">
              <p className="about__text-skills">
                También puedo añadir funcionalidad y convertir un bonito diseño
                web en una página dinámica con JavaScript.
              </p>
              <div className="about__small-circle">
                <i className="fab fa-js-square"></i>
              </div>
            </div>
            <h4 className="about__section-title-skill">React</h4>
            <div className="about__skill-content">
              <p className="about__text-skills">
                Además, cuento con conocimientos en la librería React.js creando
                componentes para estructurar la web.
              </p>
              <div className="about__small-circle">
                <i className="fab fa-react"></i>
              </div>
            </div>
          </div>
          <div class="about__content-btn">
            <a href="#contact">
              <button className="about__button">
                Ponte en contacto conmigo
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
