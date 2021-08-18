import React, { useState } from "react";
import "../stylesheets/layout/Ux.scss";
import { animateScroll as scroll} from "react-scroll";
import { scroller } from "react-scroll";
import { Element } from "react-scroll";
import { Events,scrollSpy } from "react-scroll";
import { projectsUx } from "./projectsUx";

export const Ux = () => {
  // window.onscroll = function (e) {  
  //   var element = document.getElementById("nav");
  //   element.classList.add("change");
  // } 
const [currentPage, setCurrentPage] = useState(Math.abs(0))
const [hidden, setHidden] = useState(false)

function onClickDown() {
    scroller.scrollTo("project");
 }

 function showNextProject(event) {
  if (currentPage <= projectsUx.length-2) {
    setCurrentPage(Math.abs(Number(event.target.id) +1))
  }
 }
 function showPreviousProject(event) {
  if (currentPage >= 1) {
    setCurrentPage(Math.abs(Number(event.target.id) -1))
    }
 }
const showMoreInfo = () => {
setHidden(!hidden)
}
console.log(" projectsUx.length->",  projectsUx.length ,"y currentpage", currentPage)
// console.log("parseInt(projectsUx[currentPage].id)", parseInt(projectsUx[currentPage].id))
  return (
    <section className="ux">  
    {parseInt(projectsUx[currentPage].id) !== undefined && projectsUx.length ?
       ( <article className="ux__project pink" id={parseInt(projectsUx[currentPage].id)} style={{ display: "flex", flexDirection: "column"}}>
          <h2>{projectsUx[currentPage].title}</h2>
              <img className="ux__img" src={projectsUx[currentPage].image} alt={projectsUx[currentPage].title} />
        <input type="button" id={parseInt(projectsUx[currentPage].id)} style={{ width: "100px"}} onClick={showPreviousProject} />Left
        <input type="button" id={parseInt(projectsUx[currentPage].id)} style={{ width: "100px"}} onClick={showNextProject} />Right
        <button onClick={showMoreInfo}>
          show more...
        </button>

        {hidden ?
        <>
       {projectsUx[currentPage].info.map((inf, indx) => {
         return (
           <div key={indx}>
           <img height="60" src={inf.style} />
           <p>{inf.description}</p>
           <video width="400" controls autoPlay>
           <source src={inf.video} type="video/mp4" />
         Your browser does not support the video tag.
         </video>
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
