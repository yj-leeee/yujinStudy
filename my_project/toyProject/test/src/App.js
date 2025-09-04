import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Posts from './component/Posts';

import PostDetail from './component/PostDetail';



function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path="/posts" element={<Posts></Posts>}></Route>
      <Route path="/posts/:id" element={<PostDetail></PostDetail>}></Route>
    </Routes>
    
    </BrowserRouter>
    
  )

}

export default App;
