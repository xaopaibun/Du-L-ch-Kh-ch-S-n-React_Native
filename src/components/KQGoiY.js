import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
 Image,
 TextInput,
    ImageBackground,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';


import { useSelector } from 'react-redux';
import ScreenLT from './LichTrinhCuaToi';
const ScreenKQGoiY =  ({navigation}) => {
   
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
           <View style={{height:40, alignItems: 'center', flexDirection:'row', paddingHorizontal: 16, justifyContent:'space-between', marginVertical: 10, backgroundColor: '#ffffff'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../assets/images/back.png')}  style={{width: 6, marginRight: 12}}/></TouchableOpacity>
               <Text style={{fontSize: 14, fontWeight:'bold', color:'black'}}>Gợi ý</Text>
               <View></View>
            </View>
            <View style={{flex: 1}}>
                <ScreenLT/>
            </View>
        </SafeAreaView>
    );
}
export default ScreenKQGoiY;