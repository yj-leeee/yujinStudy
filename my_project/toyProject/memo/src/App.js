import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Memolist from './Component/Memolist';
import CreateMemo from './Component/CreateMemo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/create' element={<Signup />}/>
        <Route path='/memo' element={<Memolist />}/>
        <Route path='/createMemo' element={<CreateMemo />}/>
      </Routes>
    </Router>
  );
}

export default App;
