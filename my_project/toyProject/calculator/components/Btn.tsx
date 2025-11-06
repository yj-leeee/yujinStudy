import { btn } from "@/constants/theme";
import { Pressable, Text, View } from "react-native";

export default function Btn({value, onPress}){
    return(
        <View>
            <Pressable style={btn.btn}>
                <Text style={btn.fsize}>{value}</Text>
            </Pressable>
        </View>
    )
}