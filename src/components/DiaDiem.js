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




const ScreenDiaDiemPhoBien =  ({navigation}) => {
    
    const Data = useSelector(state => state.data_diadiemphobien);

    const renderItemDiaDiem = ({ item }) => (
        <TouchableOpacity style={{overflow:'hidden',borderRadius: 5, marginBottom: 16, position:'relative'}}  onPress={() =>{
            dispatch({type : 'ChiTietDiaDiem', data: item})
            navigation.navigate('ScreenCTDiaDiem');
        }} >
            <ImageBackground source={{uri : item.image}} resizeMode="stretch" style={{ height: 180}} />
            <View style={{backgroundColor:'rgba(0, 0, 0, 0.25)', height: 180,width: '100%', position:'absolute', top : 0, left: 0, zIndex: 1}} />
            <View style={{height: 180,width: '100%', position:'absolute', top : 0, left: 0, zIndex: 2}}>
                <View style={{ justifyContent:'center', alignItems:'center', flex: 0.8}}>
                    <Text style={{fontSize: 16, fontWeight: '600', color: 'white'}}>{item.TenDiaDiem.split(',')[0]}</Text>
                </View>
                <View style={{flex: 0.2, flexDirection:'row', paddingLeft: 16}}>
                    <Image source={require('../assets/images/vitri.png')}  style={{width: 11, height: 14}} />
                    <Text style={{fontSize: 14, color:'white'}}>{item.TenDiaDiem.split(',')[1]}</Text>
                </View>
            </View>
        </TouchableOpacity>
      );
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <StatusBar barStyle='dark-content'/>
            <View style={{height: 25, flexDirection:'row', marginVertical: 10, backgroundColor: '#ffffff', alignItems:'center'}}>
                <View style={{flex:0.1, justifyContent:'center', alignItems:'center'}}><TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../assets/images/back.png')}  style={{width: 7, marginRight: 12}}/></TouchableOpacity></View>
               <View style={{flex:0.8, alignItems:'center'}}><Text style={{fontSize: 14, fontWeight:'bold', color:'black'}}>Địa Điểm Phổ Biến</Text></View>
            </View>
            <FlatList
                data = {Data}
                keyExtractor={item => item.id}
                renderItem={renderItemDiaDiem}
                style={{padding: 16, backgroundColor: '#E5E5E5'}}
            /> 
        </SafeAreaView>
    );
}
export default ScreenDiaDiemPhoBien;