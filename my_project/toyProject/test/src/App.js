import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Change color="yellow"></Change>
  );
}
function Change(props){
  return(
    <button onClick={()=>{
    document.body.style.backgroundColor= props.color;
    }}>배경색 변경</button> 
  )
}

export default App;
