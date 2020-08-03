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
    console.log(this.state.results);
    axios.get("https://randomuser.me/api/?results=50").then((results) => {
      this.setState({ results: results.data.results });
      console.log("check api:", this.state.results);
    //   this.sortPeople();
    });
  }

  sortPeople = () => {
    function compare(a, b) {
      console.log("A: ", a);
      console.log("B: ", b);
      if (a.name.last > b.name.last) return 1;
      if (b.name.last > a.name.last) return -1;

      return 0;
    }
    this.setState({sortResults:this.state.results.sort(compare)});
    console.log(this.state.sortResults);
  };

  render() {
    return (
      <div>
        <Table results={this.state.results} />
      </div>
    );
  }
}

export default Tablecontainer;
