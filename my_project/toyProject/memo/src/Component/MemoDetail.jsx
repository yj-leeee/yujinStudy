import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function MemoDetail(){
    const { id } = useParams(); //URL의 id값 받기
    const [memo, setMemo] = useState(null);

    useEffect(()=>{
        fetch(`http://localhost:8080/memo/detail?id=${id}`)
        .then((res)=> res.json())
        .then((data) => setMemo(data))
        .catch((err)=> console.error("메모 상세 가져오기 오류 :", err));
    },[id]);

    // 🔥 아직 memo가 없을 때 처리
  if (!memo) {
    return <div>로딩 중...</div>;
  }
  
    return (
        <div>
            <h1>{memo.title}</h1>
            <p>{memo.content}</p>
            <p>작성자: {memo.user?.username}</p>
        </div>
    )
}