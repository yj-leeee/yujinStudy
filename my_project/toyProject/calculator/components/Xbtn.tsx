import { btn } from "@/constants/theme";
import { deleteBtn } from "@/redux/calculatorSlice";
import { Pressable, View } from "react-native";
import { useDispatch } from "react-redux";

export default function Xbtn(){
    const dispatch = useDispatch();

    return(
        <View>
            <Pressable style={btn.xbutton}
            onPress={()=>dispatch(deleteBtn())}></Pressable>
        </View>
    )
}