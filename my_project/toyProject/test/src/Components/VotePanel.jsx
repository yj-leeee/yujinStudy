export default function VotePanel(props){
    return(
        <div>
            <button onClick={()=>{
                props.store.dispatch({type:'VOTE_A'})
                console.log(props.store.getState())
                }}>A 투표</button>
            <button onClick={()=>{
                props.store.dispatch({type:'VOTE_B'})
                console.log(props.store.getState())
                }}>B 투표</button>
        </div>
    )
}