import CreateBtn from "@/components/CreateBts";
import List from "@/components/List";
import Search from "@/components/Search";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home(){
    return(
        <SafeAreaView style={{flex:1}}>
            <Search />
            <ScrollView style={{backgroundColor:'lightgray', margin:5, borderRadius:20}}>
                <List />
            </ScrollView>

            <KeyboardAvoidingView
            behavior={"padding"}
            keyboardVerticalOffset={80}>
                <CreateBtn />
            </KeyboardAvoidingView>
        
        </SafeAreaView>
    )
}