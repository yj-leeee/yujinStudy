import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { my, story } from "../constants/data";
import Story from "./Story";
export default function Stories(){
    const styles = StyleSheet.create({
        Scroll : {
            borderBottomColor:"lightgray",
            borderBottomWidth:1,
            paddingVertical:10
        },
        scrollContent:{
            marginVertical:10,
            flexDirection: 'row', 
            alignItems: 'center',
            // 💡 [수정] ScrollView 좌우에 여백을 줍니다. (항목의 margin과 충돌하지 않게)
            paddingHorizontal: 15,
        },
        img:{
            height:78,
            width:78,
            borderRadius:38
        }
    })
    return(
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.Scroll}
            contentContainerStyle={styles.scrollContent}
        >
            {/*내 스토리*/}
            <View>
                <Image style={styles.img}source={my.photo}/>
                <Text style={{textAlign:"center", marginTop:8}}>나</Text>
            </View>
            {/*내 스토리 끝*/}
            {/*다른사람*/}
            {story.map((item)=>(
                <Story 
                    key={item.id}
                    photo={item.photo}
                    name={item.name}
                    isSee={item.isSee}
                />
            ))}
        </ScrollView>
    )
}