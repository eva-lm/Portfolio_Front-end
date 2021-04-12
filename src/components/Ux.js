import React from "react";
import "../stylesheets/layout/Ux.scss";
import { animateScroll as scroll} from "react-scroll";
import { scroller } from "react-scroll";
import { Element } from "react-scroll";
import { Events,scrollSpy } from "react-scroll";
import ux1 from "../images/ux/ux1.png";
import ux2 from "../images/ux/ux2.png";
import ux3 from "../images/ux/ux3.png";

const Ux = (props) => {
  // window.onscroll = function (e) {  
  //   var element = document.getElementById("nav");
  //   element.classList.add("change");
  // } 

function onClickDown() {
    scroller.scrollTo("project");
 }
  return (
    <section className="ux">  
        <article className="ux__project pink">
        <img className="ux__img" src={ux1} alt="proyecto ux ui crema" />
        </article>
         <article className="ux__project aqua">
        <img className="ux__img" src={ux2} alt="proyecto ux ui joyeria" />
        </article>
        <article className="ux__project pink">
        <img className="ux__img" src={ux3} alt="proyecto ux ui app de moda" />
        </article> 
    </section>
  )
}

export default Ux;