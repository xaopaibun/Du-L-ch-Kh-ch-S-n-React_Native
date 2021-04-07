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
const ScreenDanhSachPhong = ({navigation}) =>{
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <StatusBar barStyle='dark-content'/>
            <View style={{height: 25, flexDirection:'row', paddingHorizontal: 16, justifyContent:'space-between', marginVertical: 10, backgroundColor: '#ffffff'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require('../assets/images/back.png')}  style={{width: 6, marginRight: 12}}/></TouchableOpacity>
                <View><Text style={{fontSize: 14, fontWeight:'bold', color:'black'}}>Chọn Phòng</Text></View>
                <View></View>
            </View>
            
            <ScrollView style={{flex: 1, backgroundColor: '#E5E5E5'}}>
                <View style={{height: 25, backgroundColor: '#EAEAEA', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                    <Text style={{color: '#828282', fontSize: 13}}>Giá hiển thị/ 1 phòng/ 1 đêm</Text>
                </View>
                <View style={{flex: 1, padding: 16}}>
                    <View style={{height: 371, borderRadius: 5, overflow:'hidden', backgroundColor: 'white', shadowColor: "rgba(201, 201, 201, 0.25)",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,

                        elevation: 3,}}>
                        <View style={{flex: 3.2}}>
                            <Image style={{width: '100%', height: '100%'}} source={{uri : 'https://noithatmyhouse.com/wp-content/uploads/2019/07/thiet-ke-nha-nghi-3-tang_3.jpg'}} />
                        </View>
                        <View style={{flex: 6.8, padding: 10}}>
                            <View style={{flex: 2.5, flexDirection: 'row'}}>
                                <View style={{flex: 7.5}}>
                                    <Text style={{color: '#707070'}}>Superior Twin/ Double City View</Text>
                                    <Text style={{marginTop: 15, fontSize: 13}}>Loại giường - giường đôi</Text>
                                    <Text style={{marginTop: 10, fontSize: 13}}>Thêm loại giường - giường nhỏ</Text>
                                    <Text style={{marginTop: 20, fontSize: 12, color: '#828282'}}>Thanh toán ngay | Không hoàn tiền</Text>
                                    <Text style={{marginTop: 10, fontSize: 12, color: '#FF0000'}}>Còn 5 phòng với giá này !</Text>
                                </View>
                                <View style={{flex: 2.5, alignItems:'flex-end'}}>
                                    <TouchableOpacity><Text style={{color: '#ED8A19', fontSize: 10}}>Xem chi tiết</Text></TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flex: 1.5, alignItems:'flex-end', justifyContent: 'space-around'}}>
                                <Text style={{color: '#F8530D', fontWeight: '600', fontSize: 15, alignItems: 'flex-end'}}>850,000 VNĐ</Text>
                                <Text style={{fontSize: 12}}>(Chưa bao gồm thuế và phí)</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('ScreenDatPhong')} style={{backgroundColor: '#FF5F24',borderRadius: 17.5, height: 32, width: 55, alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{color: 'white'}}>Chọn</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{flex: 1, padding: 16}}>
                    <View style={{height: 371, borderRadius: 5, overflow:'hidden', backgroundColor: 'white', shadowColor: "rgba(201, 201, 201, 0.25)",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,

                        elevation: 3,}}>
                        <View style={{flex: 3.2}}>
                            <Image style={{width: '100%', height: '100%'}} source={{uri : 'https://poliva.vn/wp-content/uploads/2019/10/thiet-ke-noi-that-nha-nghi-4.jpg'}} />
                        </View>
                        <View style={{flex: 6.8, padding: 10}}>
                            <View style={{flex: 2.5, flexDirection: 'row'}}>
                                <View style={{flex: 7.5}}>
                                    <Text style={{color: '#707070'}}>Superior Twin/ Double City View</Text>
                                    <Text style={{marginTop: 15, fontSize: 13}}>Loại giường - giường đôi</Text>
                                    <Text style={{marginTop: 10, fontSize: 13}}>Thêm loại giường - giường nhỏ</Text>
                                    <Text style={{marginTop: 20, fontSize: 12, color: '#828282'}}>Thanh toán ngay | Không hoàn tiền</Text>
                                    <Text style={{marginTop: 10, fontSize: 12, color: '#FF0000'}}>Còn 5 phòng với giá này !</Text>
                                </View>
                                <View style={{flex: 2.5, alignItems:'flex-end'}}>
                                    <TouchableOpacity><Text style={{color: '#ED8A19', fontSize: 10}}>Xem chi tiết</Text></TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flex: 1.5, alignItems:'flex-end', justifyContent: 'space-around'}}>
                                <Text style={{color: '#F8530D', fontWeight: '600', fontSize: 15, alignItems: 'flex-end'}}>1,250,000 VNĐ</Text>
                                <Text style={{fontSize: 12}}>(Chưa bao gồm thuế và phí)</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('ScreenDatPhong')} style={{backgroundColor: '#FF5F24',borderRadius: 17.5, height: 32, width: 55, alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{color: 'white'}}>Chọn</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{flex: 1, padding: 16}}>
                    <View style={{height: 371, borderRadius: 5, overflow:'hidden', backgroundColor: 'white', shadowColor: "rgba(201, 201, 201, 0.25)",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,

                        elevation: 3,}}>
                        <View style={{flex: 3.2}}>
                            <Image style={{width: '100%', height: '100%'}} source={{uri : 'https://poliva.vn/wp-content/uploads/2019/08/thiet-ke-nha-nghi-mini-7.jpg'}} />
                        </View>
                        <View style={{flex: 6.8, padding: 10}}>
                            <View style={{flex: 2.5, flexDirection: 'row'}}>
                                <View style={{flex: 7.5}}>
                                    <Text style={{color: '#707070'}}>Superior Twin/ Double City View</Text>
                                    <Text style={{marginTop: 15, fontSize: 13}}>Loại giường - giường đôi</Text>
                                    <Text style={{marginTop: 10, fontSize: 13}}>Thêm loại giường - giường nhỏ</Text>
                                    <Text style={{marginTop: 20, fontSize: 12, color: '#828282'}}>Thanh toán ngay | Không hoàn tiền</Text>
                                    <Text style={{marginTop: 10, fontSize: 12, color: '#FF0000'}}>Còn 5 phòng với giá này !</Text>
                                </View>
                                <View style={{flex: 2.5, alignItems:'flex-end'}}>
                                    <TouchableOpacity><Text style={{color: '#ED8A19', fontSize: 10}}>Xem chi tiết</Text></TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flex: 1.5, alignItems:'flex-end', justifyContent: 'space-around'}}>
                                <Text style={{color: '#F8530D', fontWeight: '600', fontSize: 15, alignItems: 'flex-end'}}>2,350,000 VNĐ</Text>
                                <Text style={{fontSize: 12}}>(Chưa bao gồm thuế và phí)</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('ScreenDatPhong')} style={{backgroundColor: '#FF5F24',borderRadius: 17.5, height: 32, width: 55, alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{color: 'white'}}>Chọn</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    );
}
export default ScreenDanhSachPhong; 