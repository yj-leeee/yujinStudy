import store from "../store"
import { useState } from "react";

export default function Login(){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    return(
        <div>
            <input placeholder="이름" value={name}
            onChange={(e)=>setName(e.target.value)}></input>
            <br />
            <input placeholder="나이" value={age}
            onChange={(e)=>setAge(Number(e.target.value))}></input>
            <br />
            <button onClick={(e)=>{
                store.dispatch({type:"LOGIN", name, age})
            }}>로그인</button>
            <button onClick={()=>{
                store.dispatch({type:"LOGOUT"})
            }}>로그아웃</button>
            <button onClick={()=>{
                store.dispatch({type:"INCREASE_AGE"})
            }}>나이 증가</button>

        </div>
    )
}