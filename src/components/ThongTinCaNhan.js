import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    Text,
    Image,

    View,
    TouchableOpacity,

} from 'react-native';
import RateApp from './RateApp';

import { Modal, Portal, Button, Provider } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
const ScreenThongTinCaNhan = ({ navigation }) => {
    const hoten_ = useSelector(state => state.hoten);
    // const [modalVisible, setModalVisible] = React.useState(false);
    const [visible, setVisible] = React.useState(false);
    const img = useSelector(state => state.img);
    const nutButton = useSelector(state => state.nutButton);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <StatusBar barStyle='dark-content' />
            {
                nutButton ? <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 9999999999 }}></View> : <View></View>
            }
            <View style={{ height: 40, alignItems: 'center', marginVertical: 10, backgroundColor: '#ffffff', justifyContent: 'center' }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>Thông Tin Cá Nhân</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ marginTop: 20, height: 80, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white' }}>
                    <Image source={{ uri: img ? img : 'https://scontent-hkg4-2.xx.fbcdn.net/v/t1.6435-1/p200x200/181485075_288532339403436_5571309197348013484_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=7206a8&_nc_ohc=yRFUARG4vPwAX_2kD6A&_nc_ht=scontent-hkg4-2.xx&tp=6&oh=9249d8c824d1fec57712f0f0fc1eac88&oe=60B75293' }} style={{ width: 60, height: 60, borderRadius: 50 }} />
                    <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: '500' , textAlign: 'center'}}>{hoten_}</Text>
                </TouchableOpacity>
                <View style={{ marginTop: 35, height: 'auto', backgroundColor: '#ffffff', padding: 16 }}>
                    <TouchableOpacity style={{ height: 30, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Image source={require('../assets/images/lichtrinh.png')} style={{ width: 15, height: 20 }} />
                        </View>
                        <View style={{ flex: 9, borderBottomWidth: 0.2, borderBottomColor: '#B9B9B9', borderStyle: 'solid' }}>
                            <Text style={{ fontSize: 13, fontWeight: '500' }}>Lịch Trình Của Tôi</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 30, flexDirection: 'row', marginVertical: 8 }}>
                        <View style={{ flex: 1 }}>
                            <Image source={require('../assets/images/megaphone1.png')} style={{ width: 15, height: 20 }} />
                        </View>
                        <View style={{ flex: 9, borderBottomWidth: 0.2, borderBottomColor: '#B9B9B9', borderStyle: 'solid' }}>
                            <Text style={{ fontSize: 13, fontWeight: '500' }}>Khuyến Mại</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ScreenYeuThich')} style={{ height: 30, flexDirection: 'row', marginVertical: 8 }}>
                        <View style={{ flex: 1 }}>
                            <Image source={require('../assets/images/yeuthich.png')} style={{ width: 18, height: 16 }} />
                        </View>
                        <View style={{ flex: 9, borderBottomWidth: 0.2, borderBottomColor: '#B9B9B9', borderStyle: 'solid' }}>
                            <Text style={{ fontSize: 13, fontWeight: '500' }}>Yêu Thích</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={showModal} style={{ height: 30, flexDirection: 'row', marginVertical: 8 }}>
                        <View style={{ flex: 1 }}>
                            <Image source={require('../assets/images/danhgia.png')} style={{ width: 20, height: 20 }} />
                        </View>
                        <View style={{ flex: 9, borderBottomWidth: 0.2, borderBottomColor: '#B9B9B9', borderStyle: 'solid' }}>
                            <Text style={{ fontSize: 13, fontWeight: '500' }}>Đánh Giá</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('ScreenCaiDat')} style={{ height: 30, flexDirection: 'row', marginVertical: 8 }}>
                        <View style={{ flex: 1 }}>
                            <Image source={require('../assets/images/caidat.png')} style={{ width: 19, height: 19 }} />
                        </View>
                        <View style={{ flex: 9, borderBottomWidth: 0.2, borderBottomColor: '#B9B9B9', borderStyle: 'solid' }}>
                            <Text style={{ fontSize: 13, fontWeight: '500' }}>Cài Đặt</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal visible={visible} onDismiss={hideModal} >
                <RateApp />
            </Modal>

        </SafeAreaView>
    );
}
export default ScreenThongTinCaNhan;

