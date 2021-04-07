import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
 Image,
  View,
  TouchableOpacity,
  ImageBackground,

} from 'react-native';


const ScreenLogin =  ({navigation}) => {
    return(
        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
            <StatusBar barStyle='dark-content'/>
            <ImageBackground source={require('../assets/images/hinhnenlogin.png')} style={{width: '100%', height: '100%'}}>
                <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{width: 131, height: 170 }} source={require('../assets/images/logo1.png')}/>
                    <Image style={{width: 134, height: 34}} source={require('../assets/images/logo2.png')}/>
                </View>
                <View style={{flex: 5, justifyContent: 'center', alignItems: 'center', padding: 16}}>
                    <View style={{height: 50, backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', borderRadius: 30}}>

                    </View>
                    <TouchableOpacity style={{marginTop: 20,height: 50, backgroundColor: '#FF5F24', width: '100%', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'white',fontSize: 20, fontWeight: 'bold'}}>OK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop: 20,height: 40, backgroundColor: '#055EEE', width: '100%', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'white',  fontSize: 15, fontWeight: '500'}}>Đăng nhập với Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop: 20,height: 40, backgroundColor: '#055EEE', width: '100%', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'white',  fontSize: 15, fontWeight: '500'}}>Đăng nhập với Google</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}
export default ScreenLogin;