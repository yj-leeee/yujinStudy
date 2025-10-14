import card from '../data/card.json';
import './Card.css';

export default function Card(){
    const cards =
        card.map((c) => {
            return(
            <div
            key={c.title} 
            className='cardcontainer'
            style={{backgroundColor:c.color}}>
                <img src={`${process.env.PUBLIC_URL}/${c.img}`} alt={c.title} />
                <h1 id='h1'>{c.title}</h1>
                <p id='p1'>{c.content}</p>
                <div id='btn'
                style={{color:c.color}}>Learn More</div>
            </div>
            )
        })
    return(<div className='container'>{cards}</div>)
}