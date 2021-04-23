import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
 Image,
 ImageBackground,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import LinearGradient from 'react-native-linear-gradient';

import { useDispatch , useSelector} from 'react-redux';
// const Loai = ['Lịch trình', 'Máy bay', 'Khách sạn', 'Tham quan'];
const ScreenTongQuanLichTrinh =  ({navigation}) => {
  const Data = useSelector(state => state.data_diadiemphobien);
  const renderItemDiaDiem = ({ item }) => (
    <TouchableOpacity style={{width: 150, height: 200, marginRight: 16,  borderRadius: 5, overflow: 'hidden'}}>
            <Image source={{uri : item.image}} style={{width: 150, height: 200}}/>
            <LinearGradient colors={['rgba(77, 77, 77, 0)','#000000']} style={{position: 'absolute', bottom: 0, zIndex: 1, height: 20, width:'100%'}}>
                <Text style={{ color:'white', fontSize: 13, fontWeight: '600', backgroundColor:'black'}}>{item.TenDiaDiem}</Text>
            </LinearGradient>
    </TouchableOpacity>
  );
  const LichTrinh = () =>{
    return (
      <View style={{backgroundColor: '#E5E5E5'}}>
      <ScrollView>
            <View style={{marginVertical: 10,  position: 'relative'}}>
              <View style={{height: 30, marginHorizontal: 16, justifyContent:'space-between', flexDirection: 'row'}}>
                <Text style={{color: '#000000', fontWeight: 'bold'}}>Kế hoạch</Text>
                <TouchableOpacity onPress={() => navigation.navigate('ChiTietLichTrinh')} ><Text style={{color: '#9E9E9E', fontSize: 12}}>Tất cả <Image source={require('../assets/images/Right.png')}  style={{width: 3, height: 7}}/></Text></TouchableOpacity>
              </View>
              <FlatList
                data = {Data}
                keyExtractor={item => item.id}
                renderItem={renderItemDiaDiem}
                horizontal
                style={{marginLeft: 16}}
            />
            </View>
            <View style={{marginLeft: 16}}>
              <Text style={{color: '#000000', fontWeight: 'bold',  marginVertical: 10}}>Chuyến đi gồm</Text>
              <View style={{flexDirection: 'row', marginHorizontal: 6, alignItems: 'center'}}>
                  <Image  source={require('../assets/images/giuong.png')} style={{height: 12, width: 17}}/>
                  <View style={{marginHorizontal: 8}}>
                    <Text style={{fontSize: 13, fontWeight: '500'}}>Khách sạn</Text>
                    <Text style={{color: '#9A9A9A', fontSize: 12}}>1 khách sạn, 5 ngày 4 đêm</Text>
                  </View>
              </View>
              <View style={{flexDirection: 'row', marginHorizontal: 6,alignItems: 'center' }}>
                  <Image  source={require('../assets/images/maybay.png')} style={{height: 12, width: 17}}/>
                  <View style={{marginHorizontal: 8}}>
                    <Text style={{fontSize: 13, fontWeight: '500'}}>Máy bay</Text>
                    <Text style={{color: '#9A9A9A', fontSize: 12}}>2 vé khứ hồi</Text>
                  </View>
              </View>
              <Text style={{color: '#000000', fontWeight: 'bold', marginVertical: 10}}>Thành viên</Text>
              <View style={{flexDirection: 'row', marginHorizontal: 10}}>
                <Image source={{uri : 'https://dep.com.vn/wp-content/uploads/2019/02/shutterstock_1068209438.jpg'}}  style={{width: 50, height: 50, borderRadius: 50}}/>
              </View>
            <Text style={{color: '#000000', fontWeight: 'bold',  marginVertical: 10}}>Vé thăm quan</Text>
            <View style={{flexDirection: 'row', marginHorizontal: 6,alignItems: 'center' }}>
                  <Image  source={require('../assets/images/ve.png')} style={{height: 17, width: 17}}/>
                  <View style={{marginHorizontal: 8}}>
                    <Text style={{fontSize: 13, fontWeight: '500'}}>Vé vào</Text>
                    <Text style={{color: '#9A9A9A', fontSize: 12}}>12 vé, 6 địa điểm</Text>
                  </View>
              </View>
            </View>
            <View style={{height: 70}}/>
            </ScrollView>
            <View style={{ width: '100%',padding: 16, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', left: 0, bottom: 0, zIndex: 1}}>
                <Text style={{color: '#FF5F24', fontSize: 16, fontWeight: 'bold'}}>5,200,000 đ/ người</Text>
                <TouchableOpacity   style={{ height: 25, width: 71,justifyContent: 'center', alignItems: 'center',backgroundColor: '#FF5F24', borderRadius: 5}}>
                      <Text style={{color: 'white', fontWeight: '500', fontSize: 12}}>Đặt ngay</Text>
                </TouchableOpacity>
            </View>
          
          </View>
    );
  }
  const ChiTietKhachSan = () =>{
    return(
      <View style={{flex: 10, padding: 16, marginBottom: 10, backgroundColor: '#E5E5E5' }}>
        <View style={{flex: 10}}>
          <View style={{height: 70, justifyContent: 'space-between', marginVertical: 10}}>
            <Text style={{fontWeight: '500'}}>Khách sạn Phương Đông</Text>
            <Text  style={{fontSize: 12}}>- 1 Phòng VIP - 2 người</Text>
            <Text style={{fontSize: 12}}>- 4 ngày 3 đêm</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                          <Text style={{fontSize: 13}}>Giá phòng</Text>
                          <Text style={{fontSize: 15}}><Text style={{color: '#F8530D', fontWeight: '600'}}>850,000</Text> VND</Text>
                      </View>
                      <View style={{marginTop: 10,flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                          <Text style={{fontSize: 13}}>Thuế và phí dịch vụ</Text>
                          <Text style={{fontSize: 15}}><Text style={{color: '#F8530D', fontWeight: '600'}}>360,000</Text> VND</Text>
                      </View>
        </View>
                    <View style={{flex: 10, justifyContent: 'flex-end'}}>
                      <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 25, backgroundColor: '#FFFFFF', borderRadius: 5, flexDirection: 'row'}}>
                      <Image source={require('../assets/images/timkiem2.png')}  style={{width: 12, height: 12, marginRight: 5}}/>
                        <Text style={{color: '#FF5F24', fontSize: 10, fontWeight: '600'}}>Tìm khách sạn khác</Text>
                       
                      </TouchableOpacity>
                    </View>
      </View>
      
    );
  }
  const MayBay = () =>{
    return(
      <View style={{flex:1,  backgroundColor: '#E5E5E5' }}>
          
          <View style={{alignItems: 'center', justifyContent: 'space-around', flex: 0.4}}>
            <Text>Hà Nội - Quy Nhơn</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Text>HAN</Text>
              <Image source={require('../assets/images/BAY.png')}  style={{width: 9.44, height: 8.64, marginHorizontal: 5}}/>
              <Text>UIH</Text>
            </View>
            <Text>Thứ 5, 25 tháng 4, 2021</Text>
            <Image source={require('../assets/images/vietjet-air-logo-E99E51D179-seeklogo.com.png')}  style={{width: 40, height: 15}}/>
            <Text style={{fontWeight: '500',  textAlign: 'center'}}>Chuyến bay: VJ345</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View><Text style={{fontWeight: '500',  textAlign: 'center'}} >HAN {'\n'} 13:00</Text></View>
              <View style={{width: 90, height: 0.5, backgroundColor: '#828282'}}></View>
              <View><Text style={{color: '#828282', fontSize: 12, textAlign: 'center'}}>1h35m {'\n'} Hạng Thương gia</Text></View>
              <View style={{width: 90, height: 0.5, backgroundColor: '#828282'}}></View>
              <View><Text style={{ fontWeight: '500', textAlign: 'center'}}>UIH {'\n'} 14:35</Text></View>
            </View>
            <View style={{width: 165, height: 1, backgroundColor: 'black'}}></View>
          </View>

          <View style={{alignItems: 'center', justifyContent: 'space-around', flex: 0.4}}>
            <Text>Quy Nhơn - Hà Nội</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Text>UIH</Text>
              <Image source={require('../assets/images/BAY.png')}  style={{width: 9.44, height: 8.64, marginHorizontal: 5}}/>
              <Text>HAN</Text>
            </View>
            <Text>Thứ 3, 30 tháng 4, 2021</Text>
            <Image source={require('../assets/images/vietjet-air-logo-E99E51D179-seeklogo.com.png')}  style={{width: 40, height: 15}}/>
            <Text style={{fontWeight: '500',  textAlign: 'center'}}>Chuyến bay: VJ345</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View><Text style={{fontWeight: '500',  textAlign: 'center'}} >HAN {'\n'} 13:00</Text></View>
              <View style={{width: 90, height: 0.5, backgroundColor: '#828282'}}></View>
              <View><Text style={{color: '#828282', fontSize: 12, textAlign: 'center'}}>1h35m {'\n'} Hạng Thương gia</Text></View>
              <View style={{width: 90, height: 0.5, backgroundColor: '#828282'}}></View>
              <View><Text style={{ fontWeight: '500', textAlign: 'center'}}>UIH {'\n'} 14:35</Text></View>
            </View>
           
          </View>
          <View style={{flex: 0.2, paddingHorizontal: 16}}>
             <TouchableOpacity style={{ shadowColor: "rgba(174, 174, 174, 0.3)",
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.30,
                  shadowRadius: 4.65,

                  elevation: 8,justifyContent: 'center', alignItems: 'center', height: 25, backgroundColor: '#FFFFFF', borderRadius: 5, flexDirection: 'row'}}>
              <Image source={require('../assets/images/timkiem2.png')}  style={{width: 12, height: 12, marginRight: 5}}/>
                  <Text style={{color: '#FF5F24', fontSize: 10, fontWeight: '600'}}>Tìm chuyến bay khác</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: '100%',padding: 16, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', left: 0, bottom: 0, zIndex: 1}}>
                <Text style={{color: '#FF5F24', fontSize: 16, fontWeight: 'bold'}}>2,600,000 đ/ người</Text>
                <TouchableOpacity onPress={() => navigation.navigate('ChiTietLichTrinh')}  style={{ height: 25, width: 71,justifyContent: 'center', alignItems: 'center',backgroundColor: '#FF5F24', borderRadius: 5}}>
                      <Text style={{color: 'white', fontWeight: '500', fontSize: 12}}>Đặt ngay</Text>
                </TouchableOpacity>
            </View>
      </View>
    );
  }
  const ThamQuan = () =>{
    return(
      <View style={{flex: 1, paddingHorizontal: 16,  backgroundColor: '#E5E5E5'}}>
          <View style={{flex: 0.9}}>
            <View style={{height: 86, flexDirection: 'row', padding: 16, backgroundColor: 'white', borderRadius: 5}}>
              <View style={{justifyContent: 'space-between', flex: 5, marginVertical: 10}}>
                <Text style={{fontWeight: '500', fontSize: 13}}>Bãi Kỳ Co</Text>
                <Text style={{color: '#828282', fontSize: 12}}>5/12</Text>
                <Text style={{fontWeight: 'bold', fontSize: 12}}>120.000đ/ 2 vé/ 2 người</Text>
              </View>
              <View style={{flex: 5, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                <TouchableOpacity onPress = {() => navigation.navigate('ChiTietThamQuan')}><Text style={{fontSize: 10, color: '#FF5F24'}}>Chi tiết</Text></TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{flex: 0.1}}>
             <TouchableOpacity style={{ shadowColor: "rgba(174, 174, 174, 0.3)",
                                      shadowOffset: {
                                        width: 0,
                                        height: 4,
                                      },
                                      shadowOpacity: 0.30,
                                      shadowRadius: 4.65,
                                      elevation: 8,justifyContent: 'center', alignItems: 'center', height: 25, backgroundColor: '#FFFFFF', borderRadius: 5, flexDirection: 'row'}}>
              <Image source={require('../assets/images/timkiem2.png')}  style={{width: 12, height: 12, marginRight: 5}}/>
                  <Text style={{color: '#FF5F24', fontSize: 10, fontWeight: '600'}}>Tìm điểm khác</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
  
    return(
        <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
           <StatusBar barStyle='light-content'/>
          
          <ImageBackground source={{uri : 'https://icdn.dantri.com.vn/thumb_w/640/2020/01/09/7-1578580921457.jpg'}} resizeMode="stretch" style={{ height: 180}} >
          <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require('../assets/images/back2.png')}  style={{marginTop: 50,marginLeft: 20, width: 7, height: 12}}/></TouchableOpacity>
          </ImageBackground>
          <View style={{height: 90,justifyContent: 'center', alignItems: 'center', marginTop: -30, justifyContent: 'space-around'}}>
            <Image source={{uri : 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/156598791_2203273959820668_1209852453979302780_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7mR09h9zVWcAX_rv-6N&_nc_ht=scontent.fhan3-1.fna&oh=2b612c4b76f8ba943ae89f84170ce6b6&oe=60A20ED7'}}  style={{width: 50, height: 50, borderRadius: 50}}/>
            <Text>Quy Nhơn, Bình Định</Text>
            <Text>25/04 - 30/04</Text>
          </View>
          <View style={{flex: 1}}>
          <Tab.Navigator tabBarOptions={
              {
                  tabStyle:{backgroundColor: '#E5E5E5'},
                  
                  pressOpacity:1
              }
          }>
              <Tab.Screen name="LichNgay1FDSG" component={LichTrinh} options = {{tabBarLabel : ({focused}) => 
              <View style={{ marginHorizontal: 10,height: 30, width: 80,justifyContent: 'center', alignItems: 'center',backgroundColor: focused?'#FF5F24':'#ECF1FF', borderRadius: 5}}>
                 <Text style={{color: focused?'white':'black', fontWeight: '500', fontSize: 12}}>Lịch Trình</Text>
              </View> }}/>

              <Tab.Screen name="LichNgay1FDSGEW" component={MayBay} options = {{tabBarLabel : ({focused}) => 
              <View style={{ marginHorizontal: 10,height: 30, width: 80,justifyContent: 'center', alignItems: 'center',backgroundColor: focused?'#FF5F24':'#ECF1FF', borderRadius: 5}}>
                 <Text style={{color: focused?'white':'black', fontWeight: '500', fontSize: 12}}>Máy Bay</Text>
              </View> }}/>

              <Tab.Screen name="LichNgay1FDSG3" component={ChiTietKhachSan} options = {{tabBarLabel : ({focused}) => 
              <View style={{ marginHorizontal: 10,height: 30, width: 80,justifyContent: 'center', alignItems: 'center',backgroundColor: focused?'#FF5F24':'#ECF1FF', borderRadius: 5}}>
                 <Text style={{color: focused?'white':'black', fontWeight: '500', fontSize: 12}}>Khách Sạn</Text>
              </View> }}/>

              <Tab.Screen name="LichNgay1FDSG3de" component={ThamQuan} options = {{tabBarLabel : ({focused}) => 
              <View style={{ marginHorizontal: 10,height: 30, width: 80,justifyContent: 'center', alignItems: 'center',backgroundColor: focused?'#FF5F24':'#ECF1FF', borderRadius: 5}}>
                 <Text style={{color: focused?'white':'black', fontWeight: '500', fontSize: 12}}>Tham Quan</Text>
              </View> }}/>
          </Tab.Navigator>
          </View>
        </View>
    );
}
export default ScreenTongQuanLichTrinh;