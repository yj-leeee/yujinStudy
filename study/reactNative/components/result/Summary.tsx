import { StyleSheet, Text, View } from "react-native";

export default function Summary(props){

    const styles = StyleSheet.create({
        container: {
            flexDirection:'row',
            borderRadius:20,
            marginHorizontal:30,
            marginVertical:10,
            backgroundColor:`hsla(${props.c1},0.1)`,
            padding:10,
            justifyContent:'space-between'
        },
        grey: {
            color: 'gray'
        },
        text:{
            color: `hsl(${props.c1})`
        }
    });

    return(
    <View style={styles.container}>
        <Text style={styles.text}>{props.t1}</Text>
        <Text>{props.s1}<Text style={styles.grey}>/100</Text></Text>
    </View>
    )
}