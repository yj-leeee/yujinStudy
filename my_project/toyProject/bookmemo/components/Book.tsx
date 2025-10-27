import { bookStyle } from "@/constants/theme";
import { Text, View } from "react-native";

export default function Book(){
    return(
        <View style={bookStyle.bookcontainer}>
            <View style={bookStyle.bookImg}> {/*나중에 책 표지 이미지로*/ }
            </View>
            {/*책정보*/}
            <View style={bookStyle.bookContent}>
                <Text>제목 : </Text>
                <Text>작가 : </Text>
                <Text>출판사 : </Text>
            </View>
        </View>
    )
}