import React from "react";

function ProgressBar({ val, max }) {
  return <progress className="progress-bar" value={val} max={max}></progress>;
}

export default ProgressBar;
