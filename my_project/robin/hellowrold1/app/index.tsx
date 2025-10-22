import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const back = require('../asset/traffic-light.png');
const red = require('../asset/traffic-light-red.png');
const yellow = require('../asset/traffic-light-yellow.png');
const green = require('../asset/traffic-light-green.png');

  const lightSources = {
    // 'off' 상태일 때 기본 배경 이미지
    off: back, 
    red: red,
    yellow: yellow,
    green: green,
};
export default function Login() {

const [currentLight, setCurrentLight] = useState('off');

  // 2. 이벤트 핸들러 구현
  const btnRed = () => {
    setCurrentLight('red');
  }

  const btnYellow = () => {
    setCurrentLight('yellow');
  }
  
  const btnGreen = () => {
    setCurrentLight('green');
  }

  const styles = StyleSheet.create({
    container:{
      backgroundColor:"black",
      flex:1,
      alignItems:"center",
    },
    img:{
      marginVertical:80,
      width:300,
      height:400
    },
    btnCon:{
      flexDirection:"row",
      gap:30
    },
    btn:{
      width:80,
      height:50,
      borderRadius:10,
      justifyContent:"center"
    },
    text:{
      color:"white",
      textAlign:"center",
    },
    btnR :{
      backgroundColor:"red"
    },
    btnY : {
      backgroundColor:"orange"
    },
    btnG : {
      backgroundColor:"green"
    }
    
  })
  return(
    <View style={styles.container}>
      <Image style={styles.img} source={lightSources[currentLight]}/>
      <View style={styles.btnCon}>
        <Pressable onPress={btnRed} style={[styles.btn, styles.btnR]}><Text style={styles.text}>Red</Text></Pressable>
        <Pressable onPress={btnYellow} style={[styles.btn, styles.btnY]}><Text style={styles.text}>Yellow</Text></Pressable>
        <Pressable onPress={btnGreen} style={[styles.btn, styles.btnG]}><Text style={styles.text}>Green</Text></Pressable>
      </View>
    </View>
  )
}
