import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
 Image,
 
  View,
  TouchableOpacity,

} from 'react-native';


const ScreenThongTinCaNhan =  ({navigation}) => {
  
   
   
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <StatusBar barStyle='dark-content'/>
            <View style={{height: 40,  alignItems:'center', marginVertical: 10, backgroundColor: '#ffffff', justifyContent: 'center'}}>
                <Text style={{fontSize: 14, fontWeight:'bold', color:'black'}}>Thông Tin Cá Nhân</Text>
            </View>
            <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
                <TouchableOpacity onPress={() => navigation.navigate('SuaThongTinCaNhan')} style={{marginTop: 20,height: 80, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white'}}>
                    <Image source={{uri :'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/156598791_2203273959820668_1209852453979302780_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=WEV97IplNlgAX8XPpG-&_nc_ht=scontent.fhan3-1.fna&oh=f22b691c0fe1895e745ae77dc67c89a6&oe=608A53D7'}}  style={{width: 60, height: 60, borderRadius: 50}} />
                    <Text style={{marginLeft: 10, fontSize: 15, fontWeight: '500'}}>Phạm Jin</Text>
                </TouchableOpacity>
                <View style={{marginTop: 35,height: 'auto', backgroundColor: '#ffffff', padding: 16}}>
                    <TouchableOpacity style={{height: 30, flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <Image source={require('../assets/images/lichtrinh.png')}  style={{width: 15, height: 20}}/>
                        </View>
                        <View style={{flex: 9,borderBottomWidth: 0.2, borderBottomColor : '#B9B9B9', borderStyle:'solid'}}>
                            <Text style={{ fontSize: 13, fontWeight : '500'}}>Lịch Trình Của Tôi</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height: 30, flexDirection: 'row', marginVertical: 8}}>
                        <View style={{flex: 1}}>
                            <Image source={require('../assets/images/megaphone1.png')}  style={{width: 15, height: 20}}/>
                        </View>
                        <View style={{flex: 9,borderBottomWidth: 0.2, borderBottomColor : '#B9B9B9', borderStyle:'solid'}}>
                            <Text style={{ fontSize: 13, fontWeight : '500'}}>Khuyến Mại</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>navigation.navigate('ScreenYeuThich')} style={{height: 30, flexDirection: 'row', marginVertical: 8}}>
                        <View style={{flex: 1}}>
                            <Image source={require('../assets/images/yeuthich.png')}  style={{width: 18, height: 16}}/>
                        </View>
                        <View style={{flex: 9,borderBottomWidth: 0.2, borderBottomColor : '#B9B9B9', borderStyle:'solid'}}>
                            <Text style={{ fontSize: 13, fontWeight : '500'}}>Yêu Thích</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height: 30, flexDirection: 'row', marginVertical: 8}}>
                        <View style={{flex: 1}}>
                            <Image source={require('../assets/images/danhgia.png')}  style={{width: 20, height: 20}}/>
                        </View>
                        <View style={{flex: 9,borderBottomWidth: 0.2, borderBottomColor : '#B9B9B9', borderStyle:'solid'}}>
                            <Text style={{ fontSize: 13, fontWeight : '500'}}>Đánh Giá</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>navigation.navigate('ScreenCaiDat')} style={{height: 30, flexDirection: 'row', marginVertical: 8}}>
                        <View style={{flex: 1}}>
                            <Image source={require('../assets/images/caidat.png')}  style={{width: 19, height: 19}}/>
                        </View>
                        <View style={{flex: 9,borderBottomWidth: 0.2, borderBottomColor : '#B9B9B9', borderStyle:'solid'}}>
                            <Text style={{ fontSize: 13, fontWeight : '500'}}>Cài Đặt</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
           
           
        </SafeAreaView>
    );
}
export default ScreenThongTinCaNhan;

while(true){
}

MyTask myTask = new MyTask();
    Timer timer = new Timer();
    System.out.println("Currnet time: " + new Date());
    timer.schedule(myTask, 5000);

    public static void main(String[] args) {
        Task1 T1 = new Task1 ();
        Timer timer = new Timer();
       
        timer.schedule(T1, 1);
  
      }


      char c; 
      