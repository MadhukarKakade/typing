
import { useState } from 'react';
import './App.css';
import Content from './compnents/Content';
import Keyboard from './compnents/Keyboard';
import SpeedAccuracy from './compnents/SpeedAccuracy';



function App() {
//   const handleKeyUp=(e)=>{
//     console.log(e)
// }
// const handleKeyDown=(e)=>{
//     console.log(e)
// }
const[startTime,setStartTime]=useState(null)
const [wrongCount,setWrongCount]=useState(0)
const [typing,setTyping]=useState([])
if(startTime==null&&typing.length==0){
  const time=new Date().getTime()
  setStartTime(time)
}

  return (
    <div className="App">
     <Content typing={typing} setWrongCount={setWrongCount} wrongCount={wrongCount}/>
        <div id='bottom'>
       <Keyboard setTyping={setTyping}/>
       <SpeedAccuracy wrongCount={wrongCount} typing={typing} startTime={startTime}  />
       </div>
    </div>
  );
}

export default App;
