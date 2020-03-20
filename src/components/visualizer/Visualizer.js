import "./Visualizer.css";
import React from "react";

import Bar from "./../bar/Bar";

function Visualizer(props) {
  return (
    <div className="container">
      <Bar percent={30} />
      <Bar percent={40} />
      <Bar percent={50} />
    </div>
  );
}

export default Visualizer;
