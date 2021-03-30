import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import 'react-native-gesture-handler';
import ScreenLichTrinh from '../components/LichTrinh';
const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={Home}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ScreenLichTrinh" component={ScreenLichTrinh} />
       
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
