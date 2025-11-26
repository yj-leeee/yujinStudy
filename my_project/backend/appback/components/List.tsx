import { lists } from "@/constants/theme";
import { deleteTodoDone } from "@/store/todoThunk";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
export default function List({todo}){
    const [isEditing, setIsEditing] = useState(false); //수정모드
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodoDone(todo.id));
    }
    return(
        <View style={lists.wrapper}>
            <TextInput value={todo.todo} editable={isEditing}></TextInput>
            <View style={lists.btns}>
            <Pressable><Text style={{color:'blue'}}>{isEditing ? "저장" : "수정"}</Text></Pressable>
            <Pressable onPress={handleDelete}><Text style={{color:'red'}}>삭제</Text></Pressable>
            </View>
        </View>
    )
}