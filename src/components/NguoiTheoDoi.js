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
const renderItemNguoiTheoDoi = ({item}) =>{
    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#B9B9B9', borderBottomWidth: 0.2, paddingVertical: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={ {uri : item.avatar}} style={{height: 29, width: 29, borderRadius: 50, marginRight: 10}}/>
                <Text>{item.Ten}</Text>
            </View>
            <View>
                <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center',height: 20, width: 60, borderColor: '#FF5F24', borderWidth: 1, borderRadius: 5}}>
                        <Text style={{color: '#FF5F24', fontSize: 10}}>Theo dõi</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    
}
const DuLieuNguoiTheoDoi = [
    {
        "id" : "1",
        "avatar" : "https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-9/156598791_2203273959820668_1209852453979302780_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=5-9TFpB7EU0AX9svauF&_nc_ht=scontent.fhph1-2.fna&oh=bf60e3fad55b2061c323a0fa075160b3&oe=609E1A57",
        "Ten" : "Phạm Jin"
    },
    {
        "id" : "2",
        "avatar" : "https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-1/p100x100/99108828_3270379889853880_4306666082539667456_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=7206a8&_nc_ohc=d7X68DDn0VYAX-O9i9G&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan3-1.fna&tp=6&oh=5ea5a02fac4e2f7c50df32398d75b552&oe=609B5DF6",
        "Ten" : "Hoàng Ngọc Long"
    },
    {
        "id" : "3",
        "avatar" : "https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-1/p100x100/169808150_2853066171600273_1880266354976268381_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=7206a8&_nc_ohc=WZIZ212TTW4AX8pXYtJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan3-3.fna&tp=6&oh=7a2f876c8a87ae36f04de58a646e6db2&oe=609C8D0E",
        "Ten" : "Ngô Đức Thìn"
    }
]
const NguoiTheoDoi = ({navigation}) =>{
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
             <View style={{height: 40, alignItems: 'center',flexDirection:'row', paddingHorizontal: 16, justifyContent:'space-between', marginVertical: 10, backgroundColor: '#ffffff'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require('../assets/images/back.png')}  style={{width: 7, height: 12}}/></TouchableOpacity>
                <View><Text style={{fontSize: 14, fontWeight:'bold', color:'black'}}>Người Theo Dõi</Text></View>
                <View></View>
            </View>
            <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
                <View style={{marginVertical: 16, height: 'auto', padding: 16, backgroundColor: 'white'}}>
               
                    <FlatList
                        data = {DuLieuNguoiTheoDoi}
                        keyExtractor={item => item.id}
                        renderItem={renderItemNguoiTheoDoi}
                       
                    /> 
                   
                </View>
            </View>
        </SafeAreaView>
    );
}
export default NguoiTheoDoi;