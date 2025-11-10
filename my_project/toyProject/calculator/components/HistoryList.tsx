import { ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function HistoryList(){
    const { calculators, activeId } = useSelector((state:any) => state.calculator);
    const activeCalc = calculators.find((c:any) => c.id === activeId);

    if(!activeCalc || !activeCalc.history?.length){
        return(
            <View style={{padding:10}}>
                <Text style={{color:'gray'}}>기록이 없습니다.</Text>
            </View>
        );
    }

    return (
        <ScrollView style={{maxHeight:180,padding:10}}>
            {activeCalc.history.map((item:any, index:number) => (  // ✅ 수정된 부분
                <View key={index} style={{marginBottom:8}}>
                    <Text>{item.expression} = {item.result}</Text>
                </View>
            ))}
        </ScrollView>
    );
}
