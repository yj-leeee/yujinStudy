import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ResultWrap from './Wrapper/ResultWrap';
import SummaryWrap from './Wrapper/SummaryWrap';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    fetch("/data.json").then((response)=>response.json())
    .then((json)=>{
      console.log(json);
      dispatch({type:"SET_DATA",payload:json})
    });
  },[dispatch])
  return (
    <div class="wrapper">
      <div id="container">
        <ResultWrap></ResultWrap>
        <SummaryWrap></SummaryWrap>
      </div>
    </div>
  );
}

export default App;
