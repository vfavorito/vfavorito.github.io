import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./pages/home";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
