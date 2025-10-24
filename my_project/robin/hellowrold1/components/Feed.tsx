import { feed, story } from "@/constants/data";
import Feather from '@expo/vector-icons/Feather';
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
export default function Feed(){
    // 💡 1. 사용자 이름으로 프로필 이미지를 찾는 헬퍼 함수
const getProfilePhoto = (name) => {
    // story 배열에서 이름이 일치하는 항목을 찾거나, 없으면 기본 이미지를 반환
    const storyItem = story.find(s => s.name === name);
    // feed.photo는 피드 게시물 사진이므로, storyItem.photo를 사용합니다.
    return storyItem ? storyItem.photo : null; 
};

    const ar = feed;

    function feedlist({item}){
        const profilePhotoSource = getProfilePhoto(item.name);
        return(
            <View>
                {/*헤더*/}
                <View style={styles.header}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Image style={styles.img} source={profilePhotoSource}/>
                        <Text>{item.name}</Text>    
                    </View>
                    <Feather name="more-horizontal" size={24} color="black" />
                </View>
                {/*헤더*/}
                <Image style={{height:350}} source={item.photo}/>
            </View>
        )
    }

    const styles = StyleSheet.create({
        header:{
            marginHorizontal:10,
            flexDirection:"row",
            height:50,
            justifyContent:"space-between",
            alignItems:"center",
            marginBottom:10,
        },
        img:{
            height:50,
            width:50,
            borderRadius:25,
            marginRight:15
        },
        feedContainer:{
            marginVertical:10,
        },
        feed:{
            marginVertical:10,
        }
    })

    return(
        <FlatList
        data={ar}
        renderItem={feedlist}
        keyExtractor={item => item.id}
        initialNumToRender={3}
        contentContainerStyle={styles.feedContainer}
        
        ></FlatList>
    )
}