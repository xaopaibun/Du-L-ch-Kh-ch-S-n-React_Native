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
const ScreenXemGoiY_ =  ({navigation}) => {
    const Loai = ['Độc hành', 'Cặp đôi', 'Gia đình', 'Tour'];
    const XuatPhat = useSelector(state => state.ThanhPhoChon);
    
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <StatusBar barStyle='dark-content'/>
            <View style={{height: 40, alignItems: 'center', flexDirection:'row', paddingHorizontal: 16, justifyContent:'space-between', marginVertical: 10, backgroundColor: '#ffffff'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require('../assets/images/back.png')}  style={{width: 6, marginRight: 12}}/></TouchableOpacity>
               <View><Text style={{fontSize: 14, fontWeight:'bold', color:'black'}}>Xem Gợi Ý</Text></View>
               <View></View>
            </View>
            <ScrollView  style={{backgroundColor: '#E5E5E5', flex: 1, padding: 16}}>
                <ScrollView style={{height: 30, flex: 1}} horizontal>
                {
                    Loai.map((val, index) =>{
                        const [active, setactive] = React.useState(false);
                            return(
                            <TouchableOpacity key={index.toString()} onPress={() => setactive(!active)} style={{ marginHorizontal: 5, height: 30, width: 80,justifyContent: 'center', alignItems: 'center',backgroundColor: active?'#FF5F24':'#ECF1FF', borderRadius: 5}}>
                            <Text style={{color: active?'white':'black', fontWeight: '500', fontSize: 12}}>{val}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
                </ScrollView>
                <View style={{height: 30,  justifyContent:'space-between', flexDirection: 'row', marginTop: 20}}>
                    <Text style={{color: '#000000', fontWeight: 'bold'}}>Có thể bạn quan tâm</Text>
                    <TouchableOpacity><Text style={{color: '#9E9E9E', fontSize: 12}}>Tất cả <Image source={require('../assets/images/Right.png')}  style={{width: 3, height: 7}}/></Text></TouchableOpacity>
                </View>
                <View style={{flex : 1, justifyContent: 'space-between', marginBottom: 10}}>
                        <ScrollView style={{flex: 1}} horizontal>
                        <TouchableOpacity style={{width: 162, height: 162,backgroundColor: 'white', marginRight: 10, borderRadius: 5, overflow:'hidden'}}>
                                <Image source={{uri : 'https://vuonhoaphatgiao.com/uploads/noidung/images/phat_hoc/tam-linh.jpg'}}  style={{width: 162, height: 128}}/>
                                <View style={{flex: 12, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text>Tâm linh</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width: 162, height: 162,backgroundColor: 'white',marginRight: 10, borderRadius: 5, overflow:'hidden'}}>
                                <Image source={{uri : 'https://cdn.vietnamtours247.com/2020/02/mot-so-net-tieu-bieu-van-hoa-viet-nam.png'}}  style={{width: 162, height: 128}}/>
                                <View style={{flex: 12, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text>Văn hóa - Lịch sử</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width: 162, height: 162,backgroundColor: 'white', marginRight: 10, borderRadius: 5, overflow:'hidden'}}>
                                <Image source={{uri : 'https://botoquanmoc.com/upload_images/images/2019/10/09/IMG_0342-2(1).jpg'}}  style={{width: 162, height: 128}}/>
                                <View style={{flex: 12, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text>Ẩm thực</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    <View style={{flex: 1, marginVertical: 10}}>
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
                            <View style={{flex: 1, justifyContent: 'center'}}><Image source={require('../assets/images/dollar1.png')}  style={{width: 20, height: 20}}/></View>
                            <TextInput  placeholder = "Ngân Sách" placeholderTextColor='#989898' style={{padding: 10, flex: 9}}/>
                        </View>
                        <View style={{borderBottomWidth: 0.5, marginVertical: 8, borderColor:'#000000', height: 40, flexDirection: 'row',alignItems:'center'}}>
                            <View style={{flex: 1, justifyContent: 'center'}}><Image source={require('../assets/images/friends1.png')}  style={{width: 20, height: 20}}/></View>
                            <TextInput onFocus={() => navigation.navigate('ScreenNguoiThamGia')} placeholder = "Người tham gia" placeholderTextColor='#989898' style={{padding: 10, flex: 9}}/>
                        </View>
                        
                    </View>
                    <View style={{flex: 1, justifyContent: 'flex-end'}}>
                        <TouchableOpacity style={{backgroundColor: '#FF5F24', borderRadius: 5, height: 35,justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'#FFFFFF', fontSize: 14, lineHeight: 17}}>Xem gợi ý</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >
            
            
        </SafeAreaView>
    );
}
export default ScreenXemGoiY_;