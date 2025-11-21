import { useState } from 'react';
import { deleteTodo, toggleTodo, updateTodo } from '../Api';
import './List.css';
export default function List({id,todoText, refresh, checked}){
    const [isEditing, setIsEditing] = useState(false); //수정모드
    const [editValue, setEditValue] = useState(todoText); //수정할 텍스트

    const handleEdit = async () => {
        //저장 모드일때
        if(isEditing){
            await updateTodo(id, editValue);
            refresh();
        }
        //수정 모드 <-> 저장 모드 전환
        setIsEditing(!isEditing);
    }
    return(
        <div className="Lists">
            <input id='text_input' value={editValue}
            readOnly={!isEditing} //수정 모드일때만 수정 가능
            onChange={(e) => setEditValue(e.target.value)} //값변경
            className={checked ? "checkedText" : ""}
            ></input>
            <div id='btns'>
                <input type="checkbox"
                checked={checked}
                onChange={async () => {
                    await toggleTodo(id);
                    refresh();
                }}></input>
                <button className='btns' onClick={handleEdit}>{isEditing ? "저장" : "수정"}</button>
                <button className='btns'
                    onClick={async () => {
                        await deleteTodo(id);
                        refresh();
                    }}>삭제</button>
            </div>
        </div>
    )
}