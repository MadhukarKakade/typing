import React, { useEffect, useState } from "react";
import "../styles/Keyboard.css";
import { shortID } from "./short_key_generator";

const keyBoardKeys = [
  [
    ["~", "`"],
    ["!", "1"],
    ["@", "2"],
    ["#", "3"],
    ["$", "4"],
    ["%", "5"],
    ["^", "6"],
    ["&", "7"],
    ["*", "8"],
    ["(", "9"],
    [")", "0"],
    ["_", "-"],
    ["+", "="],
    [")", "0"],
    ["", "backspace"],
  ],
  [
    ["", "tab"],
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    ["{", "["],
    ["}", "]"],
    ["|", "\\"],
  ],
  [
    ["", "caps lock"],
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    [":", ":"],
    ['"', "'"],
    ["", "enter"],
  ],
  [
    ["", "shift"],
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ["<", ","],
    [">", "."],
    ["?", "/"],
    ["", "shift"],
  ],
  [
    ["", "control"],
    ["", "option"],
    ["", "space"],
    ["", "option"],
    ["", "control"],
  ],
];
const Keyboard = ({setTyping}) => {
  const [caps, setCaps] = useState(false);
  const [pressKey, setPressKey] = useState("");
  
   

  // document.addEventListener("keyup", (event) => {
   
  useEffect(() => {document.addEventListener("keydown", (event) => {
    console.log("You pressed the " + event.key + " key.");
   
    // if (keyName == pressKey) {
    //   keyBoardKeys.forEach((row) =>
    //     row.forEach((key) => {
    //       if (key || key[1] == pressKey) {
    //       }
    //     })
    //   );
    // }
   
    let keyName = event.key.toLowerCase();

   console.log(keyName)
    
    switch (keyName) {
      case "capslock":
        setPressKey("caps lock");
        setCaps(true);
        break;
      case "backspace":
       
        setTyping((typing)=>typing.slice(0, -1))
        break;
      case "shift":
        setPressKey("shift");
        break;
      // case "shiftleft":
      //   setPressKey("shift");
      //   break;
      
        case "tab":
          setPressKey("tab");
          break;
          case "control":
            setPressKey("control");
            break;
      default:
        setTyping((typing)=>[...typing,event.key])
    }
    if(event.code=="Space")
    setPressKey("space");
   else
  
   setPressKey(keyName);
   
  });}, []);

  return (
    <div className="container">
   
      <div className="keyboard_wrapp">
        <div className="keyboard_lights"></div>
        <div className="keyboard_keys">
          {keyBoardKeys.map((row, i) => (
            <div key={shortID()} className="row">
              {row.map((key, i) => (
                <div
                  key={shortID()}
                  className={`keys ${
                    key[1] && key[1].length > 2 ? key[1].replace(/ /g, "_") : ""
                  } ${key[1] == "\\" ? "slash" : ""} ${
                    pressKey == key[1] || pressKey == key ? "active remove" : ""
                  } `}
                  style={{backgroundColor: pressKey == key[1] || pressKey == key ?"skyblue":""}}
                >
                  {typeof key == "object" ? (
                    key.map((subkey) => <p key={shortID()}>{subkey}</p>)
                  ) : (
                    <p className="single_key">{key}</p>
                  )}
                </div>
              ))}
            </div>
          ))}

         
        </div>
      </div>
     
    </div>
  );
};

export default Keyboard;
