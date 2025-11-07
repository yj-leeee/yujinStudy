import { input } from "@/constants/theme";
import { Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
export default function InputComponent(){
    const displayValue = useSelector((state: any) => state.calculator.displayValue);
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
                value={displayValue}
                // 💡 핵심: 포커스 시 소프트 키보드 표시를 막습니다.
                showSoftInputOnFocus={false}
            />
            <Text style={input.resultText}>계산결과</Text>
        </View>
    )
}