import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../../components/Home';
import { Image, View, SafeAreaView, Text } from 'react-native';
import ScreenLichTrinh from '../../components/LichTrinh';
import ScreenLT from '../../components/LichTrinhCuaToi';

const Tab = createMaterialTopTabNavigator();

export default function Tabheader() {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={{ height: 55, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>

        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>Lịch Trình của tôi</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
        <Tab.Navigator tabBarOptions={{ activeTintColor: '#FF5F24', tabStyle: { backgroundColor: '#E5E5E5', marginBottom: 1 }, labelStyle: { textTransform: 'none', fontSize: 12, fontWeight: '500' }, indicatorStyle: { backgroundColor: '#FF5F24', }, inactiveTintColor: '#000000' }}>
          <Tab.Screen name="Home" component={ScreenLT} options={{ tabBarLabel: 'Đang đi' }} />
          <Tab.Screen name="jhghg1" component={ScreenLT} options={{ tabBarLabel: 'Sắp Tới' }} />
          <Tab.Screen name="jhghg" component={ScreenLT} options={{ tabBarLabel: 'Hoàn Thành' }} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
}