import './App.css';
import Profile from './components/Profile';
import Texts from './components/Texts';
import drawers from './img/drawers.jpg';

function App() {
  return (
    <div id='root'>
      <div id='imgs'>
      </div>
      <div id='content'>
        <Texts />
        <Profile />
      </div>
    </div>
  );
}

export default App;
