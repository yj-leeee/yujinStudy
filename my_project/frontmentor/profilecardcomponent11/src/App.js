import './App.css';
import Content from './component/Content';
import EmailInput from './component/EmailInput';
import Header from './component/Header';


function App() {
  return (
    <div id='root'>
        <Header />
      <div id='contain'>
        <div id='img'></div>
        <div id='contain2'>
          <Content />
          <EmailInput/>
        </div>
      </div>
    </div>
  );
}


export default App;
