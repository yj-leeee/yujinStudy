import Btns from "@/components/Btns";
import CalculatorTabs from "@/components/CalculatorTabs";
import HistoryBtn from "@/components/HistoryBtn";
import InputComponent from "@/components/InputComponent";
import Xbtn from "@/components/Xbtn";
import { lightPink } from "@/constants/theme";
import { calculateResult, clearAll, handleBracket, resultPress, setDisplayValue } from "@/redux/calculatorSlice";
import { useEffect } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
export default function Home(){
    const dispatch = useDispatch();
    const displayValue = useSelector((state: any) => state.calculator.displayValue)

    //displayValue가 바뀔때마다 자동 계산
    useEffect(()=>{
        dispatch(calculateResult());
    }, [displayValue]);


    //모든 버튼 클릭을 처리하는 통합 함수
    const handleButtonPress = (value : string) => {
        switch(value){
            case 'C':
                dispatch(clearAll());
                break;
            case '( )':
                dispatch(handleBracket());
                break;
            case '=':
                dispatch(resultPress());
                break;
            default:
                dispatch(setDisplayValue(value));
                break;
        }
                
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
            <CalculatorTabs />
            <InputComponent />
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <HistoryBtn />
                <Xbtn/>
            </View>
            
            {/* 🚨 여기에 buttonRows 배열을 Btns 컴포넌트로 전달 */}
            {buttonRows.map((row, index) => (
                <Btns key={index} buttonData={row} onButtonPress={handleButtonPress}/>
            ))}

        </SafeAreaView>
        
    )
}