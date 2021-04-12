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
const ScreenXemGoiY =  ({navigation}) => {
    //const Data_LichTrinh = useSelector(state => state.data_diadiem);
    
    
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <StatusBar barStyle='dark-content'/>
            <View style={{height: 40, alignItems: 'center', flexDirection:'row', paddingHorizontal: 16, justifyContent:'space-between', marginVertical: 10, backgroundColor: '#ffffff'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require('../assets/images/back.png')}  style={{width: 6, marginRight: 12}}/></TouchableOpacity>
               <View><Text style={{fontSize: 14, fontWeight:'bold', color:'black'}}>Có thể bạn quan tâm</Text></View>
               <TouchableOpacity><Image source={require('../assets/images/select.png')}  style={{width: 17, height: 17}}/></TouchableOpacity>
            </View>
            <ScrollView style={{backgroundColor: '#E5E5E5', flex: 1, padding: 16}}>
                <View style={{flex: 9, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                    <TouchableOpacity style={{width: 162, height: 162,backgroundColor: 'white', marginVertical: 10, borderRadius: 5, overflow:'hidden'}}>
                        <Image source={{uri : 'https://vuonhoaphatgiao.com/uploads/noidung/images/phat_hoc/tam-linh.jpg'}}  style={{width: 162, height: 128}}/>
                        <View style={{flex: 12, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Tâm linh</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: 162, height: 162,backgroundColor: 'white', marginVertical: 10, borderRadius: 5, overflow:'hidden'}}>
                        <Image source={{uri : 'https://cdn.vietnamtours247.com/2020/02/mot-so-net-tieu-bieu-van-hoa-viet-nam.png'}}  style={{width: 162, height: 128}}/>
                        <View style={{flex: 12, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Văn hóa - Lịch sử</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: 162, height: 162,backgroundColor: 'white', marginVertical: 10, borderRadius: 5, overflow:'hidden'}}>
                        <Image source={{uri : 'https://botoquanmoc.com/upload_images/images/2019/10/09/IMG_0342-2(1).jpg'}}  style={{width: 162, height: 128}}/>
                        <View style={{flex: 12, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Ẩm thực</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: 162, height: 162,backgroundColor: 'white', marginVertical: 10, borderRadius: 5, overflow:'hidden'}}>
                        <Image source={{uri : 'https://vcdn1-dulich.vnecdn.net/2018/06/19/Phu-Quoc-honeymoon-beach.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=g-Omn4qgZxh3okJe7scP_A'}}  style={{width: 162, height: 128}}/>
                        <View style={{flex: 12, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Biển</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: 162, height: 162,backgroundColor: 'white', marginVertical: 10, borderRadius: 5, overflow:'hidden'}}>
                        <Image source={{uri : 'https://chanhtuoi.vn1.vdrive.vn/uploads/2015/11/Top-5-%C4%91%E1%BB%8Ba-%C4%91i%E1%BB%83m-ph%C6%B0%E1%BB%A3t-l%C3%BD-t%C6%B0%E1%BB%9Fng-g%E1%BA%A7n-H%C3%A0-N%E1%BB%99i-kh%C3%B4ng-th%E1%BB%83-b%E1%BB%8F-qua-Copy.jpg'}}  style={{width: 162, height: 128}}/>
                        <View style={{flex: 12, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Phượt</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: 162, height: 162,backgroundColor: 'white', marginVertical: 10, borderRadius: 5, overflow:'hidden'}}>
                        <Image source={{uri : 'data:image/jpeg;base64,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'}}  style={{width: 162, height: 128}}/>
                        <View style={{flex: 12, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Thư viện</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
                <View style={{flex: 1, justifyContent:'flex-end', marginTop: 40}}>
                    <TouchableOpacity style={{backgroundColor: '#FF5F24', borderRadius: 5, height: 35,justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'#FFFFFF', fontSize: 14, lineHeight: 17}}>Xong</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            
        </SafeAreaView>
    );
}
export default ScreenXemGoiY;