import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
 Image,
 ScrollView,
  View,
  TouchableOpacity,

} from 'react-native';


const ScreenDieuKhoan =  ({navigation}) => {
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <StatusBar barStyle='dark-content'/>
            <View style={{height: 40, alignItems: 'center', flexDirection:'row', paddingHorizontal: 16, justifyContent:'space-between', marginVertical: 10, backgroundColor: '#ffffff'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require('../assets/images/back.png')}  style={{width: 7, height: 12}}/></TouchableOpacity>
                <View><Text style={{fontSize: 14, fontWeight:'bold', color:'black'}}>Điều Khoản Sử Dụng</Text></View>
                <View></View>
            </View>
            <ScrollView style={{flex: 1, backgroundColor: '#E5E5E5'}}>
                <View style={{marginTop: 35,height: 'auto', padding: 16}}>
                    <Text style={{lineHeight: 30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac</Text>
                    
                </View>
            </ScrollView>
           
           
        </SafeAreaView>
    );
}
export default ScreenDieuKhoan;