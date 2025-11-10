import { btn } from "@/constants/theme";
import { Text, TouchableOpacity, View } from "react-native";

export default function Btn({value, onPress}){
    return(
        <View>
            <TouchableOpacity activeOpacity={0.1} style={btn.btn}
                onPress={()=> onPress(value)}
            >
                <Text style={btn.fsize}>{value}</Text>
            </TouchableOpacity>
        </View>
    )
}