import './Card.css';
export default function Card({cardData}){
    if (!cardData) return null; // 데이터 로드 전엔 렌더링하지 않음
    const { title, text, color, icon } = cardData;
    return(
    <div className='cards' style={{borderTopColor:color}}>
        <h3>{title}</h3>
        <p>{text}</p>
        <img src={icon} />
    </div>)
}