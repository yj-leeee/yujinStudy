import { StyleSheet } from "react-native";
export const pink = 'hsl(0,36%,70%)'
export const styles = StyleSheet.create({
    create:{
        flex:1,
    },
    profile:{
        width:'100%',
    },
    textContainer:{
        flex:0.8,
        alignItems:'center',
        marginTop:50,
        marginBottom:20,
    },
    title:{
        textAlign:'center',
        width:270,
        fontSize:40,
        letterSpacing:20,
        lineHeight:40,
        marginBottom:20,
    },
    content:{
        width:300,
        textAlign:'center',
        lineHeight:25,
    },
    pinks:{
        color:pink,
    },
    input:{
        marginHorizontal:30,
        borderRadius:30,
        borderColor:pink,
        borderWidth:1,
        height:50,
        flexDirection:'row'
    },
    btn:{
        
        height:50,
        width:70,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
    },
    textInput:{
        flex:1,
        paddingLeft:20,
        
    },
    errorText:{
        color:'red',
        fontSize:13,
        marginLeft:30,
    }
})