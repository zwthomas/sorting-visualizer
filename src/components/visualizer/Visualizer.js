import "./Visualizer.css";
import React from "react";

import Bar from "./../bar/Bar";
import { bubbleSort } from "./../../helper/sortHelper"

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
          {this.state.percents.map(function(percent) {
            return <Bar percent={percent} />;
          })}
        </div>
        <button
          onClick={() => {
            bubbleSort(this.state.percents, this.updateArray, this.props.numBars);
          }}
        >
          Sort
        </button>
      </div>
    );
  }
}

export default Visualizer;
