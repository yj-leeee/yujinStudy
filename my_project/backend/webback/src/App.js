import './App.css';
import CreateBtn from './components/CreateBtn';
import List from './components/List';
import Search from './components/Search';
import { findAll } from './Api';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const loadTodos = () => {
    findAll()
    .then(res => setTodos(res.data))
    .catch(err => console.error(err));
  };
  useEffect(() => {
    loadTodos();
  }, []);

  console.log("todos:", todos);

  return (
    <div id='root'>
      <Search setTodos={setTodos}/>
      <div id='lists'>
        {todos.map(t => (
          <List key={t.id} id={t.id} todoText={t.todo} checked={t.checked}
          refresh={loadTodos}/>  
        ))}
        
        <CreateBtn refresh={loadTodos}/>
      </div>
      
    </div>
  );
}

export default App;
