import { React } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Home from "./pages/Home/home";
import Projects from "./pages/Projects/projects";
import Contact from "./pages/Contact/contact";
import Resume from "./pages/Resume/resume"
import Navigation from "./components/navbar/navbar.jsx";



function App() {

  return (
    <div>
      <Navigation />
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
          <Route exact path="/resume">
            <Resume />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
