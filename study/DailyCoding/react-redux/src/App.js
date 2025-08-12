import React, {Component} from 'react';
import './App.css';
import AddNumberRoot from './Components/AddNumberRoot';
import DisplayNumberRoot from './Components/DisplayNumberRoot';

class App extends Component {
  state = {number:0}
  render(){
    return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot></AddNumberRoot>
      <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
    </div>
  );
  }
}




export default App;
