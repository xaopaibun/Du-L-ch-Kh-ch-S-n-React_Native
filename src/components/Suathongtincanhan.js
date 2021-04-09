import React from 'react';
import { SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,Image,TextInput,ImageBackground,View,TouchableOpacity,FlatList, Alert } from 'react-native';
const SuaThongTinCaNhan = ({navigation}) =>{
   
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <StatusBar barStyle='dark-content'/>
            <View style={{height: 25, flexDirection:'row', paddingHorizontal: 16, justifyContent:'space-between', marginVertical: 10, backgroundColor: '#ffffff'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} ><Text style={{color:'#828282', fontSize: 12}}>Huỷ</Text></TouchableOpacity>
                <View><Text style={{fontSize: 14, fontWeight:'bold', color:'black'}}>Sửa thông tin cá nhân</Text></View>
                <TouchableOpacity onPress={() =>Alert.alert('Thông báo', 'Bạn đã lưu thành công')}><Text style={{color:'#828282', fontSize: 12}}>Lưu</Text></TouchableOpacity>
            </View>
            <View style={{flex:1, backgroundColor: '#E5E5E5', padding: 16}}>
                <View  style={{flex: 4}}>
                    <View style={{flex: 0.4,borderBottomColor: '#B9B9B9', borderBottomWidth: 0.2, justifyContent: 'space-around', alignItems: 'center', paddingVertical: 10}}>
                        <Image source={{uri :'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/156598791_2203273959820668_1209852453979302780_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=WEV97IplNlgAX8XPpG-&_nc_ht=scontent.fhan3-1.fna&oh=f22b691c0fe1895e745ae77dc67c89a6&oe=608A53D7'}}  style={{width: 70, height: 70, borderRadius: 50}} />
                       <TouchableOpacity><Text style={{fontSize: 14,color: '#FF5F24'}}>Thay đổi ảnh đại diện</Text></TouchableOpacity>
                    </View>
                    <View style={{flex: 0.6, borderBottomColor: '#B9B9B9', borderBottomWidth: 0.2,justifyContent: 'space-around'}}>
                        <View style={{flexDirection: 'row', flex: 0.3}}>
                            <View style={{flex: 0.3, justifyContent: 'center'}}><Text style={{color: '#555555'}}>Họ tên</Text></View>
                            <View style={{flex: 0.7, borderBottomColor: '#B9B9B9', borderBottomWidth: 0.2}}><TextInput style={{paddingVertical: 10}} placeholder='họ tên'/></View>
                        </View>
                        <View style={{flexDirection: 'row', flex: 0.3}}>
                            <View style={{flex: 0.3, justifyContent: 'center'}}><Text style={{color: '#555555'}}>Email</Text></View>
                            <View style={{flex: 0.7, borderBottomColor: '#B9B9B9', borderBottomWidth: 0.2}}><TextInput style={{paddingVertical: 10}} placeholder='họ tên'/></View>
                        </View>
                        <View style={{flexDirection: 'row', flex: 0.3}}>
                            <View style={{flex: 0.3, justifyContent: 'center'}}><Text style={{color: '#555555'}}>Số điện thoại</Text></View>
                            <View style={{flex: 0.7}}><TextInput style={{paddingVertical: 10}} placeholder='họ tên'/></View>
                        </View>
                    </View>
                </View>
                <View style={{flex: 6}}>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    
});

export default SuaThongTinCaNhan;