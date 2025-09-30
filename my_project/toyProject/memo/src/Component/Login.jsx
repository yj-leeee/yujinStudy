import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // 🔥 추가

export default function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate(); // 🔥 페이지 이동 함수
    const dispatch = useDispatch();

    
    const handleLogin = () => {
        fetch("http://localhost:8080/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                username,
                password
            })
        })
        .then(response => response.text())
        .then(result => {
            alert(result); // 서버에서 받은 응답 메시지 출력
            if (result.startsWith("로그인 성공")) {
                // store에 공급
                dispatch({ type: "LOGIN", username: username }); // 🔥 올바른 방식
                // 🔥 username을 가지고 memo 페이지로 이동
                navigate("/memo", { state: { username } });
            }
        })
        .catch(error => {
            console.error("로그인 에러:", error);
            alert("로그인 중 문제가 발생했어요!");
        });
    };
    
    return (
        <div>
            <h2>로그인</h2>
            <form onSubmit={(e)=>e.preventDefault()}>
                <input type="text" placeholder="아이디 입력" 
                value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <br />
                <input type="password" placeholder="비밀번호 입력" 
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type="button" onClick={handleLogin}>로그인</button>
            </form>
            <a href="/create">회원가입</a>
        </div>
    )
}