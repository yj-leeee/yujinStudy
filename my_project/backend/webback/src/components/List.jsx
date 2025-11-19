import './List.css';
export default function List({todoText}){
    return(
        <div className="Lists">
            <p>{todoText}</p>
            <div id='btns'>
                <button className='btns'>수정</button>
                <button className='btns'>삭제</button>
            </div>
        </div>
    )
}