import { bookStyle } from "@/constants/theme";
import { FlatList, Image, Text, View } from "react-native";

type BookType = {
  title: string;
  author: string;
  image: string;
  publisher : string;
};
type Props = {
    books: BookType[];
}
export default function Book({books}:Props){
    if(!books || books.length === 0){
        return (
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Text>저장된 책이 없습니다</Text>
            </View>
        )
    }
     return (
    <FlatList
      data={books}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={bookStyle.bookcontainer}>
          <Image source={{ uri: item.image }} style={bookStyle.bookImg} />
          <View style={bookStyle.bookContent}>
            <Text numberOfLines={1} // 1. 텍스트를 한 줄로 제한
                ellipsizeMode="tail"
                >제목 : {item.title}</Text>
            <Text numberOfLines={1} // 1. 텍스트를 한 줄로 제한
                ellipsizeMode="tail">작가 : {item.author}</Text>
            <Text numberOfLines={1} // 1. 텍스트를 한 줄로 제한
                ellipsizeMode="tail">출판사 : {item.publisher}</Text>
          </View>
        </View>
      )}
    />
  );
}