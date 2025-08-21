export default function ProfildCard(props){
    const cards = [];
    for(let i=0; i<props.users.length; i++){
        cards.push(
            <div>
            <p>이름 : {props.users[i].name}</p>
            <p>나이 : {props.users[i].age}</p>
            <p>mbti : {props.users[i].mbti}</p>
            <p>좋아하는 말 : {props.users[i].favoriteQuote}</p>
        </div>
        )
    }
    return (
        <div>{cards}</div>
    );
}