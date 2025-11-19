import './List.css';
export default function List(){
    return(
        <div className="Lists">
            <p>빨래하기</p>
            <div id='btns'>
                <button className='btns'>수정</button>
                <button className='btns'>삭제</button>
            </div>
        </div>
    )
}