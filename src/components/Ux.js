import React, { useEffect, useState } from "react";
import "../stylesheets/layout/Ux.scss";
import { scroller } from "react-scroll";
import { Element } from "react-scroll";
import { Events,scrollSpy } from "react-scroll";
import { projectsUx } from "./projectsUx";

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

function goScroll() {
  scroller.scrollTo("project");
}

console.log(" projectsUx.length->",  projectsUx.length ,"y currentpage", currentPage)
// console.log("parseInt(projectsUx[currentPage].id)", parseInt(projectsUx[currentPage].id))
  return (
    <section className={showViewComplete ? "ux ux-complete" : "ux"}>  
    {parseInt(projectsUx[currentPage].id) !== undefined && projectsUx.length ?
       ( <article className="ux__project pink" id={parseInt(projectsUx[currentPage].id)} style={{ display: "flex", flexDirection: "column"}}>
          <h2>{projectsUx[currentPage].title}</h2>
          <div className="ux__project-content">
        <input type="button" className="ux__project-arrow-slider" id={parseInt(projectsUx[currentPage].id)} onClick={showPreviousProject} value="<" />
    
              <img className="ux__img" src={projectsUx[currentPage].image} alt={projectsUx[currentPage].title} />
        <input type="button" className="ux__project-arrow-slider" id={parseInt(projectsUx[currentPage].id)}onClick={showNextProject} value=">"/>
        </div>
        <button style={{ fontSize: "18px"}}  className="about__button" onClick={showMoreInfo}>
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
                <video width="50%" controls autoPlay>
                  <source src={inf.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div> 

              <div className="ux-complete__content-info">
                <div className="wrap-img">
                    <img className="ux-complete__img-wireframe" src={inf.wireframe} />
                </div>
                <div className="ux-complete__content-info-wireframe">
                  <h4 className="ux-complete__content-info-wireframe-title">Wireframe:</h4>
                  <p className="ux-complete__content-info-wireframe-description">{inf.descriptionWireframe}</p>
                </div>
              </div>

              <div className="ux-complete__content-info">
                <div className="ux-complete__content-info-style">
                  <h4 className="ux-complete__content-info-style-title">Hoja de estilo:</h4>
                  <p className="ux-complete__content-info-style-description">{inf.descriptionStyle}</p>
                </div>
                <div className="wrap-img">
                  <img className="ux-complete__img-style" src={inf.style} />
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
    </section>
  )
      }
