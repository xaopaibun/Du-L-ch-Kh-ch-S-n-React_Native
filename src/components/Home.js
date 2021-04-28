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
    Dimensions,
  View,
  TouchableOpacity,ActivityIndicator ,
  FlatList,
} from 'react-native';
import { scale , verticalScale} from "react-native-size-matters";
import Draggable from 'react-native-draggable';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch , useSelector} from 'react-redux';
import DiaDiem from '../Data/DiaDiem';
import DiaDiemTheoMua from '../Data/DiaDiemTheoMua';
import KhuyenMai from '../Data/KhuyenMai';
import KS_RS from '../Data/KS_RS';
import NhaHang from '../Data/NhaHang';
import LichTrinh from '../Data/LichTrinh';
import TraiNghiem from '../Data/TraiNghiem';

const Home =  ({navigation}) => {
    const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
  const [Data_LichTrinh, setData_LichTrinh] = React.useState();
  const [Data_DiaDiem, setData_DiaDiem] = React.useState();
  const [Data_DiaDiemTheoMua, setData_DiaDiemTheoMua] = React.useState();
  const [Data_TraiNghiem, setData_TraiNghiem] = React.useState();
  const [Data_KS_RS, setData_KS_RS] = React.useState();
  const [Data_KM, setData_KM] = React.useState();
  const [Loading, setLoading] = React.useState(true);
  const nutButton = useSelector(state => state.nutButton);
  const dispatch = useDispatch();
    React.useEffect(() =>{
        setData_LichTrinh(LichTrinh);
        setData_DiaDiem(DiaDiem);
        setData_TraiNghiem(TraiNghiem);
        setData_DiaDiemTheoMua(DiaDiemTheoMua);
        setData_KS_RS(KS_RS);
        setData_KM(KhuyenMai);
        setLoading(false);
    }, []);
    const renderItemKS_RS = ({ item }) => (
        <TouchableOpacity  onPress={() =>{
            dispatch({type : 'ChiTietKhachSan', data : item});
            navigation.navigate('ScreenChiTietKhachSan');
        }} style={{height: 250, width: 160, marginRight: 16, justifyContent:'space-between'}}>
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
        <TouchableOpacity  onPress={() =>{
            dispatch({type : 'ChiTietDiaDiem', data: item})
            navigation.navigate('ScreenCTDiaDiem');
        }} style={{width: 150, height: 200, marginRight: 16,  borderRadius: 5, overflow: 'hidden'}}>
                <Image source={{uri : item.image}} style={{width: 150, height: 200}}/>
                <View style={{position: 'absolute', bottom: 0, zIndex: 1, height: 20, width:'100%'}}>
                    <Text style={{ color:'white', fontSize: 13, fontWeight: '600',  textAlign:'center'}}>{item.TenDiaDiem}</Text>
                </View>
        </TouchableOpacity>
      );
      const renderItemKhuyenMai= ({ item }) => (
        <TouchableOpacity style={{height: 150, width: 300, marginRight: 16}} onPress={() =>{
            dispatch({type : 'ChiTietKM', item : item});
            navigation.navigate('ChiTietKM');
        }}>
              <Image source={{uri : item.image}} resizeMode="stretch" style={{width: 300, height: 150,marginRight: 16, borderRadius: 5}}/>
        </TouchableOpacity>
      );
      const renderItemTraiNghiem= ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ScreenChiTietKhamPha')} style={{height: 280, width: 220, marginRight: 16}}>
            <Image source={{uri : item.image}}  style={{width: 220,height: 200, borderRadius: 5}}/>
            <View style={{marginTop: 12, justifyContent:'space-between', flex: 0.5}}>
                <Text style={{fontWeight: '500', fontSize: 14}}>{item.TenTraiNghiem}</Text>
                <Text style={{color: '#3076FE', fontSize: 10}}><Image source={require('../assets/images/Vector.png')}  style={{width: 7, height: 10}}/> {item.DiaChi}</Text>
            </View>
        </TouchableOpacity>
      );
    const renderItemLichTrinh = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ScreenTongQuanLichTrinh')} style={{width: 300, height: 230, marginLeft: 16, backgroundColor:'#ffffff', borderRadius: 5, overflow:'hidden'}}>
        <View style={{flexDirection: 'row', flex: 1, justifyContent:'space-between'}}>
            <View style={{flex: 4}}><Image source={{uri : item.images[0]}}  style={{width: '100%', height: '100%'}}/></View>
            <View style={{flex: 6, marginLeft: 6, justifyContent: 'space-between'}}>
                <View style={{flex: 1, marginBottom: 6}}><Image source={{uri : item.images[1]}} style={{width: '100%', height: '100%'}}/></View>
                <View style={{flex: 1, flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{flex: 1, marginRight: 3}}><Image source={{uri : item.images[2]}}  style={{width: '100%', height: '100%'}}/></View>
                    <View style={{flex: 1, marginLeft: 3}}><Image source={{uri : item.images[3]}}  style={{width: '100%', height: '100%'}}/></View>
                </View>
            </View>
        </View>
        <View style={{flex: 0.35,  padding: 16}}>
            <View style={{flexDirection:'row', flex: 1}}>
                <View style={{flexDirection:'row', flex: 1}}>
                    <Text style={{color:'#000000', fontSize: 14, fontWeight: '600'}}>{item.TenDiaDiem}</Text>
                    <Text style={{color:'#494949', fontSize: 14}}> ({item.ThoiGian})</Text>
                </View>
                <View style={{flexDirection:'row', flex: 0.5, justifyContent:'flex-end'}}>
                    <Image source={require('../assets/images/Vector.png')}  style={{width: 7, height: 10}}/>
                    <Text style={{color: '#3076FE', fontSize: 10}}> Việt Nam</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', flex: 1}}>
                <View style={{flexDirection: 'row', flex: 0.6}}>
                    <Image source={{uri : item.avatar}}  style={{width: 25, height: 25, borderRadius: 50}}/>
                    <View style= {{justifyContent:'space-between', marginLeft: 8}}>
                        <Text style={{fontSize: 10, color:'black'}}>{item.TenFB}</Text>
                        <Text style={{fontSize: 8, color:'#494949'}}>{item.Time}</Text>
                    </View>
                </View>
                <View style={{flex: 0.4, justifyContent:'flex-end'}}>
                <TouchableOpacity style={{backgroundColor: '#FF5F24', borderRadius: 5, height: 20,flex: 1, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'#FFFFFF', fontSize: 10, lineHeight: 12}}>{item.Gia} đ/ người</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    </TouchableOpacity>
      );
  return (
    <View style={{flex: 1, backgroundColor: '#E5E5E5', position: 'relative'}}>
        <StatusBar barStyle='light-content'/>
        <ScrollView>
        {
            nutButton ?  <View style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', width: '100%', height: '100%',position:'absolute', top : 0, left: 0, zIndex: 9999999999}}></View> : <View></View>
        }
        {
            Loading ?  
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#FF5F24" />
            </View>
            :
       <View>
           
        <View style={styles.Header_Home}>
                <ImageBackground source={require('../assets/images/Home.png')} style={{width: '100%', height: '100%', position:'relative'}} > 
                <View style={styles.Header_Text}>
                    <Text style={{fontSize: 18, fontWeight: '700', lineHeight: 17, color:'#ffffff'}}>Khám Phá</Text>
                    <Text style={{fontSize: 14, lineHeight: 17, color:'#ffffff'}}>Lên lịch trình, đặt vé máy bay, khách sạn, tìm kiếm các tour lịch và các hoạt động vui chơi giải trí</Text>
                </View>
                <ScrollView style={{ marginTop: 15, paddingLeft: 5}} horizontal={true}>
                    <TouchableOpacity style={{width: 70, height: 60, margin: 5, justifyContent:'space-between', alignItems:'center'}}>
                        <Image source={require('../assets/images/plan.png')}  style={{width: 35, height: 35}} />
                        <Text style={{fontSize: 14, color:'#ffffff'}}>Lịch Trình</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ScreenKhachSan')} style={{width: 70, height: 60, margin: 5, justifyContent:'space-between', alignItems:'center'}}>
                        <Image source={require('../assets/images/hotel.png')}  style={{width: 35, height: 35}} />
                        <Text style={{fontSize: 14, color:'#ffffff'}}>Khách Sạn</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: 70, height: 60, margin: 5, justifyContent:'space-between', alignItems:'center'}}>
                        <Image source={require('../assets/images/flight.png')}  style={{width: 35, height: 35}} />
                        <Text style={{fontSize: 14, color:'#ffffff'}}>Máy Bay</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => navigation.navigate('ScreenCombo')} style={{width: 70, height: 60, margin: 5, justifyContent:'space-between', alignItems:'center'}}>
                        <Image source={require('../assets/images/combo.png')}  style={{width: 35, height: 35}} />
                        <Text style={{fontSize: 14, color:'#ffffff'}}>Combo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={() => navigation.navigate('ScreenNhaHang')} style={{width: 70, height: 60, margin: 5, justifyContent:'space-between', alignItems:'center'}}>
                        <Image source={require('../assets/images/restaurant.png')}  style={{width: 35, height: 35}} />
                        <Text style={{fontSize: 14, color:'#ffffff'}}>Nhà Hàng</Text>
                    </TouchableOpacity>
                </ScrollView>
                </ImageBackground>
        </View>
        <View style={styles.TimKiem}>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../assets/images/timkiem.png')}  style={{width: 12, height: 12}}/>
            </TouchableOpacity>

            <TextInput style={{flex: 8}} onFocus={() => navigation.navigate('ScreenTimKiem')} placeholder='Bạn muốn đi đâu' placeholderTextColor='#B6B6B6'/>
        </View>
        <View style={{height: 30}}></View>
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <TouchableOpacity onPress={() => navigation.navigate('ScreenXemGoiY_')} style={{backgroundColor: '#FF5F24', borderRadius: 5, height: 25, flex: 1, marginHorizontal: 16,justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'#FFFFFF', fontSize: 14, lineHeight: 17}}>Xem gợi ý</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ScreenTaoLichTrinh')} style={{backgroundColor: '#FF5F24', borderRadius: 5, height: 25,flex: 1, justifyContent:'center',marginHorizontal: 16, alignItems:'center'}}>
                <Text style={{color:'#FFFFFF', fontSize: 14, lineHeight: 17}}>Tạo Lịch Trình</Text>
            </TouchableOpacity>
        </View>
        <View style={{height: 30, marginHorizontal: 16, justifyContent:'space-between', flexDirection: 'row', marginTop: 20}}>
            <Text style={{color: '#000000', fontWeight: 'bold'}}>Khuyến Mại</Text>
            <TouchableOpacity onPress={() =>{
                dispatch({type :'DuLieuKhuyenMai', data : Data_KM});
                navigation.navigate('ScreenKhuyenMai');
            }}><Text style={{color: '#9E9E9E', fontSize: 12}}>Xem thêm  <Image source={require('../assets/images/Right.png')}  style={{width: 3, height: 7}}/></Text></TouchableOpacity>
        </View>

        <FlatList
            data = {Data_KM}
            keyExtractor={item => item.id}
            renderItem={renderItemKhuyenMai}
            horizontal
            style={{marginLeft: 16}} 
        /> 
        <View style={{height: 30, marginHorizontal: 16, justifyContent:'space-between', flexDirection: 'row', marginTop: 20}}>
            <Text style={{color: '#000000', fontWeight: 'bold'}}>Lịch trình gần đây</Text>
            <TouchableOpacity 
            onPress={ () => {
              
                navigation.navigate('ScreenLichTrinh');
            }
            }
            ><Text style={{color: '#9E9E9E', fontSize: 12}}>Xem thêm  <Image source={require('../assets/images/Right.png')}  style={{width: 3, height: 7}}/></Text></TouchableOpacity>
        </View>

        <FlatList
            data = {Data_LichTrinh}
            keyExtractor={item => item.id}
            renderItem={renderItemLichTrinh}
            horizontal
        /> 
        <View style={{height: 30, marginHorizontal: 16, justifyContent:'space-between', flexDirection: 'row', marginTop: 20}}>
            <Text style={{color: '#000000', fontWeight: 'bold'}}>Địa điểm phổ biến</Text>
            <TouchableOpacity onPress={() =>{
             
                navigation.navigate('ScreenDiaDiemPhoBien');
            }}><Text style={{color: '#9E9E9E', fontSize: 12}}>Xem thêm  <Image source={require('../assets/images/Right.png')}  style={{width: 3, height: 7}}/></Text></TouchableOpacity>
        </View>
        <FlatList
            data = {Data_DiaDiem}
            keyExtractor={item => item.id}
            renderItem={renderItemDiaDiem}
            horizontal
            style={{marginLeft: 16}}
        />
        <View style={{height: 30, marginHorizontal: 16, justifyContent:'space-between', flexDirection: 'row', marginTop: 20}}>
            <Text style={{color: '#000000', fontWeight: 'bold'}}>Trải Nghiệm Nổi Bật</Text>
            <TouchableOpacity onPress={() =>{
           
                navigation.navigate('ScreenTraiNghiem');
            }}><Text style={{color: '#9E9E9E', fontSize: 12}}>Xem thêm  <Image source={require('../assets/images/Right.png')}  style={{width: 3, height: 7}}/></Text></TouchableOpacity>
        </View>
        <FlatList
            data = {Data_TraiNghiem}
            keyExtractor={item => item.id}
            renderItem={renderItemTraiNghiem}
            horizontal
            style={{marginLeft: 16}}
        />
        <View style={{height: 30, marginHorizontal: 16, justifyContent:'space-between', flexDirection: 'row', marginTop: 20}}>
            <Text style={{color: '#000000', fontWeight: 'bold'}}>Điểm Đến Tháng 12</Text>
            <TouchableOpacity onPress={() =>{
                dispatch({type :'DuLieudiemdentheomua', data : Data_DiaDiemTheoMua});
                navigation.navigate('ScreenDiemDenThang12');
            }}><Text style={{color: '#9E9E9E', fontSize: 12}}>Xem thêm  <Image source={require('../assets/images/Right.png')}  style={{width: 3, height: 7}}/></Text></TouchableOpacity>
        </View>
        <FlatList
            data = {Data_DiaDiemTheoMua}
            keyExtractor={item => item.id}
            renderItem={renderItemDiaDiem}
            horizontal
            style={{marginLeft: 16}}
        />
         <View style={{height: 30, marginHorizontal: 16, justifyContent:'space-between', flexDirection: 'row', marginTop: 20}}>
            <Text style={{color: '#000000', fontWeight: 'bold'}}>Khách sạn & Resort</Text>
            <TouchableOpacity onPress={() => {
               
                navigation.navigate('ScreenKS_RS');
            }}><Text style={{color: '#9E9E9E', fontSize: 12}}>Xem thêm  <Image source={require('../assets/images/Right.png')}  style={{width: 3, height: 7}}/></Text></TouchableOpacity>
        </View>
        <FlatList
            data = {Data_KS_RS}
            keyExtractor={item => item.id}
            renderItem={renderItemKS_RS}
            horizontal
            style={{marginLeft: 16}}
        />
       </View> 
   
     } 

    </ScrollView>
 
    <Draggable x={scale(300)}
            y={verticalScale(600)} style={{ position: 'absolute', zIndex: 10}}><Image source={require('../assets/images/Frame7.png')}  style={{width: scale(89), height: scale(89)}} /></Draggable>
    </View>
    
    
  );
};

const styles = StyleSheet.create({
  Header_Home:{
      
      height: 213,
      
  },
  Header_Text:{
      marginTop: 40,
      marginLeft: 16
  },
  TimKiem:{
      marginHorizontal: 16,
      height: 40,
      width: '90%',
      backgroundColor: '#F7F7F7',
      borderRadius: 5,
      position:'absolute',
      left: 0,
     top: 190,
      zIndex: 3,
     flexDirection: 'row',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      
      elevation: 6,
  }
});

export default Home;
