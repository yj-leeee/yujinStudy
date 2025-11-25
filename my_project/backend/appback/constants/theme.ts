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
    btn:{
        borderRadius:'50%',
        backgroundColor:'gray',
        width:50,
        height:50,
        alignItems:'center',
        justifyContent:'center',
    },
    div:{
        margin:10,
        alignItems:'flex-end'
    }
})