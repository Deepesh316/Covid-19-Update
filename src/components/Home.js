import React from "react";
import Homescreen from "../images/Homescreen.jpg";
import security from "../images/security.svg";
import face from "../images/face.svg";
import social from "../images/social-distance.svg";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 l6">
            <img
              style={{ height: "375px", width: "auto" }}
              src={Homescreen}
              alt="homescreen"
            />
          </div>
          <div className="section col s12 l6 purple-text ">
            <h3>What is Corona Virus ?</h3>
            <h6>
              Coronavirus disease (COVID-19) is an infectious disease caused by
              a newly discovered coronavirus. Most people who fall sick with
              COVID-19 will experience mild to moderate symptoms and recover
              without special treatment.
            </h6>
            <a
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
              target="_blank"
              className="waves-effect btn-small right purple"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="row purple-text">
          <div>
            <h3 className="center-align">How Can It Spread ?</h3>
          </div>
          <div className="col s12 l4 center-align">
            <img src={security} alt="security" style={{ height: "100px" }} />
            <h5>Contaminated Objects</h5>
            <p>
              A person can possibly get COVID-19 by touching a surface or an
              object (e.g. doorknobs and table) that has the virus on it and
              then touching his own mouth, nose, or eyes.
            </p>
          </div>
          <div className="col s12 l4 center-align">
            <img src={face} alt="face" style={{ height: "100px" }} />
            <h5>Air Transmission of Droplets</h5>
            <p>
              Droplet transmission occurs when a person is in in close contact
              (within 1 m) with someone who has respiratory symptoms exposed to
              potentially infective respiratory droplets.{" "}
            </p>
          </div>
          <div className="col s12 l4 center-align">
            <img src={social} alt="social" style={{ height: "100px" }} />
            <h5>Transmission Among Humans</h5>
            <p>
              {" "}
              some coronaviruses can be transmitted from person to person,
              usually after close contact with an infected patient, for example,
              in a household workplace, or health care centre.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
