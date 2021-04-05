import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../components/Home';
import 'react-native-gesture-handler';
import ScreenLichTrinh from '../../components/LichTrinh';
import ScreenKhuyenMai from '../../components/KhuyenMai';
import ScreenDiaDiemPhoBien from '../../components/DiaDiem';
import ScreenDiemDenThang12 from '../../components/DiemDenThang12';
import ScreenTraiNghiem from '../../components/TraiNghiem';
import ScreenTimKiem from '../../components/Timkiem';
import ScreenKS_RS from '../../components/KS_RS';
import Tabview from '../Tabview/TabMain';
const Stack = createStackNavigator();
import ScreenKhachSan from '../../components/KhachSan';
import ScreenNhaHang from '../../components/NhaHang';
import ChiTietKM from '../../components/ChiTietKM';
import ScreenCTDiaDiem from '../../components/CTDiaDiem';
export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={Home}>
        <Stack.Screen name="Home" component={Tabview} />
        <Stack.Screen name="ScreenLichTrinh" component={ScreenLichTrinh} />
        <Stack.Screen name="ScreenKhuyenMai" component={ScreenKhuyenMai} />
        <Stack.Screen name="ScreenDiaDiemPhoBien" component={ScreenDiaDiemPhoBien} />
        <Stack.Screen name="ScreenDiemDenThang12" component={ScreenDiemDenThang12} />
        <Stack.Screen name="ScreenTraiNghiem" component={ScreenTraiNghiem} />
        <Stack.Screen name="ScreenTimKiem" component={ScreenTimKiem} />
        <Stack.Screen name="ScreenKS_RS" component={ScreenKS_RS} />
        <Stack.Screen name="ScreenKhachSan" component={ScreenKhachSan} />
        <Stack.Screen name="ScreenNhaHang" component={ScreenNhaHang} />
        <Stack.Screen name="ChiTietKM" component={ChiTietKM} />
        <Stack.Screen name="ScreenCTDiaDiem" component={ScreenCTDiaDiem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
