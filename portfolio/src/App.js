import { React } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./pages/home";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Navigation from "./components/navbar/navbar.jsx";



function App() {

  return (
    <>
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
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
