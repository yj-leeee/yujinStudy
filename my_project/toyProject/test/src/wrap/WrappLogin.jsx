import store from "../store"
import Login from "../Components/Login"
import { useState } from "react";

export default function WrappLogin(){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    function Logins(){
        store.dispatch({type:"LOGIN", name, age})
    }
    function Logout(){
        store.dispatch({type:"LOGOUT"})
    }
    function INCREASE(){
        store.dispatch({type:"INCREASE_AGE"})
    }
    
    return <Login setName={setName} setAge={setAge} 
    Logins={Logins} Logout={Logout} INCREASE={INCREASE}></Login>
}