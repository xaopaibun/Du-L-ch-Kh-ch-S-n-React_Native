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
  TouchableOpacity,ActivityIndicator ,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch , useSelector} from 'react-redux';

const ChiTietThamQuan = ({navigation}) =>{
  const Data_NhaHang = useSelector(state => state.data_NhaHang);  
  const Data = useSelector(state => state.data_diadiemphobien);
  const dispatch = useDispatch();
  
    const DataKS = useSelector(state => state.data_KS_RS);
    const renderItemKS_RS = ({ item }) => (
        <TouchableOpacity style={{height: 250, width: 160, marginRight: 16, justifyContent:'space-between'}} onPress={() =>{
            dispatch({type : 'ChiTietNhaHang', data : item})
            navigation.navigate('ScreenCTNhaHangKhachSan');
        }}>
        <View style={{flex: 3}}>
            <Image source={{uri : item.images[0]}}  style={{width: 160,height: 150, borderRadius: 5}}/>
        </View>
        <View style={{marginTop: 12, flex: 2, justifyContent:'space-between', paddingTop: 10}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#A2A2A2', fontSize:10, flex: 0.9}}>{item.Loai}</Text>
                <View style={{flexDirection:'row', justifyContent:'space-around', flex: 0.5}}>
                    <Image source={require('../assets/images/sao.png')}  style={{width: 10, height: 10}} />
                    <Image source={require('../assets/images/sao.png')}  style={{width: 10, height: 10}} />
                    <Image source={require('../assets/images/sao.png')}  style={{width: 10, height: 10}} />
                    <Image source={require('../assets/images/sao.png')}  style={{width: 10, height: 10}} />
                    <Image source={require('../assets/images/sao.png')}  style={{width: 10, height: 10}} />
                </View>
            </View>
            <Text style={{fontWeight: '500', fontSize: 14}}>{item.Ten}</Text>
            <Text style={{color: '#3076FE', fontSize: 10}}><Image source={require('../assets/images/Vector.png')}  style={{width: 7, height: 10}}/> {item.DiaChi}</Text>
            <Text style={{fontWeight: '500', fontSize: 12, color: '#FF2424'}}>{item.Gia}</Text>
        </View>
    </TouchableOpacity>
    );
    const renderItemDiaDiem = ({ item }) => (
        <View style={{width: 150, height: 200, marginRight: 16, borderRadius: 5, overflow: 'hidden'}}>
                <Image source={{uri : item.image}} style={{width: 150, height: 200}}/>
                <LinearGradient colors={['rgba(77, 77, 77, 0)','#000000']} style={{position: 'absolute', bottom: 0, zIndex: 1, height: 20, width:'100%'}}>
                    <Text style={{ color:'white', fontSize: 13, fontWeight: '600', backgroundColor:'black',  textAlign:'center'}}>{item.TenDiaDiem}</Text>
                </LinearGradient>
        </View>
      );
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <View style={{height: 40, alignItems: 'center', flexDirection:'row', paddingHorizontal: 16, justifyContent:'space-around', marginVertical: 10, backgroundColor: '#ffffff'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{flex:0.3}}><Image source={require('../assets/images/back.png')}  style={{width: 6, marginRight: 12}}/></TouchableOpacity>
               <View style={{flex:0.6}}><Text style={{fontSize: 14, fontWeight:'bold', color:'black'}}>Bãi Kỳ Co</Text></View>
            </View>
            <ScrollView style={{ flex: 1, backgroundColor: '#E5E5E5'}}>
              <View style={{height: 155, marginTop: 10}}>
                <Image source={require('../assets/images/Rectangle80.png')}  style={{width: '100%', height: '100%'}}/>
              </View>
              <View style={{height: 110,backgroundColor: 'white',  padding: 16, justifyContent: 'space-between'}}>
                <Text style={{fontWeight: 'bold'}}>Bãi Kỳ Co</Text>
                <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 12}}>Vé vào cổng</Text>
                    <Text style={{fontSize: 12, color: '#FF5F24'}}>60.000đ/ vé</Text>
                </View>
                <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 12}}>Vé trung chuyển</Text>
                    <Text style={{fontSize: 12, color: '#FF5F24'}}>40.000đ/ lượt</Text>
                </View>
              </View>
              <View style={{height: 155, marginTop: 20}}>
                <Image source={require('../assets/images/Rectangle82.png')}  style={{width: '100%', height: '100%'}}/>
              </View>
              <View style={{height: 44, padding: 16, flexDirection: 'row', backgroundColor: 'white'}}>
                <Image source={require('../assets/images/dinhvi1.png')}  style={{width: 7.24, height: 10, marginRight: 5}}/>
                <Text style={{fontSize: 10, fontWeight: '400'}}>Quang Trung, TP Quy Nhơn, Bình Định</Text>
              </View>
              <View style={{height: 'auto', padding: 16, marginTop: 20, backgroundColor: 'white'}}>
                <Text style={{fontSize: 12}}>Nằm dưới chân núi Phương Mai thuộc xã Nhơn Lý, cách thành phố Quy Nhơn 25km về phía Đông Bắc, bãi Kỳ Co hiện lên như một bức tranh tuyệt đẹp động lòng người. Không chỉ hấp dẫn với bãi tắm hoang sơ ít dấu chân người mà Kỳ Co còn là điểm thưởng thức hải sản tươi ngon nữa. Để đến được bãi tắm xinh đẹp này, bạn di chuyển ra Quy Nhơn theo nhiều cách khác nhau. Bạn có thể đặt vé máy bay, đi tàu hỏa  với giá vé dao động từ 500k - 800k hoặc đi xe khách với giá vé từ 350k-400k. Từ Quy Nhơn bạn có thể thuê xe máy (khoảng 120k/ngày) hoặc bắt taxi đến Eo Gió (khoảng 250k). Sau đó từ Eo Gió thuê canô hoặc ghe ra Kỳ Co. Ghe thường đậu cách bờ khoảng 100m, bạn sẽ được đưa vào bờ bằng những chiếc thuyền thúng dễ thương.  Nếu muốn thưởng thức những món hải sản đặc trưng của vùng biển, các bạn có thể đặt món rồi nhờ người dân ở đây chế biến luôn. Hải sản ở đây “bao tươi’ nên rất ngon, ra đây không thưởng thức là tiếc lắm nha mấy bạn. Tính chi phí cho việc đi nghe ra bãi Kỳ Co với thưởng thức hải sản chỉ tầm 300k/người thôi nhé!
