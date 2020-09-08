import React from 'react';
import logo from './logo.svg';
import './App.css';
import Visualizer from "./components/visualizer/Visualizer";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { bubbleSort, mergeSort, quickSort } from "./helper/sortHelper";


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">

      

      <Visualizer numBars={100} />
    </div>
  );
}

export default App;
