import { searchStyle } from "@/constants/theme";
import Feather from '@expo/vector-icons/Feather';
import { TextInput, View } from "react-native";

export default function Search(){
    return(
        <View style={searchStyle.searchContainer}>
            <Feather name="search" size={24} color="black" />
            <TextInput placeholder="도서 검색"></TextInput>
        </View>
    )
}