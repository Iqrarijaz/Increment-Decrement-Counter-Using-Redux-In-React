import React from "react";
import "./App.css";
export default function App() {
  return (
    <>
      <div className="container">
        <h2 className="h">Increment & Decrement Counter</h2>
        <h3> Using React and Redux</h3>
        <div className="quantity">
          <button className="button quantity-minus"> - </button>
          <input
            name="quantity"
            type="text"
            className="quantity_input"
            value="0"
          ></input>
          <button className="button quantity-plus"> + </button>
        </div>
      </div>
    </>
  );
}
