import { backPink, tabs } from "@/constants/theme";
import { addCalculator, deleteCalculator, switchCalculator } from "@/redux/calculatorSlice";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";


export default function CalculatorTabs(){
    const dispatch = useDispatch();
    const {calculators, activeId } = useSelector((state:any) => state.calculator); 
    
    return(
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {calculators.map((calc:any, index:number) => {
                    //활성화된 계산기인지 확인
                    const isActive = calc.id === activeId;
                    
                    return(
                    <Pressable
                        style={[tabs.tabs,
                            isActive && { backgroundColor : backPink}
                        ]}
                        key={calc.id}
                        onPress={() => dispatch(switchCalculator(calc.id))}
                        >
                            <View style={{flexDirection:'row'}}>
                            <Text>{index+1}. 계산기 : {calc.result ?? 0}</Text>
                            <Pressable
                                onPress={(e)=>{
                                    e.stopPropagation();//탭 클릭 이벤트 막기
                                    dispatch(deleteCalculator())
                                }}
                                style={{marginLeft:20}}
                                >
                                    <Text style={{ fontWeight: "bold" }}>❌</Text>
                                </Pressable>
                            </View>
                        </Pressable>
                    );
                })}
                {/*새 계산기 추가 버튼*/}
                <Pressable
                    style={tabs.newTab}
                    onPress={()=> dispatch(addCalculator())}
                    >
                        <Text>+</Text>
                    </Pressable>
            </ScrollView>
        </View>
    );
}