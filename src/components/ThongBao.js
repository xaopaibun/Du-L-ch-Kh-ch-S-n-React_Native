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
  Alert,
} from 'react-native';
const ThongBao =() =>{
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                <View style={{height: 40, alignItems: 'center', flexDirection:'row', paddingHorizontal: 16, justifyContent:'space-between', marginVertical: 10, backgroundColor: '#ffffff'}}>
                   <View></View>
                    <View><Text style={{fontSize: 14, fontWeight:'bold', color:'black'}}>Thông Báo</Text></View>
                    <Image source={require('../assets/images/Group(3).png')}  style={{width: 16, height: 13}}/>
                </View>
                <View style={{backgroundColor: '#E5E5E5', flex: 1, padding: 16}}>
                      <View style={{height: 54, flexDirection: 'row'}}>
                        <View style={{justifyContent: 'center'}}><Image source={require('../assets/images/Group(3).png')}  style={{width: 34,height: 34,  marginRight: 5, borderRadius: 50}}/></View>
                        <View style={{justifyContent: 'space-around'}}>
                          <Text style={{fontSize: 13}}>Bạn có muốn đi TP Hồ Chí Minh? OKGO có tất cả</Text>
                          <Text style={{color: '#9A9A9A', fontSize: 11}}>20/12/2019 lúc 10:30</Text>
                        </View>
                      </View>
                </View>
        </SafeAreaView>
    );
}
export default ThongBao;