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
const ScreenDatPhong = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <StatusBar barStyle='dark-content' />
            <View style={{ height: 40, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 16, justifyContent: 'space-between', marginVertical: 10, backgroundColor: '#ffffff' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require('../assets/images/back.png')} style={{ width: 7, height: 12 }} /></TouchableOpacity>
                <View><Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>Đặt Phòng</Text></View>
                <View></View>
            </View>

            <ScrollView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
                <View style={{ height: 215 }}>
                    <Image style={{ width: '100%', height: '100%' }} source={{ uri: 'https://noithatmyhouse.com/wp-content/uploads/2019/07/thiet-ke-nha-nghi-3-tang_3.jpg' }} />
                </View>
                <View style={{ flex: 4, padding: 16 }}>
                    <Text style={{ color: '#707070', marginVertical: 5 }}>Superior Twin/ Double City View</Text>
                    <Text style={{ marginTop: 15, fontSize: 13, fontWeight: '500' }}>Loại giường - <Text style={{ fontWeight: 'normal' }}> 2 giuờng đơn</Text></Text>
                    <Text style={{ marginTop: 10, fontSize: 13, fontWeight: '500' }}>Kích thước phòng - <Text style={{ fontWeight: 'normal' }}> 40m</Text></Text>
                    <Text style={{ marginTop: 10, fontSize: 13, fontWeight: '500' }}>Cảnh phòng - <Text style={{ fontWeight: 'normal' }}> sân vườn</Text></Text>
                    <Text style={{ marginTop: 10, fontSize: 12, lineHeight: 16 }}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                    </Text>
                </View>
                <View style={{ flex: 3, padding: 16 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 13 }}>Giá phòng</Text>
                        <Text style={{ fontSize: 15 }}><Text style={{ color: '#F8530D', fontWeight: '600' }}>850,000</Text> VND</Text>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 13 }}>Thuế và phí dịch vụ</Text>
                        <Text style={{ fontSize: 15 }}><Text style={{ color: '#F8530D', fontWeight: '600' }}>360,000</Text> VND</Text>
                    </View>
                </View>
                <View style={{ flex: 1, paddingHorizontal: 16 }}>
                    <TouchableOpacity style={{ marginVertical: 10, backgroundColor: '#FF5F24', borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', paddingVertical: 10 }}>Đặt Phòng</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default ScreenDatPhong;