import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Prevention from "./components/Prevention";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Prevention" component={Prevention} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
