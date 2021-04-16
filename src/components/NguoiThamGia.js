import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
 Image,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  Switch
} from 'react-native';


import { useSelector , useDispatch} from 'react-redux';
const ScreenNguoiThamGia =  ({navigation}) => {
    const dispatch = useDispatch();
    const onsubmit = () =>{
        let sum = 'Người lớn: '+ nguoithamgia[0] + ', Trẻ em '+ nguoithamgia[1] + ', Em bé: '+ nguoithamgia[2];
        dispatch({type :'NguoiThamGia', sum : sum});
        navigation.goBack();
    }
    //const Data_LichTrinh = useSelector(state => state.data_diadiem);
    const XuatPhat = useSelector(state => state.ThanhPhoChon);
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [nguoithamgia, setnguoithamgia] = React.useState([0,0,0]);
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <StatusBar barStyle='dark-content'/>
            <View style={{height: 40, alignItems: 'center',flexDirection:'row', paddingHorizontal: 16, justifyContent:'space-between', marginVertical: 10, backgroundColor: '#ffffff'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require('../assets/images/X.png')}  style={{width: 10, marginRight: 10}}/></TouchableOpacity>
               <View><Text style={{fontSize: 14, fontWeight:'bold', color:'black'}}>Người Tham Gia</Text></View>
               <View></View>
            </View>
            <View style={{backgroundColor: '#F8F8F8', flex: 1, padding: 16}}>
                <View style={{flex: 9}}>
                    <View style={{borderBottomWidth: 0.5, marginVertical: 8, borderColor:'#000000', height: 40, flexDirection: 'row',alignItems:'center'}}>
                        <View style={{flex: 7.5, flexDirection: 'row', justifyContent:'space-between'}}>
                            <Text style={{color: '#090909'}}>Người lớn <Text style={{color:'#9A9A9A'}}>(trên 12 tuổi)</Text></Text>
                        </View>
                        <View style={{flex: 2.5, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => setnguoithamgia([nguoithamgia[0]-1, nguoithamgia[1], nguoithamgia[2]])}>
                                <Image source={require('../assets/images/plus-sign-in-circle2.png')}  style={{width: 15}}/>
                            </TouchableOpacity>
                            <Text style={{fontWeight: '400'}}>{nguoithamgia[0]}</Text>
                            <TouchableOpacity onPress={() => setnguoithamgia([nguoithamgia[0]+1, nguoithamgia[1], nguoithamgia[2]])}>
                                <Image source={require('../assets/images/plus-sign-in-circle1.png')}  style={{width: 15}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    <View style={{borderBottomWidth: 0.5, marginVertical: 8, borderColor:'#000000', height: 40, flexDirection: 'row',alignItems:'center'}}>
                        <View style={{flex: 7.5, flexDirection: 'row', justifyContent:'space-between'}}>
                            <Text style={{color: '#090909'}}>Trẻ em <Text style={{color:'#9A9A9A'}}>(2-11 tuổi)</Text></Text>
                        </View>
                        <View style={{flex: 2.5, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => setnguoithamgia([nguoithamgia[0], nguoithamgia[1]-1, nguoithamgia[2]]) }>
                                <Image source={require('../assets/images/plus-sign-in-circle2.png')}  style={{width: 15}}/>
                            </TouchableOpacity >
                            <Text style={{fontWeight: '400'}}>{nguoithamgia[1]}</Text>
                            <TouchableOpacity onPress={() => setnguoithamgia([nguoithamgia[0], nguoithamgia[1]+1, nguoithamgia[2]]) }>
                                <Image source={require('../assets/images/plus-sign-in-circle1.png')}  style={{width: 15}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{borderBottomWidth: 0.5, marginVertical: 8, borderColor:'#000000', height: 40, flexDirection: 'row',alignItems:'center'}}>
                        <View style={{flex: 7.5, flexDirection: 'row', justifyContent:'space-between'}}>
                            <Text style={{color: '#090909'}}>Em bé <Text style={{color:'#9A9A9A'}}>(dưới 2 tuổi) </Text></Text>
                        </View>
                        <View style={{flex: 2.5, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => setnguoithamgia([nguoithamgia[0], nguoithamgia[1], nguoithamgia[2]-1]) }>
                                <Image source={require('../assets/images/plus-sign-in-circle2.png')}  style={{width: 15}}/>
                            </TouchableOpacity>
                            <Text style={{fontWeight: '400'}}>{nguoithamgia[2]}</Text>
                            <TouchableOpacity onPress={() => setnguoithamgia([nguoithamgia[0], nguoithamgia[1], nguoithamgia[2]+1])}>
                                <Image source={require('../assets/images/plus-sign-in-circle1.png')}  style={{width: 15}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1, justifyContent:'flex-end'}}>
                    <TouchableOpacity onPress={onsubmit} style={{backgroundColor: '#FF5F24', borderRadius: 5, height: 35,justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'#FFFFFF', fontSize: 14, lineHeight: 17}}>Xong</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </SafeAreaView>
    );
}
export default ScreenNguoiThamGia;