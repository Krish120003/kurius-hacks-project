import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ResultPage from "./pages/ResultPage";
import "./styles/App.css";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/" exact component={Homepage}></Route>
            <Route path="/q/:add" component={ResultPage}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
