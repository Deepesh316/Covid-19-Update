import React from "react";
import axios from "axios";

class Report extends React.Component {
  constructor() {
    super();
    this.covidReportApi =
      "https://covid19-india-adhikansh.herokuapp.com/states";
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get(this.covidReportApi)
      .then((result) => {
        this.setState({
          posts: result.data.state,
        });
      })
      .catch((error) => {
        console.log("Error", error); // TODO
      });
  }

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <tr key={post._id}>
            <td>{post.name}</td>
            <td>{post.active}</td>
            <td>{post.cured}</td>
            <td>{post.death}</td>
            <td>{post.total}</td>
          </tr>
        );
      })
    ) : (
      <tr>
        <th>Loading</th>
      </tr>
    );
    return (
      <>
        <table className="responsive-table highlight bordered">
          <thead>
            <tr>
              <th>State</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Death</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>{postList}</tbody>
        </table>
      </>
    );
  }
}

export default Report;
