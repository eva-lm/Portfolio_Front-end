import React, {useState} from "react";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import "../stylesheets/layout/Skills.scss";
import photoshop from "../images/photoshop.png";
import adobexd from "../images/adobexd.png";
import illustrator from "../images/illustratorlogo.png";
import ind from "../images/ind.png";

import 'react-circular-progressbar/dist/styles.css';
import { buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

const Skills = (props) => {
const [showMe, setShowMe] = useState(false);
//console.log("props skills", props)
  return (
          <section className="section__skills">
            <div className="wrapperSvg">
            {showMe === false ?
              (<svg className="bgSvgShadow" id="adfa304f-8e89-4934-9293-d44b3ee3a10e" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" width="342.7" height="545.1" viewBox="0 0 342.7 545.1"  onMouseEnter={() => setShowMe(true)} onMouseLeave={() => setShowMe(false)}>
                <g>
                <path className="bdd535a8-4af1-4bd4-a949-8db1139393c6" d="M870.7,749.1s-79.9,1.2-100-17.2-47.6-189-47.6-189,129.8-56.2,279.1-.8c0,0-16.4,170.7-35.4,189.1S868,748.6,868,748.6" transform="translate(-723.1 -204)" fill="#ff95a9"/>
                <path className="bdd535a8-4af1-4bd4-a949-8db1139393c6" d="M1024.8,706.5c-13.8,8.9-29.9,10.9-46.8,5.8l6.4-21.3c11.8,3.5,21.9,2,30.9-5,17.5-13.4,29.1-47,28.1-81.5-.3-10.7-3.4-18.5-9.3-23.7-11.2-9.8-29.1-8.2-29.3-8.1l-2.3-22.2c1.1-.1,27.6-2.8,46.1,13.4,10.8,9.5,16.6,22.9,17.1,40,.9,32.3-8.2,77.8-36.9,99.8A48.5,48.5,0,0,1,1024.8,706.5Z" transform="translate(-723.1 -204)" fill="#ff95a9" />
                <path className="e47ab935-bf16-4078-b035-03bad3c48921" d="M788.4,209.9h-.3c-4.6,2.3-98.7,24.2-51.8,97.5C774,366.6,801,330.7,825.6,371c29,47.5-16.9,29.7-9.5,75.7,4.9,30.8,28.4,39.3,43.2,41.5,4.4.7,7-4.6,4-8.1-9.8-11.6-31-23.4-15.1-39.9,22.8-23.6,48.7-84.4-22-125.8S810.6,255,823.4,271s50.7,3.5,36.4-40.1S792,208.5,788.4,209.9Z" transform="translate(-723.1 -204)" fill="#fcc8d4" />
                </g>
                  <text x="40%" y="55%" fill="#ffffff" fontSize="55" transform="rotate(-20)" className="textSvg">
                  Hover!
                  </text>  
                <path className="b947fbc0-5b1e-42d3-a371-853810a828d1" d="M837.8,640.3s4.6,22.6,29.4,22.6,27.9-22.6,27.9-22.6" transform="translate(-723.1 -204)" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" />
                  <ellipse className="e47ab935-bf16-4078-b035-03bad3c48921" cx="59.4" cy="420.2" rx="30" ry="11.3" fill="#fcc8d4"/>
                  <ellipse className="e47ab935-bf16-4078-b035-03bad3c48921" cx="224.6" cy="420.2" rx="30" ry="11.3" fill="#fcc8d4"/>
                    <circle className="e6fba76d-ec73-41a1-8488-765de3155669" cx="83.5" cy="395.5" r="21" fill="#1a1a1a"/>
                    <circle className="e6fba76d-ec73-41a1-8488-765de3155669" cx="203.7" cy="395.5" r="21" fill="#1a1a1a"/>
                    <circle className="f64b357d-367a-47a7-9f9b-6747d2bc46a4" cx="89.5" cy="401.5" r="7.5" fill="#ffffff"/>
                    <circle className="f64b357d-367a-47a7-9f9b-6747d2bc46a4" cx="81.9" cy="394" r="5.6" fill="#ffffff" />
                    <circle className="f64b357d-367a-47a7-9f9b-6747d2bc46a4" cx="202.1" cy="394" r="5.6" fill="#ffffff" />
                    <circle className="f64b357d-367a-47a7-9f9b-6747d2bc46a4" cx="209.6" cy="401.5" r="7.5" fill="#ffffff" />
              </svg>) : 
              (<svg className="bgSvg" id="a9c22cd3-6656-41fa-86d1-8511fdad03ad" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" width="342.7" height="545.1" viewBox="0 0 342.7 545.1"  onMouseEnter={() => setShowMe(true)} onMouseLeave={() => setShowMe(false)}>
              <g>
              <path className="ec83b23e-092a-4e22-8528-1dca1cae1d09" d="M870.7,749.1s-79.9,1.2-100-17.2-47.6-189-47.6-189,129.8-56.2,279.1-.8c0,0-16.4,170.7-35.4,189.1S868,748.6,868,748.6" transform="translate(-723.1 -204)"/>
              <path className="ec83b23e-092a-4e22-8528-1dca1cae1d09" d="M1024.8,706.5c-13.8,8.9-29.9,10.9-46.8,5.8l6.4-21.3c11.8,3.5,21.9,2,30.9-5,17.5-13.4,29.1-47,28.1-81.5-.3-10.7-3.4-18.5-9.3-23.7-11.2-9.8-29.1-8.2-29.3-8.1l-2.3-22.2c1.1-.1,27.6-2.8,46.1,13.4,10.8,9.5,16.6,22.9,17.1,40,.9,32.3-8.2,77.8-36.9,99.8A48.5,48.5,0,0,1,1024.8,706.5Z" transform="translate(-723.1 -204)"/>
              <path className="af2e6c01-e08a-4b6a-909d-940cc945e29a" d="M788.4,209.9h-.3c-4.6,2.3-98.7,24.2-51.8,97.5C774,366.6,801,330.7,825.6,371c29,47.5-16.9,29.7-9.5,75.7,4.9,30.8,28.4,39.3,43.2,41.5,4.4.7,7-4.6,4-8.1-9.8-11.6-31-23.4-15.1-39.9,22.8-23.6,48.7-84.4-22-125.8S810.6,255,823.4,271s50.7,3.5,36.4-40.1S792,208.5,788.4,209.9Z" transform="translate(-723.1 -204)"/>
              </g>
              <ellipse className="af2e6c01-e08a-4b6a-909d-940cc945e29a" cx="59.4" cy="420.2" rx="30" ry="11.3"/>
              <ellipse className="af2e6c01-e08a-4b6a-909d-940cc945e29a" cx="224.6" cy="420.2" rx="30" ry="11.3"/>
              <path className="f30552a1-dad7-4285-bb6d-39a172ee2b3b" d="M806.4,664.2c3.2-12.4,17.6-15.9,28.5-9.2,6.7,4.2,16.9,10,31.6,9.5,31-1,42.2-22.3,56-14,17.5,10.5-1,57-55,59C826.9,711,803,677,806.4,664.2Z" transform="translate(-723.1 -230)"/>
              <path className="bc64b95d-3bfa-47bf-a4c7-b8cbe14093d5" d="M783.5,603.5s2-20,23-20,23,20,23,20" transform="translate(-723.1 -204)"/>
              <path className="bc64b95d-3bfa-47bf-a4c7-b8cbe14093d5" d="M902.5,603.5s2-20,23-20,23,20,23,20" transform="translate(-723.1 -204)"/>
              <text x="40%" y="55%" fill="#ffffff" fontSize="55" transform="rotate(-20)" className="textSvg">
              Hi!
            </text> 
            </svg>)}
        </div>

        {showMe === true ?
            <div className="skills">
            <AboutMe/> 
            </div>
            : 
        <div className="skills">
        <div className="codeSkills">
        <div className="codeSkillBar">
          <div className="SkillHtml"> 
          <div className="SkillInfo">
            <span className="SkilllName">HTML5</span>
            {/* <span className="SkillPercentage">100%</span> */}
          </div>
          </div>
        </div>
      
        <div className="codeSkillBar">
          <div className="SkillCss"> 
          <div className="SkillInfo">
            <span className="SkilllName">CSS3/SASS</span>
            {/* <span className="SkillPercentage">90%</span> */}
          </div>
          </div>
        </div>
      
        <div className="codeSkillBar">
          <div className="SkillReact"> 
          <div className="SkillInfo">
            <span className="SkilllName">React</span>
            {/* <span className="SkillPercentage">85%</span> */}
          </div>
          </div>
        </div>
      
        <div className="codeSkillBar">
          <div className="SkillJavascript"> 
          <div className="SkillInfo">
            <span className="SkilllName">Javascript</span>
            {/* <span className="SkillPercentage">80%</span> */}
          </div>
          </div>
        </div>
      </div> 
      
      <div className="designSkills">
      <div style={{ width: 130, height: 130 }}>
      <CircularProgressbarWithChildren  value={90} styles={buildStyles({
          rotation: 0.25,
          textSize: '16px',
          pathTransitionDuration: 0.9,
          pathColor: "#00c8c8",
          trailColor: '#fffff',
          backgroundColor: '#fffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        })}>
        <img style={{ width: 75 }} src={illustrator} alt="illustrator icono" />
      </CircularProgressbarWithChildren>
      </div>
      
      <div style={{ width: 130, height: 130 }}>
      <CircularProgressbarWithChildren  value={80} styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 0.25,
      
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
         // strokeLinecap: 'butt',
      
          // Text size
          textSize: '16px',
      
          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.9,
      
          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',
      
          // Colors
          pathColor: "#00c8c8",
          trailColor: "#ffffff;",
          backgroundColor: '#ffffff;',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        })}>
        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
        <img style={{ width: 75 }} src={photoshop} alt="photshop icono" />
        {/* <div style={{ fontSize: 12, marginTop: -5 }}>
          <strong>66%</strong>
        </div> */}
      </CircularProgressbarWithChildren>
      </div>
      
      <div style={{ width: 130, height: 130 }}>
      <CircularProgressbarWithChildren  value={70} styles={buildStyles({
          rotation: 0.25,
          textSize: '16px',
          pathTransitionDuration: 0.9,
          pathColor: "#00c8c8",
          trailColor: '#fffff',
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        })}>
        <img style={{ width: 60 }} src={adobexd} alt="adobe xd icono" />
      </CircularProgressbarWithChildren>
      </div>
      
      <div style={{ width: 130, height: 130 }}>
      <CircularProgressbarWithChildren  value={60} styles={buildStyles({
          rotation: 0.25,
          textSize: '16px',
          pathTransitionDuration: 0.9,
          pathColor: '#00c8c8',
          trailColor: '#fffff',
          backgroundColor: '#fffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
              stroke: '#e02557',
              strokeLinecap: 'round',
              transform: 'rotate(0.25turn)',
              transformOrigin: 'center center',
              transition: 'stroke-dashoffset 0.8s ease 0s',
        })}>
        <img style={{ width: 60 }} src={ind} alt="indesign icono" />
      </CircularProgressbarWithChildren>
      </div>
      </div>
      </div>
        }
          {/* <div className="about__content-btn">
            <a href="#contact">
              <button className="about__button">
                Ponte en contacto conmigo
              </button>
            </a>
          </div> */}
        <Footer /> 
        </section>
    )
}
export default Skills;