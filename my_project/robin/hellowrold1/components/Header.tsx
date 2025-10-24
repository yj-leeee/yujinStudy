import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View } from "react-native";

export default function Header(){
    const styles = StyleSheet.create({
        icon:{
            marginHorizontal:10
        }
    })
    return(
        <View style={{
            marginTop:10,
            paddingVertical:10,
            justifyContent:"space-between",
            borderBottomColor:"gray",
            borderBottomWidth:1,
            flexDirection:"row"
        }}>
            <Ionicons style={styles.icon} name="camera-outline" size={24} color="black" />
            <Text style={{
                fontSize:20,
                color:"black"
            }}>인스타그램</Text>
            <Feather style={styles.icon} name="send" size={24} color="black" />
        </View>
    )
}