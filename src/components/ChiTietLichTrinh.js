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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import { Modal } from 'react-native-paper';
import { useDispatch , useSelector} from 'react-redux';
const Dulieu = [
    {
        "id" : "1",
        "gioxuatphat": "7:00",
        "img" : "https://tourdulichuytin.com/images/tin-tuc/thap-doi1.jpg",
        "tendd" :"Tháp đôi",
        "thoigianvuichoi" : "2 giờ",
        "quangduongdi":"26 km",
        "thoigiandi" :"30 phút"
    },
    {
        "id" : "2",
        "gioxuatphat": "8:15",
        "img" : "https://bizweb.dktcdn.net/100/115/245/articles/dlqn2.jpg?v=1557113360053",
        "tendd" :"Bãi đá Kỳ Co",
        "thoigianvuichoi" : "2 giờ 30 phut",
        "quangduongdi":"26 km",
        "thoigiandi" :"30 phút"
    },
    {
        "id" : "3",
        "gioxuatphat": "10:00",
        "img" : "https://quynhontrip.com/wp-content/uploads/2020/10/eo-gio-1024x768.jpg",
        "tendd" :"Eo gió",
        "thoigianvuichoi" : "2 giờ",
        "quangduongdi":"26 km",
        "thoigiandi" :"30 phút"
    },
    {
        "id" : "4",
        "gioxuatphat": "14:00",
        "img" : "https://vcdn-dulich.vnecdn.net/2020/06/18/lang-chai-Nhon-hai-Trung-Pham-2152-6699-1592469556.jpg",
        "tendd" :"Làng chài Nhơn Hải",
        "thoigianvuichoi" : "2 giờ",
        "quangduongdi":"26 km",
        "thoigiandi" :"30 phút"
    } 
]
const ChiTietLichTrinh = ({navigation}) =>{
    React.useEffect(() =>{
        dispatch({type : 'DuLieuDuLichABC', Dulieu : Dulieu})
    }, []);
    const dulieudulichabc = useSelector(val => val.dulieudulichabc)
    const [visible, setVisible] = React.useState(false);
    const dispatch = useDispatch();
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
   
    const View_Delete_Item = () =>{
        return(
            <View style={{marginHorizontal: 37, height: 135, backgroundColor: 'white', borderRadius: 5}}>
                <View style={{flex: 2.65, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Bạn có chắc muốn xóa địa điểm này không?</Text>
                </View>
                <View style={{flex: 1, borderTopColor: '#8F8F8F', borderTopWidth: 0.3, flexDirection: 'row'}}>
                    <View style={{flex: 5, borderRightColor: '#8F8F8F', borderRightWidth: 0.3,  justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress = { hideModal}>
                            <Text>Hủy</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 5,  justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress = { 
                        () =>{
                            hideModal();
                            dispatch({type: 'Xoa_Item'})
                        }
                    }>
                        <Text style={{color: '#FF2424'}}>Xóa</Text>
                    </TouchableOpacity>
                    </View>
                </View>
        </View>
        );
        
    }
    const LichNgay1 = () =>{
        // const renderItem = ({item}) =>{
        //     const Layid = () =>{
        //         showModal();
        //         dispatch({type:'Lay_Id_De_Xoa', id : item.id});          
        //     }
        //     return(
        //     <View style={{marginTop: 9, height: 165, flexDirection: 'row'}}>
        //             <View style={{flex: 0.5}}>
        //                 <View style={{marginTop: 70,height: 15, width: 15, backgroundColor: 'black', borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
        //                     <View style={{height: 125, width: 0, position: 'absolute', top: 30, left: 7, zIndex: 1, borderColor: '#C5C5C5', borderStyle: 'dashed', borderWidth: 1}}></View>
        //                     <Text style={{color: 'white', fontSize: 10}}>{item.id}</Text>
        //                 </View>
        //             </View>
        //             <View style={{flex: 9.5,marginLeft: 12, justifyContent: 'space-around'}}>
        //                 <Text>{item.gioxuatphat}</Text>
        //                 <View style={{backgroundColor: 'white',borderRadius: 5,overflow: 'hidden',height:80, flexDirection: 'row', justifyContent:'flex-end', shadowColor: "#000",
        //                                     shadowOffset: {
        //                                         width: 0,
        //                                         height: 3,
        //                                     },
        //                                     shadowOpacity: 0.27,
        //                                     shadowRadius: 4.65,
        //                                     elevation: 6}}>
        //                     <View style={{flex: 0.3}}>
        //                         <Image source={{uri : item.img}} style={{width: '100%', height: '100%'}}/>
        //                     </View>
        //                     <View style={{flex: 0.4, justifyContent:'space-around', marginLeft: 13}}>
        //                         <Text style={{fontWeight: '600'}}>{item.tendd}</Text>
        //                         <Text style={{fontWeight: '600', color: '#FF5F24', fontSize: 10}}>{item.thoigianvuichoi}</Text>
        //                     </View>
        //                     <View style={{flex: 0.3, justifyContent:'space-around', alignItems: 'flex-end', marginRight: 10}}>
        //                         <TouchableOpacity onPress={Layid}><Image source={require('../assets/images/round-delete-button1.png')}  style={{width: 14, height: 14}}/></TouchableOpacity>
        //                         <TouchableOpacity><Text style={{ color: 'rgba(255, 95, 36, 0.7)', fontSize: 10}}>Chọn điểm khác</Text></TouchableOpacity>
        //                     </View>
        //                 </View>
        //                 <View style={{height: 35, borderColor: '#FFB59A', borderRadius: 5, borderStyle: 'dotted', borderWidth: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
        //                     <View style={{flexDirection: 'row', alignItems: 'center'}}>
        //                         <Image source={require('../assets/images/oto.png')}  style={{width: 13, height: 9.85, marginRight: 5}}/>
        //                         <Text style={{fontSize: 8, color: '#3076FE', justifyContent: 'center'}}> {item.quangduongdi}</Text>
        //                     </View>
        //                     <View style={{flexDirection: 'row', alignItems: 'center'}}>
        //                         <Image source={require('../assets/images/donghocat.png')}  style={{width: 9.14, height: 12, marginRight: 5}}/>
        //                         <Text style={{fontSize: 8, color: '#FF5F24', justifyContent: 'center'}}> {item.thoigiandi}</Text>
        //                     </View>
        //                     <View style={{flexDirection: 'row', alignItems: 'center'}}>
        //                         <Image source={require('../assets/images/notebook.png')}  style={{width: 13, height: 13}}/>
        //                     </View>
        //                 </View>
        //             </View>
        //         </View>
        //         );
        // }
        return(
            <View style={{flex: 1,  backgroundColor: '#E5E5E5'}}>
                 {/* <FlatList
                        data = {dulieudulichabc}
                        keyExtractor={item => item.id}
                        renderItem={renderItem}
                        style={{paddingRight: 16}}
                       
                    /> */}
                <ScrollView style={{paddingRight: 16, marginBottom:20}}>
                {
                    dulieudulichabc && dulieudulichabc.map((item, index) =>{
                        const Layid = () =>{
                            showModal();
                            dispatch({type:'Lay_Id_De_Xoa', id : item.id});          
                        }
                        return(
                            <View key = {item.id.toString()} style={{marginTop: 9, height: 165, flexDirection: 'row'}}>
                                    <View style={{flex: 0.5}}>
                                        <View style={{marginTop: 70,height: 15, width: 15, backgroundColor: 'black', borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                                            {
                                                index + 1 == dulieudulichabc.length ? <View/>: <View style={{height: 125, width: 0, position: 'absolute', top: 30, left: 7, zIndex: 1, borderColor: '#C5C5C5', borderStyle: 'dashed', borderWidth: 1}}></View>
                                            }
                                            
                                            <Text style={{color: 'white', fontSize: 10}}>{index + 1}</Text>
                                        </View>
                                    </View>
                                    <View style={{flex: 9.5,marginLeft: 12, justifyContent: 'space-around'}}>
                                        <Text>{item.gioxuatphat}</Text>
                                        <View style={{backgroundColor: 'white',borderRadius: 5,overflow: 'hidden',height:80, flexDirection: 'row', justifyContent:'flex-end', shadowColor: "#000",
                                                            shadowOffset: {
                                                                width: 0,
                                                                height: 3,
                                                            },
                                                            shadowOpacity: 0.27,
                                                            shadowRadius: 4.65,
                                                            elevation: 6}}>
                                            <View style={{flex: 0.3}}>
                                                <Image source={{uri : item.img}} style={{width: '100%', height: '100%'}}/>
                                            </View>
                                            <View style={{flex: 0.4, justifyContent:'space-around', marginLeft: 13}}>
                                                <Text style={{fontWeight: '600'}}>{item.tendd}</Text>
                                                <Text style={{fontWeight: '600', color: '#FF5F24', fontSize: 10}}>{item.thoigianvuichoi}</Text>
                                            </View>
                                            <View style={{flex: 0.3, justifyContent:'space-around', alignItems: 'flex-end', marginRight: 10}}>
                                                <TouchableOpacity onPress={Layid}><Image source={require('../assets/images/round-delete-button1.png')}  style={{width: 14, height: 14}}/></TouchableOpacity>
                                                <TouchableOpacity><Text style={{ color: 'rgba(255, 95, 36, 0.7)', fontSize: 10}}>Chọn điểm khác</Text></TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={{height: 35, borderColor: '#FFB59A', borderRadius: 5, borderStyle: 'dotted', borderWidth: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                <Image source={require('../assets/images/oto.png')}  style={{width: 13, height: 9.85, marginRight: 5}}/>
                                                <Text style={{fontSize: 8, color: '#3076FE', justifyContent: 'center'}}> {item.quangduongdi}</Text>
                                            </View>
                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                <Image source={require('../assets/images/donghocat.png')}  style={{width: 9.14, height: 12, marginRight: 5}}/>
                                                <Text style={{fontSize: 8, color: '#FF5F24', justifyContent: 'center'}}> {item.thoigiandi}</Text>
                                            </View>
                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                <Image source={require('../assets/images/notebook.png')}  style={{width: 13, height: 13}}/>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            );
                    })
                }
                    <TouchableOpacity style={{marginBottom: 60, marginTop: 20,  height: 25, borderColor: '#FFB59A', borderRadius: 5, borderStyle: 'dotted', borderWidth: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../assets/images/plus-sign-in-circle1.png')}  style={{width: 13, height: 13}}/><Text style={{color: '#FF5F24', fontSize: 10}}>  Thêm điểm đi</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
    return(
        <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
            <StatusBar barStyle='light-content'/>
            <ImageBackground source={{uri : 'https://icdn.dantri.com.vn/thumb_w/640/2020/01/09/7-1578580921457.jpg'}} resizeMode="stretch" style={{ height: 180}} > 
                <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', padding: 16}}>
                    <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require('../assets/images/back2.png')}  style={{width: 7, height: 12}}/></TouchableOpacity>
                    <TouchableOpacity><Image source={require('../assets/images/kobiet.png')}  style={{width: 14, height: 14}}/></TouchableOpacity>
                    </View>
                <View style={{flex: 0.4,marginHorizontal: 16, marginVertical: 24, justifyContent: 'center', alignItems: 'center' , padding: 16}}>
                    <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>Quy Nhơn, Bình Định</Text>
                    <Text style={{color: 'white', fontSize: 12, fontWeight: '400'}}>25/04 - 30/04</Text>
                </View>
            </ImageBackground>
            <View style={{flex: 1, paddingLeft: 16}}>
                <Tab.Navigator tabBarOptions={
                    {
                        // pressOpacity:1,
                        activeTintColor: '#FF5F24', 
                        tabStyle:{backgroundColor: '#E5E5E5', marginBottom: 1},
                        labelStyle:{textTransform : 'none', fontSize: 12, fontWeight: '500'}, 
                        indicatorStyle: { backgroundColor: 'black'},
                        inactiveTintColor: '#000000',
                        
                    }
                }>
                    <Tab.Screen name="LichNgay1" component={LichNgay1} options = {{tabBarLabel : ({focused}) => <View style={{alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold', fontSize:12, color: focused?"#000000":"#5E5E5E"}}>Ngày 1</Text>
                        <Text style={{fontSize: 10, color: '#6C6C6C'}}>5/12</Text>
                    </View>}}/>
                    <Tab.Screen name="LichNgay2" component={LichNgay1} options = {{tabBarLabel : ({focused}) => <View style={{alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold', fontSize:12, color: focused?"#000000":"#5E5E5E"}}>Ngày 2</Text>
                        <Text style={{fontSize: 10, color: '#6C6C6C'}}>6/12</Text>
                    </View>}}/>
                    <Tab.Screen name="LichNgay3" component={LichNgay1} options = {{tabBarLabel : ({focused}) => <View style={{alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold', fontSize:12, color: focused?"#000000":"#5E5E5E"}}>Ngày 3</Text>
                        <Text style={{fontSize: 10, color: '#6C6C6C'}}>7/12</Text>
                    </View>}}/>
                    <Tab.Screen name="LichNgay4" component={LichNgay1} options = {{tabBarLabel : ({focused}) => <View style={{alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold', fontSize:12, color: focused?"#000000":"#5E5E5E"}}>Ngày 4</Text>
                        <Text style={{fontSize: 10, color: '#6C6C6C'}}>8/12</Text>
                    </View>}}/>
                </Tab.Navigator>
            </View>
            <View style={{width: '100%',padding: 16, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', left: 0, bottom: 0, zIndex: 0.2}}>
                    <Text style={{color: '#FF5F24', fontSize: 16, fontWeight: 'bold'}}>2,600,000 đ/ người</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ChiTietLichTrinh')}  style={{ height: 25, width: 71,justifyContent: 'center', alignItems: 'center',backgroundColor: '#FF5F24', borderRadius: 5}}>
                        <Text style={{color: 'white', fontWeight: '500', fontSize: 12}}>Đặt ngay</Text>
                    </TouchableOpacity>
            </View>
            <Modal visible={visible} onDismiss={hideModal} >
                <View_Delete_Item/>
            </Modal>
        </View>
    );
}
export default ChiTietLichTrinh;