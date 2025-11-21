import { FaSearch } from "react-icons/fa";
import './Search.css';
import { useState } from "react";
import { findTodo } from "../Api";

export default function Search({setTodos}){
    const[text, setText] = useState('');
    
    const handleSearch = async () => {
        try {
            const res = await findTodo(text);
            setTodos(res.data); //검색 결과를 상위(App)로 전달
        } catch (err) {
            alert("검색 결과가 없습니다!");
        }
    }
    return(
        <div id="search">
            <input placeholder="검색" id="input"
            onChange={(e) => setText(e.target.value)}
            value={text}></input>
            <button id="search_btn" onClick={handleSearch}><FaSearch size={20}/></button>
        </div>
    )
}