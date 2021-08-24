import React from "react";
import { Route, Switch } from 'react-router-dom';

import { Menu } from "./Menu";
import Home from "./Home";
import {Ux} from "./Ux";
import Illustrations from "./Illustrations";

import Contact from "./Contact";
import ProjectsList from "./ProjectsList";

import "../stylesheets/layout/App.scss";

import "../stylesheets/layout/Home.scss";
import "../stylesheets/layout/Header.scss";
import "../stylesheets/components/_buttons.scss";


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
<Menu />
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
          </Switch>
      </main>
    </div>
    )
  }
}    

export default App;
