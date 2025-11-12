import './App.css';
import LoginForm from './Components/LoginForm';
import PurpleBtn from './Components/PurpleBtn';
import Text from './Components/Text';



function App() {
  return (
    <div id='root'>
      <Text />
      <div id='root2'>
        <PurpleBtn/>
        <LoginForm />
      </div>
    </div>
  );

}


export default App;
