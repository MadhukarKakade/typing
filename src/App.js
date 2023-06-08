
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
const [complete,setComplete]=useState(false)
console.log(wrongCount)
const [typing,setTyping]=useState([])
if(startTime==null&&typing.length==0){
  const time= new Date()
  setStartTime(time)
}

  return (
    <div className="App">
{    !complete&& <Content typing={typing} setWrongCount={setWrongCount} wrongCount={wrongCount} setComplete={setComplete}/>}
        <div id='bottom'>
       { !complete && <Keyboard setTyping={setTyping}/>}
       <SpeedAccuracy wrongCount={wrongCount} typing={typing} startTime={startTime}  />
       </div>
       { complete && <div class="bottom_button"><button type="button" disabled>prev</button><button onClick={()=>setComplete(false)}>retry</button ><button type="button" disabled>Next</button></div>}
       
    </div>
  );
}

export default App;
