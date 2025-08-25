import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  
  return <LikeButton></LikeButton>
}

function LikeButton(){
  const [Like, setLike] = useState(0);
  return(
    <div>
      <p> 좋아요 수 : {Like} </p>
    <button onClick={
      ()=>{
        setLike(Like+1);
        console.log(Like);
      }}>버튼</button>
      </div>
  )
}

export default App;
