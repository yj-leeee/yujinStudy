import { store } from '@/store/store';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

export default function RootLayout() {

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Stack />
      </Provider>
    </SafeAreaProvider>
  );
}
