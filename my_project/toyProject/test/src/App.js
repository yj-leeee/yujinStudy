import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

import NoticeCard from './components/NoticeCard';


function App() {
  
  return (
    <NoticeCard title={"공지사항"} writer={"관리자"} onCheck={()=>{console.log("공지사항")}}>서버 점검이 오늘 밤 10시에 있습니다.</NoticeCard>
  );
}


export default App;
