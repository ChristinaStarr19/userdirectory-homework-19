import React, { Component } from "react";
import Table from "./Table";
import axios from "axios";

class Tablecontainer extends Component {
  state = {
    results: [],
    sortResults: [],
    search: "",
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
    this.setState({ sortResults: this.state.results.sort(compare) });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
        [name]: value,
    });
  };

  handleSubmit = (e) => {
      e.preventDefault();
      this.filterPeople();
  }

  filterPeople = ()  =>  {
      const searchName = this.state.search.toLowerCase();
     this.setState({ results: this.state.results.filter((person) =>
        person.name.last.toLowerCase().includes(searchName)
        ),
    }); 

  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <button onClick={this.sortPeople}>Sort Alphabetically</button>
            </div>
            <div className="col-4">
                <form onSubmit={this.handleSubmit}>
              <input
                type="textarea"
                className="form-control"
                placeholder="Search By Last Name"
                name="search"
                value={this.state.search}
                onChange={this.handleInputChange}
              ></input>
              </form>
            </div>
          </div>
        </div>
        <Table results={this.state.results} />
      </div>
    );
  }
}

export default Tablecontainer;
