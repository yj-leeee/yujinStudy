import './App.css';
import CreateBtn from './components/CreateBtn';
import List from './components/List';
import Search from './components/Search';

function App() {
  return (
    <div id='root'>
      <Search />
      <div id='lists'>
        <List />
        <CreateBtn/>
      </div>
      
    </div>
  );
}

export default App;
