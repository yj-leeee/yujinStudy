import { useEffect, useState } from 'react'
import store from '../store.js'

export default function Info(){
    const [name,setName] = useState(store.getState().name)
    const [age, setAge] = useState(store.getState().age)
    const isLoggedIn = store.getState().isLoggedIn

    function OX(){
        if(isLoggedIn){
            return(
                <div>
                <p>이름 : {name}</p>
                <p>나이 : {age}</p>
            </div>
            );
        }else{
            return <p>로그인을 해주세요</p>
        }
    }

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

    return(
        <div>
        {OX()}
        </div>
    )
}