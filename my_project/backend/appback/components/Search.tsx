import { SearchSty } from '@/constants/theme';
import Feather from '@expo/vector-icons/Feather';
import { Pressable, TextInput, View } from "react-native";

export default function Search(){
    return(
        <View style={SearchSty.inputWrapper}>
            <TextInput style={SearchSty.input} placeholder="할일 검색">
            </TextInput>
            <Pressable style={SearchSty.btn}>
                    <Feather name="search" size={24} color="black" />
            </Pressable>
        </View>
    )
}