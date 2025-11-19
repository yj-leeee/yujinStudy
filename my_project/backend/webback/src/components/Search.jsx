import { FaSearch } from "react-icons/fa";
import './Search.css';

export default function Search(){
    return(
        <div id="search">
            <input placeholder="검색" id="input"></input>
            <button id="search_btn"><FaSearch size={20}/></button>
        </div>
    )
}