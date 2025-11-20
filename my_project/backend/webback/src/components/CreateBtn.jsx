import { useState } from 'react';
import './CreateBtn.css';
import { CiCirclePlus } from "react-icons/ci";

export default function CreateBtn(){
    const [rotate, setRotate] = useState(false);
    const handleClick = () => {
        setRotate(!rotate);
    };

    return (
        <div id='createBtn'>
            <div className={`textBox ${rotate ? "open" : ""}`}>
                <CreateText />
            </div>
            <button id='c_btn' onClick={handleClick}> 
                <CiCirclePlus size={50} 
                className={rotate ? "rotate" : "noRotate"}/> </button>
        </div>
    )
}

function CreateText(){
    return(
        <div id='text_div'>
            <input placeholder='할일 추가' id='in_text'></input>
            <button id="in_btn">추가</button>
        </div>
    )
}