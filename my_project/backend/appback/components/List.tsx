import { lists } from "@/constants/theme";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
export default function List({todo}){
    const [isEditing, setIsEditing] = useState(false); //수정모드

    return(
        <View style={lists.wrapper}>
            <TextInput value={todo.todo} editable={!isEditing}></TextInput>
            <View style={lists.btns}>
            <Pressable><Text style={{color:'blue'}}>{isEditing ? "저장" : "수정"}</Text></Pressable>
            <Pressable><Text style={{color:'red'}}>삭제</Text></Pressable>
            </View>
        </View>
    )
}