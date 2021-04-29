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

import LinearGradient from 'react-native-linear-gradient';
const Profile = ({navigation}) =>{
  const Data = useSelector(state => state.data_diadiemphobien);
    const dispatch = useDispatch();
    const renderItemDiaDiem = ({ item }) => (
        <TouchableOpacity onPress={() => {
            dispatch({ type: 'ChiTietDiaDiem', data: item })
            navigation.navigate('ScreenCTDiaDiem');
        }} style={{ width: 150, height: 200, marginRight: 16, borderRadius: 5, overflow: 'hidden' }}>
            <ImageBackground source={{ uri: item.image }} style={{ width: 150, height: 200 }} > 
                <Image source={require('../assets/images/abc.png')} style={{ width: 150, height: 200 }} />
                <View style={{ position: 'absolute', bottom: 0, zIndex: 1, height: 20, width: '100%' }}>
                    <Text style={{ color: 'white', fontSize: 13, fontWeight: '600', textAlign: 'center' }}>{item.TenDiaDiem}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
    return(
        <SafeAreaView style={{flex:1, backgroundColor: 'white'}}>
             <View style={{height: 40, alignItems: 'center',flexDirection:'row', paddingHorizontal: 16, justifyContent:'space-between', marginVertical: 10, backgroundColor: '#ffffff'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require('../assets/images/back.png')}  style={{width: 7, height: 12}}/></TouchableOpacity>
                <View><Text style={{fontSize: 14, fontWeight:'bold', color:'black'}}>Thông tin cá nhân</Text></View>
                <View></View>
            </View>
            <ScrollView style={{flex: 1, backgroundColor:'#F8F8F8'}}>
                <View style={{height: 100, width: '100%', flexDirection: 'row'}}>
                  <View style={{flex: 3, justifyContent: 'space-around', alignItems: 'center'}}>
                        <Image source={{uri :'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/156598791_2203273959820668_1209852453979302780_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=WEV97IplNlgAX8XPpG-&_nc_ht=scontent.fhan3-1.fna&oh=f22b691c0fe1895e745ae77dc67c89a6&oe=608A53D7'}}  style={{width: 65, height: 65, borderRadius: 50}} />
                        <Text style={{fontSize: 15, fontWeight: '500'}}>Phạm Jin</Text>
                  </View>
                  <View style={{flex: 7, paddingRight: 16}}>
                      <View style={{flex: 7, flexDirection: 'row'}}>
                          <TouchableOpacity onPress={() => navigation.navigate('NguoiTheoDoi')} style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
                              <Text>100</Text>
                              <Text style={{fontSize: 12, color: '#616161'}}>Người theo dõi</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => navigation.navigate('NguoiDangTheoDoi')} style={{flex: 1,  justifyContent: 'space-around', alignItems: 'center'}}>
                            <Text>200</Text>
                            <Text style={{fontSize: 12, color: '#616161'}}>Đang theo dõi</Text>
                          </TouchableOpacity>
                      </View>
                      <TouchableOpacity onPress={() => navigation.navigate('SuaThongTinCaNhan')} style={{flex: 3, borderColor: '#A2A2A2',  borderWidth: 1,borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>Sửa thông tin cá nhân</Text>
                      </TouchableOpacity>
                  </View>
                </View>
          <View style={{height: 30, marginHorizontal: 16, justifyContent:'space-between', flexDirection: 'row', marginTop: 20}}>
                <Text style={{color: '#000000', fontWeight: 'bold'}}>Bài viết đánh giá</Text>
                <TouchableOpacity onPress={() =>{
                    navigation.navigate('ScreenDiaDiemPhoBien');
                }}>
                  <Text style={{color: '#9E9E9E', fontSize: 12}}>Xem thêm  <Image source={require('../assets/images/Right.png')}  style={{width: 3, height: 7}}/></Text>
                </TouchableOpacity>
            </View>
          <FlatList
              data = {Data}
              keyExtractor={item => item.id}
              renderItem={renderItemDiaDiem}
              horizontal={true}
              style={{marginLeft: 16}}
          />
          <View style={{height: 20, marginHorizontal: 16,marginVertical: 10}}>
              <Text style={{color: '#000000', fontWeight: 'bold'}}>Xem ảnh</Text>
          </View>
          <View style={{height: 160,paddingHorizontal: 16}}>
                  <View style={{flexDirection: 'row', flex: 1, justifyContent:'space-between', borderRadius:5, overflow:'hidden'}}>
                      <View style={{flex: 4}}><Image source={{uri : 'https://cungphuot.info/wp-content/uploads/2016/07/kinh-nghiem-du-lich-trang-an.jpg'}}  style={{width: '100%', height: '100%'}}/></View>
                      <View style={{flex: 6, marginLeft: 6, justifyContent: 'space-between'}}>
                          <View style={{flex: 1, marginBottom: 6}}><Image source={{uri : 'https://anh.eva.vn/upload/1-2017/images/2017-03-11/1-1489215422-width500height329.jpg'}} style={{width: '100%', height: '100%'}}/></View>
                          <View style={{flex: 1, flexDirection:'row', justifyContent:'space-between'}}>
                              <View style={{flex: 1, marginRight: 3}}><Image source={{uri : 'https://dulich.ninhbinh.vn/wp-content/uploads/2019/05/Quan-the-trang-an.jpg.jpg'}}  style={{width: '100%', height: '100%'}}/></View>
                              <View style={{flex: 1, marginLeft: 3, position:'relative'}}>
                                <Image source={{uri : 'https://nhandan.com.vn/imgold/media/k2/items/src/4305/641eed4728aca0141ba90bbfb81c6ef8.jpg'}}  style={{width: '100%', height: '100%'}}/> 
                                <TouchableOpacity style={{width: '100%', height: '100%',backgroundColor: 'rgba(0, 0, 0, 0.4)', position: 'absolute', left: 0, right: 0, zIndex: 2, justifyContent: 'center', alignItems: 'center'}}>
                                  <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>+</Text>
                                </TouchableOpacity>
                              </View>
                          </View>
                      </View>
                  </View>
          </View>
          <View style={{height: 30, marginHorizontal: 16, justifyContent:'space-between', flexDirection: 'row', marginTop: 20}}>
                <Text style={{color: '#000000', fontWeight: 'bold'}}>Lịch trình của tôi</Text>
                <TouchableOpacity>
                  <Text style={{color: '#9E9E9E', fontSize: 12}}>Xem thêm  <Image source={require('../assets/images/Right.png')}  style={{width: 3, height: 7}}/></Text>
                </TouchableOpacity>
          </View>
          <TouchableOpacity style={{width: 300, height: 230, marginLeft: 16, backgroundColor:'#ffffff', borderRadius: 5, overflow:'hidden'}}>
        <View style={{flexDirection: 'row', flex: 1, justifyContent:'space-between'}}>
            <View style={{flex: 4}}><Image source={{uri : 'https://homestay.review/wp-content/uploads/2020/05/20190207_041833_1_2-1024x682.jpg'}}  style={{width: '100%', height: '100%'}}/></View>
            <View style={{flex: 6, marginLeft: 6, justifyContent: 'space-between'}}>
                <View style={{flex: 1, marginBottom: 6}}><Image source={{uri : 'https://dulichchat.com/wp-content/uploads/2019/03/doi-dua-tam-diep-dia-diem-moi-o-thanh-dia-song-ao-ninh-binh-dulichchat-6.jpg'}} style={{width: '100%', height: '100%'}}/></View>
                <View style={{flex: 1, flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{flex: 1, marginRight: 3}}><Image source={{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwLn-cncoD65LIVMFbbbFt2W3Rd9vUxagR8zyPgh2SjLwmkewokysb_aYXNLLlRhe14u8&usqp=CAU'}}  style={{width: '100%', height: '100%'}}/></View>
                    <View style={{flex: 1, marginLeft: 3}}><Image source={{uri : 'https://znews-photo.zadn.vn/w660/Uploaded/qhj_pwqvdvicbu/2019_03_16/20190207_104636_1_1.jpg'}}  style={{width: '100%', height: '100%'}}/></View>
                </View>
            </View>
        </View>
        <View style={{flex: 0.35,  padding: 16}}>
            <View style={{flexDirection:'row', flex: 1}}>
                <View style={{flexDirection:'row', flex: 1}}>
                    <Text style={{color:'#000000', fontSize: 14, fontWeight: '600'}}>Đồi Dứa TP Tam điệp</Text>
                    <Text style={{color:'#494949', fontSize: 14}}> (1 Ngày)</Text>
                </View>
                <View style={{flexDirection:'row', flex: 0.5, justifyContent:'flex-end'}}>
                    <Image source={require('../assets/images/Vector.png')}  style={{width: 7, height: 10}}/>
                    <Text style={{color: '#3076FE', fontSize: 10}}> Việt Nam</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', flex: 1}}>
                <View style={{flexDirection: 'row', flex: 0.6}}>
                    <Image source={{uri : 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/156598791_2203273959820668_1209852453979302780_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=WEV97IplNlgAX8XPpG-&_nc_ht=scontent.fhan3-1.fna&oh=f22b691c0fe1895e745ae77dc67c89a6&oe=608A53D7'}}  style={{width: 25, height: 25, borderRadius: 50}}/>
                    <View style= {{justifyContent:'space-between', marginLeft: 8}}>
                        <Text style={{fontSize: 10, color:'black'}}>Phạm Jin</Text>
                        <Text style={{fontSize: 8, color:'#494949'}}>3 giờ trước</Text>
                    </View>
                </View>
                <View style={{flex: 0.4, justifyContent:'flex-end'}}>
                <TouchableOpacity style={{backgroundColor: '#FF5F24', borderRadius: 5, height: 20,flex: 1, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'#FFFFFF', fontSize: 10, lineHeight: 12}}>300.000 đ/ người</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    </TouchableOpacity>
      </ScrollView>
 </SafeAreaView>
        
    );
}
export default Profile;