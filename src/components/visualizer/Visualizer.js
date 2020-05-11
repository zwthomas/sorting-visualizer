import "./Visualizer.css";
import React from "react";

import Bar from "./../bar/Bar";
import { bubbleSort, mergeSort, quickSort } from "./../../helper/sortHelper"

class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { percents: Array.from({length: props.numBars}, () => Math.random() * 100) };
    this.updateArray = this.updateArray.bind(this);
  }

  updateArray(newArray) {
    this.setState(newArray)
  }

  render() {
    return (
      <div className="temp">
        <div className="container">
          {this.state.percents.map(function(percent, index) {
            return <Bar key={index} percent={percent} />;
          })}
        </div>
        <button
          onClick={() => {
            mergeSort(this.state.percents);
          }}
        >
          Sort
        </button>
      </div>
    );
  }
}

export default Visualizer;
