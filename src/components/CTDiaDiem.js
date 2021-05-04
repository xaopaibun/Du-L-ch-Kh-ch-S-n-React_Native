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




const ScreenCTDiaDiem = ({ navigation }) => {
    const dispatch = useDispatch();
    const Data_NhaHang = useSelector(state => state.data_NhaHang);
    const dulieu = useSelector(state => state.chitietDiaDiem);
    const Data = useSelector(state => state.data_diadiem);
    const Data_KS = useSelector(state => state.data_KS_RS);
    const Data_Trai_Nghiem = useSelector(state => state.data_trainghiem);
    const [active_xemthem, setactive_xemthem] = React.useState(false);
    const renderItemTraiNghiem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ScreenChiTietKhamPha')} style={{ height: 280, width: 220, marginRight: 16 }}>
            <Image source={{ uri: item.image }} style={{ width: 220, height: 200, borderRadius: 5 }} />
            <View style={{ marginTop: 12, justifyContent: 'space-between', flex: 0.5 }}>
                <Text style={{ fontWeight: '500', fontSize: 14 }}>{item.TenTraiNghiem}</Text>
                <Text style={{ color: '#3076FE', fontSize: 10 }}><Image source={require('../assets/images/Vector.png')} style={{ width: 7, height: 10 }} /> {item.DiaChi}</Text>
            </View>
        </TouchableOpacity>
    );
    const renderItemKS_RS = ({ item }) => (
        <TouchableOpacity onPress={() => {
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
    const renderItemLichTrinh = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ScreenTongQuanLichTrinh')} style={{ width: 300, height: 230, marginLeft: 16, backgroundColor: '#ffffff', borderRadius: 5, overflow: 'hidden' }}>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flex: 4 }}><Image source={{ uri: item.images[0] }} style={{ width: '100%', height: '100%' }} /></View>
                <View style={{ flex: 6, marginLeft: 6, justifyContent: 'space-between' }}>
                    <View style={{ flex: 1, marginBottom: 6 }}><Image source={{ uri: item.images[1] }} style={{ width: '100%', height: '100%' }} /></View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flex: 1, marginRight: 3 }}><Image source={{ uri: item.images[2] }} style={{ width: '100%', height: '100%' }} /></View>
                        <View style={{ flex: 1, marginLeft: 3 }}><Image source={{ uri: item.images[3] }} style={{ width: '100%', height: '100%' }} /></View>
                    </View>
                </View>
            </View>
            <View style={{ flex: 0.35, padding: 16 }}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <Text style={{ color: '#000000', fontSize: 14, fontWeight: '600' }}>{item.TenDiaDiem}</Text>
                        <Text style={{ color: '#494949', fontSize: 14 }}> ({item.ThoiGian})</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 0.5, justifyContent: 'flex-end' }}>
                        <Image source={require('../assets/images/Vector.png')} style={{ width: 7, height: 10 }} />
                        <Text style={{ color: '#3076FE', fontSize: 10 }}> Việt Nam</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ flexDirection: 'row', flex: 0.6 }}>
                        <Image source={{ uri: item.avatar }} style={{ width: 25, height: 25, borderRadius: 50 }} />
                        <View style={{ justifyContent: 'space-between', marginLeft: 8 }}>
                            <Text style={{ fontSize: 10, color: 'black' }}>{item.TenFB}</Text>
                            <Text style={{ fontSize: 8, color: '#494949' }}>{item.Time}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 0.4, justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{ backgroundColor: '#FF5F24', borderRadius: 5, height: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 10, lineHeight: 12 }}>{item.Gia} đ/ người</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
            <StatusBar barStyle='light-content' />
            <View style={{ position: 'relative', height: 180, width: '100%' }}>
                <ImageBackground source={{ uri: dulieu.image }} style={{
                    height: 180, width: '100%', borderRadius: 5
                }} resizeMode ='stretch' >
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 50, left: 10, zIndex: 9 }}><Image source={require('../assets/images/back2.png')} style={{ width: 8, marginRight: 12 }} /></TouchableOpacity>
                    <TouchableOpacity  style={{ position: 'absolute', top: 50, right: 10, zIndex: 9 }}><Image source={require('../assets/images/timkiem3.png')} style={{ width: 14, height: 14, marginRight: 12 }} /></TouchableOpacity>
                </ImageBackground>
                <View style={{ height: 'auto', width: '100%', marginTop: -20 }}>
                    <View style={{ height: 'auto', padding: 16, backgroundColor: '#ffffff', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                        <Text style={{ color: '#000000', fontSize: 16, fontWeight: '600' }}>{dulieu.TenDiaDiem}</Text>
                        <Text style={{ color: '#3076FE', fontSize: 10, marginVertical: 6 }}><Image source={require('../assets/images/Vector.png')} style={{ width: 7, height: 10 }} /> {dulieu.TenDiaDiem}, Việt Nam</Text>
                        <Text style={{ fontSize: 12, fontWeight: '400', lineHeight: 16}} numberOfLines={3}>{dulieu.ND}</Text>
                       <View style={{height: 60, justifyContent: 'space-around'}}>
                        <TouchableOpacity style={{  justifyContent: 'center', alignItems: 'center'}} onPress={() => console.log('jiji')}>
                                <Text style={{ color: '#FF5F24', paddingVertical: 6, fontSize: 12, alignItems: 'center' }}>Xem thêm</Text>
                            </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('ScreenTaoLichTrinh')} style={{ backgroundColor: '#FF5F24', borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'white', paddingVertical: 6 , fontSize: 12, fontWeight: '600'}}> Tạo lịch trình</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    <View style={{ height: 125, marginVertical: 10}}>
                        <Image source={{ uri: dulieu.BanDo }} style={{ width: '100%', height: '100%' }} resizeMode='stretch' />
                    </View>
                    
                </View>
               
            </View>
            <View style={{ height: 310 }}></View>
            <View style={{ height: 30, marginHorizontal: 16, justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ color: '#000000', fontWeight: 'bold' }}>Lịch trình OKGO đề xuất</Text>
                <TouchableOpacity><Text style={{ color: '#9E9E9E', fontSize: 12 }}>Xem thêm  <Image source={require('../assets/images/Right.png')} style={{ width: 3, height: 7 }} /></Text></TouchableOpacity>
            </View>
            <FlatList
                data={Data}
                keyExtractor={item => item.id}
                renderItem={renderItemLichTrinh}
                horizontal
            />
            <View style={{ height: 30, marginHorizontal: 16, justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ color: '#000000', fontWeight: 'bold' }}>Lịch trình tạo gần đây</Text>
                <TouchableOpacity><Text style={{ color: '#9E9E9E', fontSize: 12 }}>Xem thêm  <Image source={require('../assets/images/Right.png')} style={{ width: 3, height: 7 }} /></Text></TouchableOpacity>
            </View>
            <FlatList
                data={Data}
                keyExtractor={item => item.id}
                renderItem={renderItemLichTrinh}
                horizontal
            />
            <View style={{ height: 30, marginHorizontal: 16, justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ color: '#000000', fontWeight: 'bold' }}>Khách sạn & Resort</Text>
                <TouchableOpacity onPress={() => {




                    navigation.navigate('ScreenKS_RS');
                }}><Text style={{ color: '#9E9E9E', fontSize: 12 }}>Xem thêm  <Image source={require('../assets/images/Right.png')} style={{ width: 3, height: 7 }} /></Text></TouchableOpacity>
            </View>
            <FlatList
                data={Data_KS}
                keyExtractor={item => item.id}
                renderItem={renderItemKS_RS}
                horizontal
                style={{ marginLeft: 16 }}
            />
            <View style={{ height: 30, marginHorizontal: 16, justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ color: '#000000', fontWeight: 'bold' }}>Nhà Hàng</Text>
                <TouchableOpacity onPress={() => {

                    navigation.navigate('NhaHang');
                }}><Text style={{ color: '#9E9E9E', fontSize: 12 }}>Xem thêm  <Image source={require('../assets/images/Right.png')} style={{ width: 3, height: 7 }} /></Text></TouchableOpacity>
            </View>
            <FlatList
                data={Data_NhaHang}
                keyExtractor={item => item.id}
                renderItem={renderItemKS_RS}
                horizontal
                style={{ marginLeft: 16 }}
            />
            <View style={{ height: 30, marginHorizontal: 16, justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ color: '#000000', fontWeight: 'bold' }}>Trải Nghiệm Nổi Bật</Text>
                <TouchableOpacity onPress={() => {

                    navigation.navigate('ScreenTraiNghiem');
                }}><Text style={{ color: '#9E9E9E', fontSize: 12 }}>Xem thêm  <Image source={require('../assets/images/Right.png')} style={{ width: 3, height: 7 }} /></Text></TouchableOpacity>
            </View>
            <FlatList
                data={Data_Trai_Nghiem}
                keyExtractor={item => item.id}
                renderItem={renderItemTraiNghiem}
                horizontal
                style={{ marginLeft: 16 }}
            />

        </ScrollView>
    );
}
export default ScreenCTDiaDiem;