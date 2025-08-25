import logo from './logo.svg';
import './App.css';
import LoginCard from './Componetents/LoginCard';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  
  return (
  <div>
  <LoginCard setName={setName}></LoginCard>
  <p>{name}님 안녕하세요</p>
  </div>)
}



export default App;
