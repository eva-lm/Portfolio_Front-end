import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import Contact from "./Contact";
import ProjectsList from "./ProjectsList";
import "../stylesheets/layout/App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <ProjectsList />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
