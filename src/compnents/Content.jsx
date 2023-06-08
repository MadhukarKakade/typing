import React, { useEffect } from "react";
import "../styles/Content.css";
import { shortID } from "./short_key_generator";
import ProgressBar from "./ProgressBar";
import wrongSound from "../media/click-button-140881.mp3";
import correctSound from "../media/mech-keyboard-02-102918.mp3";
const text =
  "dd kk dk dk kd kd ddd kkd ddk dkk kkdd ddkk dddd kkkk ddkk kkdd kdd kddd dk kk";
const content = [...String(text)];

const Content = ({ typing = [], setWrongCount, wrongCount }) => {
  console.log({ typing });
  if (typing.length && typing.length <= content.length) {
    if (content[typing.length - 1] == typing[typing.length - 1]) {
      let mySound = new Audio(correctSound);

      mySound.play();
    } else {
      let mySound = new Audio(wrongSound);

      mySound.play();
    }
  }
  useEffect(() => {
    if (content[typing.length - 1] !== typing[typing.length - 1]) {
      setWrongCount(wrongCount + 1);
    }
  }, [typing]);

  return (
    <div id="content">
      <div className="speed"></div>
      {content?.map((char, i) => (
        <div key={shortID()} className="word">
          <p
            key={shortID()}
            style={{
              backgroundColor:
                typing[i] == content[i]
                  ? "#e7fbd3"
                  : typing[i]
                  ? "lightpink"
                  : "",
            }}
          >
            {char}
          </p>

          {/* <p style={{padding:"5px",height:"100%" ,backgroundColor:"#e7fbd3"}}>{"   " }</p> */}
        </div>
      ))}
      <ProgressBar value={typing.length} maxValue={content.length} />
    </div>
  );
};

export default Content;
