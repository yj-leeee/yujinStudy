import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';


function App() {
  const inputRef = useRef();
  const countRef = useRef(0);
  const [dummy, setDummy] = useState(0);
    useEffect(() => {
        console.log(`입력횟수: ${countRef.current}`)
      },[dummy])

  return(
    <div>
      <input onChange={()=>{
        countRef.current += 1;
        setDummy(dummy + 1)
        
      }}></input>
    
      <input ref={inputRef}></input>
      <button onClick={()=>{
        inputRef.current.focus();
      }}></button>
    </div>
  );

}




export default App;
