import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('DEFAULT');
  let color = null;
  if(mode === 'DEFALUT'){
    color = "white";
  }else if(mode === "CHANGE"){
    color = "blue";
  }
  return (
    <Change color={color} setMode={setMode}></Change>
  );
}
function Change(props){
  return(
    <button
    onClick={()=>{
      props.setMode('CHANGE');
      document.body.style.backgroundColor = props.color
      }}>
        배경색 변경</button>
  )
}

export default App;
