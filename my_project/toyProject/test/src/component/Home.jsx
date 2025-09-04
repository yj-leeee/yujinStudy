import { Link } from "react-router-dom";


export default function Home(){
    return(
        <div>
            <h1>홈페이지 입니다</h1>
            <p><Link to="/posts">게시글 보러가기</Link></p>
            
        </div>
    )
}