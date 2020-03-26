import "./Visualizer.css";
import React, { useState } from "react";

import Bar from "./../bar/Bar";
import { useEffect } from "react";

class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { percents: [ 60, 50,90, 30] };

    this.bubbleSort = this.bubbleSort.bind(this);
  }
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async bubbleSort() {
    let newArray = this.state.percents;

    for (let i = 0; i < newArray.length; i++) {
      for (let j = 0; j < newArray.length; j++) {
        if (newArray[j] > newArray[j+1]) {
          let temp = newArray[j];
          newArray[j] = newArray[j + 1];
          newArray[j + 1] = temp;
          this.setState(newArray);
          await this.sleep(500)
        }
      }
    }
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
            this.bubbleSort();
          }}
        >
          Sort
        </button>
      </div>
    );
  }
}

export default Visualizer;
