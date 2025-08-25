import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [showTimer, setShowTimer] = useState(false);

  return(
    <div>
      <button onClick={()=> setShowTimer(prev => !prev)}>
        {showTimer ? '타이머 끄기' : '타이머 켜기'}
      </button>
        {showTimer && <Timer />}
    </div>
  );

}
function Timer(){
  const [count,setCount] = useState(0);

  useEffect(()=>{
    console.log("타이머 컴포넌트가 나타났다");

    const interval = setInterval(()=>{
      setCount(prev => prev + 1);
      console.log(`카운트 : ${count}`);
    },1000);

    return () => {
      console.log("타이머 컴포넌트가 화면에서 사라졌다");
      clearInterval(interval);
    };
  },[]);
  return <p>카운트 : {count}</p>
}

export default App;
