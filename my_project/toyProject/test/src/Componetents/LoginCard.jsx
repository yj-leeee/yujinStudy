import { useState } from "react";

export default function LoginCard(props){
    const [ input, setInput] = useState("");
    return(
        <div>
            <input type="text" value={input} onChange={(e)=>{
                setInput(e.target.value);
            }}></input>
    <button onClick={()=>{
        props.setName(input);
    }}>버튼</button>
        </div>
    )
}