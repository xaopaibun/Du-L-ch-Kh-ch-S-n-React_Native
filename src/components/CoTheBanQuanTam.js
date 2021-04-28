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


import { useSelector } from 'react-redux';
const ScreenCoTheBanQuanTam =  ({navigation}) => {
    const Data_QuanTam = useSelector(state => state.Data_QuanTam);
    
    
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <StatusBar barStyle='dark-content'/>
            <View style={{height: 40, alignItems: 'center', flexDirection:'row', paddingHorizontal: 16, justifyContent:'space-between', marginVertical: 10, backgroundColor: '#ffffff'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require('../assets/images/back.png')}  style={{width: 6, marginRight: 12}}/></TouchableOpacity>
               <View><Text style={{fontSize: 14, fontWeight:'bold', color:'black'}}>Có thể bạn quan tâm</Text></View>
               <TouchableOpacity><Image source={require('../assets/images/select.png')}  style={{width: 17, height: 17}}/></TouchableOpacity>
            </View>
            <ScrollView style={{backgroundColor: '#E5E5E5', flex: 1, padding: 16}}>
                <View style={{flex: 9, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                    {
                        Data_QuanTam.map((item, index) =>{
                            const [active, setactive] = React.useState(false);
                            const check1 = require('../assets/images/check1.png');
                            const check2 = require('../assets/images/check2.png');
                        return(
                            <View key = {item.id} style={{position: 'relative',width: 162, height: 162,backgroundColor: 'white',margin: 8, borderRadius: 5, overflow:'hidden'}}>
                                <Image source={{uri : item.img}}  style={{width: 162, height: 128}}/>
                                <View style={{flex: 12, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text>{item.text}</Text>
                                </View>
                                 <TouchableOpacity onPress={() => setactive(!active)} style={{position: 'absolute', top : 10, right: 10, zIndex: 2}}><Image source={!active?check1:check2} style={{width: 16, height: 16}}/></TouchableOpacity>
                            </View>
                        );
                    })
                }
                </View>
                
                <View style={{flex: 1, justifyContent:'flex-end',  marginVertical: 50}}>
                    <TouchableOpacity style={{backgroundColor: '#FF5F24', borderRadius: 5, height: 35,justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'#FFFFFF', fontSize: 14, lineHeight: 17}}>Xong</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            
        </SafeAreaView>
    );
}
export default ScreenCoTheBanQuanTam;