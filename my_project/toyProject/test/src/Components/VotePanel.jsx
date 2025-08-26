export default function VotePanel(props){
    return(
        <div>
            <button onClick={()=>{
                props.voteA()}}>A 투표</button>
            <button onClick={()=>{
                props.voteB()}}>B 투표</button>
        </div>
    )
}