

export default function Login(props){
    const {name, age, setName, setAge, LoginBtn, LogOutBtn,InBtn} = props.action
    return(
        <div>
            <input placeholder="이름" 
            onChange={(e)=>{
                setName(e.target.value)
            }}></input>
            <br/>
            <input placeholder="나이" 
            onChange={(e)=>{
                setAge(Number(e.target.value))
            }}></input>
            <br/>
            <button onClick={()=>{
                LoginBtn()
            }}>로그인</button>
            <button onClick={()=>{
                LogOutBtn()
            }}>로그아웃</button>
            <button onClick={()=>{
                InBtn()
            }}>나이증가</button>



        </div>
    )
}