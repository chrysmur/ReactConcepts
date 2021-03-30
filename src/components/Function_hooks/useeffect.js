/*
Use useeffect to utilize lifcycle hooks in functional components
By default useeffect combines all popular hooks
ComponentDidMount works same as ComponentDidUpdate, and ComponentDidUnmount
*/
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./style.css";

const Counter = () => {
  //
  const [counter, setCounter] = useState(0);
  const [updates, setUpdates] = useState(0);
  //
  useEffect(() => {
    //Change the value of update when state changes
    setUpdates(updates + 1);

    //ComponentWillUnmount to clean up
    return () => {
      setCounter(0);
    };
  }, [counter]); //If counter has not changed, no updates, enforce componentDidUpdate

  //Click handler
  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p> {counter} </p>
      <button class="btn" onClick={increment}>
        {" "}
        Increment{" "}
      </button>
    </div>
  );
};

ReactDOM.render(<Counter />, document.getElementById("root"));
