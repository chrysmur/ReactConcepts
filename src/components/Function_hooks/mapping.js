import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

const ListingComponent = (props) => {
  // Get the data from the props and create the list renderer
  const arr = props.data;
  const listItems = arr.map((val, index) => <li key={index}>{val}</li>);
  return <ul>{listItems}</ul>;
};

const RenderingComponent = () => {
  const arr = ["A", "B", "C"];
  return <ListingComponent data={arr} />;
};
ReactDOM.render(<RenderingComponent />, document.getElementById("root"));
