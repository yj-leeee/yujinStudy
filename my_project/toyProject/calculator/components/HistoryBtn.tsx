import { backPink } from '@/constants/theme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TouchableOpacity } from "react-native";

export default function HistoryBtn(){
    return(
        <TouchableOpacity activeOpacity={0.2} style={{justifyContent:'center', marginLeft:20}}>
            <FontAwesome name="history" size={50} color={backPink} />
        </TouchableOpacity>
    )
}