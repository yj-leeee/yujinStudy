import './CreateBtn.css';
import { CiCirclePlus } from "react-icons/ci";

export default function CreateBtn(){
    return (
        <div id='createBtn'>
            <button id='c_btn'> <CiCirclePlus size={50}/> </button>
        </div>
    )
}