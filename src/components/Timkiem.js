import React from 'react';
import { SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,Image,TextInput,ImageBackground,View,TouchableOpacity,FlatList,} from 'react-native';
import { onChange, set } from 'react-native-reanimated';
import { useDispatch , useSelector} from 'react-redux';
const data = [
    {
        "iD" :"1",
        "Ten" : "Hà Nội",
        "Content":"Thủ đô cổ kính và nhộn nhịp"
    },
    {
        "iD" :"2",
        "Ten" : "TP. Hồ Chí Minh",
        "Content":"Thành phố không bao giờ ngủ"
    },
    {
        "iD" :"3",
        "Ten" : "Phan Thiết",
        "Content":"Thủ đô resort"
    },
    {
        "iD" :"4",
        "Ten" : "Lý Sơn",
        "Content":"Vương quốc tỏi"
    },
    {
        "iD" :"5",
        "Ten" : "Sa Pa",
        "Content":"Thành phố mù sương"
    },
    {
        "iD" :"6",
        "Ten" : "Hoà Bình",
        "Content":"Miền núi Tây Bắc"
    },
    {
        "iD" :"7",
        "Ten" : "Đà Nẵng",
        "Content":"Thành phố đáng sống nhất Việt Nam"
    },
    {
        "iD" :"8",
        "Ten" : "Phú Quốc",
        "Content":"Đảo ngọc xanh biếc"
    },
    {
        "iD" :"9",
        "Ten" : "Hà Giang",
        "Content":"Vùng đất thách thức"
    },

    {
        "iD" :"10",
        "Ten" : "Tam Đảo",
        "Content":"Thị trấn mờ sương"
    },
    {
        "iD" :"11",
        "Ten" : "Hạ Long",
        "Content":"Kỳ quan thế giới"
    }
];

const ScreenTimKiem =  ({navigation}, props) => {
    // const [ThongBao, setThongBao] = React.useState(''); 
    const typetimkiem = useSelector(state => state.typetimkiem);
    const typescreen = useSelector(state => state.typescreen);
    const [TuKhoa, setTuKhoa] = React.useState(''); 
    const onChange = (key) =>{
        setTuKhoa(TuKhoa);
        setKQ(filterItems(key))
        // filterItems(key).length == 0 ? setThongBao('Không tìm thấy từ khoá bạn nhập') : setThongBao()
    
    }
    const filterItems = (query) => {
        return data.filter((el) =>
            el.Ten.toLowerCase().indexOf(query.toLowerCase()) > -1
        );
    }
    const dispatch = useDispatch();
    const [KQ, setKQ] = React.useState([]);
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <StatusBar barStyle='dark-content'/>
                <View style={styles.TimKiem}>
                    <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../assets/images/timkiem.png')}  style={{width: 12, height: 12}}/>
                    </TouchableOpacity>
                    <TextInput onChangeText={(val) => onChange(val)} style={{flex: 8}} placeholder="Bạn muốn đi đâu" placeholderTextColor='#B6B6B6'/>
                   <TouchableOpacity onPress={() => navigation.goBack()}><Text style={{color: '#B6B6B6'}}>Huỷ</Text></TouchableOpacity>
                </View>
                <View style={{backgroundColor: '#F7F7F7',flex: 9}}>
                   {/* <Text>{ThongBao}</Text> */}
                        <FlatList 
                            data = {TuKhoa == '' ? KQ : data }
                            keyExtractor={item => item.iD}
                            renderItem={({item}) =>{
                                return(
                                    <TouchableOpacity style={{marginLeft: 16, flexDirection:'row', alignItems:'center', paddingVertical: 10}} onPress={() =>{
                                        if( typetimkiem == 'xuatphat' && typescreen == 'taolichtrinh'){
                                            dispatch({type : 'ThanhPhoXuatPhat', ThanhPho : item.Ten});
                                            navigation.navigate('ScreenTaoLichTrinh');
                                        }
                                        if( typetimkiem == 'diemden'  && typescreen == 'taolichtrinh'){
                                            dispatch({type : 'ThanhPhoDen', ThanhPho : item.Ten});
                                            navigation.navigate('ScreenTaoLichTrinh');
                                        }
                                        if( typetimkiem == 'xuatphat' && typescreen == 'xemgoiy'){
                                            dispatch({type : 'ThanhPhoXuatPhat', ThanhPho : item.Ten});
                                            navigation.navigate('ScreenXemGoiY_');
                                        }
                                        if( typetimkiem == 'diemden' && typescreen == 'xemgoiy' ){
                                            dispatch({type : 'ThanhPhoDen', ThanhPho : item.Ten});
                                            navigation.navigate('ScreenXemGoiY_');
                                        }
                                    }}>
                                        <View style={{flex: 0.09, alignItems:'center'}}><Image source={require('../assets/images/dinhvi.png')}  style={{width: 18, height: 18}}/></View>
                                        <View style={{flex: 0.9}}>
                                            <Text style={{fontWeight: '500', fontSize: 13, paddingBottom: 5}}>{item.Ten}</Text>
                                            <Text style={{color:'#9A9A9A', fontSize: 10}}>{item.Content}</Text>
                                        </View>
                                    </TouchableOpacity>
                                );
                            }}
                        />
                        
                    
                </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({

    TimKiem:{
        marginHorizontal: 16,
        height: 40,
        width: '90%',
        justifyContent:'space-around',
        alignItems:'center',
        borderRadius: 5,
       flexDirection: 'row',
        
    }
  });
export default ScreenTimKiem;