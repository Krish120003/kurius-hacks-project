import React, { Component } from "react";
import Homepage from "./pages/Homepage";
import "./styles/App.css";

export default class App extends Component {
  constructor(props) {
    super();
    this.state = { query: "" };
  }
  render() {
    return (
      <div className="app">
        <Homepage />
      </div>
    );
  }
}
