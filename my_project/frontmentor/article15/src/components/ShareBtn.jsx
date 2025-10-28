//ShartBtn.jsx
import './ShareBtn.css';
import share from '../img/icon-share.svg'

export default function ShareBtn({onClick}){
    return(
        <button onClick={onClick} id='shareBtn'>
            <img src={share}/>
        </button>
    )
}