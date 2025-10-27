import { searchStyle } from "@/constants/theme";
import Feather from '@expo/vector-icons/Feather';
import { TextInput, View } from "react-native";

type Props = {
  query: string;
  setQuery: (text: string) => void;
};

export default function Search({query, setQuery}: Props){
    return(
        <View style={searchStyle.searchContainer}>
            <Feather name="search" size={24} color="black" />
            <TextInput placeholder="도서 검색"
            value={query}
            onChangeText={setQuery}></TextInput>
        </View>
    )
}