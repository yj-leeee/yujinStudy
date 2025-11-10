import { backPink } from '@/constants/theme';
import { toggleHistory } from '@/redux/calculatorSlice';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TouchableOpacity } from "react-native";
import { useDispatch } from 'react-redux';

export default function HistoryBtn(){
    const dispatch = useDispatch();

    return(
        <TouchableOpacity activeOpacity={0.2} 
        style={{justifyContent:'center', marginLeft:20}}
        onPress={()=> dispatch(toggleHistory())}>
            <FontAwesome name="history" size={50} color={backPink} />
        </TouchableOpacity>
    )
}