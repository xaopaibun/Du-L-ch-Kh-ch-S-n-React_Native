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
  TouchableOpacity,ActivityIndicator ,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch , useSelector} from 'react-redux';

const ScreenChiTietKhamPha =  ({navigation}) => {
    const Data = useSelector(state => state.data_diadiemphobien);
    const renderItemDiaDiem = ({ item }) => (
        <TouchableOpacity  onPress={() =>{
            dispatch({type : 'ChiTietDiaDiem', data: item})
            navigation.navigate('ScreenCTDiaDiem');
        }} style={{width: 150, height: 200, marginRight: 16,  borderRadius: 5, overflow: 'hidden'}}>
                <Image source={{uri : item.image}} style={{width: 150, height: 200}}/>
                <LinearGradient colors={['rgba(77, 77, 77, 0)','#000000']} style={{position: 'absolute', bottom: 0, zIndex: 1, height: 20, width:'100%'}}>
                    <Text style={{ color:'white', fontSize: 13, fontWeight: '600', backgroundColor:'black',  textAlign:'center'}}>{item.TenDiaDiem}</Text>
                </LinearGradient>
        </TouchableOpacity>
      );
   
    return(
        <ScrollView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <StatusBar barStyle='light-content'/>
            <View style={{position:'relative', height: 240, width: '100%'}}>
                <Image source={require("../assets/images/Rectangle45.png")}   style={{height : 240,width: '100%' }}></Image>
                <View style={{position: 'absolute', bottom : 16, left: 16, zIndex: 9}}>
                        <Text style={{color: 'white', fontSize: 18, fontWeight : 'bold'}}>Khám phá Đảo bé</Text>
                        <View style={{flex: 0.2, flexDirection:'row', marginTop: 10}}>
                            <Image source={require('../assets/images/vitri.png')}  style={{width: 10, height: 12}} />
                            <Text style={{color: 'white', fontSize: 12, fontWeight : '400'}}> Lý Sơn, Quảng Ngãi</Text>
                        </View>
                </View>
                <View style={{backgroundColor: 'rgba(0, 0, 0, 0.4)', position: 'absolute', top : 0, left: 0, zIndex: 3,  height: 240, width: '100%'}}></View>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{position: 'absolute', top: 50, left: 10, zIndex: 9}}><Image source={require('../assets/images/back2.png')}  style={{width: 8, marginRight: 12}}/></TouchableOpacity>
            </View>
            <Image source={require("../assets/images/diachinhahang.png")}  style={{marginTop: 20,width: '100%', height: 140}} resizeMode='stretch'/>
            <View style={{margin: 16}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between',height: 104}}>
                    <View style={{flex: 0.3}}><Image source={require("../assets/images/Rectangle45.png")}  style={{width: '100%', height: '100%'}} resizeMode='stretch'/></View>
                    <View style={{flex: 0.3}}><Image source={require("../assets/images/Rectangle45.png")}  style={{width: '100%',height: '100%'}} resizeMode='stretch'/></View>
                    <View style={{flex: 0.3, position: 'relative'}}>
                        <Image source={require("../assets/images/Rectangle45.png")} style={{width: '100%', height: '100%'}} resizeMode='stretch'/>
                        <TouchableOpacity style={{width: '100%', height: '100%',backgroundColor: 'rgba(0, 0, 0, 0.4)', position: 'absolute', left: 0, right: 0, zIndex: 2, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
               
                <Text style={{marginTop: 15,lineHeight: 16, fontSize: 12}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </Text>
            </View>
            <View style={{height: 30, marginHorizontal: 16, justifyContent:'space-between', flexDirection: 'row', marginTop: 20}}>
                    <Text style={{color: '#000000', fontWeight: 'bold'}}>Địa điểm đề xuất</Text>
                    <TouchableOpacity onPress={() =>{
                    
                        navigation.navigate('ScreenTraiNghiem');
                    }}><Text style={{color: '#9E9E9E', fontSize: 12}}>Xem thêm  <Image source={require('../assets/images/Right.png')}  style={{width: 3, height: 7}}/></Text></TouchableOpacity>
                </View>
                <FlatList
                    data = {Data}
                    keyExtractor={item => item.id}
                    renderItem={renderItemDiaDiem}
                    horizontal
                    style={{marginLeft: 16}}
                />
        </ScrollView>
    );
}
export default ScreenChiTietKhamPha;