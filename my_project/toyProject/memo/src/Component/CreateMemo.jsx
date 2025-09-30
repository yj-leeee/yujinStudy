import { useState } from "react"
import { useNavigate } from "react-router-dom"; // 🔥 추가
import { useSelector } from "react-redux"; // ✅ 추가


export default function CreateMemo(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate(); // 🔥 페이지 이동 함수
    const username = useSelector((state) => state.username); 


    const handleCreateMemo = () => {
        fetch("http://localhost:8080/memo/create",{
            method:"POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                username,
                title,
                content
            })
        })
        .then(response => response.text())
        .then(result => {
            navigate("/memo")//처음 화면
        })
    }

    return(
        <div>
            <form>
                <input type="text" value={title}
                placeholder="제목입력" onChange={(e)=>setTitle(e.target.value)}/>
                <textarea value={content}
                placeholder="내용입력" onChange={(e)=>setContent(e.target.value)}/>
                <button type="button" onClick={handleCreateMemo}>메모 생성</button>
            </form>
        </div>
    )
}