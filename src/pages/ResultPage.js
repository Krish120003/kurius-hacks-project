import React, { Component } from "react";
import "../styles/ResultPage.css";

import Result from "../components/Result";

import { data } from "../MockData";

export default class ResultPage extends Component {
  constructor(props) {
    super();
    this.state = {
      query: props.match.params.add,
      props: props,
    };
    console.log(this.state);
  }
  render() {
    return (
      <>
        <h1 className="title">
          <b>FoodBank</b> Search
        </h1>
        <div className="container">
          <div className="header">
            <div
              onClick={() => {
                this.state.props.history.push("/");
              }}
            >
              <span
                class="iconify"
                data-icon="eva:arrow-ios-back-fill"
                data-inline="false"
                data-width="2em"
                data-height="2em"
              ></span>
            </div>
            <h2>
              Search Results for <b>{this.state.query}</b>
            </h2>
          </div>
          <div className="results">
            <h3 className="result-count">
              <i>
                <b>{13}</b> Results Found
              </i>
            </h3>
            <ul className="result-list">
              {data.map((d) => {
                return <Result {...d}></Result>;
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
