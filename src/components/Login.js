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
import LinearGradient from 'react-native-linear-gradient';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
  } from 'react-native-fbsdk';

 
const ScreenLogin =  ({navigation}) => {
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }; 
  
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
      iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    });

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
                        <View style={{flex: 2,marginVertical: 20, justifyContent: 'space-between'}}>
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
                            <View style={{marginVertical: 10}}>
                                <TouchableOpacity onPress={SubmitLogin} style={{height: 50,width: '100%', backgroundColor: '#FF5F24', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>  
                                    <Text style={{color: 'white',  fontSize: 20, fontWeight: 'bold'}}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flex: 0.4}}></View>
                        <View style={{flex: 2, marginVertical: 20, justifyContent: 'space-around'}}>
                            <TouchableOpacity onPress={onPressButton} style={{flexDirection:'row', height: 40, backgroundColor: '#055EEE', width: '100%', borderRadius: 8, marginVertical: 10}}>
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                                    <Image style={{width: 20, height: 20}} source={require('../assets/images/fb.png')}/>
                                </View>
                                <View style={{justifyContent: 'center', flex: 4, alignItems: 'center'}}>
                                    <Text style={{color: 'white',  fontSize: 15, fontWeight: '500'}}>{buttonText}</Text>
                                </View>
                            </TouchableOpacity>
                                        {/* {userInfo.name && (
                                            <Text style={{fontSize: 16, marginVertical: 16}}>
                                                Logged in As {userInfo.name}
                                            </Text>
                                            )} */}
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
// import React, {useEffect, useState} from 'react';
// import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
// import {GoogleSignin, GoogleSigninButton, statusCodes, RNGoogleSignin} from '@react-native-community/google-signin';
// const ScreenLogin = () => {
// const [user, setUser] = useState({})
// useEffect(() => {
//     GoogleSignin.configure({
//       webClientId: '',
//       offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//       forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
//       iosClientId: '', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
//     });
//     isSignedIn()
//   }, [])
// const signIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       console.log(userInfo)
//       setUser(userInfo)
//     } catch (error) {
//       console.log('Message', error.message);
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         console.log('User Cancelled the Login Flow');
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         console.log('Signing In');
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         console.log('Play Services Not Available or Outdated');
//       } else {
//         console.log('Some Other Error Happened');
//       }
//     }
//   };
// const isSignedIn = async () => {
//     const isSignedIn = await GoogleSignin.isSignedIn();
//     if (!!isSignedIn) {
//       getCurrentUserInfo()
//     } else {
//       console.log('Please Login')
//     }
//   };
// const getCurrentUserInfo = async () => {
//     try {
//       const userInfo = await GoogleSignin.signInSilently();
//       setUser(userInfo);
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_REQUIRED) {
//         alert('User has not signed in yet');
//         console.log('User has not signed in yet');
//       } else {
//         alert("Something went wrong. Unable to get user's info");
//         console.log("Something went wrong. Unable to get user's info");
//       }
//     }
//   };
// const signOut = async () => {
//     try {
//       await GoogleSignin.revokeAccess();
//       await GoogleSignin.signOut();
//       setUser({}); // Remember to remove the user from your app's state as well
//     } catch (error) {
//       console.error(error);
//     }
//   };
// // signOut()
// return (
//     <View style={styles.main}>
//       {!user.idToken ? 
//         <GoogleSigninButton 
//           style={{ width: 192, height: 48 }}
//           size={GoogleSigninButton.Size.Wide}
//           color={GoogleSigninButton.Color.Dark}
//           onPress={signIn}
//         /> :
//         <TouchableOpacity onPress={signOut}>
//           <Text>Logout</Text>
//         </TouchableOpacity>
//       }
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   }
// })
// export default ScreenLogin;