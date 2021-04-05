import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../components/Home';
import AddButton from '../Tabview/addButton';
import ScreenThongTinCaNhan from '../../components/ThongTinCaNhan';
import Tabheader from './tabheader';
const Tab = createBottomTabNavigator();
const hello = () => {
    return null
  }
export default function Tabview() {
  return (
    
      <Tab.Navigator tabBarLabel={false}>
        <Tab.Screen name="Home" component={Home}  options ={{tabBarIcon : ({focused}) =>   focused ? <Image source={require('../../assets/images/timkiem2.png')}  style={{width: 18, height: 18}} /> : <Image source={require('../../assets/images/timkiem.png')}  style={{width: 18, height: 18}} /> , tabBarLabel: ''}} />
        <Tab.Screen name="Tabheader" component={Tabheader}  options ={{tabBarIcon : ({focused}) =>    focused ? <Image source={require('../../assets/images/gio1.png')}  style={{width: 18, height: 18}} /> : <Image source={require('../../assets/images/gio2.png')}  style={{width: 18, height: 18}} />, tabBarLabel: ''}} />
        <Tab.Screen name="Botton5" component={hello}  options ={{tabBarOnPress: () => {} ,tabBarIcon : () =>   <AddButton/>, tabBarLabel: ''}} />
        <Tab.Screen name="Home2" component={Home}  options ={{tabBarIcon : ({focused}) =>   focused ? <Image source={require('../../assets/images/chuong1.png')}  style={{width: 18, height: 18}} />: <Image source={require('../../assets/images/chuong.png')}  style={{width: 18, height: 18}} />, tabBarLabel: ''}} />
        <Tab.Screen name="ScreenThongTinCaNhan" component={ScreenThongTinCaNhan}  options ={{tabBarIcon : ({focused}) =>   focused ? <Image source={require('../../assets/images/user2.png')}  style={{width: 18, height: 18}} /> : <Image source={require('../../assets/images/user.png')}  style={{width: 18, height: 18}} />, tabBarLabel: ''}} />
      </Tab.Navigator>
    
  );
}