</Text>
              </View>
              <View style={{height: 30, marginHorizontal: 16, justifyContent:'space-between', flexDirection: 'row', marginTop: 20}}>
                    <Text style={{color: '#000000', fontWeight: 'bold'}}>Địa điểm đề xuất</Text>
                    <TouchableOpacity><Text style={{color: '#9E9E9E', fontSize: 12}}>Xem thêm  <Image source={require('../assets/images/Right.png')}  style={{width: 3, height: 7}}/></Text></TouchableOpacity>
                </View>
                <FlatList
                data = {Data}
                keyExtractor={item => item.id}
                renderItem={renderItemDiaDiem}
                horizontal
                style={{marginLeft: 16}}
                />
              <View style={{height: 30, marginHorizontal: 16, justifyContent:'space-between', flexDirection: 'row', marginTop: 20}}>
                    <Text style={{color: '#000000', fontWeight: 'bold'}}>Nhà hàng đề xuất</Text>
                    <TouchableOpacity><Text style={{color: '#9E9E9E', fontSize: 12}}>Xem thêm  <Image source={require('../assets/images/Right.png')}  style={{width: 3, height: 7}}/></Text></TouchableOpacity>
                </View>
                <FlatList
                    data = {Data_NhaHang}
                    keyExtractor={item => item.id}
                    renderItem={renderItemKS_RS}
                    horizontal
                    style={{marginLeft: 16}}
                />
                <View style={{height: 30, marginHorizontal: 16, justifyContent:'space-between', flexDirection: 'row', marginTop: 20}}>
                    <Text style={{color: '#000000', fontWeight: 'bold'}}>Khách sạn & Resort</Text>
                    <TouchableOpacity><Text style={{color: '#9E9E9E', fontSize: 12}}>Xem thêm  <Image source={require('../assets/images/Right.png')}  style={{width: 3, height: 7}}/></Text></TouchableOpacity>
                </View>
                <FlatList
                    data = {DataKS}
                    keyExtractor={item => item.id}
                    renderItem={renderItemKS_RS}
                    horizontal
                    style={{marginLeft: 16}}
                />
            </ScrollView>
        </SafeAreaView>
    );
}  
export default ChiTietThamQuan;