import './App.css';
import Title from './component/Title';
import Card from './component/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [cards, setCards] = useState([]);
  useEffect(()=>{
    axios.get('/cards.json')
      .then(response => {
        console.log(response.data);
        setCards(response.data);
      })
  },[])
   // id로 카드 객체 찾기
  const getCardById = (id) => cards.find(card => card.id === id);
  return (
    <div>
      <Title id='pageContainer' />
      <div id='cardContainer'>
        <Card id='supervisor' cardData={getCardById('supervisor')}/>
        <Card id='Team' cardData={getCardById('Team')}/>
        <Card id='Karma' cardData={getCardById('Karma')}/>
        <Card id='Calculator' cardData={getCardById('Calculator')}/>
      </div>
    </div>
  );
}

export default App;
