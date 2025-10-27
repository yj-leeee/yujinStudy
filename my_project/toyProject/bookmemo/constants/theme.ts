import { StyleSheet } from "react-native";

export const backColor = '#FFFCE3'
export const lightYellow = '#FFFF55'
export const root = StyleSheet.create({

})
export const searchStyle = StyleSheet.create({
  searchContainer:{
    height:50,
    backgroundColor:lightYellow,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:10,
  }
})
export const bookStyle = StyleSheet.create({
  bookcontainer:{
    backgroundColor:'white',
    height:120,
    marginHorizontal:20,
    flexDirection:'row',
    gap:10,
    marginVertical:15
  },
  bookImg:{
    //임시
    backgroundColor:'red',
    width:100,
    marginLeft:10,
    height:100,
    alignSelf:'center'
  },
  bookContent:{
    justifyContent:'space-evenly',
    flex:1,
  },
})