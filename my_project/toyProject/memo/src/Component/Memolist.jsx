import { useNavigate } from "react-router-dom"; // 🔥 추가
import { useSelector } from "react-redux"; // ✅ 추가
import { useEffect, useState } from "react";

export default function Memolist(){
    const navigate = useNavigate(); // 🔥 페이지 이동 함수
    const [memos, setMemos] = useState([]);
    // ✅ Redux에서 username 꺼내오기
    const username = useSelector((state) => state.username); 
    const create = () =>{
        navigate("/creatememo");
    }

      // 🔥 메모 리스트 가져오기
    useEffect(() => {
        if (username) {
            fetch(`http://localhost:8080/memo/list?username=${username}`)
                .then(res => res.json())
                .then(data => setMemos(data))
                .catch(err => {
                    console.error("메모 불러오기 오류:", err);
                    alert("메모 불러오기 실패");
                });
        }
    }, [username]);

    //메모 디테일 페이지로 넘어가기
    const memodetail = (id) => {
        navigate(`/memodetail/${id}`)
    }
    return (
        <div>
            <h1>{username}의 메모장</h1>
            <button type="button" onClick={create}>글생성</button>
            <hr/>
            <h2>메모 목록</h2>
            <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>제목</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {memos.length > 0 ? (
                        memos.map((memo) => (
                            <tr key={memo.id}>
                                <td>{memo.id}</td>
                                <td onClick={() => memodetail(memo.id)}>{memo.title}</td> {/* 🔥 id 전달 */}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">메모가 없습니다.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}