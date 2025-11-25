import { createBtn } from '@/constants/theme';
import Feather from '@expo/vector-icons/Feather';
import { Pressable, View } from "react-native";

export default function CreateBtn(){
    
    return (
        <View style={createBtn.div}>
            <Pressable style={createBtn.btn}>
                <Feather name="plus" size={24} color="black" />
            </Pressable>
        </View>
    )
}