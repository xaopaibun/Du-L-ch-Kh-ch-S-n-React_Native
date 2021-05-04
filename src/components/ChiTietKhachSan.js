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




const ScreenChiTietKhachSan = ({ navigation }) => {
    const Data = useSelector(state => state.chitietKhachSan);
    const Data_KhachSan = useSelector(state => state.data_KS_RS);
    const dispatch = useDispatch();
    const renderItem = ({ item }) => (
        <TouchableOpacity  onPress={() => {
            dispatch({ type: 'ChiTietKhachSan', data: item });
            navigation.navigate('ScreenChiTietKhachSan');
        }} style={{ height: 250, width: 160, marginRight: 16, justifyContent: 'space-between' }}>
            <View style={{ flex: 3 }}>
                <Image source={{ uri: item.images[0] }} style={{ width: 160, height: 150, borderRadius: 5 }} />
            </View>
            <View style={{ marginTop: 12, flex: 2, justifyContent: 'space-between', paddingTop: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#A2A2A2', fontSize: 10, flex: 0.9 }}>{item.Loai}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 0.5 }}>
                        <Image source={require('../assets/images/sao.png')} style={{ width: 10, height: 10 }} />
                        <Image source={require('../assets/images/sao.png')} style={{ width: 10, height: 10 }} />
                        <Image source={require('../assets/images/sao.png')} style={{ width: 10, height: 10 }} />
                        <Image source={require('../assets/images/sao.png')} style={{ width: 10, height: 10 }} />
                        <Image source={require('../assets/images/sao.png')} style={{ width: 10, height: 10 }} />
                    </View>
                </View>
                <Text style={{ fontWeight: '500', fontSize: 14 }}>{item.Ten}</Text>
                <Text style={{ color: '#3076FE', fontSize: 10 }}><Image source={require('../assets/images/Vector.png')} style={{ width: 7, height: 10 }} /> {item.DiaChi}</Text>
                <Text style={{ fontWeight: '500', fontSize: 12, color: '#FF2424' }}>{item.Gia}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <StatusBar barStyle='light-content' />
            <View style={{ position: 'relative', height: 240, width: '100%' }}>
                <Image source={{ uri: Data.images[0] }} style={{ height: 240, width: '100%' }}></Image>
                <View style={{ position: 'absolute', top: 122, left: 10, zIndex: 9 }}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{Data.Ten}</Text>
                    <View style={{ flex: 0.2, flexDirection: 'row', marginTop: 10 }}>
                        <Image source={require('../assets/images/vitri.png')} style={{ width: 10, height: 12 }} />
                        <Text style={{ color: 'white', fontSize: 12, fontWeight: '400' }}> {Data.DiaChi}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 50, left: 10, zIndex: 9 }}><Image source={require('../assets/images/back2.png')} style={{ width: 8, marginRight: 12 }} /></TouchableOpacity>
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', position: 'absolute', top: 0, left: 0, zIndex: 3, height: 240, width: '100%' }}></View>
                <View style={{ justifyContent: 'space-between', backgroundColor: 'white', paddingHorizontal: 17, paddingVertical: 14, borderRadius: 5, position: 'absolute', width: '92%', height: 90, marginHorizontal: 16, bottom: -90 / 2, left: 0, zIndex: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 5, }, shadowOpacity: 0.34, shadowRadius: 6.27, elevation: 10 }}>
                    <Text style={{ fontSize: 12 }}><Text style={{ fontWeight: '600' }}>Địa Chỉ :</Text> {Data.DiaChi}</Text>
                    <Text style={{ fontSize: 12 }}><Text style={{ fontWeight: '600' }}>Giờ mở cửa :</Text> {Data.GioMoCua}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 12 }}><Text style={{ fontWeight: '600' }}>Giá :</Text> {Data.Gia}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 0.35 }}>
                            <Image source={require('../assets/images/sao.png')} style={{ width: 10, height: 10 }} />
                            <Image source={require('../assets/images/sao.png')} style={{ width: 10, height: 10 }} />
                            <Image source={require('../assets/images/sao.png')} style={{ width: 10, height: 10 }} />
                            <Image source={require('../assets/images/sao.png')} style={{ width: 10, height: 10 }} />
                            <Image source={require('../assets/images/sao.png')} style={{ width: 10, height: 10 }} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ height: 60 }}></View>
            <Image source={require("../assets/images/diachinhahang.png")} style={{ width: '100%', height: 140 }} resizeMode='stretch' />
            <View style={{ margin: 16 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 104 }}>
                    <View style={{ flex: 0.3 }}><Image source={{ uri: Data.images[1] }} style={{ width: '100%', height: '100%' }} resizeMode='stretch' /></View>
                    <View style={{ flex: 0.3 }}><Image source={{ uri: Data.images[2] }} style={{ width: '100%', height: '100%' }} resizeMode='stretch' /></View>
                    <View style={{ flex: 0.3, position: 'relative' }}>
                        <Image source={{ uri: Data.images[3] }} style={{ width: '100%', height: '100%' }} resizeMode='stretch' />
                        <TouchableOpacity style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', position: 'absolute', left: 0, right: 0, zIndex: 2, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ScreenDanhSachPhong')} style={{ marginVertical: 10, backgroundColor: '#FF5F24', borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', paddingVertical: 6 }}>Chọn Phòng</Text>
                </TouchableOpacity>
                <Text style={{ marginTop: 15, lineHeight: 16, fontSize: 12 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </Text>
            </View>
            <View style={{ height: 30, marginHorizontal: 16, justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ color: '#000000', fontWeight: 'bold' }}>Khách Sạn Lân Cận</Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('ScreenKS_RS');
                }}><Text style={{ color: '#9E9E9E', fontSize: 12 }}>Xem thêm  <Image source={require('../assets/images/Right.png')} style={{ width: 3, height: 7 }} /></Text></TouchableOpacity>
            </View>
            <FlatList
                data={Data_KhachSan}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                horizontal
                style={{ marginLeft: 16 }}
            />

            <View style={{height: 30}}/>
        </ScrollView>
    );
}
export default ScreenChiTietKhachSan;