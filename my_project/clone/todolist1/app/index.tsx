import { TextInput, View, StyleSheet, Text, ScrollView } from "react-native";
import { Ionicons} from '@expo/vector-icons';
import List from "@/components/List";
import AddTodo from "@/components/AddTodo";

export default function Home(){
    const styles = StyleSheet.create({
        // 🚨 최상위 View는 flex: 1만 적용 (전체 화면을 차지)
        container:{
            flex:1, 
            backgroundColor: '#f0f0f0' // 배경색 추가
            // margin:20 제거! ScrollView의 contentContainerStyle로 이동
        },
        search:{
            flexDirection:"row",
            backgroundColor:"white",
            borderRadius:25,
            paddingLeft:15,
            alignItems:"center",
            paddingVertical:10,
            marginBottom:50
        },
        title:{
            fontSize:35,
        },
        // AddTodo를 하단에 고정하는 스타일
        fixedBottom:{
            position:"absolute",
            bottom:0,
            left: 0, 
            right: 0, // 좌우로도 확장
        },
        // 🚨 ScrollView의 콘텐츠 스타일: 상하좌우 여백과 하단 고정 컴포넌트 공간 확보
        scrollContent: { 
            paddingHorizontal: 20, // 좌우 여백 적용
            paddingTop: 20, // 상단 여백
            paddingBottom: 100, // 👈 AddTodo 컴포넌트 높이만큼 공간 확보
        },
    });

    return(
        // 1. 최상위 View는 flex: 1 컨테이너 역할만 합니다.
        <View style={styles.container}> 
            
            {/* 2. ScrollView로 콘텐츠를 감쌉니다. */}
            <ScrollView contentContainerStyle={styles.scrollContent}>
                
                {/* 검색창 */}
                <View style={styles.search}>
                    <Ionicons name="search" size={24} color="black"/>
                    <TextInput placeholder="Search" style={{ flex: 1, paddingHorizontal: 10 }}/>
                </View>
                
                <Text style={styles.title}>All ToDos</Text>
                
                {/* 리스트 */}
                <List/>
                
            </ScrollView>
            
            {/* 3. AddTodo는 ScrollView 밖에 배치하고 fixedBottom 스타일 적용 */}
            <AddTodo 
                style={[
                    styles.fixedBottom, 
                    { backgroundColor: '#f0f0f0', paddingBottom: 10 } // 배경색 추가 및 하단 패딩
                ]}
            />
        </View>
    );
}