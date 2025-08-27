export default function Login(props){

    return(
        <div>
            <input placeholder="이름" 
            onChange={(e)=>props.setName(e.target.value)}></input>
            <br />
            <input placeholder="나이" 
            onChange={(e)=>props.setAge(Number(e.target.value))}></input>
            <br />
            <button onClick={(e)=>{
                props.Logins()
            }}>로그인</button>
            <button onClick={()=>{
                props.Logout()
            }}>로그아웃</button>
            <button onClick={()=>{
                props.INCREASE()
            }}>나이 증가</button>

        </div>
    )
}