import React from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="main-app">
      <Navigation />
      <Home />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
