import { input } from "@/constants/theme";
import { TextInput, View } from "react-native";
export default function InputComponent(){
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

                // 💡 핵심: 포커스 시 소프트 키보드 표시를 막습니다.
                showSoftInputOnFocus={false}
            ></TextInput>
        </View>
    )
}