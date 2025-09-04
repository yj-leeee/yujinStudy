import { useNavigate, useParams } from "react-router-dom"

export default function PostDetail(){
    const navigate = useNavigate();
    const { id } = useParams();
    const bodys = {
        1: {title : "제목1", content:"내용1 입니다."},
        2: {title : "제목2",content:"내용2 입니다."},
        3: {title : "제목3",content:"내용3 입니다."}
    };

    const body = bodys[id];
    return(
        <div>
            <h2>{body.title}</h2>
            <p>{body.content}</p>
            <button onClick={()=>{
                navigate(-1);
            }}>뒤로가기</button>

        </div>
    )
}