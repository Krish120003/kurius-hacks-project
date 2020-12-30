import React from "react";
import "../styles/Result.css";

export default function Result(props) {
  console.log(props);
  let s = Math.floor(Math.random() * 100) + 550;
  return (
    <li>
      <div
        className="image"
        style={{
          backgroundImage: `url(https://source.unsplash.com/${s}x400/?food-bank`,
        }}
      ></div>
      <div className="text-info">
        <div className="left">
          <h3>{props.name}</h3>
          <address>
            <p className="street">{props.street}</p>
            <p className="city">{props.city}</p>
            <p className="phone">{props.phone}</p>
          </address>
        </div>
        <div className="right">
          <button>FIND MORE</button>
        </div>
      </div>
    </li>
  );
}
