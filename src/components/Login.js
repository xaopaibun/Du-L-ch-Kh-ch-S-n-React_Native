import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
 Image,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import { useDispatch , useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient'
import {
      AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
  } from 'react-native-fbsdk';
const ScreenLogin =  ({navigation}) => {
    const [Phone, setPhone] = React.useState('');

    const [userInfo, setuserInfo] = React.useState({});

    const dispatch = useDispatch();

    const SubmitLogin = () => {
        navigation.navigate('ScreenOTP');
        dispatch({type : 'SODIENTHOAI', SDT : Phone})
    }

    const logoutWithFacebook = () => {
            LoginManager.logOut();
            setuserInfo({});
    };
    const loginWithFacebook = () => {
        LoginManager.logInWithPermissions(['public_profile']).then(
          login => {
            if (login.isCancelled) {
              console.log('Login cancelled');
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                const accessToken = data.accessToken.toString();
                SubmitLogin();
                getInfoFromToken(accessToken);
              });
            }
          },
          error => {
            console.log('Login fail with error: ' + error);
          },
        );
      };
      const getInfoFromToken = token => {
        const PROFILE_REQUEST_PARAMS = {
          fields: {
            string: 'id, name,  first_name, last_name',
          },
        };
        const profileRequest = new GraphRequest(
          '/me',
          {token, parameters: PROFILE_REQUEST_PARAMS},
          (error, result) => {
            if (error) {
              console.log('login info has error: ' + error);
            } else {
              setuserInfo({userInfo: result});
              console.log('result:', result);
            }
          },
        );
        new GraphRequestManager().addRequest(profileRequest).start();
      };
    //const isLogin = userInfo.name;
    const buttonText = userInfo.name ? 'Đăng xuất với Facebook' : 'Đăng nhập với Facebook';
    const onPressButton = userInfo.name
      ? logoutWithFacebook
      : loginWithFacebook;
    return(
        <View style={{width: '100%', height: '100%', position: 'relative'}}>
           
            <StatusBar barStyle='dark-content'/>
            <LinearGradient colors={['#FFFFFF', 'rgba(255, 216, 181, 0.708333)', 'rgba(255, 120, 0, 0)']} style={{width: '100%', height: '100%', position: 'absolute', left: 0, right: 0, zIndex: 1}}>
                    <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
                        <Image style={{width: 131, height: 170 }} source={require('../assets/images/logo1.png')}/>
                        <Image style={{width: 134, height: 34, marginTop: 10}} source={require('../assets/images/logo2.png')}/>
                    </View>
                    <View style={{flex: 5, justifyContent: 'space-around', alignItems: 'center', padding: 16}}>
                        <View style={{flex: 1,marginVertical: 20, justifyContent: 'space-around'}}>
                            <View style={{height: 50,flexDirection: 'row', paddingHorizontal: 24, backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', borderRadius: 30}}>
                                <View style={{flex: 3.5, flexDirection: 'row', justifyContent: 'space-around', alignItems:'center',}}>
                                    <Image style={{width: 24, height: 16}} source={require('../assets/images/flag.png')}/>
                                    <Image style={{width: 10, height: 6}} source={require('../assets/images/Shape.png')}/>
                                    <Text style={{color: 'white', fontSize: 15, fontWeight: '500'}}>+84</Text>
                                    <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>|</Text>
                                </View>
                                <View style={{flex: 6.5, paddingLeft: 10, justifyContent: 'center'}}>
                                    <TextInput onChangeText={(SDT) => setPhone(SDT)} style={{color: 'white', fontSize: 18}} keyboardType = {'numeric'} placeholder = 'Nhập số điện thoại' placeholderTextColor = '#ffffff'/>
                                </View>
                            </View>
                            <View >
                                <TouchableOpacity onPress={SubmitLogin} style={{height: 50,width: '100%', backgroundColor: '#FF5F24', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>  
                                    <Text style={{color: 'white',  fontSize: 20, fontWeight: 'bold'}}>OK</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                        <View style={{flex: 1,marginVertical: 50, justifyContent: 'space-around'}}>
                            <TouchableOpacity onPress={onPressButton} style={{flexDirection:'row', height: 40, backgroundColor: '#055EEE', width: '100%', borderRadius: 8}}>
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                                    <Image style={{width: 20, height: 20}} source={require('../assets/images/fb.png')}/>
                                </View>
                                <View style={{justifyContent: 'center', flex: 4, alignItems: 'center'}}>
                                    <Text style={{color: 'white',  fontSize: 15, fontWeight: '500'}}>{buttonText}</Text>
                                </View>
                            </TouchableOpacity>
                                        {userInfo.name && (
                                            <Text style={{fontSize: 16, marginVertical: 16}}>
                                                Logged in As {userInfo.name}
                                            </Text>
                                            )}
                            <TouchableOpacity style={{flexDirection:'row',height: 40, backgroundColor: '#055EEE', width: '100%', borderRadius: 8,overflow: 'hidden'}}>
                                <Image style={{width: 48, height: 40}} source={require('../assets/images/google.png')}/>
                                <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                                    <Text style={{color: 'white',  fontSize: 15, fontWeight: '500'}}>Đăng nhập với Google</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
                <ImageBackground source={require('../assets/images/hinhnenlogin.png')} resizeMode='stretch' style={{ flex: 1}}></ImageBackground>
        </View>
    );
}
export default ScreenLogin;

// import React, {Component} from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';
// import {
//   AccessToken,
//   GraphRequest,
//   GraphRequestManager,
//   LoginManager,
// } from 'react-native-fbsdk';

// export default class ScreenLogin extends Component {
//   state = {userInfo: {}};

//   logoutWithFacebook = () => {
//     LoginManager.logOut();
//     this.setState({userInfo: {}});
//   };

//   getInfoFromToken = token => {
//     const PROFILE_REQUEST_PARAMS = {
//       fields: {
//         string: 'id,name,first_name,last_name',
//       },
//     };
//     const profileRequest = new GraphRequest(
//       '/me',
//       {token, parameters: PROFILE_REQUEST_PARAMS},
//       (error, user) => {
//         if (error) {
//           console.log('login info has error: ' + error);
//         } else {
//           this.setState({userInfo: user});
//           console.log('result:', user);
//         }
//       },
//     );
//     new GraphRequestManager().addRequest(profileRequest).start();
//   };

//   loginWithFacebook = () => {
//     // Attempt a login using the Facebook login dialog asking for default permissions.
//     LoginManager.logInWithPermissions(['public_profile']).then(
//       login => {
//         if (login.isCancelled) {
//           console.log('Login cancelled');
//         } else {
//           AccessToken.getCurrentAccessToken().then(data => {
//             const accessToken = data.accessToken.toString();
//             this.getInfoFromToken(accessToken);
//           });
//         }
//       },
//       error => {
//         console.log('Login fail with error: ' + error);
//       },
//     );
//   };

//   state = {userInfo: {}};

//   render() {
//     const isLogin = this.state.userInfo.name;
//     const buttonText = isLogin ? 'Logout With Facebook' : 'Login From Facebook';
//     const onPressButton = isLogin
//       ? this.logoutWithFacebook
//       : this.loginWithFacebook;
//     return (
//       <View style={{flex: 1, margin: 50}}>
//         <TouchableOpacity
//           onPress={onPressButton}
//           style={{
//             backgroundColor: 'blue',
//             padding: 16,
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <Text>{buttonText}</Text>
//         </TouchableOpacity>
//         {this.state.userInfo.name && (
//           <Text style={{fontSize: 16, marginVertical: 16}}>
//             Logged in As {this.state.userInfo.name}
//           </Text>
//         )}
//       </View>
//     );
//   }
// }