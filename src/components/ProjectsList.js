import React from "react";
import BBVA from "../images/projects/bbva.png";
import bold from "../images/projects/bold-team.png";
import card from "../images/projects/card.png";
import rick from "../images/projects/rick.png";
import harrypotter from "../images/projects/hp.png";
import pingpong from "../images/projects/pingpong.png";
import pokemon from "../images/projects/pokemon.png";
import arcade from "../images/projects/arcade.png"
import "../stylesheets/layout/Project.scss";

const ProyectsList = props => {
  return (
    <section className="projects" id="projects">
      {/* <h2 className="projects__title">Mis proyectos</h2> */}
      <ul className="wrapper">
      <li className="project__item">
            <h2 className="project__title">Harry Potter Spells</h2>
            <div className="project__img-content">
            <img src={harrypotter} alt="buscador hechizos Harry Potter" className="project__img" />
            </div>
            <p className="project__description">
            Web sencilla sobre mundo mágico de Harry Potter en la que puedes encontrar un buscador de hechizos, los personajes de las pelis y un test para saber cual es tu casa.
            </p>
            <div className="project_links-content">
              <a
                className="about__button"
                href="https://eva-lm.github.io/harry-potter-spells/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver proyecto
              </a>
              <a
                className="about__button"
                href="https://github.com/eva-lm/harry-potter-spells"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ir al respositorio en gitHub
              </a>
            </div>
            <p className="project__languages"> <span>Material UI</span> | <span>React Hooks</span></p>
        </li> 

      <li className="project__item">
            <h2 className="project__title">Pokedex</h2>
            <div className="project__img-content">
            <img src={pokemon} alt="listado pokemon" className="project__img" />
            </div>
            <p className="project__description">
            Listado de pokémon de todas las generaciones donde puedes acceder a cada uno de ellos para conocer sus características.
            </p>
            <div className="project_links-content">
              <a
                className="about__button"
                href="https://eva-lm.github.io/Pokedex/#/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver proyecto
              </a>
              <a
                className="about__button"
                href="https://github.com/eva-lm/Pokedex"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al respositorio en gitHub
              </a>
            </div>
            <p className="project__languages"><span>SASS</span> | <span>React Hooks</span></p>
        </li>

  
        <li className="project__item">
            <h2 className="project__title">Rick y Morty</h2>
            <div className="project__img-content">
            <img src={rick} alt="personajes de Rick y Morty " className="project__img" />
            </div>
            <p className="project__description">
              Directorio de los personajes de la serie Rick and Morty, donde podemos realizar diferentes búsquedas.
            </p>
            <div className="project_links-content">
              <a
                className="about__button"
                href="https://eva-lm.github.io/Rick-y-Morty/#/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver proyecto
              </a>
              <a
                className="about__button"
                href="https://github.com/eva-lm/Rick-y-Morty"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ir al respositorio en gitHub
              </a>
            </div>
            <p className="project__languages"><span>React</span> | <span>SASS</span></p>
        </li>

        <li className="project__item">
            <h2 className="project__title">Arcade Game</h2>
            <img src={arcade} alt="tilte" className="project__img" />
            <p className="project__description">
              Mini juego basado en el tipico arcade con estilo retro de los 80. Realizado con javascript usando la libreria de Phaser.
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
            <p className="project__languages"> <span>CSS</span> | <span>JAVASCRIPT</span></p>
        </li> 

        <li className="project__item">
            <h2 className="project__title">Ping-pong game</h2>
            <div className="project__img-content">
            <img src={pingpong} alt="juego ping-pong" className="project__img" />
            </div>
            <p className="project__description">
              Juego de ping pong utilizando el framework Phaser, una librería basada en javascript.
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
            <p className="project__languages"><span>Phaser</span></p>
        </li>



{/* <li className="project__item">
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
        </li> */}


<li className="project__item">
            <h2 className="project__title">The Bold Team</h2>           
            <div className="project__img-content">
            <img src={bold} alt="dibujo del equipo" className="project__img" />
            </div>
            <p className="project__description">
              Primer proyecto web colaborativo con información social de todos los miembros del equipo. Maquetación siguiendo los principios de mobile first, responsive
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
            <p className="project__languages"><span>SASS</span></p>
        </li>
      </ul>
    </section>
  );
};

export default ProyectsList;
