import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LoginCard from './Componetents/LoginCard';

function App() {
  const [userName, setUserName] = useState("");
  
  return (
    <LoginCard userName={userName} setUserName={setUserName}></LoginCard>
  )
  
}



export default App;
