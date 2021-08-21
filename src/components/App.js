import React from "react";
import { Link, Route, Switch } from 'react-router-dom';

import Home from "./Home";
import {Ux} from "./Ux";
import Illustrations from "./Illustrations";

import Contact from "./Contact";
import ProjectsList from "./ProjectsList";
import ModalImg  from "./ModalImg"; 

import "../stylesheets/layout/App.scss";

import "../stylesheets/layout/Home.scss";
import "../stylesheets/layout/Header.scss";
import "../stylesheets/components/_buttons.scss";
import logo from "../images/logo__.png";


class App extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      renderSkills: false,
    }
    this.showComponentSkills = this.showComponentSkills.bind(this);
  }

componentDidMount() {
  setTimeout(function () {
    window.scrollTo(0, 0);
},200);
}

 gradientHover(e) {
  const x = e.pageX - e.target.offsetLeft
  const y = e.pageY - e.target.offsetTop
  e.target.style.setProperty('--x', `${ x }px`)
  e.target.style.setProperty('--y', `${ y }px`)
}

showComponentSkills() {
      this.setState({
    renderSkills: true
  }, () => {
      window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
  }) 
  });
  }
  render() {
    return (
    <div className="App">
      <header className="header">
        <Link to="/">
        <div className="header__logo">
          <img src={logo} alt="logo web" className="header__logo-img" />
        </div>
        </Link>
        <div className="header__nav-content">
          <nav className="header__nav" id="header">
            <Link to="/front-end">
            <button className="gradientHover" href="#front" alt="front end projectos" onMouseMove={this.gradientHover}>
            <span className="header__link">front-end</span>
            </button>
            </Link>
            <Link to="/ux-ui">
            <button className="gradientHover" href="" alt="ux ui projectos" onMouseMove={this.gradientHover}>
            <span className="header__link">UX / UI</span>
            </button>
            </Link>
            <Link to="/illustrations">
            <button className="gradientHover" href="#illus" alt="projectos de ilustración digital" onMouseMove={this.gradientHover}>
            <span className="header__link">illustrations</span>
            </button>
            </Link>
            {/* <button className="gradientHover" href="#3d" alt="3D projectos" onMouseMove={this.gradientHover}>
            <span className="header__link">3D animation</span>
            </button> */}
          <Link to="/contact">
            <button className="gradientHover contact" href="#contact" alt="contacto" onMouseMove={this.gradientHover}>
            <span className="header__link">contacto</span>
            </button>
          </Link>
          </nav>
          <nav className="header__social" id="header-social">
            <a 
            className="header__social-insta"
            href="https://www.instagram.com/evamyarts/"
            target="_blank"
            rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
            className="header__social-github"
            href="https://github.com/eva-lm"
            target="_blank"
            rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
            className="social__social-twitter"
            href="https://twitter.com/Eva_lm9"
            target="_blank"
            rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>        
          </nav>
        </div>
      </header>
      <main>
          <Switch>
            <Route 
            exact path="/" 
            render={() => {
              return (
                <Home showComponentSkills={this.showComponentSkills} renderSkills={this.state.renderSkills} />
              )
            }} />
            <Route path="/ux-ui" component={Ux} />
            <Route path="/illustrations" component={Illustrations} />
            <Route path="/front-end" component={ProjectsList} />
            <Route path="/contact" component={Contact} />
            {/* <Route path="/full" component={ModalImg} />                      */}
          </Switch>
      </main>
    </div>
    )
  }
}    

export default App;
