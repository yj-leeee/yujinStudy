import { StyleSheet } from "react-native";

const blue = "#3498db";
export const styles = StyleSheet.create({
    headerView : {
        backgroundColor: blue,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    field:{
        marginHorizontal:20,
        marginVertical:20
    },
    textInput:{
        backgroundColor: "white",
        borderWidth:1,
        borderColor:"gray"
    },
    errorContainer: {
    marginVertical: 5,
    },
    errorText: {
        color: "#ff7675",
    },
    btn:{
        backgroundColor:blue,
        marginHorizontal:30,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    }
})