import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    // View 컴포넌트는 화면 전체를 채우도록 flex: 1 스타일을 적용합니다.
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      
      {/* 화면 중앙에 "실험 성공" 텍스트를 출력합니다. */}
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'green' }}>
        실험 성공 🎉
      </Text>
      
      {/* Expo Router가 정상 작동 중인지 확인하는 텍스트도 추가합니다. */}
      <Text style={{ marginTop: 10, color: '#666' }}>
        파일 기반 라우팅 설정 완료
      </Text>
    </View>
  );
}