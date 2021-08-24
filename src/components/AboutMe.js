import React from "react";
import "../stylesheets/layout/AboutMe.scss";
import "../stylesheets/components/_buttons.scss";

const AboutMe = (props) => {
  return (
    <section  id="about_me" className="about">
          <div className="overlay">
          <div className="about__me-content">
            <p className="about__text">
            Hola! Mi nombre es Eva y resido en Madrid, España. Soy <strong>desarrolladora front-end junior e ilustradora digital</strong>. También tengo algunas nociones de diseño Ux-Ui y estoy estudiando Animación 3D. Me encanta combinar diseño con código, elaborar propuestas a partir de una idea para después darles funcionalidad.

            Puedes contactar conmigo a través del apartado contacto o desde mis redes sociales accediendo desde el menú. ¡Estaré encantada de responderte! 🙂
            </p>
          </div>
          </div>
    </section>
  );
};

export default AboutMe;
