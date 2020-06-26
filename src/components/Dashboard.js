import React from "react";
import axios from "axios";
import Report from "./Report";
import Chart from "./Chart";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.covidResultApi =
      "https://covid19-india-adhikansh.herokuapp.com/summary";
    this.state = {
      confirmed: null,
      recovered: null,
      death: null,
      total: null,
    };
  }

  componentDidMount() {
    axios
      .get(this.covidResultApi)
      .then((result) => {
        this.setState({
          confirmed: result.data["Active cases"],
          recovered: result.data["Cured/Discharged/Migrated"],
          death: result.data["Death"],
          total: result.data["Total Cases"],
        });
      })
      .catch((error) => {
        console.log("Error: Dashboard", error); // TODO
      });
  }

  render() {
    const { confirmed, recovered, death, total } = this.state;
    return (
      <div className="container">
        <h3 className="purple-text">Dashboard</h3>
        <div className="row">
          <div className="col s12 l3">
            <div className="card">
              <blockquote style={{ borderLeftColor: "red" }}>
                <div className="card-content center-align">
                  <span className="card-title">
                    <h3>{confirmed}</h3>
                  </span>
                  <h5 className="purple-text">Confirmed</h5>
                </div>
              </blockquote>
            </div>
          </div>
          <div className="col s12 l3">
            <div className="card">
              <blockquote style={{ borderLeftColor: "green" }}>
                <div className="card-content center-align">
                  <span className="card-title">
                    <h3>{recovered}</h3>
                  </span>
                  <h5 className="purple-text">Recovered</h5>
                </div>
              </blockquote>
            </div>
          </div>
          <div className="col s12 l3">
            <div className="card">
              <blockquote style={{ borderLeftColor: "grey" }}>
                <div className="card-content center-align">
                  <span className="card-title">
                    <h3>{death}</h3>
                  </span>
                  <h5 className="purple-text">Death</h5>
                </div>
              </blockquote>
            </div>
          </div>
          <div className="col s12 l3">
            <div className="card">
              <blockquote style={{ borderLeftColor: "orange" }}>
                <div className="card-content center-align">
                  <span className="card-title">
                    <h3>{total}</h3>
                  </span>
                  <h5 className="purple-text">Total</h5>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
        <Report />

        <Chart />
      </div>
    );
  }
}

export default Dashboard;
