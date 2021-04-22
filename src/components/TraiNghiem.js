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
const ScreenTraiNghiem=  ({navigation}) => {
    const Data= useSelector(state => state.data_trainghiem);
   
    const renderItemTraiNghiem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ScreenChiTietKhamPha')} style={{height: 243,flex: 1, backgroundColor:'white', marginBottom: 16, borderRadius: 5, overflow:'hidden'}}>
           <View style={{flex: 0.75}}>
            <Image source={{uri : item.image}}  style={{height: 160, borderRadius: 5}} resizeMode='stretch'/>
           </View>
            <View style={{ flex: 0.25, padding: 16, justifyContent:'space-between'}}>
                <Text style={{fontWeight: '500', fontSize: 14}}>{item.TenTraiNghiem}</Text>
                <Text style={{color: '#3076FE', fontSize: 10}}><Image source={require('../assets/images/Vector.png')}  style={{width: 7, height: 10}}/> {item.DiaChi}</Text>
                <Text style={{fontSize: 12, fontWeight: '400'}}>Từ <Text style={{color:'#FF5F24'}}>{item.Gia}</Text></Text>
            </View>
        </TouchableOpacity>
      );
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <StatusBar barStyle='dark-content'/>
            <View style={{height: 40, alignItems: 'center', flexDirection:'row', paddingHorizontal: 16, justifyContent:'space-around', marginVertical: 10, backgroundColor: '#ffffff'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{flex:0.3}}><Image source={require('../assets/images/back.png')}  style={{width: 6, marginRight: 12}}/></TouchableOpacity>
               <View style={{flex:0.6}}><Text style={{fontSize: 14, fontWeight:'bold', color:'black'}}>Trải Nghiệm Nổi Bật</Text></View>
               <View ></View>
            </View>
            <FlatList
                data = {Data}
                keyExtractor={item => item.id}
                renderItem={renderItemTraiNghiem}
                style={{padding: 16, backgroundColor: '#E5E5E5'}}
            /> 
        </SafeAreaView>
    );
}
export default ScreenTraiNghiem;




// public static void main(String[] args) {
//     Sever T1 = new Thread1();
//     T1.start();
//     Thread2 T2 = new Thread2();
//    T2.start();
// }