import React from 'react';
import logo from './logo.svg';
import './App.css';
import Visualizer from "./components/visualizer/Visualizer";

function App() {
  return (
    <div className="App">
      <Visualizer numBars={100}/>
    </div>
  );
}

export default App;
