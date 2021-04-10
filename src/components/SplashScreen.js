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
        <View style={{flex:1, backgroundColor: '#E5E5E5'}}>
            <StatusBar barStyle='light-content'/>
            <View style={{flex: 1}}></View>
              <View style={{flex: 2,  justifyContent: 'space-around', alignItems: 'center'}}>
                <Image source={require('../assets/images/logo1.png')}  style={{ width: 77, height: 98,resizeMode:'stretch'}}/>
                <Image source={require('../assets/images/logo2.png')}  style={{marginVertical: 20,width: 77, height: 20,resizeMode:'stretch'}}/> 
              </View>
              <View style={{flex: 6}}>
                <ImageBackground source={require('../assets/images/Main.png')}  style={{width: '100%', height: '100%', resizeMode:'stretch'}} /> 
              </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#4F3018', fontSize: 12}}>Welcome!</Text>
            </View>
            
        </View>
    );
}
export default SplashScreen;