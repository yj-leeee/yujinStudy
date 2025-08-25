import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  
  return <Name></Name>
}

function Name(){
  const [name, setName] = useState("");
  const [message, setMessage] = useState("이름을 입력해주세요");
  
  return(
    <div>
      <input type='text' value={name}
      onChange={(e)=>setName(e.target.value)}
      placeholder='이름을 입력하세요'></input>
      <button onClick={()=>{
        if(name === ""){
          setMessage('이름이 입력 되어있지 않습니다')
        }else {
          setMessage(`안녕하세요 ${name}님`)
        }
      }}>확인 버튼</button>
      <p>{message}</p>
      
    </div>
  )
}

export default App;
