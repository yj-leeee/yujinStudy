import { StyleSheet } from "react-native";

export const SearchSty = StyleSheet.create({
    inputWrapper:{
        borderColor:'black',
        borderRadius:20,
        marginHorizontal:20,
        flexDirection:'row',
        borderWidth:1,
        alignItems:'center',
        paddingVertical:5
    },
    input:{
        flex:1,
        paddingVertical:10,
        paddingLeft:10
    },
    btn:{
        marginRight:10
    }
})

export const createBtn = StyleSheet.create({
    div:{
        flexDirection:'row',
        margin:10,
        height:50,
        alignItems:'center',
        position:'relative'
    },
    btn:{
        borderRadius:'50%',
        backgroundColor:'black',
        width:50,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        right:0
    },
    inputDiv:{
        borderColor:'black',
        borderWidth:1,
        //flex:1,
        overflow:'hidden',
        borderRadius:20
    }
    
})

export const lists = StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        margin:10,
        borderRadius:20,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:20
    },
    btns:{
        flexDirection:'row',
        gap:20
    }
})