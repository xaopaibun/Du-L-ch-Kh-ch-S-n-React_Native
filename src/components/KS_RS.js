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


import { useSelector, useDispatch } from 'react-redux';
const ScreenKS_RS =  ({navigation}) => {
    const dispatch = useDispatch();
    const Data = useSelector(state => state.data_KS_RS);
   
    const renderItemKS_RS = ({ item }) => (
        <TouchableOpacity  onPress={() =>{
            dispatch({type : 'ChiTietKhachSan', data : item});
            navigation.navigate('ScreenChiTietKhachSan');
        }} style={{flex: 1, height: 230,backgroundColor:'#ffffff', borderRadius: 5, overflow:'hidden', marginBottom: 16}} >
            <View style={{flexDirection: 'row', flex: 1, justifyContent:'space-between'}}>
                <View style={{flex: 4}}><Image source={{uri : item.images[0]}}  style={{width: '100%', height: '100%'}}/></View>
                <View style={{flex: 6, marginLeft: 6, justifyContent: 'space-between'}}>
                    <View style={{flex: 1, marginBottom: 6}}><Image source={{uri : item.images[1]}} style={{width: '100%', height: '100%'}}/></View>
                    <View style={{flex: 1, flexDirection:'row', justifyContent:'space-between'}}>
                        <View style={{flex: 1, marginRight: 3}}><Image source={{uri : item.images[2]}}  style={{width: '100%', height: '100%'}}/></View>
                        <View style={{flex: 1, marginLeft: 3}}><Image source={{uri : item.images[3]}}  style={{width: '100%', height: '100%'}}/></View>
                    </View>
                </View>
            </View>
            <View style={{ flex: 0.35, margin: 16, justifyContent:'space-between'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#A2A2A2', fontSize:10, flex: 0.9}}>{item.Loai}</Text>
                <View style={{flexDirection:'row', justifyContent:'space-around', flex: 0.2}}>
                    <Image source={require('../assets/images/sao.png')}  style={{width: 10, height: 10}} />
                    <Image source={require('../assets/images/sao.png')}  style={{width: 10, height: 10}} />
                    <Image source={require('../assets/images/sao.png')}  style={{width: 10, height: 10}} />
                    <Image source={require('../assets/images/sao.png')}  style={{width: 10, height: 10}} />
                    <Image source={require('../assets/images/sao.png')}  style={{width: 10, height: 10}} />
                </View>
            </View>
            <Text style={{fontWeight: '500', fontSize: 14}}>{item.Ten}</Text>
           <View style={{flexDirection:'row', justifyContent:'space-between'}}>
           <Text style={{color: '#3076FE', fontSize: 10}}><Image source={require('../assets/images/Vector.png')}  style={{width: 7, height: 10}}/> {item.DiaChi}</Text>
            <Text style={{fontWeight: '500', fontSize: 12, color:"#757575"}}>Từ<Text style={{color: '#FF2424'}}> {item.Gia}</Text></Text>
            </View>
        </View>
        
    </TouchableOpacity>
      );
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <StatusBar barStyle='dark-content'/>
            <View style={{height: 40, flexDirection:'row', paddingHorizontal: 16, justifyContent:'space-around',alignItems: 'center', marginVertical: 10, backgroundColor: '#ffffff'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{flex:0.3}}><Image source={require('../assets/images/back.png')}  style={{width: 6, marginRight: 12}}/></TouchableOpacity>
               <View style={{flex:0.7}}><Text style={{fontSize: 14, fontWeight:'bold', color:'black'}}>Khách Sạn && Resort</Text></View>
            </View>
            <FlatList
                data = {Data}
                keyExtractor={item => item.id}
                renderItem={renderItemKS_RS}
                style={{padding: 16, backgroundColor: '#E5E5E5'}}
            /> 
        </SafeAreaView>
    );
}
export default ScreenKS_RS;