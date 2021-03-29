
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
} from 'react-native';


const Home =  () => {
  

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#E5E5E5'}}>
        <View style={styles.Header_Home}>
                <ImageBackground source={require('../assets/images/Home.png')} style={{width: '100%', height: '100%', position:'relative'}} > 
                <View style={styles.Header_Text}>
                    <Text style={{fontSize: 18, fontWeight: '700', lineHeight: 17, color:'#ffffff'}}>Khám Phá</Text>
                    <Text style={{fontSize: 14, lineHeight: 17, color:'#ffffff'}}>Lên lịch trình, đặt vé máy bay, khách sạn, tìm kiếm các tour lịch và các hoạt động vui chơi giải trí</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent:'space-around', marginTop: 19}}>
                    <TouchableOpacity style={{width: 75, height: 60, margin: 5, justifyContent:'space-between', alignItems:'center'}}>
                        <Image source={require('../assets/images/plan.png')}  style={{width: 35, height: 35}} />
                        <Text style={{fontSize: 14, color:'#ffffff'}}>Lịch Trình</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: 75, height: 60, margin: 5, justifyContent:'space-between', alignItems:'center'}}>
                        <Image source={require('../assets/images/hotel.png')}  style={{width: 35, height: 35}} />
                        <Text style={{fontSize: 14, color:'#ffffff'}}>Khasch San</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: 75, height: 60, margin: 5, justifyContent:'space-between', alignItems:'center'}}>
                        <Image source={require('../assets/images/flight.png')}  style={{width: 35, height: 35}} />
                        <Text style={{fontSize: 14, color:'#ffffff'}}>May Bay</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: 75, height: 60, margin: 5, justifyContent:'space-between', alignItems:'center'}}>
                        <Image source={require('../assets/images/combo.png')}  style={{width: 35, height: 35}} />
                        <Text style={{fontSize: 14, color:'#ffffff'}}>Combo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: 75, height: 60, margin: 5, justifyContent:'space-between', alignItems:'center'}}>
                        <Image source={require('../assets/images/restaurant.png')}  style={{width: 35, height: 35}} />
                        <Text style={{fontSize: 14, color:'#ffffff'}}>Nha Hang</Text>
                    </TouchableOpacity>
                </View>
                </ImageBackground>
        </View>
        <View style={styles.TimKiem}>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../assets/images/timkiem.png')}  style={{width: 12, height: 12}}/>
            </TouchableOpacity>

            <TextInput style={{flex: 8}} placeholder='Ban muon di dau' placeholderTextColor='#B6B6B6'/>
        </View>
        <View style={{height: 50}}></View>
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <TouchableOpacity style={{backgroundColor: '#FF5F24', borderRadius: 5, height: 25, flex: 1, marginHorizontal: 16,justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'#FFFFFF', fontSize: 14, lineHeight: 17}}>Xem goi y</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#FF5F24', borderRadius: 5, height: 25,flex: 1, justifyContent:'center',marginHorizontal: 16, alignItems:'center'}}>
                <Text style={{color:'#FFFFFF', fontSize: 14, lineHeight: 17}}>Tao Lich Trinh</Text>
            </TouchableOpacity>
        </View>
        <View style={{height: 30, marginHorizontal: 16, justifyContent:'space-between', flexDirection: 'row', marginTop: 20}}>
            <Text style={{color: '#000000', fontWeight: 'bold'}}>Khuyen Mai</Text>
            <TouchableOpacity><Text style={{color: '#9E9E9E', fontSize: 12}}>Xem them  <Image source={require('../assets/images/Right.png')}  style={{width: 3, height: 7}}/></Text></TouchableOpacity>
        </View>
        <View style={{marginLeft: 16}}>
            <Image source={require('../assets/images/001.png')}  style={{width: '80%'}}/>
        </View>
        <View style={{height: 30, marginHorizontal: 16, justifyContent:'space-between', flexDirection: 'row', marginTop: 20}}>
            <Text style={{color: '#000000', fontWeight: 'bold'}}>Lich trinh gan day</Text>
            <TouchableOpacity><Text style={{color: '#9E9E9E', fontSize: 12}}>Xem them  <Image source={require('../assets/images/Right.png')}  style={{width: 3, height: 7}}/></Text></TouchableOpacity>
        </View>
        <View style={{width: 300, height: 230, marginLeft: 16, backgroundColor:'#ffffff', borderRadius: 5, overflow:'hidden'}}>
            <View style={{flexDirection: 'row', flex: 1, justifyContent:'space-between'}}>
                <View style={{flex: 4}}><Image source={require('../assets/images/01.png')}  style={{width: '100%', height: '100%'}}/></View>
                <View style={{flex: 6, marginLeft: 6, justifyContent: 'space-between'}}>
                    <View style={{flex: 1, marginBottom: 6}}><Image source={require('../assets/images/02.png')}  style={{width: '100%', height: '100%'}}/></View>
                    <View style={{flex: 1, flexDirection:'row', justifyContent:'space-between'}}>
                        <View style={{flex: 1, marginRight: 3}}><Image source={require('../assets/images/03.png')}  style={{width: '100%', height: '100%'}}/></View>
                        <View style={{flex: 1, marginLeft: 3}}><Image source={require('../assets/images/04.png')}  style={{width: '100%', height: '100%'}}/></View>
                    </View>
                </View>
            </View>
            <View style={{flex: 0.6}}>
                <View style={{flexDirection:'row', flex: 1}}>
                    <View style={{flexDirection:'row', flex: 1}}>
                        <Text style={{color:'#000000', fontSize: 17}}>Đà Lạt, Lâm Đồng</Text>
                        <Text style={{color:'#494949', fontSize: 14}}> (5 Ngay)</Text>
                    </View>
                    <View style={{flexDirection:'row', flex: 1, justifyContent:'flex-end'}}>
                       
                    </View>
                </View>
                <View></View>
            </View>
        </View>
    </ScrollView>
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
