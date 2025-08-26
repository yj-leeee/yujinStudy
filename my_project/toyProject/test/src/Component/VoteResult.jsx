import { useSelector } from "react-redux"

export function VoteResult(){
    const userA = useSelector(state => state.userA);
    const userB = useSelector(state => state.userB);


    return(
        <div>
            <p>A 득표 수 : {userA} </p>
            <p>A 득표 수 : {userB}</p>

        </div>
    )
}