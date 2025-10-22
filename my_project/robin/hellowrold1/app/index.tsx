import { useState } from "react";
import { Image, LayoutAnimation, Pressable, StyleSheet, View } from "react-native";


export default function Login() {
  const off = require("../asset/bulb-off.jpg");
  const on = require("../asset/bulb-on.jpg");
  //불빛상태
  const [light, setLight] = useState(false);

  //토글함수
  const handle = () => {
    LayoutAnimation.easeInEaseOut();
    setLight(!light);
  }


  const styles = StyleSheet.create({
    container:{
      backgroundColor:"black",
      flex:1,
      alignItems:'center'
    },
    img:{
      width:300,
      height:500,
      marginTop:20,
    },
    btn:{
      borderColor : "white",
      width:100,
      height:50,
      borderWidth :2,
      backgroundColor:"black"
      ,borderRadius:30,
      justifyContent:'center',
    },
    trans:{
      backgroundColor:"white",
      width:50,
      borderRadius:25,
      height:50,
      position:"absolute"
    },
    btnOn:{
      backgroundColor:"green",
      // width:100,
      // height:50,
      // borderWidth :2,
      // borderRadius:30,
      // justifyContent:'center',
    },
    transOn : {
      transform: "translateX : 50"
    }
  })
  // 2. 💡 [핵심] transform 스타일 정의
  const dynamicTransformStyle = {
    // light가 true (ON)일 때 translateX(50)을 적용합니다.
    transform: [{ translateX: light ? 50 : 0 }],
  };
  

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={light ? on : off}/>
      <Pressable style={[styles.btn, light && styles.btnOn]} onPress={handle}>
        <View style={[styles.trans, dynamicTransformStyle]}></View>
        </Pressable>
    </View>
  );
}
