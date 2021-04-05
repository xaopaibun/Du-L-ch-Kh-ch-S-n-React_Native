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


import { useSelector } from 'react-redux';
import LichTrinh from '../Data/LichTrinh';
const ScreenLT =  ({navigation}) => {
    //const Data_LichTrinh = useSelector(state => state.data_diadiem);
    const [Data_LichTrinh, setData_LichTrinh] = React.useState();
   
    React.useEffect(() =>{
        setData_LichTrinh(LichTrinh);
        
    }, []);
    const renderItemLichTrinh = ({ item }) => (
        <View style={{height: 300,  backgroundColor:'#ffffff', borderRadius: 5, overflow:'hidden', marginBottom: 20}}>
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
            <View style={{ flex: 0.6, flexDirection:'row', justifyContent:'flex-end', marginTop: 8}}>
                <Image source={require('../assets/images/chiase.png')}  style={{width: 13, marginRight: 14}}/>
                <Image source={require('../assets/images/tim.png')}  style={{width: 13, marginRight: 14}}/>
            </View>
        </View>
    </View>
      );
    return(
        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
            <StatusBar barStyle='dark-content'/>
            <FlatList
                data = {Data_LichTrinh}
                keyExtractor={item => item.id}
                renderItem={renderItemLichTrinh}
                style={{padding: 16, backgroundColor: '#E5E5E5'}}
            /> 
        </View>
    );
}
export default ScreenLT;