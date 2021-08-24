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
const [showViewComplete, setShowViewComplete] = useState(false)

 function showNextProject(event) {
  if (currentPage <= projectsUx.length-2) {
    setCurrentPage(Math.abs(Number(event.target.id) +1))
    setShowViewComplete(false)
  }
 }
 function showPreviousProject(event) {
  if (currentPage >= 1) {
    setCurrentPage(Math.abs(Number(event.target.id) -1))
    setShowViewComplete(false)
    }
 }
function showMoreInfo() {
  setShowViewComplete(!showViewComplete)
}
useEffect(() => {
  window.scroll({
    top: document.body.offsetHeight,
    left: 0, 
    behavior: 'smooth',
  }) 

}, [showViewComplete])

// console.log(" projectsUx.length->",  projectsUx.length ,"y currentpage", currentPage)
  return (
  <Switch>
    <Route
    exact path="/ux-ui"
    render={
      () => {
        return (
          <section className={showViewComplete ? "ux ux-complete" : "ux"}> 
              {projectsUx.length <= 0 && <Spinner />} 
          {parseInt(projectsUx[currentPage].id) !== undefined && projectsUx.length ?
             ( <article className="ux__project pink" id={parseInt(projectsUx[currentPage].id)} style={showViewComplete ? {height: "auto"} : {height: "100vh"}}>
                {/* <h2>{projectsUx[currentPage].title}</h2> */}
                <div className="ux__project-content">
              <input type="button" className="ux__project-arrow-slider" id={parseInt(projectsUx[currentPage].id)} onClick={showPreviousProject} value="<" />
          
                    <img className="ux__img" src={projectsUx[currentPage].image} alt={projectsUx[currentPage].title} />
              <input type="button" className="ux__project-arrow-slider" id={parseInt(projectsUx[currentPage].id)}onClick={showNextProject} value=">"/>
              </div>
              <button style={{ fontSize: "18px", border: "solid 2px #8f6894"}}  className="about__button" onClick={showMoreInfo}>
                Show more...
              </button>
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
                      <video height="400px" controls autoPlay>
                        <source src={inf.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div> 
      
                    <div className="ux-complete__content-info">
                      <div className="wrap-img">
                      <Link to="/ux-ui/full-wireframe">
                          <img className="ux-complete__img-wireframe" src={inf.wireframe} />
                      </Link>
                      </div>
                      <div className="ux-complete__content-info-wireframe">
                        {inf.descriptionWireframe ? <h4 className="ux-complete__content-info-wireframe-title">Wireframe:</h4> : ""}
                        <p className="ux-complete__content-info-wireframe-description">{inf.descriptionWireframe}</p>
                      </div>
                    </div>

                    <div className="ux-complete__content-info">
                    {inf.wireflow ?
                      <div className="wrap-img">
                        <Link to="/ux-ui/full-wireflow">
                          <img className="ux-complete__img-wireframe" src={inf.wireflow} />
                        </Link> 
                      </div>
                     : ""}
                      <div className="ux-complete__content-info-wireframe">
                      {inf.descriptionWireflow ? <h4 className="ux-complete__content-info-wireframe-title">Wireflow:</h4> : ""}
                        <p className="ux-complete__content-info-wireframe-description">{inf.descriptionWireflow}</p>
                      </div>
                    </div>
      
                    <div className="ux-complete__content-info">
                      <div className="ux-complete__content-info-style">
                       {inf.descriptionStyle ? <h4 className="ux-complete__content-info-style-title">Hoja de estilo:</h4> : "" }
                        <p className="ux-complete__content-info-style-description">{inf.descriptionStyle}</p>
                      </div>
                      <div className="wrap-img">
                      <Link to="/ux-ui/full-image">
                          <img className="ux-complete__img-style" src={inf.style} />
                      </Link>
                      </div>
                    </div>
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
