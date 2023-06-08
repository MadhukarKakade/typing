import React from 'react';
import '../styles/ProgressBar.css'; // Import CSS file for styling

const ProgressBar = ({ value, maxValue }) => {
 

  return (
    <div className="progress-bar">
      <progress value={value} max={maxValue}></progress>
     <div ></div>
    </div>
  );
};

export default ProgressBar;
