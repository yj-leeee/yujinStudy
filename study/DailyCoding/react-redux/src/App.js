import React, {Component} from 'react';
import './App.css';
import AddNumberRoot from './Components/AddNumberRoot';

function App() {
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot></AddNumberRoot>
      <DisplayNumberRoot></DisplayNumberRoot>
    </div>
  );
}

class DisplayRoot extends Component{
  render(){
    return(
      <div>
        <h1>Display Number</h1>
        <input type="text" value="0" readOnly></input>
      </div>
    )
  }
}

class DisplayNumberRoot extends Component{
  render(){
    return(
      <div>
        <h1>Display Number Root</h1>
        <DisplayRoot></DisplayRoot>
      </div>
    )
  }
}

export default App;
