import { axiosBooks } from "@/api/publicApi";
import Book from "@/components/Book";
import Search from "@/components/Search";
import { backColor } from "@/constants/theme";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home(){
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        const fetch = async () => {
            if(query.trim() === '') return;
            try{
                const result = await axiosBooks(query);
                setBooks(result);
            }catch(e) {
                console.error("책 정보를 불러오지 못함", e);
            }
        };
        fetch();

    },[query]);

    return(
        <SafeAreaView style={{flex:1, backgroundColor:backColor}}>
            <Search query={query} setQuery={setQuery} />
            <Book books={books} />
        </SafeAreaView>
    )
}