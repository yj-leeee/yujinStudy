import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';


function App() {
  const input = useRef();

  return(
    <div>
      <input ref={input}></input>
      <button onClick={()=>input.current.focus()}>입력창으로 이동</button>
    </div>
  );

}




export default App;
