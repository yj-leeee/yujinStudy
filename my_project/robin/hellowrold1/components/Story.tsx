import { Image, StyleSheet, Text, View } from "react-native";


export default function Story({id, photo, name, isSee }){
    const styles = StyleSheet.create({
        img:{
            height:70,
            width:70,
            borderRadius:35,
        },
        container:{
            marginHorizontal:15
        }, 
        line:{
            height:78,
            width:78,
            borderRadius:39,
            borderWidth:4,
            borderColor:
            isSee ? "white" : "pink"
        }
    })
    return(
        <View style={styles.container}>
            <View style={styles.line}>
                <Image style={styles.img} source={photo}/>
            </View>
            
            <Text style={{
                textAlign:"center", marginTop:8, maxWidth: 64,
                }}
                numberOfLines={1} // 1. 텍스트를 한 줄로 제한
                ellipsizeMode="tail" // 2. 한 줄을 넘어가면 끝에 ... 표시
                >{name}</Text>
            
        </View>
    )
}