import { useState,useEffect } from "react";
import store from "../store";
import Info from "../Components/Info"

export default function WrappInfo(){
    const [name,setName] = useState(store.getState().name)
    const [age, setAge] = useState(store.getState().age)
    const isLoggedIn = store.getState().isLoggedIn

    useEffect(()=>{
        const chgName = store.subscribe(()=>{
            setName(store.getState().name)
        });

        return() => chgName();
    },[store.getState().name])

    useEffect(()=>{
        const chgAge = store.subscribe(()=>{
            setAge(store.getState().age)
        });

        return() => chgAge();
    },[store.getState().age])

    return <Info name={name} age={age} isLoggedIn={isLoggedIn}></Info>
}
