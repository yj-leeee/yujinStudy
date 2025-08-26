import { useDispatch } from "react-redux"

export function VotePanel(){
    const voteA = useDispatch();
    const voteB = useDispatch();
    return(
        <div>
            <button onClick={()=>{voteA({type:"VOTE_A"})}}>A 투표</button>
            <button onClick={()=>{voteB({type:"VOTE_B"})}}>B 투표</button>

        </div>
    )
}