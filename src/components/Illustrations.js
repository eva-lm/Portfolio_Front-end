import React from "react";
import Footer from "./Footer";
import ilus1 from "../images/illus/ilus-1.png";
import ilus2 from "../images/illus/ilus-2.png";
import ilus3 from "../images/illus/ilus-3.png";
import ilus4 from "../images/illus/ilus-4.png";
import ilus5 from "../images/illus/ilus-5.png";
import "../stylesheets/layout/Illustrations.scss";

const Illustrations = () => {
  if ("loading" in HTMLImageElement.prototype) {
    console.log("El navegador soporta `lazy-loading`...");
  } else {
    console.log("`lazy-loading` no soportado...");
  }
  return (
    <section className="illus">
      <div className="illus__wrap-img">
      <img 
      loading="lazy"
      src={ilus1} 
      alt="ilustracion digital" />
      </div>
      <div className="illus__wrap-img">
      <img 
      loading="lazy"
      src={ilus2} 
      alt="ilustracion digital" />      </div>
      <div className="illus__wrap-img">
      <img 
      loading="lazy"
      src={ilus3} 
      alt="ilustracion digital" />      </div>
      <div className="illus__wrap-img">
      <img 
      loading="lazy"
      src={ilus4} 
      alt="ilustracion digital" />      </div>
      <div className="illus__wrap-img">
      <img 
      loading="lazy"
      src={ilus5} 
      alt="ilustracion digital" />      </div>
            <Footer /> 
    </section>
  )
}

export default Illustrations;