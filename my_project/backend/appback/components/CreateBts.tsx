import { createBtn } from '@/constants/theme';
import Feather from '@expo/vector-icons/Feather';
import { useRef, useState } from 'react';
import { Animated, Pressable, TextInput, View } from "react-native";

export default function CreateBtn(){
    const[open, setOpen] = useState(false);
    const animation = useRef(new Animated.Value((0))).current;

    const toggle = () => {
        const toValue = open ? 0 : 1; //true면 0도로, false면 45도로

        Animated.timing(animation, {
            toValue,
            duration: 250,
            useNativeDriver: true,
        }).start();
        setOpen(!open);
    }

    //0 -> 0도 1-> 45도
    const rotate = animation.interpolate({
        inputRange: [0,1],
        outputRange : ['0deg', '45deg'],
    });

    return (
        <View style={createBtn.div}>
            {open && <TodoInput />}
            <Pressable style={createBtn.btn} 
            onPress={toggle}>
                <Animated.View style={{ transform: [{rotate}]}}>
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