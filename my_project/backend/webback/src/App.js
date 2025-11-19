import './App.css';
import CreateBtn from './components/CreateBtn';
import List from './components/List';
import Search from './components/Search';
import { findAll } from './Api';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=> {
    findAll()
    .then(res => setTodos(res.data))
    .catch(err => console.error(err));
  },[]);

  return (
    <div id='root'>
      <Search />
      <div id='lists'>
        {todos.map(t => (
          <List key={t.id} todoText={t.todo} />  
        ))}
        
        <CreateBtn/>
      </div>
      
    </div>
  );
}

export default App;
