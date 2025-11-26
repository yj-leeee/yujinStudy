import CreateBtn from "@/components/CreateBts";
import List from "@/components/List";
import Search from "@/components/Search";
import { useEffect } from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../store/todoThunk";

export default function Home(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    const todos = useSelector((state) => state.todos.todos);

    return(
        <SafeAreaView style={{flex:1}}>
            <Search />
            <ScrollView style={{backgroundColor:'lightgray', margin:5, borderRadius:20}}>
                {todos.map((item) => (
                    <List key={item.id} todo={item} />
                ))}
            </ScrollView>

            <KeyboardAvoidingView
            behavior={"padding"}
            keyboardVerticalOffset={80}>
                <CreateBtn />
            </KeyboardAvoidingView>
        
        </SafeAreaView>
    )
}