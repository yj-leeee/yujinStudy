import { useState } from "react";

export default function InputsForm(props){
    const [input, setInput] = useState("");
    return(<div>
        <input type="text" value={input} onChange={(e)=>{
            setInput(e.target.value);
        }}/>
        <button onClick={()=>{
            props.set(input);
        }}>클릭</button>
    </div>)
}
