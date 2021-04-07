import React from "react";
import { Link, Route, Switch } from 'react-router-dom';

import Home from "./Home";
// import Skills from "./Skills";
import Ux from "./Ux";

// import Contact from "./Contact";
// import ProjectsList from "./ProjectsList";
import "../stylesheets/layout/App.scss";



class App extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      //renderSkills: false,
    }
    //this.showComponentSkills = this.showComponentSkills.bind(this);
  }

componentDidMount() {
  setTimeout(function () {
    window.scrollTo(0, 0);
},200);
}

  render() {
    return (
      <div className="App">
      
      {/* <AboutMe  />
      <ProjectsList />
    <Contact />  */}
          <Switch>
            <Route 
            exact path="/" 
            render={routerProps => (
              <Home />
              )}/>
            <Route path="/ux" component={Ux} />
          </Switch>
              {/* <Skills renderSkills={this.state.renderSkills} /> */}
    </div>
    )
  }
}

export default App;
