import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import UserProfile from './components/UserProfile';


function App() {
  const users = [
    {
    name: "이유진",
    age: 23,
    mbti: "INFP",
    favoriteQuote: "조금은 느려도 괜찮아.",
  },
  {
    name: "김수민",
    age: 23,
    mbti: "ENFJ",
    favoriteQuote: "기다리는 것도 사랑이야.",
  },
  {
    name: "박하나",
    age: 22,
    mbti: "ISTP",
    favoriteQuote: "생각보다 단순하게.",
  }
  ]
  return (
    <UserProfile users={users}></UserProfile>
  );
}


export default App;
