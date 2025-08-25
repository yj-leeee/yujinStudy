import {useState} from 'react';

export default function LikeCard(props){
    const [count, setCount] = useState(0);

    return(<div>
        <p>{props.name}님의 카드</p>
        <p>좋아요 수 : {count}</p>
        <button onClick={()=>{
            setCount(count+1);
        }}>좋아요</button>
    </div>)
}