import Feed from "@/components/Feed";
import Header from "@/components/Header";
import Stories from "@/components/Stories";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home(){
    return(
        <SafeAreaView>
            <Header/>
            <Stories/>
            <Feed/>
        </SafeAreaView>
    )
}