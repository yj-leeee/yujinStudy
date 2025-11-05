import { styles } from "@/constants/thma";
import { Text, View } from "react-native";

export default function Content(){
    return(
        <View style={styles.textContainer}>
            <Text style={styles.title}><Text style={styles.pinks}>WE'RE</Text> COMING SOON</Text>
            <Text style={[styles.content,styles.pinks]}>Hello fellow shppers! We're currently building our new fashion store Add your email below to stay up-to-date with announcements and our launch deals.</Text>
        </View>
    )
}