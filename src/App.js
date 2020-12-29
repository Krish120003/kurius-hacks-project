import React from "react";

import "./assets/BG.svg";

import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <h1 className="title">
        <b>FoodBank</b> Search
      </h1>
      <div className="content">
        <h1 className="prompt">
          Find <b>Local</b> Organizations
          <br />
          Supporting ......
        </h1>
        <form className="search-bar">
          <input
            type="text"
            className="input-field"
            placeholder="Postal Code"
          ></input>
          <button className="search-button">
            <span
              class="iconify"
              data-icon="bi:search"
              data-inline="false"
              data-width="2em"
              data-height="2em"
            ></span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
