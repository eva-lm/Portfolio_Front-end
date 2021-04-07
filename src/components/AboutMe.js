import React from "react";
import "../stylesheets/layout/AboutMe.scss";
import "../stylesheets/components/_buttons.scss";

const AboutMe = (props) => {
  return (
    <section  id="about_me" className="about">
          <div className="overlay">
          <div className="about__me-content">
            <p className="about__text">
            Hola! Mi nombre es Eva y resido en Madrid, España. Soy desarrolladora front-end e ilustradora digital. También estoy estudiando Animación 3D y juegos. Me encanta combinar diseño con código, disfruto mucho con ambos, puesto que me permite crear un producto a partir de una idea. En cuanto a mi parte artística, me gusta inspirarme en la naturaleza y sus colores, en transmitir alegría y armonía con lo que hago. Intento que mi estilo sea fresco y que me represente. Respecto al código me gusta trabajar con Javascript usando frameworks como React o Vue. También tengo nociones de C#.

            Puedes contactar conmigo a través del apartado contacto o desde mis redes sociales accediendo desde el menú. ¡Estaré encantada de responderte! 🙂
            </p>
          </div>
          </div>
    </section>
  );
};

export default AboutMe;
