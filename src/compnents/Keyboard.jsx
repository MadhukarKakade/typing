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
      {/* <div className="night_mode">
            <div className="toggle_circle"></div>
        </div> */}
      {/* <div className="change_light_color">
            <div className="colors">
                <input className="colors_input" type="color" />
            </div>
        </div> */}
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

          {/* <div className="row">

                    <div className="keys">
                        <p>~</p><p>`</p></div>
                    <div className="keys">1</div>
                    <div className="keys">2</div>
                    <div className="keys">3</div>
                    <div className="keys">4</div>
                    <div className="keys">5</div>
                    <div className="keys">6</div>
                    <div className="keys">7</div>
                    <div className="keys">8</div>
                    <div className="keys">9</div>
                    <div className="keys">0</div>
                    <div className="keys">-</div>
                    <div className="keys">=</div>
                    <div className="keys backspace_key">Backspace</div>
                </div>
                <div className="row">
                    <div className="keys tab_key">Tab</div>
                    <div className="keys">Q</div>
                    <div className="keys">W</div>
                    <div className="keys">E</div>
                    <div className="keys">R</div>
                    <div className="keys">T</div>
                    <div className="keys">Y</div>
                    <div className="keys">U</div>
                    <div className="keys">I</div>
                    <div className="keys">O</div>
                    <div className="keys">P</div>
                    <div className="keys">{"{"}</div>
                    <div className="keys">{"}"}</div>
                    <div className="keys slash_key">\</div>
                </div>
                <div className="row">
                    <div className="keys caps_lock_key">Caps Lock</div>
                    <div className="keys">A</div>
                    <div className="keys">S</div>
                    <div className="keys">D</div>
                    <div className="keys">F</div>
                    <div className="keys">G</div>
                    <div className="keys">H</div>
                    <div className="keys">J</div>
                    <div className="keys">K</div>
                    <div className="keys">L</div>
                    <div className="keys">;</div>
                    <div className="keys">"</div>
                    <div className="keys enter_key">Enter</div>
                </div>
                <div className="row">
                    <div className="keys shift_key shift_left">Shift</div>
                    <div className="keys">Z</div>
                    <div className="keys">X</div>
                    <div className="keys">C</div>
                    <div className="keys">V</div>
                    <div className="keys">B</div>
                    <div className="keys">N</div>
                    <div className="keys">M</div>
                    <div className="keys">{"<"}</div>
                    <div className="keys">{">"}</div>
                    <div className="keys">/</div>
                    <div className="keys">?</div>
                    <div className="keys shift_key shift_right">Shift</div>
                </div>
                <div className="row">
                    <div className="keys ctrl_key ctrl_left">Ctrl</div>
                    <div className="keys win_key">Win</div>
                    <div className="keys alt_key alt_left">Alt</div>
                    <div className="keys space_key"></div>
                    <div className="keys alt_key alt_right">Alt</div>
                    <div className="keys">Fn</div>
                    <div className="keys ctrl_key ctrl_right">Ctrl</div>
                </div> */}
        </div>
      </div>
      {/* <input className="text" type="text" /> */}
    </div>
  );
};

export default Keyboard;
