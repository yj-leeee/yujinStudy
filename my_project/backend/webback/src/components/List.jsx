import { deleteTodo } from '../Api';
import './List.css';
export default function List({id,todoText, refresh}){
    console.log("삭제버튼에 전달된 id:", id);
    return(
        <div className="Lists">
            <input id='text_input' value={todoText}></input>
            <div id='btns'>
                <button className='btns'>수정</button>
                <button className='btns'
                    onClick={async () => {
                        await deleteTodo(id);
                        refresh();
                    }}>삭제</button>
            </div>
        </div>
    )
}