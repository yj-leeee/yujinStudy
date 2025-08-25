export default function NoticeCard( props ){
    const prop = props;
    return(
        <div>
        <p>알림제목 : {prop.title}</p>
        <p>작성자 : {prop.writer}</p>
        <p>{prop.children}</p>
        <button onClick={()=>{prop.onCheck()}}>버튼</button>
        </div>
    )
}