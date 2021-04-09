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
  Switch,
  ImageBackground
} from 'react-native';

const SplashScreen = () =>{
    return(
        <View style={{flex:1, backgroundColor: '#E5E5E5', justifyContent: 'center', alignItems: 'center'}}>
            <StatusBar barStyle='light-content'/>

              <Image source={require('../assets/images/logo1.png')}  style={{marginTop: 150, width: 77, height: 98,resizeMode:'stretch'}}/>
                <Image source={require('../assets/images/logo2.png')}  style={{marginVertical: 20,width: 77, height: 20,resizeMode:'stretch'}}/> 
            
            <ImageBackground source={require('../assets/images/Main.png')}  style={{width: '100%', height: '76%', resizeMode:'stretch'}}> 
            
            </ImageBackground>
            <Text style={{color: '#4F3018', fontSize: 12}}>Welcome!</Text>
        </View>
    );
}
export default SplashScreen;