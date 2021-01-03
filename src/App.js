import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Photos from "./components/pages/Photos";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" component={Projects} />
          <Route path="/photos" exact component={Photos} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
