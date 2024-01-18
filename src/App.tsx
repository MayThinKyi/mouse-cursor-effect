import { useState } from "react";

const App = () => {
  const [cursorX,setCursorX]=useState(0);
  const [cursorY,setCursorY]=useState(0);
  window.addEventListener('mousemove',(e)=>{
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  })
  const lists=['Home','About','Services','Portfolio','Contact'];
  return (
    <ul>
      {lists.map((item)=>{
        return <li>{item}</li>
      })}
      <div className="cursor"
      style={{left:cursorX+'px',top:cursorY+'px'}} ></div>
    </ul>
  )
}

export default App