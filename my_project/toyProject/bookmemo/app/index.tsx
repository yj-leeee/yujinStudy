import Book from "@/components/Book";
import Search from "@/components/Search";
import { backColor } from "@/constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home(){
    return(
        <SafeAreaView style={{flex:1, backgroundColor:backColor}}>
            <Search />
            <Book/>
        </SafeAreaView>
    )
}