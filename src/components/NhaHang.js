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
import LinearGradient from 'react-native-linear-gradient';


import { useDispatch , useSelector} from 'react-redux';
const ScreenNhaHang =  ({navigation}) => {
     const Data_NhaHang = useSelector(state => state.data_NhaHang);
    
    const Data = useSelector(state => state.data_diadiemphobien);
    const dispatch = useDispatch();
 
    const renderItemKS_RS = ({ item }) => (
        <TouchableOpacity style={{height: 250, width: 160, marginRight: 16, justifyContent:'space-between'}} onPress={() =>{
            dispatch({type : 'ChiTietNhaHang', data : item})
            navigation.navigate('ScreenCTNhaHangKhachSan');
        }}>
        <View style={{flex: 3}}>
            <Image source={{uri : item.images[0]}}  style={{width: 160,height: 150, borderRadius: 5}}/>
        </View>
        <View style={{marginTop: 12, flex: 2, justifyContent:'space-between', paddingTop: 10}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#A2A2A2', fontSize:10, flex: 0.9}}>{item.Loai}</Text>
                <View style={{flexDirection:'row', justifyContent:'space-around', flex: 0.5}}>
                    <Image source={require('../assets/images/sao.png')}  style={{width: 10, height: 10}} />
                    <Image source={require('../assets/images/sao.png')}  style={{width: 10, height: 10}} />
                    <Image source={require('../assets/images/sao.png')}  style={{width: 10, height: 10}} />
                    <Image source={require('../assets/images/sao.png')}  style={{width: 10, height: 10}} />
                    <Image source={require('../assets/images/sao.png')}  style={{width: 10, height: 10}} />
                </View>
            </View>
            <Text style={{fontWeight: '500', fontSize: 14}}>{item.Ten}</Text>
            <Text style={{color: '#3076FE', fontSize: 10}}><Image source={require('../assets/images/Vector.png')}  style={{width: 7, height: 10}}/> {item.DiaChi}</Text>
            <Text style={{fontWeight: '500', fontSize: 12, color: '#FF2424'}}>{item.Gia}</Text>
        </View>
    </TouchableOpacity>
    );
    const renderItemDiaDiem = ({ item }) => (
        <View style={{width: 150, height: 200, marginRight: 16, borderRadius: 5, overflow: 'hidden'}}>
                <Image source={{uri : item.image}} style={{width: 150, height: 200}}/>
                <LinearGradient colors={['rgba(77, 77, 77, 0)','#000000']} style={{position: 'absolute', bottom: 0, zIndex: 1, height: 20, width:'100%'}}>
                    <Text style={{ color:'white', fontSize: 13, fontWeight: '600', backgroundColor:'black',  textAlign:'center'}}>{item.TenDiaDiem}</Text>
                </LinearGradient>
        </View>
      );
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
           
            <StatusBar barStyle='dark-content'/>
            <View style={{height:40, alignItems: 'center', flexDirection:'row', paddingHorizontal: 16, justifyContent:'space-between', marginVertical: 10, backgroundColor: '#ffffff'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../assets/images/back.png')}  style={{width: 6, marginRight: 12}}/></TouchableOpacity>
               <Text style={{fontSize: 14, fontWeight:'bold', color:'black'}}>Nhà Hàng</Text>
               <TouchableOpacity><Image source={require('../assets/images/timkiem.png')}  style={{width: 12}}/></TouchableOpacity>
            </View>
            <ScrollView style={{backgroundColor: '#E5E5E5', flex: 1}}>
                <TextInput placeholderTextColor='#828282' onFocus={() => navigation.navigate('ScreenTimKiem')} style={{backgroundColor: '#EAEAEA', paddingVertical: 8, paddingHorizontal: 10,borderRadius: 5, margin: 16, fontSize: 12}} placeholder='Bạn muốn đi đâu'/>
               
                <View style={{height: 30, marginHorizontal: 16, justifyContent:'space-between', flexDirection: 'row', marginTop: 20}}>
                    <Text style={{color: '#000000', fontWeight: 'bold'}}>Gợi ý điểm đến</Text>
                    <TouchableOpacity><Text style={{color: '#9E9E9E', fontSize: 12}}>Xem thêm  <Image source={require('../assets/images/Right.png')}  style={{width: 3, height: 7}}/></Text></TouchableOpacity>
                </View>
                <FlatList
                data = {Data}
                keyExtractor={item => item.id}
                renderItem={renderItemDiaDiem}
                horizontal
                style={{marginLeft: 16}}
                />
                <View style={{height: 30, marginHorizontal: 16, justifyContent:'space-between', flexDirection: 'row', marginTop: 20}}>
                    <Text style={{color: '#000000', fontWeight: 'bold'}}>Đề xuất cho bạn</Text>
                    <TouchableOpacity><Text style={{color: '#9E9E9E', fontSize: 12}}>Xem thêm  <Image source={require('../assets/images/Right.png')}  style={{width: 3, height: 7}}/></Text></TouchableOpacity>
                </View>
                <FlatList
                    data = {Data_NhaHang}
                    keyExtractor={item => item.id}
                    renderItem={renderItemKS_RS}
                    horizontal
                    style={{marginLeft: 16}}
                />
                </ScrollView>
            
        </SafeAreaView>
    );
}
export default ScreenNhaHang;