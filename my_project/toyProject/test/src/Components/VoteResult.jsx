import { useEffect, useState } from "react"


export default function VoteResult(props){
    const [state, setState] = useState(props.store.getState());

     useEffect(() => {
    const unsubscribe = props.store.subscribe(() => {
      setState(props.store.getState());
    });

    // cleanup (컴포넌트 언마운트 시 구독 해제)
    return () => unsubscribe();
  }, [props.store]);
    return(
        <div>
            <p>A 투표 수 : {state.userA}</p>
            <p>B 투표 수 : {state.userB}</p>
         </div>
    )
}