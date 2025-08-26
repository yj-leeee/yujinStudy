

export function VotePanel(props){
    
    return(
        <div>
            <button onClick={()=>{
                props.voteA()
            }}>A투표</button>
            <button onClick={()=>{
                props.voteB()
            }}>B투표</button>
        </div>
    )
}