import React, { useEffect, useState } from "react";
import "../styles/Accuracy.css";

const SpeedAccuracy = ({ wrongCount, typing, startTime }) => {
  const [currentSpeed, setCurrentSpeed] = useState(null);
  const [accuracy, setAccuracy] = useState(100);

  const speedCalculation = () => {
    console.log(wrongCount);
    const currentTime = new Date();
    console.log(startTime);
    const check = typing.length;
    const totalTime = (currentTime - startTime) / (1000 * 60);
    console.log(totalTime);

    if (check) {
      const speed = Math.round(check / 5 / totalTime);

      console.log(speed);
      if (speed > 0) {
        setCurrentSpeed(speed);
      }
    }
    if (typing.length &&typing.length-Number(wrongCount)>0 ) {
      const accur = Math.floor(
        ((typing.length - Number(wrongCount)) / typing.length) * 100
      );
      setAccuracy(accur);
      console.log(typing.length, accur, wrongCount);
    }
  };

  useEffect(() => {
    speedCalculation();
  }, [typing]);

  return currentSpeed ? (
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
  ) : (
    <div></div>
  );
};

export default SpeedAccuracy;
