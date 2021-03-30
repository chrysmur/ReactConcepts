/*
useState  returns the state name and the function to set it
*/
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

const Counter = () => {
  //Destructuting  to set state and setter
  const [counter, setCounter] = useState(0);

  //Set counter handler, to be called when changing state
  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>{counter}</p>
      <button className="btn btn-info" onClick={increment}>
        Increment{" "}
      </button>
    </div>
  );
};

ReactDOM.render(<Counter />, document.getElementById("root"));
