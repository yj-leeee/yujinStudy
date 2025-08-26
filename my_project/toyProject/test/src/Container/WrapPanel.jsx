import VotePanel from "../Components/VotePanel";
import store from "../store";

export default function WrapPanel(){
    function voteA(){
        store.dispatch({type:'VOTE_A'})
        console.log(store.getState())
    }
    function voteB(){
        store.dispatch({type:'VOTE_B'})
        console.log(store.getState())
    }
    return(<VotePanel voteA={voteA} voteB={voteB}></VotePanel>)
}