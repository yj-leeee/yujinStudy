import CreateBtn from "@/components/CreateBts";
import Search from "@/components/Search";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home(){
    return(
        <SafeAreaView style={{flex:1}}>
            <Search />
            <ScrollView>

            </ScrollView>

            <KeyboardAvoidingView
            behavior={"padding"}
            keyboardVerticalOffset={80}>
                <CreateBtn />
            </KeyboardAvoidingView>
        
        </SafeAreaView>
    )
}