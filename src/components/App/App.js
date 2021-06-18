import "./App.css";
import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import About from '../About/About';
import Projects from '../Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
