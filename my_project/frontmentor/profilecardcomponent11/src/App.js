import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div>
      <Profile/>
    </div>
  );
}

function Profile(){
  return(
    <div id='container'>
      <div id='img'></div>
      <div id='profile'></div>
      <div id='con2'>
        <h4>Vicotor Crest <span className='gray'>26</span></h4>
        <p className='gray'>London</p>
        <hr id='hr'/>
          <div id='text'>
            <h4>80K</h4>
            <h4>803K</h4>
          </div>
      </div>
    </div>
  )
}

export default App;
