import VoteResult from "../Components/VoteResult";
import { useState,useEffect } from "react";
import store from "../store";
export default function WrapResult(){
    const [state, setState] = useState(store.getState());

    useEffect(()=>{
        const unsubscribe = store.subscribe(()=>{
            setState(store.getState());
        })
        return()=> unsubscribe();
    },[store])

    return(<VoteResult userA={state.userA} userB={state.userB}></VoteResult>)

}