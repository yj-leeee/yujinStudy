import { StyleSheet } from "react-native";

export const backPink = '#ffb4b4';
export const inputPink = '#ffeaea';
export const lightPink = '#fff4f4';

export const input = StyleSheet.create({
    container:{
        backgroundColor:backPink,
        height:220, 
    },
    field:{
        margin:25,
        marginBottom:0,
        backgroundColor:inputPink,
        fontSize:30,
        flex:1
    },
    resultText:{
        fontSize:30,
        alignSelf:'flex-end',
        margin:0,
        marginRight:25
    }
})

export const btn = StyleSheet.create({
    btn:{
        backgroundColor:inputPink,
        borderColor:backPink,
        borderWidth:1,
        height:70,
        width:80,
        justifyContent:'center',
        alignItems:'center'
    },
    fsize:{
        fontSize:32
    },
    xbutton:{
        height:50,
        width:80,
        margin:13,
        alignSelf:'flex-end',
        justifyContent:'center',
        alignItems:'center',
    }
})

export const btns = StyleSheet.create({
    btns:{
        flexDirection:'row',
        margin:8,
        justifyContent:'space-around'
    }
})

export const tabs = StyleSheet.create({
    tabs:{
        borderColor:backPink,
        borderWidth:1,
        padding:5,
        borderTopRightRadius:20,
        flexDirection:'row'
    },
    newTab:{
        borderColor:backPink,
        borderWidth:1,
        padding:5,
        alignItems:'flex-end',
        borderTopLeftRadius:20,
        
    }
})