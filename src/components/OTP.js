import React ,{ useRef }  from 'react';
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
  KeyboardAvoidingView
} from 'react-native';

const ScreenOTP = ({navigation}) =>{
    const inputRef = useRef();
    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();
    const [Focus, setFocus] = React.useState(false);
    const [Focus1, setFocus1] = React.useState(false);
    const [Focus2, setFocus2] = React.useState(false);
    const [Focus3, setFocus3] = React.useState(false);
    const [MaPin1, setMaPin1] = React.useState('');
    const [MaPin2, setMaPin2] = React.useState('');
    const [MaPin3, setMaPin3] = React.useState('');
    const [MaPin4, setMaPin4] = React.useState('');
  
    const Cham = () =>{
        return(
            <View style={{height: 14, width: 14, borderRadius: 50, backgroundColor: '#D8D8D8'}}></View>
        );
    }
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#E5E5E5'}}>
            <View style={{flex: 1}}></View>
            <View style={{flex: 2,  paddingHorizontal: 44, justifyContent: 'space-around'}}>
            {/* <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require('../assets/images/muiten.png')}  style={{width: 24, height: 24}}/></TouchableOpacity> */}
                <Text style={{textAlign:'center'}}>Vui lòng nhập mã OTP vừa được gửi vào số điện thoại của bạn</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={{marginHorizontal: 10, justifyContent: 'center', width: 38, alignItems: 'center'}}>
                    
                    {/* <View style={{backgroundColor:  '#D8D8D8', width: 14, height: 14, borderRadius: 50}}></View> */}
                        <TextInput autoFocus={true}
                            onChangeText={(val) => {
                                    setMaPin1(val);
                                    if (val != '') {
                                        inputRef1.current.focus()
                                    }
                                    
                                }
                            } 
                            onKeyPress ={(e)=>{
                                if(Platform.OS === 'ios'){
                                    if(e.nativeEvent.key !== 'Backspace'){
                                        inputRef1.current.focus();
                                    }
                                }
                            }} 
                            onFocus = {() => setFocus(true)}
                            onBlur={() => setFocus(false)} 
                            ref={inputRef} maxLength={1} keyboardType = {'numeric'}
                            style={{paddingVertical: 10, fontSize: 36, fontWeight: '500'}}
                         />
                        <View style={{borderRadius: 2.5,backgroundColor: !Focus?'#D8D8D8':'#FF5F24', height: 5, width: 38}}/>
                    </View>
                    <View style={{marginHorizontal: 10, justifyContent: 'center', width: 38, alignItems: 'center'}}>
                        <TextInput keyboardType = {'numeric'}
                            onChangeText={(val) => {
                                setMaPin2(val);
                                    if (val != '') {
                                        inputRef2.current.focus()
                                    }
                                    
                                }
                            }
                            onKeyPress={(e) => {
                                if (Platform.OS === 'ios') {
                                    if (e.nativeEvent.key === 'Backspace') {
                                        inputRef.current.focus();
                                    }
                                    else {
                                        inputRef2.current.focus()
                                    }
                                }
                                if (Platform.OS === 'android') {
                                    if (e.nativeEvent.key = 'Backspace') {
                                        inputRef.current.focus();
                                    }
                                }
                            }} 
                            onFocus = {() => setFocus1(true)} 
                            onBlur={() => setFocus1(false)} 
                            ref={inputRef1} maxLength={1} 
                            style={{paddingVertical: 10, fontSize: 36, fontWeight: '500'}}/>
                        <View style={{borderRadius: 2.5,backgroundColor:!Focus1 ?'#D8D8D8':'#FF5F24', height: 5, width: 38}}/>
                    </View>
                    <View style={{marginHorizontal: 10, justifyContent: 'center', width: 38, alignItems: 'center'}}>
                        <TextInput  keyboardType = {'numeric'}
                            onChangeText={(val) => {
                                setMaPin3(val);
                                    if (val != '') {
                                        inputRef3.current.focus()
                                    }
                                    
                                }
                            } 
                            onKeyPress={(e) => {
                                if (Platform.OS === 'ios') {
                                    if (e.nativeEvent.key === 'Backspace') {
                                        inputRef1.current.focus();
                                    }
                                    else {6
                                        inputRef3.current.focus()
                                    }
                                }
                                if (Platform.OS === 'android') {
                                    if (e.nativeEvent.key = 'Backspace') {
                                        inputRef1.current.focus();
                                    }
                                }
                            }} 
                            onFocus = {() => setFocus2(true)} 
                            onBlur={() => setFocus2(false)} 
                            ref={inputRef2} maxLength={1} 
                            style={{paddingVertical: 10, fontSize: 36, fontWeight: '500'}}/>
                        <View style={{borderRadius: 2.5,backgroundColor: !Focus2?'#D8D8D8':'#FF5F24', height: 5, width: 38}}/>
                    </View>
                    <View style={{marginHorizontal: 10, justifyContent: 'center', width: 38, alignItems: 'center'}}>
                        <TextInput keyboardType = {'numeric'} onKeyPress={(e) => {
                            if (Platform.OS === 'ios') {
                                if (e.nativeEvent.key === 'Backspace') {
                                    inputRef2.current.focus();
                                }
                                else {
                                    inputRef3.current.focus()
                                }
                            }
                            if (Platform.OS === 'android') {
                                if (e.nativeEvent.key = 'Backspace') {
                                    inputRef2.current.focus();
                                }
                            }
                        }} onFocus = {() => setFocus3(true)} onChangeText={(val) => setMaPin4(val)} onBlur={() => setFocus3(false)} ref={inputRef3} maxLength={1} style={{paddingVertical: 10, fontSize: 36, fontWeight: '500'}}/>
                        <View style={{borderRadius: 2.5,backgroundColor: !Focus3?'#D8D8D8':'#FF5F24', height: 5, width: 38}}/>
                    </View>
                   
                </View>
                <Text style={{color: '#F26230', textAlign: 'center', fontSize: 10, fontWeight: '400'}}>Gửi lại (60s)</Text>
            </View>
            
            <View style={{flex: 2, paddingHorizontal: 16}}>
                {
                    (MaPin1 !== '' && MaPin2 !== '' && MaPin3 !=='' && MaPin4 !== '') ?
                    <TouchableOpacity onPress={() => navigation.navigate('ScreenCapNhatThongTin')} style={{height: 50,width: '100%', backgroundColor: '#FF5F24', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>  
                        <Text style={{color: 'white',  fontSize: 20, fontWeight: 'bold'}}>Hoàn Tất</Text>
                    </TouchableOpacity>
                    :
                    <View style={{height: 50,width: '100%', backgroundColor: '#FBD7CA', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>  
                        <Text style={{color: 'white',  fontSize: 20, fontWeight: 'bold'}}>Hoàn Tất</Text>
                    </View>
                }
               
              
            </View>
        </SafeAreaView>
    );
}
export default ScreenOTP;