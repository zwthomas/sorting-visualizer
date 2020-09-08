import "./Visualizer.css";
import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import Bar from "./../bar/Bar";
import { bubbleSort, mergeSort, quickSort } from "./../../helper/sortHelper"

class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percents: Array.from({ length: props.numBars }, () => Math.random() * 100)
    };
    this.updateArray = this.updateArray.bind(this);
    this.sort = this.sort.bind(this)
    this.reset = this.reset.bind(this)

  }

  updateArray(newArray) {
    this.setState(newArray)
  }

  sort() {
    let disableButton = document.getElementById("sortButton");
    disableButton.setAttribute("disabled", "disabled");

    let disableResetButton = document.getElementById("resetButton");
    disableResetButton.setAttribute("disabled", "disabled");

    
    let e = document.getElementById("sortSelect");
    let value = e.options[e.selectedIndex].value;
    switch (value) {
      case "Merge":
        mergeSort(this.state.percents);
        break;
      case "Quick":
        quickSort(this.state.percents);
        break;
      case "Bubble":
        break;
      default:
        console.log("this is weird")
    }

    // disableResetButton.removeAttribute("disabled");


    
  }

  reset() {
    let e = document.getElementById("numBars");
    let value = e.options[e.selectedIndex].value;

    let disableButton = document.getElementById("sortButton");
    disableButton.removeAttribute("disabled");

    

    let newArray = Array.from({ length: parseInt(value, 10) }, () => Math.random() * 100)
    this.setState({percents: newArray});
  }

  render() {
    return (
      <div>
        <Navbar className="navBar" bg="dark">
          <Navbar.Brand href="#home">
            <h1 className="title">Sorting Visualizer</h1>
          </Navbar.Brand>
          <div className="actions">
          <select id="numBars" className="numBars">
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
            </select>
            <select id="sortSelect" className="sortSelect">
              <option value="Merge">Merge</option>
              <option value="Quick">Quick</option>
              <option value="Bubble">Bubble</option>
            </select>
            <Button id = "sortButton" className="sort" variant="secondary" onClick={this.sort} >Sort</Button>
            <Button id = "resetButton" className="reset" variant="danger" onClick={this.reset}>Reset</Button>
          </div>
        </Navbar>

        <div className="temp">
          <div className="container">
            {this.state.percents.map(function (percent, index) {
              return <Bar key={index} percent={percent} />;
            })}
          </div>
          <button
            onClick={() => {
            }}
          >
            Sort
        </button>
        </div>
      </div>
    );
  }
}

export default Visualizer;
