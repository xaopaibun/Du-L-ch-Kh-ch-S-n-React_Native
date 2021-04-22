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
import dulieu from '../Data/LichTrinhDangDi'
const ScreenLichTrinhDangDi = () =>{
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{height:40, alignItems: 'center', flexDirection:'row', paddingHorizontal: 16, justifyContent:'space-between', marginVertical: 10, backgroundColor: '#ffffff'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require('../assets/images/back.png')}  style={{width: 7, height: 12}}/></TouchableOpacity>
                <View><Text style={{fontSize: 14, fontWeight:'bold', color:'black'}}>Lịch Trình Đang Đi</Text></View>
                <View></View>
            </View>
            <ScrollView style={{backgroundColor: '#E5E5E5', padding: 16, flex: 1}}>
            <View style={{height: 80}}>
                {
                    dulieu.map((val) =>{
                        return(
                            <View style={{flex: 1}}>
                                <Text>{val.ngay}</Text>
                                <View style={{flex: 1}}>
                                    {
                                        val.thongtin.map((item) =>{
                                            return(
                                                <View key = {Math.random().toString()} style={{flex: 1}}>
                                                    <Text>{item.gio}</Text>
                                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                                            <View style={{flex: 1}}>
                                                                <View style={{height: 15, width: 15, backgroundColor: 'black', borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                                                                    <Text style={{color: 'white', fontSize: 10}}>3</Text>
                                                                </View>
                                                                <View style={{height: '80%', width: 0, position: 'absolute', top: 30, left: 7, zIndex: 1, borderColor: '#C5C5C5', borderStyle: 'dashed', borderWidth: 1}}></View>
                                                            </View>
                                                            <View style={{flex: 8}}>
                                                                <Text>{item.batdau}</Text>
                                                                <Text>{item.chiphi}</Text>
                                                            </View>
                                                            <View style={{flex: 1}}></View>
                                                        </View>
                                                </View>
                                            );
                                        })
                                    }
                                    
                                </View>
                            </View>

                        );
                    })
                }
               
                
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default ScreenLichTrinhDangDi;
