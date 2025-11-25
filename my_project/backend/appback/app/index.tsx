import CreateBtn from "@/components/CreateBts";
import Search from "@/components/Search";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home(){
    return(
        <SafeAreaView style={{flex:1}}>
            <Search />
            <ScrollView>

            </ScrollView>
            <CreateBtn />
        </SafeAreaView>
    )
}