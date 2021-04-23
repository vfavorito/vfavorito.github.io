import { React } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./pages/Home/home";
import Projects from "./pages/Projects/projects";
import Contact from "./pages/Contact/contact";
import Navigation from "./components/Navbar/navbar.jsx";



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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
