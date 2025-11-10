import { tabs } from "@/constants/theme";
import { addCalculator, switchCalculator } from "@/redux/calculatorSlice";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function CalculatorTabs(){
    const dispatch = useDispatch();
    const {calculators, activeId } = useSelector((state:any) => state.calculator); 
    
    return(
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {calculators.map((calc:any) => (
                    <Pressable
                        style={tabs.tabs}
                        key={calc.id}
                        onPress={() => dispatch(switchCalculator(calc.id))}
                        >
                            <Text>{calc.id}. 계산기 : {calc.result ?? 0}</Text>
                        </Pressable>
                ))}
                {/*새 계산기 추가 버튼*/}
                <Pressable
                    style={tabs.newTab}
                    onPress={()=> dispatch(addCalculator())}
                    >
                        <Text>+</Text>
                    </Pressable>
            </ScrollView>
        </View>
    )
}