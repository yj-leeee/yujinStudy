import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function RootLayout() {
    return(
        <SafeAreaProvider>
            <Provider store={store}>
                <Stack>
                    <Stack.Screen
                        name="index"
                        options={{
                            headerShown:false,
                        }} ></Stack.Screen>
                </Stack>
            </Provider>
        </SafeAreaProvider>
    )
}