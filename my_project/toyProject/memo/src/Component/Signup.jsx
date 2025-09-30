import { useState } from "react"

export default function Signup(){
    const [username, setUsername] = useState(" ");
    const [password, setPassword] = useState(" ");

    const handleSignup = () => {
    fetch("http://localhost:8080/user/create", {
        method: "POST",
        headers: {
        "Content-Type": "application/x-www-form-urlencoded", // ← 백엔드에서 처리하기 쉬운 방식
        },
        body: new URLSearchParams({
        username,
        password,
        }),
    })
        .then((response) => response.text())
        .then((result) => {
        alert(result); // 예: "회원가입 성공!" 같은 서버 응답
        })
        .catch((error) => {
        console.error("회원가입 에러:", error);
        alert("회원가입 중 문제가 발생했어요!");
        });
    };

    return(
        <div>
            <h2>회원가입</h2>
            <form>
                <input type="text" placeholder="아이디 입력"
                value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <br/>
                <input type="password" placeholder="비밀번호 입력"
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <br/>
                <button type="button" onClick={handleSignup}>회원가입</button>
            </form>
            <a href="/">로그인</a>
        </div>
    )
}