import { createBtn } from '@/constants/theme';
import { addTodo } from '@/store/todoThunk';
import Feather from '@expo/vector-icons/Feather';
import { useRef, useState } from 'react';
import { Animated, Dimensions, Keyboard, Pressable, TextInput, View } from "react-native";
import { useDispatch } from 'react-redux';

export default function CreateBtn(){
    const dispatch = useDispatch();

    const[open, setOpen] = useState(false);
    const[todo, setTodo] = useState(""); //입력값 상태
    const animation = useRef(new Animated.Value((0))).current;
    //입력창 펼치기
    const slideAnim = useRef(new Animated.Value(0)).current;

    //남은 width 구하기
    const screenWidth = Dimensions.get("window").width;
    const maxWidth = screenWidth - 60; //-버튼(50)+마진(10)

    const toggle = () => {
        const toValue = open ? 0 : 1; //true면 0도로, false면 45도로
        const next = !open;

        if(!next){
            Keyboard.dismiss();
        }

        Animated.timing(animation, {
            toValue,
            duration: 250,
            useNativeDriver: true,
        }).start();

        //입력창 슬라이드(오->왼 3초)
        Animated.timing(slideAnim, {
            toValue,
            duration:250,
            useNativeDriver: false //width 애니메이션 때문에 반드시 false
        }).start();

        setOpen(!open);
    }

    //0 -> 0도 1-> 45도
    const rotate = animation.interpolate({
        inputRange: [0,1],
        outputRange : ['0deg', '45deg'],
    });

    //입력창가로폭
    const width = slideAnim.interpolate({
        inputRange: [0,1],
        outputRange:[0,maxWidth]
    });


    //저장 기능
    const saveTodo = () => {
        if(!todo.trim()) return; //공백 방지

        dispatch(addTodo(todo)); //서버로 전송
        setTodo(""); //입력값 초기화
        toggle(); //닫기 애니메이션
    }
    return (
        <View style={createBtn.div}>
            <Animated.View style={[createBtn.inputDiv, {width}]}>
                <TodoInput 
                    todo={todo}
                    setTodo={setTodo}
                    saveTodo={saveTodo}/>
            </Animated.View>
            
            <Pressable style={createBtn.btn} 
            onPress={toggle}>
                <Animated.View style={{ transform: [{rotate}]}}>
                    <Feather name="plus" size={24} color="white" />
                </Animated.View>
            </Pressable>
        </View>
    )
}

function TodoInput({todo, setTodo, saveTodo}){
    return(
        <View style={{flex:1 ,flexDirection:'row', justifyContent:'space-between', marginHorizontal:20}}>
            <TextInput placeholder='할일 입력' value={todo} onChangeText={setTodo}></TextInput>
            <Pressable style={{color : 'blue'}} onPress={saveTodo}>저장</Pressable>
        </View>
    )
}