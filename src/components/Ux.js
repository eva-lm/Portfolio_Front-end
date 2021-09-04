import React, { useEffect, useState } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import Spinner from "./Spinner";
import { projectsUx } from "./projectsUx";
import ModalWireframe from "./ModalWireframe";
import ModalWireflow from "./ModalWireflow";
import ModalImg  from "./ModalImg"; 
import Footer from "./Footer";

import "../stylesheets/layout/Ux.scss";


export const Ux = () => {
const [currentPage, setCurrentPage] = useState(Math.abs(0))
const [showViewComplete, setShowViewComplete] = useState(true)

 function showNextProject(event) {
  if (currentPage <= projectsUx.length-2) {
    setCurrentPage(Math.abs(Number(event.target.id) +1))
    setShowViewComplete(true)
  }
 }
 function showPreviousProject(event) {
  if (currentPage >= 1) {
    setCurrentPage(Math.abs(Number(event.target.id) -1))
    setShowViewComplete(true)
    }
 }
function showMoreInfo() {
  setShowViewComplete(!showViewComplete)
}
useEffect(() => {
  window.scroll({
    // top: document.body.offsetHeight,
    // left: 0, 
    // behavior: 'smooth',
  }) 

}, [showViewComplete])

console.log(" projectsUx.length->",  projectsUx.length ,"y currentpage", currentPage)
  return (
  <Switch>
    <Route
    exact path="/ux-ui"
    render={
      () => {
        return (
          <section className={showViewComplete ? "ux ux-complete" : "ux"}> 
              {/* {projectsUx.length <= 0 && <Spinner />}  */}
          {parseInt(projectsUx[currentPage].id) !== undefined && projectsUx.length ?
             ( <article className="ux__project" id={parseInt(projectsUx[currentPage].id)}>
                {/* <h2>{projectsUx[currentPage].title}</h2> */}
                <div className="ux__project-content">
                  <div className="ux__wrap-img">
                    <img className="ux__img" src={projectsUx[currentPage].image} alt={projectsUx[currentPage].title} />
                  </div>
                  <div className="ux__project-arrow">
              <input type="button" className={currentPage === 0 ? "ux__project-arrow-slider off" : "ux__project-arrow-slider"} id={parseInt(projectsUx[currentPage].id)} onClick={showPreviousProject} value="<" />
              <button className="ux__project-show-more" onClick={showMoreInfo}>
                Show more...
              </button>
              <input type="button" className={currentPage === projectsUx.length - 1 ? "ux__project-arrow-slider off" : "ux__project-arrow-slider"} id={parseInt(projectsUx[currentPage].id)}onClick={showNextProject} value=">"/>
                  </div>
              </div>
              {showViewComplete ?
              <>
             {projectsUx[currentPage].info.map((inf, indx) => {
               return (
                <div className="ux-complete__content" key={indx}>
                    <div className="ux-complete__content-info">
                      <div className="ux-complete__content-info-main">
                          <h3 className="ux-complete__content-info-main-title">Demo:</h3>
                          <p className="ux-complete__content-info-main-description">{inf.description}</p>
                      </div>
                      <video controls autoPlay>
                        <source src={inf.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div> 
                  {inf.wireframe ?
                    (<div className="ux-complete__content-info column-reverse">
                      <div className="wrap-img">
                      <Link to="/ux-ui/full-wireframe">
                          <img className="ux-complete__img-wireframe" src={inf.wireframe} />
                      </Link>
                      </div>
                      <div className="ux-complete__content-info-wireframe">
                        <h4 className="ux-complete__content-info-wireframe-title">Wireframe:</h4> 
                        <p className="ux-complete__content-info-wireframe-description">{inf.descriptionWireframe}</p>
                      </div>
                    </div>) : ""}

                    {inf.wireflow ?
                    (<div className="ux-complete__content-info column-reverse">
                      <div className="wrap-img">
                        <Link to="/ux-ui/full-wireflow">
                          <img className="ux-complete__img-wireframe" src={inf.wireflow} />
                        </Link> 
                      </div>
                  
                      <div className="ux-complete__content-info-wireframe">
                     <h4 className="ux-complete__content-info-wireframe-title">Wireflow:</h4> 
                        <p className="ux-complete__content-info-wireframe-description">{inf.descriptionWireflow}</p>
                      </div>
                    </div>) : ""}
                    {inf.style ?
                    (<div className="ux-complete__content-info">
                      <div className="ux-complete__content-info-style">
                      <h4 className="ux-complete__content-info-style-title">Hoja de estilo:</h4>
                        <p className="ux-complete__content-info-style-description">{inf.descriptionStyle}</p>
                      </div>
                      <div className="wrap-img">
                      <Link to="/ux-ui/full-image">
                          <img className="ux-complete__img-style" src={inf.style} />
                      </Link>
                      </div>
                    </div>) : ""}
                </div>
              )
            })}
            </>
              : ""
              }
              </article>)
              : null}

{showViewComplete ?
               <Footer /> 
               : ""}
          </section>
        )
      }
    }
    />
      <Route path="/ux-ui/full-image"
          children={
            <ModalImg currentPage={currentPage} />
          }
        /> 
            <Route path="/ux-ui/full-wireframe"
          children={
            <ModalWireframe currentPage={currentPage} />
          }
        /> 
            <Route path="/ux-ui/full-wireflow"
          children={
            <ModalWireflow currentPage={currentPage} />
          }
        /> 
  </Switch>
  )
}
