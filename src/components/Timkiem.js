import React from 'react';
import { SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,Image,TextInput,ImageBackground,View,TouchableOpacity,FlatList,} from 'react-native';
import { onChange, set } from 'react-native-reanimated';
const data_KQ = [
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
        "Ten" : "Sa Pa",
        "Content":"Thành phố mù sương"
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
    //const [key, setkey] = React.useState('');
    // const onChange = (key) =>{
    //     setkey(key);
    //    let M = data_KQ.filter((i) => i.Ten === 'Sa Pa');
        
    //     console.log(M);
        
    // }
    const [KQ, setKQ] = React.useState([]);
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <StatusBar barStyle='dark-content'/>
                <View style={styles.TimKiem}>
                    <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../assets/images/timkiem.png')}  style={{width: 12, height: 12}}/>
                    </TouchableOpacity>
                    <TextInput onChangeText={(val) => onChange(val)} style={{flex: 8}} placeholder={props.Tieude} placeholderTextColor='#B6B6B6'/>
                   <TouchableOpacity onPress={() => navigation.goBack()}><Text style={{color: '#B6B6B6'}}>Huỷ</Text></TouchableOpacity>
                </View>
                <View style={{backgroundColor: '#F7F7F7',flex: 9}}>
                    
                        {/* <FlatList 
                            data = {data_KQ}
                            keyExtractor={item => item.iD}
                            renderItem={({item}) =>{
                                return(
                                    <View style={{marginLeft: 16, flexDirection:'row', alignItems:'center', paddingVertical: 10}}>
                                        <View style={{flex: 0.09, alignItems:'center'}}><Image source={require('../assets/images/dinhvi.png')}  style={{width: 18, height: 18}}/></View>
                                        <View style={{flex: 0.9}}>
                                            <Text style={{fontWeight: '500', fontSize: 13, paddingBottom: 5}}>{item.Ten}</Text>
                                            <Text style={{color:'#9A9A9A', fontSize: 10}}>{item.Content}</Text>
                                        </View>
                                    </View>
                                );
                            }}
                        /> */}
                        
                    
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