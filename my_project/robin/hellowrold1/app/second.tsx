import { View, Text, StyleSheet } from "react-native";

export default function Second(){
    const styles = StyleSheet.create({
        text:{
            fontSize:30,
            marginBottom:40,
            fontWeight:"bold"
        }
    })

    return(
        <View style={{flex:1,backgroundColor:"white",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Text style={styles.text}>HELLO <Text style={{color:"red"}}>WORLD</Text></Text>
            <Text style={styles.text}>HELLO <Text style={[
                {color:"blue"},
                {fontStyle:"italic"},
                {textDecorationLine:"underline"}
            ]}>World</Text></Text>
            <Text style={[styles.text, {color:"gray"}]}>HELLO <Text style={[
                    {backgroundColor:"gray"},
                    {color:"white"}
                ]}>WORLD</Text></Text>            
        </View>
    )
}