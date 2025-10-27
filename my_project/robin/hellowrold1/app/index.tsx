import { styles } from "@/constants/thma";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useEffect, useRef, useState } from "react";
import { Animated, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
/*
<FontAwesome name="hand-rock-o" size={24} color="black" />
<FontAwesome name="hand-scissors-o" size={24} color="black" />
<FontAwesome name="hand-paper-o" size={24} color="black" />
*/

const ICON_MAP = {
    1: "hand-rock-o",   // 주먹
    2: "hand-paper-o",  // 보자기
    3: "hand-scissors-o" // 가위
};
export default function Home(){
    const positionY = useRef(new Animated.Value(0)).current;

    const [title, setTitle] = useState("Let's Start!");

    //컴퓨터 최종 선택 저장
    const [computerChoice, setComputerChoice] = useState(null);
    //내 선택
    const [meChoice, setMeChoice] = useState(null);

    //선택할때 불투명도
    

    function play(choice){
        //1 = 주먹 2 = 보자기 3 = 가위
        const randomComputer = Math.floor(Math.random()*3)+1;
        let resultString = "";

        if(choice === 1){
            resultString = randomComputer === 3 ? "Win" : "Lose";
        }else if(choice === 2){
            resultString = randomComputer === 1 ? "Win" : "Lose";
        }else if(choice === 3){
            resultString = randomComputer === 2 ? "Win" : "Lose";
        }

        if(choice === randomComputer){
            resultString = "비겼어요";
        }
        setComputerChoice(ICON_MAP[randomComputer]);
        setMeChoice(ICON_MAP[choice]);
        setTitle(resultString);
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            Animated.timing(
                positionY,
                {
                    toValue: -50,
                    duration:800,
                    useNativeDriver: true,
                }
            ).start();
        }, 3000)
        return() => clearTimeout(timer);
    },[]);

    return(
        <SafeAreaView style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Animated.View style={[
                styles.title, 
            {
                transform : [{translateY:positionY}]
            }
            ]}
            >
                <Text style={{fontSize:36}}>{title}</Text>
            </Animated.View>

            {/*가위바위보*/}
            <View style={styles.Display}>
                {/*컴퓨터*/}
                <View style={styles.Computer}>
                    <FontAwesome
                    name={computerChoice}
                    size={100}
                    color="#3498db"
                />
                <Text>컴퓨터</Text>
                </View>
                {/*나*/}
                <View style={styles.Me}>
                    <FontAwesome
                    name={meChoice}
                    size={100}
                    color="#3498db"
                    />
                <Text>내 선택</Text>
                </View>
            </View>


            {/*밑에 버튼*/}
            <View style={styles.btn}>
                <Pressable onPress={()=>play(1)} style={styles.btns}>
                    <FontAwesome  name="hand-rock-o" size={24} color="black" />
                </Pressable>
                <Pressable onPress={()=>play(2)} style={styles.btns}>
                    <FontAwesome name="hand-scissors-o" size={24} color="black" />
                </Pressable>
                <Pressable onPress={()=>play(3)} style={styles.btns}>
                    <FontAwesome name="hand-paper-o" size={24} color="black" />
                </Pressable>
            </View>
        </SafeAreaView>
    )
}