import { useSelector } from "react-redux";

export default function Info(){
    const name = useSelector(state => state.name);
    const age = useSelector(state => state.age);
    const isLoggedIn = useSelector(state => state.isLoggedIn);

    function OX(){
        if(!isLoggedIn){
            return <p>로그인을 해주세요</p>
        }else{
            return(
                <div>
                    <p>이름 : {name}</p>
                    <p>나이 : {age}</p>
                </div>
            )
        }
    }
    return OX();
    
}