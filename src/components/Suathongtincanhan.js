import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, Image, TextInput, ImageBackground, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';
const SuaThongTinCaNhan = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = React.useState(false);
    const hoten_ = useSelector(state => state.hoten);
    const [img, setImg] =  React.useState('');
    const img_ = useSelector(state => state.img);
    const gmail_ = useSelector(state => state.gmail);
    const [hoten , sethoten] =  React.useState(hoten_);
    const [gmail, setgmail] =  React.useState(gmail_);
    const toggleModal = () => {
        setModalVisible(true);
    };
    const dispatch = useDispatch();
    const Submit = () =>{
       
        dispatch({type : 'Submit_editprofile', hoten : hoten, gmail: gmail, img : img});
        navigation.goBack();
    }
    const gotoPickImages = async () => {

        await ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImg(image.path)
            setModalVisible(!isModalVisible)
        });

    }
    const gotoPickImagesCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setImg(image.path)
            setModalVisible(!isModalVisible)
        });
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <StatusBar barStyle='dark-content' />
            <View style={{ height: 40, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 16, justifyContent: 'space-between', marginVertical: 10, backgroundColor: '#ffffff' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} ><Text style={{ color: '#828282', fontSize: 12 }}>Huỷ</Text></TouchableOpacity>
                <View><Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>Sửa thông tin cá nhân</Text></View>
                <TouchableOpacity onPress={Submit}><Text style={{ color: '#FF5F24', fontSize: 12, fontWeight: '600' }}>Lưu</Text></TouchableOpacity>
            </View>
            <Modal isVisible={isModalVisible}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{ height: '40%' }} onPress={() => setModalVisible(!isModalVisible)} />
                        <View style={{ height: "20%", borderRadius: 8, justifyContent: 'space-around', backgroundColor: '#E5E5E5', paddingHorizontal: 10 }}>
                            <TouchableOpacity onPress={() => gotoPickImagesCamera()}>
                                <Text style={{ fontSize: 16 }}>Chụp ảnh</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => gotoPickImages()}>
                                <Text style={{fontSize: 16 }}>Chọn từ ảnh của bạn</Text>
                            </TouchableOpacity>
                            
                        </View>
                        <TouchableOpacity style={{ height: '40%' }} onPress={() => setModalVisible(!isModalVisible)}></TouchableOpacity>
                    </View>
                </Modal>
            <View style={{ flex: 1, backgroundColor: '#E5E5E5', padding: 16 }}>

                <View style={{ flex: 4 }}>
                    <View style={{ flex: 0.5, borderBottomColor: '#B9B9B9', borderBottomWidth: 0.2, justifyContent: 'space-around', alignItems: 'center', paddingVertical: 10 }}>
                        <Image source={{ uri: img_ ? img_ : 'https://scontent-hkg4-2.xx.fbcdn.net/v/t1.6435-1/p200x200/181485075_288532339403436_5571309197348013484_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=7206a8&_nc_ohc=yRFUARG4vPwAX_2kD6A&_nc_ht=scontent-hkg4-2.xx&tp=6&oh=9249d8c824d1fec57712f0f0fc1eac88&oe=60B75293' }} style={{ width: 70, height: 70, borderRadius: 50 }} />
                        <TouchableOpacity onPress={toggleModal}><Text style={{ fontSize: 14, color: '#FF5F24' }}>Thay đổi ảnh đại diện</Text></TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.5, borderBottomColor: '#B9B9B9', borderBottomWidth: 0.2, justifyContent: 'space-around' }}>
                        <View style={{ flexDirection: 'row', flex: 0.3 }}>
                            <View style={{ flex: 0.3, justifyContent: 'center' }}><Text style={{ color: '#555555' }}>Họ tên</Text></View>
                            <View style={{ flex: 0.7, borderBottomColor: '#B9B9B9', borderBottomWidth: 0.2 }}><TextInput style={{ paddingVertical: 10 }} placeholder='Họ Tên' value={hoten} onChangeText={(val) => sethoten(val)}
                            /></View>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 0.3 }}>
                            <View style={{ flex: 0.3, justifyContent: 'center' }}><Text style={{ color: '#555555' }}>Email</Text></View>
                            <View style={{ flex: 0.7, borderBottomColor: '#B9B9B9', borderBottomWidth: 0.2 }}><TextInput style={{ paddingVertical: 10 }} placeholder='Email' value={gmail} onChangeText={(val) => setgmail(val)} /></View>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 0.3 }}>
                            <View style={{ flex: 0.3, justifyContent: 'center' }}><Text style={{ color: '#555555' }}>Số điện thoại</Text></View>
                            <View style={{ flex: 0.7 }}><TextInput style={{ paddingVertical: 10 }} placeholder='Số điện thoại' value='0352343938' /></View>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 6 }}>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({

});

export default SuaThongTinCaNhan;