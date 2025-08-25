import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  
  return <Login></Login>
}

function Login(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");
  
  return(
    <div>
      이름: <input type='text' value={name} onChange={(e)=>{
        setName(e.target.value);
      }}></input><br />
      이메일: <input type='email' value={email} onChange={(e)=>{
        setEmail(e.target.value);
      }}></input><br />
      비밀번호: <input type='password' value={pass} onChange={(e)=>{
        setPass(e.target.value);
      }}></input>
    <button onClick={()=>{
      if(name === "" || email === "" || pass === ""){
        setMessage('제대로 입력해주세요')
      }else{
        setMessage(`안녕하세요 ${name}님 이메일 : ${email}`)
      }
    }}>클릭</button>
      <p>{message}</p>
    </div>
  )
}

export default App;
