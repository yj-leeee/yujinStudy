import { View, Text, StyleSheet } from "react-native";
import { router } from 'expo-router';
import { useEffect } from "react";

export default function Home(){
        //useEffect(() => {
          //  const timer = setTimeout(() => {
        //router.push("/second");
    //},  5000); // 5초 = 5000ms

    //return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 제거
    //}, []);
    const styles = StyleSheet.create({
        home:{
            backgroundColor: "#3498db",
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        },
        text:{
            color:"white",
            fontSize:30,
            fontWeight:"bold"
        }
    })
    return(
        <View style={styles.home}>
            <Text style={styles.text}
            onPress={()=>router.push('/second')}>HELLO WORLD!</Text>
        </View>
    )
}