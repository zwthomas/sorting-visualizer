import React from "react";
import "./Bar.css";

const Bar = ({percent}) => {
    return <div className="bar" style={{ height: `${percent}%`, width: `${500}px`}} />;
}

export default Bar;