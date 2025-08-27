

export default function Login(props){
    return(
        <div>
            <input placeholder="이름" value={props.action.name}
            onChange={(e)=>{
                props.action.setName(e.target.value)
            }}></input>
            <br/>
            <input placeholder="나이" value={props.action.age}
            onChange={(e)=>{
                props.action.setAge(Number(e.target.value))
            }}></input>
            <br/>
            <button onClick={()=>{
                props.action.LoginBtn()
            }}>로그인</button>
            <button onClick={()=>{
                props.action.LogOutBtn()
            }}>로그아웃</button>
            <button onClick={()=>{
                props.action.InBtn()
            }}>나이증가</button>



        </div>
    )
}