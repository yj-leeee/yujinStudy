import { createBtn } from '@/constants/theme';
import Feather from '@expo/vector-icons/Feather';
import { useRef, useState } from 'react';
import { Animated, Pressable, TextInput, View } from "react-native";

export default function CreateBtn(){
    const[open, setOpen] = useState(false);
    const animation = useRef(new Animated.Value((1))).current;

    return (
        <View style={createBtn.div}>
            {open && <TodoInput />}
            <Pressable style={createBtn.btn} onPress={() => {setOpen(!open)}}>
                <Animated.View>
                    <Feather name="plus" size={24} color="white" />
                </Animated.View>
            </Pressable>
        </View>
    )
}

function TodoInput(){
    return(
        <View style={createBtn.inputDiv}>
            <TextInput placeholder='할일 입력'></TextInput>
        </View>
    )
}