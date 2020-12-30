import React, { useState } from "react";
import "./assets/BG.svg";

export default function Homepage(props) {
  const [query, setQuery] = useState("");
  return (
    <>
      <h1 className="title">
        <b>FoodBank</b> Search
      </h1>
      <div className="content">
        <h1 className="prompt">
          Find <b>Local</b> Organizations
          <br />
          Sourcing Food To <b>Help</b>
        </h1>
        <div className="search-bar">
          <input
            type="text"
            className="input-field"
            placeholder="Location"
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          ></input>
          <button
            className="search-button"
            onClick={() => {
              if (query) {
                props.history.push(`/q/${query}`);
              }
            }}
          >
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
