import "./App.css";
import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import { Route, Switch } from "react-router-dom";

function App() {
  console.log('App')
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
          </main>
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
