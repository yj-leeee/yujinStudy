import { Ionicons } from '@expo/vector-icons';
import { Stack } from "expo-router";
import { Image } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from 'react-redux';
import { store } from "../redux/store";

const img = require('../assets/images/avatar.jpeg');

export default function RootLayout() {
  return (
    <SafeAreaProvider>
    <Provider store={store}>
    <Stack>
      <Stack.Screen name="index"
      options={{
        headerTitle:()=>null,
        headerLeft: ()=>(
          <Ionicons name="menu" size={30} color="black"/>
        ),
        headerRight: ()=>(
          <Image
            source={img}
            style={{width:30,height:30,borderRadius:15}}></Image>
        )
      }}/>
    </Stack>
    </Provider>
    </SafeAreaProvider>
  );
}
