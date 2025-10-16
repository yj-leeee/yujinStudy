import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* name="(tabs)"는 app/(tabs)/_layout.tsx 파일을 로드합니다.
        (tabs)/_layout.tsx 파일이 하단 탭바를 정의했으므로, 
        이제 하위의 모든 페이지(index, car 등)는 탭바 안에 표시됩니다. 
      */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      {/* 만약 탭바가 필요 없는 별도의 페이지 (예: 로그인 화면, 상세 페이지 등)가 있다면 
        여기에 <Stack.Screen name="파일명" /> 형태로 추가합니다. 
      */}
    </Stack>
  );
}