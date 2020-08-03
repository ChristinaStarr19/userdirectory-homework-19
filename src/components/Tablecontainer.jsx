import React, { Component } from "react";
import Table from "./Table";
import axios from "axios";

class Tablecontainer extends Component {
  state = {
    results: [],
    sortResults: [],
    filterResults: [],
  };

  componentDidMount() {
      console.log("Before axios call");
    axios.get("https://randomuser.me/api/?results=50").then((results) => {
    console.log("check api:", results.data);
      this.setState({results: results.data.results})
    });
  }

  render() {
    return (
      <div>
        <Table results={this.state.results} />
      </div>
    );
  }
}

export default Tablecontainer;
