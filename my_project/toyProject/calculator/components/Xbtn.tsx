import { backPink, btn } from "@/constants/theme";
import { deleteBtn } from "@/redux/calculatorSlice";
import Feather from '@expo/vector-icons/Feather';
import { TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";


export default function Xbtn(){
    const dispatch = useDispatch();

    return(
        <View>
            <TouchableOpacity activeOpacity={0.2} style={btn.xbutton}
            onPress={()=>dispatch(deleteBtn())}>
                <Feather name="delete" size={50} color={backPink} />
            </TouchableOpacity>
        </View>
    )
}