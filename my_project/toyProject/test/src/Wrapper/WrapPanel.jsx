import { useDispatch } from "react-redux";
import { VotePanel } from "../Component/VotePanel";

export default function WrapPanel(){
    const dispatch = useDispatch();

    function voteA(){
        dispatch({type:"VOTE_A"})
    }

    function voteB(){
        dispatch({type:"VOTE_B"})
    }
    return <VotePanel voteA={voteA} voteB={voteB}></VotePanel>
}