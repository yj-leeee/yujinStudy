import { Ionicons } from "@expo/vector-icons";
import { View, TextInput, StyleSheet, Pressable, Keyboard } from "react-native"; // 💡 Keyboard 임포트 추가
import { useState } from "react";
import { addTodo } from '../redux/todoSlice';
import { useDispatch } from "react-redux";

// 💡 Home.tsx에서 전달하는 style prop을 받도록 수정
export default function AddTodo({ style }){ 
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () =>{
        if(text.trim()==='') return;
        dispatch(addTodo(text.trim()));
        setText('');
        // 💡 할 일 추가 후 키보드를 닫아주는 기능 추가
        Keyboard.dismiss(); 
    }

    const styles = StyleSheet.create({
        container : {
            width: '100%', // 👈 전체 너비 확보
            flexDirection:"row",
            alignItems: 'center', // 세로 중앙 정렬
            paddingHorizontal: 20, // 👈 좌우 여백 추가 (Home.tsx의 contentContainer 마진과 대칭되도록)
            paddingVertical: 10,
        }, 
        input : {
            // 🚨 1. width:280 제거! flex: 1을 사용하여 유연하게 만듭니다.
            flex: 1, 
            paddingVertical:12,
            paddingHorizontal: 15, // 👈 텍스트 입력 영역을 위한 좌우 패딩 추가
            backgroundColor:"white",
            borderRadius:25, // 20보다 더 둥글게
            marginRight: 15, // 버튼과의 간격 확보

            // 그림자 설정 유지
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        addButton: {
            // ❌ marginLeft:20 제거! input의 marginRight로 간격이 충분합니다.
            backgroundColor: '#6200EE',
            width: 50,
            height: 50,
            borderRadius: 25, // 원형으로 만듭니다.
            justifyContent: 'center',
            alignItems: 'center',
        }
    });

    return(
        // 💡 Home.tsx에서 전달한 style prop을 적용합니다.
        <View style={[styles.container, style]}>
            <TextInput 
                style={styles.input} 
                placeholder="Add a new todo item"
                value={text}
                onChangeText={setText}
                // 💡 키보드 엔터 버튼으로도 추가 가능하게
                onSubmitEditing={handleAdd} 
            />
            <Pressable style={styles.addButton} onPress={handleAdd}>
                <Ionicons name="add" size={30} color="white" />
            </Pressable>
        </View>
    );
}