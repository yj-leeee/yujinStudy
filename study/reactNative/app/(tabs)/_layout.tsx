import { FontAwesome } from '@expo/vector-icons'; // 아이콘 사용을 위해 import
import { Tabs } from 'expo-router';

// 탭바에 표시할 아이콘 컴포넌트 (선택 사항)
function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // 탭 화면 상단의 헤더 숨김 (선택 사항)
        tabBarActiveTintColor: 'blue', // 활성화된 탭의 색상 설정
      }}
    >
      {/* 1. index.tsx 파일을 탭으로 연결 */}
      <Tabs.Screen
        name="index" // 파일 이름 (app/(tabs)/index.tsx)
        options={{
          title: '홈', // 탭바에 표시될 텍스트
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />, // 아이콘 설정
        }}
      />

      {/* 2. car.tsx 파일을 탭으로 연결 */}
      <Tabs.Screen
        name="car" // 파일 이름 (app/(tabs)/car.tsx)
        options={{
          title: '차량 정보', // 탭바에 표시될 텍스트
          tabBarIcon: ({ color }) => <TabBarIcon name="car" color={color} />, // 아이콘 설정
        }}
      />
      
      {/* 만약 Summary.tsx도 탭에 넣고 싶다면, 
      <Tabs.Screen name="Summary" options={{ title: '요약' }} /> 를 추가하면 됩니다. */}
      
    </Tabs>
  );
}