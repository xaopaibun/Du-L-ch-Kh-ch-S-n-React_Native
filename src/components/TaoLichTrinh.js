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
  Switch
} from 'react-native';


import { useSelector } from 'react-redux';
const ScreenTaoLichTrinh =  ({navigation}) => {
    //const Data_LichTrinh = useSelector(state => state.data_diadiem);
    const XuatPhat = useSelector(state => state.ThanhPhoChon);
    //const DiemDen = useSelector(state => state.DiemDen);
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <StatusBar barStyle='dark-content'/>
            <View style={{height: 40, alignItems: 'center', flexDirection:'row', paddingHorizontal: 16, justifyContent:'space-between', marginVertical: 10, backgroundColor: '#ffffff'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require('../assets/images/back.png')}  style={{width: 6, marginRight: 12}}/></TouchableOpacity>
               <View><Text style={{fontSize: 14, fontWeight:'bold', color:'black'}}>Tạo Lịch Trình</Text></View>
               <View></View>
            </View>
            <View style={{backgroundColor: '#F8F8F8', flex: 1, padding: 16}}>
                <View style={{flex: 9}}>
                <View style={{borderBottomWidth: 0.5, marginVertical: 8, borderColor:'#000000', height: 40, flexDirection: 'row',alignItems:'center'}}>
                    <View style={{flex: 1, justifyContent: 'center'}}><Image source={require('../assets/images/pin1.png')}  style={{width: 20, height: 20}}/></View>
                    <TextInput onFocus={() => navigation.navigate('ScreenTimKiem')} placeholder = "Xuất phát" value={XuatPhat} placeholderTextColor='#989898' style={{padding: 10, flex: 9}}/>
                </View>
                <View style={{borderBottomWidth: 0.5, marginVertical: 8, borderColor:'#000000', height: 40, flexDirection: 'row',alignItems:'center'}}>
                    <View style={{flex: 1, justifyContent: 'center'}}><Image source={require('../assets/images/placeholders1.png')}  style={{width: 20, height: 20}}/></View>
                    <TextInput onFocus={() => navigation.navigate('ScreenTimKiem')} placeholder = "Điểm đến"  placeholderTextColor='#989898' style={{padding: 10, flex: 9}}/>
                </View>
                <View style={{borderBottomWidth: 0.5, marginVertical: 8, borderColor:'#000000', height: 40, flexDirection: 'row',alignItems:'center'}}>
                    <View style={{flex: 1, justifyContent: 'center'}}><Image source={require('../assets/images/calendar1.png')}  style={{width: 20, height: 20}}/></View>
                    <TextInput  placeholder = "Thời gian" placeholderTextColor='#989898' style={{padding: 10, flex: 9}}/>
                </View>
                <View style={{borderBottomWidth: 0.5, marginVertical: 8, borderColor:'#000000', height: 40, flexDirection: 'row',alignItems:'center'}}>
                    <View style={{flex: 1, justifyContent: 'center'}}><Image source={require('../assets/images/friends1.png')}  style={{width: 20, height: 20}}/></View>
                    <TextInput onFocus={() => navigation.navigate('ScreenNguoiThamGia')} placeholder = "Người tham gia" placeholderTextColor='#989898' style={{padding: 10, flex: 9}}/>
                </View>
                <View style={{marginVertical: 8, height: 40, flexDirection: 'row',alignItems:'center'}}>
                    <View style={{flex: 1, justifyContent: 'center'}}><Image source={require('../assets/images/open-lock1.png')}  style={{width: 20, height: 20}}/></View>
                    <TextInput  placeholder = "Công khai" placeholderTextColor='#989898' style={{padding: 10, flex: 6}}/>
                    <View  style={{flex: 3,alignItems: 'flex-end'}}>
                        <Switch
                        trackColor={{ false: "#767577", true: "#00D52F" }}
                        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}/>
                    </View>
                </View>
                </View>
                <View style={{flex: 1, justifyContent:'flex-end'}}>
                    <TouchableOpacity style={{backgroundColor: '#FF5F24', borderRadius: 5, height: 35,justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'#FFFFFF', fontSize: 14, lineHeight: 17}}>Tạo Lịch Trình</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </SafeAreaView>
    );
}
export default ScreenTaoLichTrinh;