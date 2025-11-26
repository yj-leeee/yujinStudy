import { lists } from "@/constants/theme";
import { deleteTodoDone, toggleTodoDone, updateDone } from "@/store/todoThunk";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
export default function List({todo}){
    const [isEditing, setIsEditing] = useState(false); //수정모드
    const dispatch = useDispatch();
    const [content, setContent] = useState(todo.todo);

    const handleToggle = () => {
        dispatch(toggleTodoDone(todo.id));
    }

    const handleDelete = () => {
        dispatch(deleteTodoDone(todo.id));
    }

    const handleUpdate = () => {
        dispatch(updateDone({ id: todo.id, todo: content}));
        setIsEditing(false); //저장 후 수정모드 종료
    }

    const textStyle = {
        textDecorationLine: todo.checked ? "line-through" : "none",
        color: todo.checked ? "gray" : "black",
    };

    return(
        <View style={lists.wrapper}>
            <TextInput style={[{ outline: 'none'}, textStyle]} 
            value={content} 
            editable={isEditing}
            onChangeText={setContent}></TextInput>
            <View style={lists.btns}>
             {/* 체크박스 */}
            <Pressable onPress={handleToggle} style={{ marginRight: 10 }}>
                {todo.checked ? (
                    <Feather name="check-square" size={24} color="green" />
                ) : (
                    <Feather name="square" size={24} color="gray" />
                )}
            </Pressable>

            <Pressable onPress={isEditing ? handleUpdate : () => setIsEditing(true)}>
                <Text style={{color:'blue'}}>{isEditing ? "저장" : "수정"}</Text></Pressable>
            <Pressable onPress={handleDelete}><Text style={{color:'red'}}>삭제</Text></Pressable>
            </View>
        </View>
    )
}