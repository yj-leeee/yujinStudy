import { Link } from "react-router-dom";

export default function Posts(){
    const post = [
        {id:1, title:"제목1"},
        {id:2, title:"제목2"},
        {id:3, title:"제목3"}
    ];
    let lists = [];

    for(let i=0; i<post.length; i++){
        lists.push(<li key={post[i].id}><Link to={`/posts/${post[i].id}`}>{post[i].title}</Link></li>)
    }
    
    return(
        <div>
            <h2>게시글 목록</h2>
        <ul>
            {lists}
        </ul>
        <p><Link to="/write">새 게시글 작성하기</Link></p>
        </div>
    )
}