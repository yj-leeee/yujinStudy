export default function Info(props){
    

    function OX(){
        if(props.isLoggedIn){
            return(
                <div>
                <p>이름 : {props.name}</p>
                <p>나이 : {props.age}</p>
            </div>
            );
        }else{
            return <p>로그인을 해주세요</p>
        }
    }

    

    return(
        <div>
        {OX()}
        </div>
    )
}