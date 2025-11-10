import { input } from "@/constants/theme";
import { calculateResult, setCursorPosition } from "@/redux/calculatorSlice";
import { useEffect } from "react";
import { Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
export default function InputComponent(){
    //리덕스 상태에서 계산기 전체를 불러오기
    const {calculators, activeId} = useSelector((state:any)=> state.calculator);
    //현재 활성 계산기 찾기
    const activeCalc = 
        calculators.find((c: any) => c.id === activeId) || { displayValues: "", result:0};
    const dispatch = useDispatch();
    useEffect(()=>{
        if(activeCalc){
        dispatch(calculateResult());
        }
    }, [activeCalc.displayValue, activeId]);
    
    return(
        <View style={input.container}>
            <TextInput
                style={input.field}
                multiline={true} //여러 줄 입력 활성화
                scrollEnabled={true} //TextInput 자체 스크롤 활성화
                editable={true}
                // 텍스트를 오른쪽 아래에 정렬 (가장 최근 입력이 보이도록)
                textAlignVertical='bottom' 
                textAlign='right'
                //리덕스 상태를 value로 연셜
                value={activeCalc.displayValue}
                // 💡 핵심: 포커스 시 소프트 키보드 표시를 막습니다.
                showSoftInputOnFocus={false}
                //커서 이동 이벤트 추적
                onSelectionChange={(e)=>{
                    const cursorPos = e.nativeEvent.selection.start;
                    dispatch(setCursorPosition(cursorPos))
                }}
            />
            <Text style={input.resultText}>{activeCalc.result}</Text>
        </View>
    )
}