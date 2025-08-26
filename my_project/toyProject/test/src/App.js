import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';


function App() {
  const inputRef = useRef();
  const countRef = useRef(0);

  return(
    <div>
      <input onKeyDown={(e)=>{
        if(e.key === 'Enter'){
        inputRef.current.focus()}}}></input>
      <input ref={inputRef}></input>
      <button onClick={()=>{
        inputRef.current.focus()
        countRef.current += 1
        console.log(countRef.current);
      }}>버튼</button>
    </div>
  );

}




export default App;
