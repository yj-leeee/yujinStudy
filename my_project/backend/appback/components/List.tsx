import { lists } from "@/constants/theme";
import { deleteTodoDone, updateDone } from "@/store/todoThunk";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
export default function List({todo}){
    const [isEditing, setIsEditing] = useState(false); //수정모드
    const dispatch = useDispatch();
    const [content, setContent] = useState(todo.todo);

    const handleDelete = () => {
        dispatch(deleteTodoDone(todo.id));
    }

    const handleUpdate = () => {
        dispatch(updateDone({ id: todo.id, todo: content}));
        setIsEditing(false); //저장 후 수정모드 종료
    }
    return(
        <View style={lists.wrapper}>
            <TextInput style={{outline:'none'}} 
            value={content} 
            editable={isEditing}
            onChangeText={setContent}></TextInput>
            <View style={lists.btns}>
            <Pressable onPress={isEditing ? handleUpdate : () => setIsEditing(true)}>
                <Text style={{color:'blue'}}>{isEditing ? "저장" : "수정"}</Text></Pressable>
            <Pressable onPress={handleDelete}><Text style={{color:'red'}}>삭제</Text></Pressable>
            </View>
        </View>
    )
}