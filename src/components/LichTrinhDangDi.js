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
    Platform
} from 'react-native';
import dulieu from '../Data/LichTrinhDangDi'
import { useDispatch, useSelector } from 'react-redux';

const ScreenLichTrinhDangDi = ({ navigation }) => {
    const dispatch = useDispatch();
    var today = new Date();
    const [Ngay, setNgay] = React.useState(today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear());
    const [Gio, setGio] = React.useState(today.getHours() + ':' + today.getMinutes());
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ height: 40, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 16, justifyContent: 'space-between', marginVertical: 10, backgroundColor: '#ffffff' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require('../assets/images/back.png')} style={{ width: 7, height: 12 }} /></TouchableOpacity>
                <View><Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>Lịch Trình Đang Đi</Text></View>
                <View></View>
            </View>
            <ScrollView style={{ backgroundColor: '#E5E5E5', padding: 16, flex: 1 }}>
                <Text>Hôm nay là ngày : {Ngay} {Gio}</Text>
                {
                    dulieu.map((val, index) => {
                        return (
                            <View key={val.id.toString()} style={{ flex: 1 }}>
                                <Text style={{ color: '#A0A0A0', fontSize: 12, fontWeight: '800' }}>Ngày {index + 1} : {val.ngay}</Text>
                                <View style={{ flex: 1 }}>
                                    {
                                        val.thongtin.map((item, index) => {

                                            if (item.sao) {
                                                dispatch({ type: 'Sao', soluongsao: item.sao })
                                            }
                                            return (
                                                <View key={Math.random().toString()} style={{ height: 80 }}>
                                                    <Text style={{ color: '#A0A0A0', fontSize: 12, paddingVertical: 5 }}>{item.gio}</Text>
                                                    <View style={{ flex: 0.7, flexDirection: 'row' }}>
                                                        <View style={{ flex: 1 }}>
                                                            <View style={{ height: 15, width: 15, backgroundColor: val.ngay == Ngay && item.gio == Gio ? '#E83F00' : "black", borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                                                                <Text style={{ color: 'white', fontSize: 10 }}>{index + 1}</Text>
                                                            </View>
                                                            {
                                                                index + 1 == val.thongtin.length ? <View /> : <View style={{ height: '70%', position: 'absolute', top: 26, left: 7, zIndex: 1, borderColor: '#C5C5C5', borderStyle: 'dashed', borderWidth: 1 }}></View>
                                                            }
                                                        </View>
                                                        <View style={{ flex: 9.3, justifyContent: 'space-between' }}>
                                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                <Text style={{ color: '#A0A0A0', flex: 8 }}>{item.batdau}</Text>
                                                                {item.sao ? <Text style={{ flex: 2, textAlign: 'right' }}>{item.sao} <Image source={require('../assets/images/sao3.png')} style={{ width: 15, height: 15 }} /></Text> : <View />}
                                                            </View>
                                                            <Text style={{ color: '#A0A0A0', fontSize: 11 }}>{item.chiphi}</Text>
                                                        </View>

                                                    </View>
                                                </View>
                                            );
                                        })
                                    }
                                </View>
                            </View>
                        );
                    })
                }
                <TouchableOpacity style={{ height: 30, width: '100%', backgroundColor: 'rgba(255, 180, 152, 1)', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>Chúc mừng bạn đã hoàn thành chuyến đi !</Text>
                </TouchableOpacity>
                <View style={{ height: 70 }} />
            </ScrollView>
            <View style={{ height: 84, backgroundColor: 'white', padding: 16, justifyContent: 'space-between' }}>
                <Text>Đã chi: <Text style={{ color: '#FF5F24', fontWeight: '600' }}> 7,860,000 đ/ 2 người</Text></Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>Điểm thưởng:  <Text>233 <Image source={require('../assets/images/sao3.png')} style={{ width: 15, height: 15 }} /></Text> </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('DanhGia')} style={{ height: 20, width: 104, backgroundColor: '#FF5F24', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 10 }}>Đánh giá chuyến đi</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
}
export default ScreenLichTrinhDangDi;
