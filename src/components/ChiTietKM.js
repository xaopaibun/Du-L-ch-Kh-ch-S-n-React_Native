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
import { useDispatch , useSelector} from 'react-redux';

const ChiTietKM = ({navigation}) =>{
    const item= useSelector(state => state.chitietKM);
    
    return (
        <View style={{flex: 1}}>
             <StatusBar barStyle='light-content'/>
            <Image source={{uri : item.image}}  style={{height : 180,width: '100%', borderRadius: 5}}/>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{position: 'absolute', top: 50, left: 10, zIndex: 9}}><Image source={require('../assets/images/back2.png')}  style={{width: 8, marginRight: 12}}/></TouchableOpacity>
            <View style={{ padding: 16, backgroundColor: '#E5E5E5', flex: 1}}>
                <Text style={{lineHeight: 25}}>

                <Text style={{fontWeight: '600'}}>Điều kiện áp dụng:</Text>{'\n'}

                - Áp dụng cho tất cả các khách sạn trong nước và quốc tế của <Text style={{fontWeight: '600'}}>OKGO </Text>với đơn hàng từ <Text style={{color: '#FF5F24'}}>1.000.000 Đ</Text>trở lên.{'\n'}

                - Thời gian chương trình: <Text style={{color: '#FF5F24'}}>{item.thoigian}</Text>{'\n'}

               - Áp dụng cho khách hàng đặt phòng trực tiếp trên web hoặc ứng dụng <Text style={{fontWeight: '600'}}>OKGO </Text>. Quý khách có thể tải ứng dụng trên <Text style={{color: '#FF5F24'}}>ANDROID </Text>hoặc <Text style={{color: '#FF5F24'}}>iOS</Text>.{'\n'}

                - Mã khuyến mãi không được phép quy đổi thành tiền mặt.{'\n'}

                - Không giới hạn số lần đặt phòng.{'\n'}

                - Không áp dụng đồng thời cùng các chương trình khuyến mãi khác của <Text style={{fontWeight: '600'}}>OKGO </Text>.{'\n'}

                - <Text style={{fontWeight: '600'}}>OKGO </Text> có quyền thay đổi điều khoản & điều kiện chương trình mà không cần thông báo trước.{'\n'}

                
                <Text style={{fontWeight: '600'}}>Các bước để nhận ưu đãi trên OKGO:</Text>{'\n'}

               1. Tìm "<Text style={{color: '#FF5F24'}}>KHÁCH SẠN</Text>"trên web hoặc ứng dụng OKGO.{'\n'}

                2. Chọn khách sạn, phòng phù hợp và điền đầy đủ thông tin hành khách.{'\n'}

                3. Nhập mã <Text style={{fontWeight: '600', color: '#FF5F24'}}>MEGA</Text> vào ô <Text style={{fontWeight: '600'}}>"NHẬP MÃ KHUYẾN MÃI" </Text> ở bước  <Text style={{fontWeight: '600'}}>"Thanh Toán" </Text>.{'\n'}
                </Text>
                <TouchableOpacity style={{alignItems: 'center'}}><Text style={{fontSize: 16, color: '#FF5F24', fontWeight: 'bold'}}>Đặt Ngay</Text></TouchableOpacity>
            </View>
        </View>
    );
}
export default ChiTietKM ;