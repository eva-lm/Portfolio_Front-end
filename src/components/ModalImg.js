import React from "react";
import { projectsUx } from "./projectsUx";
import { Link } from 'react-router-dom';
import "../stylesheets/layout/Ux.scss";





const ModalImg = (props) => {
  console.log("aaaa", props)
  return (
    <section className="full-image-content">
        {projectsUx[props.currentPage].info.map((inf, indx) => {
          return (
            <Link className="full-image-content-link" to="/ux-ui">
              <img key={indx} className="full-image-content-img" src={inf.style} />
            </Link>
          )
          })
}
    </section>
  )
}

export default ModalImg;