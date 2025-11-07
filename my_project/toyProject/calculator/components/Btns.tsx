import { btns } from "@/constants/theme";
import { View } from "react-native";
import Btn from "./Btn";
export default function Btns({ buttonData, onButtonPress }){
    return(
        <View style={btns.btns}>
            {/* buttonData 배열을 순회하며 Btn 컴포넌트 생성 */}
            {buttonData.map((value, index) => (
                <Btn 
                    key={index} 
                    value={value} 
                    // 💡 여기에 계산 로직 함수(handlePress)를 props로 전달해야 합니다.
                    onPress={onButtonPress}
                />
            ))}
        </View>
    )
}