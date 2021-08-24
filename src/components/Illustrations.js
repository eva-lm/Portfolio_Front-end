import React, { useState } from "react";
import AwesomeSlider from 'react-awesome-slider';
import { Menu } from "./Menu";
import Footer from "./Footer";

import 'react-awesome-slider/dist/styles.css';
import "../stylesheets/layout/Illustrations.scss";
import ilus1 from "../images/illus/ilus-1.png";
import ilus2 from "../images/illus/ilus-2.png";
import ilus3 from "../images/illus/ilus-3.png";
import ilus4 from "../images/illus/ilus-4.png";
import ilus5 from "../images/illus/ilus-5.png";

const Illustrations = (props) => {
  const [nextPage, setNextPage] = useState(false);

  let images = [ilus1, ilus2, ilus3, ilus4, ilus5];
  let currentImage = [];

//   let i = images.map(i => i);

//   function nextImage() {
    
//     for (let i = 0; i < images.length; i++) {
//   currentImage.push(images[i])
//     }
//   console.log(currentImage)
// }

console.log("next", nextPage)
  return (
    <section className="illus">
        {/* <div class="cover">
      <div class="book"> */}
          {/* <div>
            <h1 class="page__content-book-title">Ilustraciones</h1>
            <h2 class="page__content-author">Eva</h2>
          </div> */}
      <AwesomeSlider className="cover" >
      <div data-src={ilus1} className="page1" />
      <div data-src={ilus2}  className="page1" />
      <div data-src={ilus3} className="page1" />
      <div data-src={ilus4} className="page1"  />
      <div data-src={ilus5} className="page1"  />
    </AwesomeSlider>
      {/* </div>
      </div> */}
            <Footer /> 
    </section>
  )
}

export default Illustrations;