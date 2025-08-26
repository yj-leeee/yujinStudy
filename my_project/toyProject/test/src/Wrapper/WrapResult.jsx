import { useSelector } from "react-redux";
import { VoteResult } from "../Component/VoteResult";

export default function WrapResult(){
    const userA = useSelector(state => state.userA);
    const userB = useSelector(state => state.userB);

    return <VoteResult userA={userA} userB={userB}></VoteResult>

}