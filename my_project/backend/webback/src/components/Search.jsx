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
            value={text}
            onChange={(e) =>{
                const value = e.target.value;
                setText(value);
                handleSearch(value);
                }
            }
            ></input>
            <button id="search_btn" onClick={handleSearch}><FaSearch size={20}/></button>
        </div>
    )
}