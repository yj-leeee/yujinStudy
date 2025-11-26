import { SearchSty } from '@/constants/theme';
import { fetchTodos, searchTodo } from '@/store/todoThunk';
import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';
import { Pressable, TextInput, View } from "react-native";
import { useDispatch, } from 'react-redux';

export default function Search(){
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        if(search.trim() === ""){
            dispatch(fetchTodos()); //비었을때 전체목록 불러오기
        } else {
        dispatch(searchTodo(search));
        }
        setSearch("");
    }

    return(
        <View style={SearchSty.inputWrapper}>
            <TextInput value={search} onChangeText={setSearch}
            style={SearchSty.input} placeholder="할일 검색">
            </TextInput>
            <Pressable style={SearchSty.btn} onPress={handleSearch}>
                    <Feather name="search" size={24} color="black" />
            </Pressable>
        </View>
    )
}