import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

//Redux타입 및 액션 임포트
import { RootState } from "@/redux/store";
import { toggleTodo, deleteTodo } from "@/redux/todoSlice";


export default function List(){
    const todos = useSelector((state:RootState)=>state.todos);
    const dispatch = useDispatch();

    //체크박스 클릭시 토글 함수
    const handleToggle = (id:number)=>{
        dispatch(toggleTodo(id));
    };

    //삭제버튼 클릭시 삭제 함수
    const handleDelete = (id: number) => {
        dispatch(deleteTodo(id));
    }
    const styles = StyleSheet.create({
    listContainer: {
        marginTop: 20,
    },
    todoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // 항목들을 양 끝으로 분산
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        // 그림자 추가 (선택 사항, AddTodo와 유사하게)
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.41,
        elevation: 2,
    },
    checkboxArea: {
      paddingRight: 10, // 텍스트와의 간격 확보
    },
    todoText: {
        flex: 1, // 텍스트가 남은 공간을 모두 차지하도록
        marginHorizontal: 5,
        fontSize: 16,
    },
    completedText: {
        textDecorationLine: 'line-through', // 완료 시 취소선
        color: 'gray',
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 18,
        color: 'gray',
    }
});

    
    return(
        <View style={styles.listContainer}>
            {todos.map((todo)=>(
                <View key={todo.id} style={styles.todoItem}>
                    {/*체크박스 Pressable로 클릭 가능하게*/ }
                    <Pressable onPress={()=>handleToggle(todo.id)}
                        style={styles.checkboxArea}>
                        <Ionicons
                            name={todo.completed ? 'checkbox-outline' : 'square-outline'}
                            size={24}
                            color={todo.completed ? "#6200EE" : "gray"}/>
                    </Pressable>
                    {/*할일*/}
                        <Text style={[styles.todoText,
                            todo.completed && styles.completedText //완료시 취ꃠ선 적용
                        ]}>{todo.text}</Text>
                    {/*삭제버튼*/}
                    <Pressable onPress={()=>handleDelete(todo.id)}>
                        <Ionicons name="trash-bin" size={24} color="red"/>
                    </Pressable>
                </View>
            ))}
        </View>
    )
}