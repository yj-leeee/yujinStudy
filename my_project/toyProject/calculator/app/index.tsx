import Btns from "@/components/Btns";
import InputComponent from "@/components/InputComponent";
import Xbtn from "@/components/Xbtn";
import { lightPink } from "@/constants/theme";
import { setDisplayValue } from "@/redux/calculatorSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
export default function Home(){
    const dispatch = useDispatch();

    //모든 버튼 클릭을 처리하는 통합 함수
    const handleButtonPress = (value : string) => {
                dispatch(setDisplayValue(value));
    }

    const buttonRows = [
        ['C', '( )', '%', '÷'],
        ['7','8','9','×'],
        ['4','5','6','-'],
        ['1','2','3','+'],
        ['0','00','.','='],
    ];
    return(
        <SafeAreaView style={{flex:1, backgroundColor:lightPink}}>
            <InputComponent />
            <Xbtn/>
            {/* 🚨 여기에 buttonRows 배열을 Btns 컴포넌트로 전달 */}
            {buttonRows.map((row, index) => (
                <Btns key={index} buttonData={row} onButtonPress={handleButtonPress}/>
            ))}

        </SafeAreaView>
        
    )
}