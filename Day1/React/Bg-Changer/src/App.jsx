import { useState } from 'react';
import './App.css';

function App(){
  const [color , setColor] = useState("white");
  return (
   
    <div style={{backgroundColor : color}} className="container">
      <div className="colorPanel">
        <button onClick={() => setColor('red')} style={{backgroundColor: "red"}}>Red</button>
        <button onClick={() => setColor('blue')} style={{backgroundColor: "blue"}}>Blue</button>
        <button onClick={() => setColor('green')} style={{backgroundColor: "green"}}>Green</button>
        <button onClick={() => setColor('yellow')} style={{backgroundColor: "yellow", color: 'red'}}>Yellow</button>
        <button onClick={() => setColor('purple')} style={{backgroundColor: "purple"}}>Purple</button>
        <button onClick={() => setColor('black')} style={{backgroundColor: "black"}}>Black</button>
        <button onClick={() => setColor('white')} style={{backgroundColor: "white", color:'black'}}>White</button>
      </div>
    </div>
      
    
  )
}
export default App;