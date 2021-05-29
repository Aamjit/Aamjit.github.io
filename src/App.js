import React from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";

const App = () => {
  return (
    <div style={{ background: "#A5C9C8" }}>
      <Navigation />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
