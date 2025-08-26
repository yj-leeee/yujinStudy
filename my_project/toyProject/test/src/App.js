import logo from './logo.svg';
import './App.css';
import { VotePanel } from './Component/VotePanel';
import { VoteResult } from './Component/VoteResult';

function App() {
  
  return(
    <div>
      <VotePanel></VotePanel>
      <VoteResult></VoteResult>
    </div>
  );

}

export default App;
