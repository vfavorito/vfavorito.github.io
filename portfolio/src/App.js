import { React } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Projects from "./pages/Projects/projects";
import Contact from "./pages/Contact/contact";
import Resume from "./pages/Resume/resume";
import Navigation from "./components/navbar/navbar";
import Footer from "./components/Footer/footer";
import "./App.css";


function App() {

  return (
    <div className="appContainer">
      <div className="contentContainer">
        <div className="background">
          <img className="backgroundImage" alt="background"
            src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </div>
        <Navigation />
        <HashRouter basename="/">
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
        </HashRouter>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default App;
