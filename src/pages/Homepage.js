import React from "react";
import "./assets/BG.svg";

export default function Homepage() {
  return (
    <>
      <h1 className="title">
        <b>FoodBank</b> Search
      </h1>
      <div className="content">
        <h1 className="prompt">
          Find <b>Local</b> Organizations
          <br />
          Supporting ......
        </h1>
        <div className="search-bar">
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
        </div>
      </div>
    </>
  );
}
