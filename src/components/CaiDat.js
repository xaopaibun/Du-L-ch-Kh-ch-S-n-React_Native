import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    Text,
    Image,

    View,
    TouchableOpacity,

} from 'react-native';


const ScreenCaiDat = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <StatusBar barStyle='dark-content' />
            <View style={{ height: 40, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 16, justifyContent: 'space-between', marginVertical: 10, backgroundColor: '#ffffff' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require('../assets/images/back.png')} style={{ width: 7, height: 12 }} /></TouchableOpacity>
                <View><Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>Cài Đặt</Text></View>
                <View></View>
            </View>
            <View style={{ flex: 1, backgroundColor: '#E5E5E5' }}>

                <View style={{ marginTop: 35, height: 'auto', backgroundColor: '#ffffff', padding: 16 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ScreenChinhSachBaoMat')} style={{ height: 30, marginVertical: 10, borderBottomWidth: 0.2, borderBottomColor: '#B9B9B9', borderStyle: 'solid' }}>
                        <Text style={{ fontSize: 13, fontWeight: '500' }}>Chính sách bảo mật</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ScreenDieuKhoan')} style={{ height: 30, marginVertical: 10, borderBottomWidth: 0.2, borderBottomColor: '#B9B9B9', borderStyle: 'solid' }}>
                        <Text style={{ fontSize: 13, fontWeight: '500' }}>Điều khoản sử dụng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 30, marginVertical: 10, borderBottomWidth: 0.2, borderBottomColor: '#B9B9B9', borderStyle: 'solid' }}>
                        <Text style={{ fontSize: 13, fontWeight: '500' }}>Hướng dẫn thanh toán</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 30, marginVertical: 10 }}>
                        <Text style={{ fontSize: 13, fontWeight: '500' }}>Đăng xuất</Text>
                    </TouchableOpacity>

                </View>
            </View>


        </SafeAreaView>
    );
}
export default ScreenCaiDat;