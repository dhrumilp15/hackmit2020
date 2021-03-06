import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./app.css";
import About from "./components/about";
import Calculate from "./components/calculate";
import Header from "./components/header";
import Home from "./components/home";
import Learn from "./components/learn";
import Compare from "./components/compare";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/calculate" component={Calculate} />
        <Route path="/compare" component={Compare} />
        <Route path="/learn" component={Learn} />
        <Route path="/about" component={About} />
      </Router>
    </>
  );
}

export default App;
