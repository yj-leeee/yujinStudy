import { useDispatch } from "react-redux"
import { useState } from "react";
import Login from "../Components/Login";

export default function LoginWrap(){
    const dispatch = useDispatch();
    const [name,setName] = useState("");
    const [age,setAge] = useState("");

    function LoginBtn(){
        dispatch({type:"LOGIN", name, age})
    }
    function LogOutBtn(){
        dispatch({type:"LOGOUT"})
    }
    function InBtn(){
        dispatch({type:"INCREASE_AGE"})
    }

    return <Login action={{dispatch, setName, setAge, LoginBtn, LogOutBtn,InBtn}}></Login>
}