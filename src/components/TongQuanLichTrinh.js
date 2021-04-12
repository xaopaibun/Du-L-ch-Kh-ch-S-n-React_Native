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
import LinearGradient from 'react-native-linear-gradient';
import { set } from 'react-native-reanimated';
import { useDispatch , useSelector} from 'react-redux';
const Loai = ['Lịch trình', 'Máy bay', 'Khách sạn', 'Tham quan'];
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
      <View>
      <ScrollView>
            <View style={{marginVertical: 10,  position: 'relative'}}>
              <View style={{height: 30, marginHorizontal: 16, justifyContent:'space-between', flexDirection: 'row'}}>
                <Text style={{color: '#000000', fontWeight: 'bold'}}>Kế hoạch</Text>
                <TouchableOpacity ><Text style={{color: '#9E9E9E', fontSize: 12}}>Tất cả <Image source={require('../assets/images/Right.png')}  style={{width: 3, height: 7}}/></Text></TouchableOpacity>
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
            </ScrollView>
            <View style={{width: '100%',padding: 16, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', left: 0, bottom: 0, zIndex: 1}}>
                <Text style={{color: '#FF5F24', fontSize: 16, fontWeight: 'bold'}}>5,200,000 đ/ người</Text>
                <TouchableOpacity   style={{ height: 25, width: 71,justifyContent: 'center', alignItems: 'center',backgroundColor: '#FF5F24', borderRadius: 5}}>
                      <Text style={{color: 'white', fontWeight: '500', fontSize: 12}}>Đặt ngay</Text>
                </TouchableOpacity>
            </View>
          
          </View>
    );
  }
    return(
        <View style={{flex: 1}}>
           <StatusBar barStyle='light-content'/>
          
          <ImageBackground source={{uri : 'https://dep.com.vn/wp-content/uploads/2019/02/shutterstock_1068209438.jpg'}} resizeMode="stretch" style={{ height: 180}} />
          <View style={{height: 100,justifyContent: 'center', alignItems: 'center', marginTop: -25.5, justifyContent: 'space-around'}}>
            <Image source={{uri : 'https://dep.com.vn/wp-content/uploads/2019/02/shutterstock_1068209438.jpg'}}  style={{width: 50, height: 50, borderRadius: 50}}/>
            <Text>Quy Nhơn, Bình Định</Text>
            <Text>5/12 - 10/12</Text>
          </View>
          <ScrollView style={{height: 30}} horizontal>
            {
                Loai.map((val, index) =>{
                  const [active, setactive] = React.useState(false);
                    return(
                      <TouchableOpacity  onPress={() => setactive(!active)} style={{ marginHorizontal: 10,height: 30, width: 80,justifyContent: 'center', alignItems: 'center',backgroundColor: active?'#FF5F24':'#ECF1FF', borderRadius: 5}}>
                      <Text style={{color: active?'white':'black', fontWeight: '500', fontSize: 12}}>{val}</Text>
                    </TouchableOpacity>
                  );
                })
            }
          </ScrollView >
          
        </View>
    );
}
export default ScreenTongQuanLichTrinh;