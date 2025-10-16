import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  
  return( 
  <Tabs>
    <Tabs.Screen name='index'
      options={{
        title: '홈'
      }}/>
    <Tabs.Screen name='car'
      options={{
        title: '자동차'
      }}/>
  </Tabs>)
}
