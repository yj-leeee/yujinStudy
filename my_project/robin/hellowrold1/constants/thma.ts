import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    rsp:{
        borderWidth:1,
        borderColor:'black',  
        marginVertical:50,
        alignItems:'center'      
    },
    title:{
        marginVertical:0
    },
    btn:{
        position:'absolute',
        bottom:100,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around'
    }, 
    btns:{
        backgroundColor:'yellow',
        width:50,
        height:50,
        alignItems:'center',
        justifyContent:'center'
    },
    Display:{
        flex:0.7,
        width:'100%',
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal: 20,
    },
    Computer:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    Me:{
        alignItems: 'center',
        justifyContent: 'center',
    }
})