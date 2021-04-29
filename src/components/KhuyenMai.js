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

const ScreenKhuyenMai = ({ navigation }) => {
    const dispatch = useDispatch();
    const Data_KhuyenMai = useSelector(state => state.data_khuyenmai);
    const renderItemKhuyenMai = ({ item }) => (
        <TouchableOpacity onPress={() => {
            dispatch({ type: 'ChiTietKM', item: item });
            navigation.navigate('ChiTietKM');
        }} style={{ height: 215, borderRadius: 5, overflow: 'hidden', backgroundColor: '#ffffff', marginBottom: 16 }}>
            <Image source={{ uri: item.image }} resizeMode="stretch" style={{ height: 150, borderRadius: 5 }} />
            <View style={{ padding: 16 }}>
                <Text style={{ fontSize: 13, fontWeight: '500' }} numberOfLines={1}>{item.content}</Text>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 12, color: '#575757' }} numberOfLines={1}>Thời gian áp dụng: {item.thoigian}</Text>
                    <Text style={{ fontSize: 10, color: '#FF2424' }} numberOfLines={1}>{item.hsd}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <StatusBar barStyle='dark-content' />
            <View style={{ height: 40, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 16, justifyContent: 'space-around', marginVertical: 10, backgroundColor: '#ffffff' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ flex: 0.3 }}><Image source={require('../assets/images/back.png')} style={{ width: 6, marginRight: 12 }} /></TouchableOpacity>
                <View style={{ flex: 0.6 }}><Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>Khuyến Mãi</Text></View>
            </View>
            <View style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
                <FlatList
                    data={Data_KhuyenMai}
                    keyExtractor={item => item.id}
                    renderItem={renderItemKhuyenMai}
                    style={{ padding: 16, marginBottom: 12 }}
                />
            </View>


        </SafeAreaView>
    );
}
export default ScreenKhuyenMai;