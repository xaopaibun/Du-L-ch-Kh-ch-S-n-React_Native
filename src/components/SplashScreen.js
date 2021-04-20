import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
 Image,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  Switch,
  ImageBackground
} from 'react-native';
import DiaDiem from '../Data/DiaDiem';
import DiaDiemTheoMua from '../Data/DiaDiemTheoMua';
import KhuyenMai from '../Data/KhuyenMai';
import KS_RS from '../Data/KS_RS';
import NhaHang from '../Data/NhaHang';
import LichTrinh from '../Data/LichTrinh';
import TraiNghiem from '../Data/TraiNghiem';
import { useDispatch , useSelector} from 'react-redux';

const SplashScreen = () =>{
  const dispatch = useDispatch();
  React.useEffect(() =>{
    dispatch({type : 'DuLieuLichTrinh', data: LichTrinh})
    dispatch({type : 'DuLieudiadiemphobien', data: DiaDiem})
    dispatch({type : 'DuLieuKS_RS', data: KS_RS})
    dispatch({type : 'DuLieuNhaHang', data: NhaHang})
    dispatch({type :'DuLieutrainghiem', data : TraiNghiem})
    dispatch({type : 'DuLieuKhuyenMai', data: KhuyenMai})
    dispatch({type :'DuLieuDiaDiemTheoMua', data : DiaDiemTheoMua})
}, []);
    return(
        <View style={{flex:1, backgroundColor: '#E5E5E5'}}>
            <StatusBar barStyle='light-content'/>
            <View style={{flex:0.5}}></View>
              <View style={{flex: 5.5, position:'relative'}}>
              <View style={{flex: 1.5,  justifyContent: 'space-around', alignItems: 'center', position: 'absolute', left: 0, right: 0, zIndex: 2}}>
                <Image source={require('../assets/images/logo1.png')}  style={{ width: 77, height: 98,resizeMode:'stretch'}}/>
                <Image source={require('../assets/images/logo2.png')}  style={{marginVertical: 20,width: 77, height: 20,resizeMode:'stretch'}}/> 
              </View>
                <ImageBackground resizeMode='stretch'  source={require('../assets/images/Main.png')}  style={{width: '100%', height: '100%'}} /> 
              </View>
            <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#4F3018', fontSize: 12}}>Welcome!</Text>
            </View>
            
        </View>
    );
}
export default SplashScreen;