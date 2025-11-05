import Content from '@/components/Content';
import EnterEmail from '@/components/EnterEmail';
import { styles } from '@/constants/thma';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home(){
    return(
        <SafeAreaView style={{flex:1}}>
            <LinearGradient
            colors={['hsl(0,0%,100%)', 'hsl(0,100%,98%)']}
            style={styles.create}
            >
                <Image source={require('@/assets/logo.png')} />
                <Image style={styles.profile} source={require('@/assets/hero-mobile.jpg')}/>
                <Content/>
                <EnterEmail/>
            </LinearGradient>

        </SafeAreaView>
    )
}