import './App.css';
import Textt from '../src/component/Textt';
import Star from '../src/component/Star';
import Card from '../src/component/Card'

function App() {
  return (
    <div id="root">
      <div id="container">
        <Textt id="Textt"/>
        <Star id="Star"/>
        <Card id="Card"/>
      </div>
    </div>
  );
}

export default App;
