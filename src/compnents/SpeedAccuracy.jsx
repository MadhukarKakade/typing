import React, { useEffect, useState } from "react";
import "../styles/Accuracy.css"
const SpeedAccuracy = ({ wrongCount, typing, startTime }) => {
  const [currentSpeed, setCurrentSpeed] = useState(null);
  const [accuracy, setAccuracy] = useState(100);

  const speedCalculation = () => {
    const currentTime = new Date().getTime();
console.log(startTime)
    const totalTime = (currentTime - startTime) / (1000 * 60);
    console.log(totalTime)
    const speed =Math.ceil( (typing.length / 5 )/ totalTime);
    console.log(speed)
    const accur = Math.floor(((typing.length-wrongCount) / typing.length) * 100);
    setCurrentSpeed(speed);
    setAccuracy(accur);
  };

  useEffect(() => {
    const interval = setInterval(speedCalculation, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {/* {currentSpeed && ( */}
        <div id="sideParameter">
          <div id="speed">
            <h4>Speed</h4>{" "}
            <p>
              <span>{currentSpeed}</span>wpm
            </p>
          </div>
          <div id="accuracy">
            <h4>Accuracy</h4>{" "}
            <p>
              <span>{accuracy}%</span>
            </p>
          </div>
        </div>
   {/* )}  */}
    </div>
  );
};

export default SpeedAccuracy;
