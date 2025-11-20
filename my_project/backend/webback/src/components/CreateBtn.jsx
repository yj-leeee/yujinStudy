import { useState } from 'react';
import './CreateBtn.css';
import { CiCirclePlus } from "react-icons/ci";
import { createBtn } from '../Api';

export default function CreateBtn({refresh}){
    const [rotate, setRotate] = useState(false);
    const [todo, setTodo] = useState('');

    const handleClick = () => {
        setRotate(!rotate);
    };

    const handleSubmit = async () => {
        if(todo.trim() === "") return;

        await createBtn(todo); //API 호출
        setTodo(""); //input 초기화

        refresh(); //추가 완료 후 목록 새로고침 실행
    };

    return (
        <div id='createBtn'>
            <div className={`textBox ${rotate ? "open" : ""}`}>
                <CreateText 
                todo={todo}
                setTodo={setTodo}
                onSubmit={handleSubmit}
                />
            </div>
            <button id='c_btn' onClick={handleClick}> 
                <CiCirclePlus size={50} 
                className={rotate ? "rotate" : "noRotate"}/> </button>
        </div>
    )
}

function CreateText({todo, setTodo, onSubmit}){
    return(
        <div id='text_div'>
            <input placeholder='할일 추가' 
            value={todo} id='in_text'
            onChange={(e) => setTodo(e.target.value)}></input>
            <button id="in_btn" onClick={onSubmit}>추가</button>
        </div>
    )
}