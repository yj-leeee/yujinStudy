import { useDispatch } from "react-redux"
import { useState } from "react";

export default function Login(){
    const dispatch = useDispatch();
    const [name,setName] = useState("");
    const [age,setAge] = useState("");


    return(
        <div>
            <input placeholder="이름" value={name}
            onChange={(e)=>{
                setName(e.target.value)
            }}></input>
            <br/>
            <input placeholder="나이" value={age}
            onChange={(e)=>{
                setAge(Number(e.target.value))
            }}></input>
            <br/>
            <button onClick={()=>{
                dispatch({type:"LOGIN", name, age})
            }}>로그인</button>
            <button onClick={()=>{
                dispatch({type:"LOGOUT"})
            }}>로그아웃</button>
            <button onClick={()=>{
                dispatch({type:"INCREASE_AGE"})
            }}>나이증가</button>



        </div>
    )
}