import React from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class NavBar extends React.Component {
  componentDidMount() {
    const elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem);
  }
  render() {
    return (
      <div>
        <nav className="purple lighten-2">
          <div className="container nav-wrapper">
            <a href="#" className="brand-logo">
              COVID-19
            </a>
            <a href="#!" data-target="slide-out" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home </Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/prevention">Prevention</Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul id="slide-out" className="sidenav">
          <li>
            <a href="#!" className="purple lighten-2">
              <i className="material-icons white-text">cloud</i>
              <span className="white-text">Covid Tracker India</span>
            </a>
          </li>
          <li className="sidenav-close">
            <Link to="/">Home</Link>
          </li>
          <li className="sidenav-close">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="sidenav-close">
            <Link to="/prevention">Prevention</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
