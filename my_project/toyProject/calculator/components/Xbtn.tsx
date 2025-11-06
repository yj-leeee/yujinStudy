import { btn } from "@/constants/theme";
import { Pressable, View } from "react-native";

export default function Xbtn(){
    return(
        <View>
            <Pressable style={btn.xbutton}></Pressable>
        </View>
    )
}