import InputsForm from "./InputsUser"

export default function LoginCard(props){
    const set = props.setUserName
    return(
        <div>
        <InputsForm set={set}></InputsForm>
        <p>{props.userName}님 반갑습니다</p>
        </div>
    )
}