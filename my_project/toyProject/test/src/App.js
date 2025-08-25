import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count,setCount] = useState(0);

  useEffect(()=>{
    console.log('컴포넌트가 화면에 나타났습니다');
    return ()=>{
      console.log('컴포넌트가 화면에서 사라졌습니다.')
    }
  },[])
  
  useEffect(()=>{
    console.log(`카운트 : ${count}`)
  },[count])
  return(<div>
    <button onClick={()=>{
      setCount(count+1);
    }}>버튼</button>
  </div>)
}



export default App;
