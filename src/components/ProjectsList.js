import React from "react";
import BBVA from "../images/projects/bbva.png";
import bold from "../images/projects/bold-team.png";
import card from "../images/projects/card.png";
import rick from "../images/projects/rick.png";
import server from "../images/projects/server.png";
import pingpong from "../images/projects/muestra.png";
import "../stylesheets/layout/Project.scss";

const ProyectsList = props => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">Mis proyectos</h2>
      <ul className="wrapper">
        <li className="project__item">
          <div className="project__content">
            <h2 className="project__title">Widget del tiempo para BBVA-IT</h2>
            <img src={BBVA} alt="widget BBVA" className="project__img" />
            <p className="project__description">
              Widget del tiempo para Madrid y Barcelona, creado durante la
              semana del talento de Adalab.
            </p>
            <div className="project_links-content">
              <a
                className="about__button"
                href="http://beta.adalab.es/BBVA-IT/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver proyecto
              </a>
              <a
                className="about__button"
                href="https://github.com/Adalab/BBVA-IT"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al respositorio en gitHub
              </a>
            </div>
            <p className="project__languages">REACT | SASS</p>
          </div>
        </li>

        <li className="project__item">
          <div className="project__content">
            <h2 className="project__title">Rick y Morty</h2>
            <img src={rick} alt="tilte" className="project__img" />
            <p className="project__description">
              Directorio de Rick y Morty, donde podemos filtrar por el nombre
              del personaje.
            </p>
            <div className="project_links-content">
              <a
                className="about__button"
                href="http://beta.adalab.es/Rick-y-Morty-Directorio/#/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver proyecto
              </a>
              <a
                className="about__button"
                href="https://github.com/Adalab/Rick-y-Morty-Directorio"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ir al respositorio en gitHub
              </a>
            </div>
            <p className="project__languages">REACT | SASS</p>
          </div>
        </li>

        <li className="project__item">
          <div className="project__content">
            <h2 className="project__title">Awesome Profile Cards</h2>
            <img src={card} alt="tilte" className="project__img" />
            <p className="project__description">
              Generador de tarjetas interactivas en React con código heredado.
            </p>
            <div className="project_links-content">
              <a
                className="about__button"
                href="https://eva-lm.github.io/grace-m3-dummies/#/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver proyecto
              </a>
              <a
                className="about__button"
                href="https://github.com/eva-lm/grace-m3-dummies"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ir al respositorio en gitHub
              </a>
            </div>
            <p className="project__languages">REACT | SASS</p>
          </div>
        </li>

        <li className="project__item">
          <div className="project__content">
            <h2 className="project__title">Anonymous server</h2>
            <img src={server} alt="tilte" className="project__img" />
            <p className="project__description">
              Pequeña página de maquetación responsive con un menú
              "desplegable".
            </p>
            <div className="project_links-content">
              <a
                className="about__button"
                href="http://beta.adalab.es/formacion-online-anonymous-server-eva-lm/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver proyecto
              </a>
              <a
                className="about__button"
                href="https://github.com/Adalab/formacion-online-anonymous-server-eva-lm"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ir al respositorio en gitHub
              </a>
            </div>
            <p className="project__languages"> CSS | JAVASCRIPT</p>
          </div>
        </li>

        <li className="project__item">
          <div className="project__content">
            <h2 className="project__title">The Bold Team</h2>
            <img src={bold} alt="tilte" className="project__img" />
            <p className="project__description">
              Primer proyecto web colaborativo con información social de todos
              los miembros del equipo. Desarrollado en mobile first, responsive
              y accesible.
            </p>
            <div className="project_links-content">
              <a
                className="about__button"
                href="https://laila25.github.io/the-bold-team2/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver proyecto
              </a>
              <a
                className="about__button"
                href="https://github.com/eva-lm/the-bold-team2"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ir al respositorio en gitHub
              </a>
            </div>
            <p className="project__languages">SASS</p>
          </div>
        </li>
        <li className="project__item">
          <div className="project__content">
            <h2 className="project__title">Ping-pong game</h2>
            <img src={pingpong} alt="tilte" className="project__img" />
            <p className="project__description">
              Juego de ping pong utilizando el framework Phaser, basado en el
              lenguaje de programación javascript.
            </p>
            <div className="project_links-content">
              <a
                className="about__button"
                href="https://eva-lm.github.io/Ping-pong_game/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver proyecto
              </a>
              <a
                className="about__button"
                href="https://github.com/eva-lm/Ping-pong_game"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ir al respositorio en gitHub
              </a>
            </div>
            <p className="project__languages">Phaser</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default ProyectsList;
