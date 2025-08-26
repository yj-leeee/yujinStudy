import logo from './logo.svg';
import './App.css';
import store from './store';
import VotePanel from './Components/VotePanel';
import VoteResult from './Components/VoteResult';


function App() {
  
  return(
    <div>
      <VotePanel store={store}></VotePanel>
      <VoteResult store={store}></VoteResult>
    </div>
  );

}




export default App;
