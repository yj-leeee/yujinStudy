import './App.css';
import logo from './img/logo.svg';
import Content from './components/Content';
import Icon from './components/Icon';

function App() {
  return (
    <div id='root'>
      <div id='logo'>
        <img src={logo}></img>
      </div>
      <div id='img'>

      </div>
      <Content id='Con'/>
      <Icon id='Ic'/>
    </div>
  );
}

export default App;
