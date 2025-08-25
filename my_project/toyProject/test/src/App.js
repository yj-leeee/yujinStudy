import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  
  const [show, setShow] = useState(false);
  return(
    <div>
      <button onClick={()=>{setShow(!show)}}>버튼</button>
      {show &&<Time />}
    </div>
  );

}
function Time(){
  const ti = new Date().toLocaleDateString();
  useEffect(()=>{
    console.log("컴포넌트가 나타났다");
    
    return()=>{
      console.log("컴포넌트가 사라졌다");
    }
  },[])
  return(
    <p>{ti}</p>
  )
}


export default App;
