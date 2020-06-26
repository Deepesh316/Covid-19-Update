import React from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";

class Chart extends React.Component {
  constructor() {
    super();
    this.covidReportApi =
      "https://covid19-india-adhikansh.herokuapp.com/summary";
    this.state = {
      data: {
        labels: ["Active", "Discharged", "Death"],
        datasets: [
          {
            label: "Covid",
            hoverBackgroundColor: ["#501800", "#2B9000", "#35014F"],
            backgroundColor: ["Red", "Green", "Black"],
            data: [],
          },
        ],
      },
    };
  }

  componentDidMount() {
    axios.get(this.covidReportApi).then((result) => {
      const numOfCases = Array.from(Object.values(result.data)).slice(0, -1);
      const newArrOfDataSets = this.state.data.datasets.slice(0);
      newArrOfDataSets[0].data = newArrOfDataSets[0].data.concat(numOfCases);

      this.setState({
        data: Object.assign({}, this.state.data, {
          datasets: newArrOfDataSets,
        }),
      });
    });
  }

  render() {
    return (
      <div style={{ paddingTop: 20 + "px" }}>
        <Pie
          data={this.state.data}
          width={150}
          height={50}
          options={{
            title: {
              display: true,
              text: "Covid Report Chart",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}

export default Chart;
