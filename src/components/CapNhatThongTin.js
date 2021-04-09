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
const ScreenCapNhatThongTin = ({navigation}) =>{
    const [Focus, setFocus] = React.useState(false);
    const [Focus1, setFocus1] = React.useState(false);
    const [Focus2, setFocus2] = React.useState(false);
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.Box}>
                <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require('../assets/images/muiten.png')}  style={{width: 24, height: 24}}/></TouchableOpacity>
                <Text style={styles.Text_Tieude}>Cập nhật thông tin</Text>
                <View style={[styles.View_input, {borderBottomColor: Focus?'#F17A4F':'#E0E0E0'}]}>
                    <TextInput style={styles.input} 
                        onFocus = {() => setFocus(true)}
                        onBlur={() => setFocus(false)}  
                        autoFocus={true} 
                        placeholder='Họ' 
                        placeholderTextColor='#BDBDBD'/>
                </View>
                <View style={[styles.View_input, {borderBottomColor: Focus1?'#F17A4F':'#E0E0E0'}]}>
                    <TextInput style={styles.input} 
                        onFocus = {() => setFocus1(true)}
                        onBlur={() => setFocus1(false)}  
                        placeholder='Tên' 
                        placeholderTextColor='#BDBDBD'/>
                </View>
                <View style={[styles.View_input, {borderBottomColor: Focus2?'#F17A4F':'#E0E0E0'}]}>
                    <TextInput style={styles.input} 
                     onFocus = {() => setFocus2(true)}
                     onBlur={() => setFocus2(false)}  
                    placeholder='Số điện thoại' 
                    placeholderTextColor='#BDBDBD'/>
                </View>
            </View>
            <View style={styles.Box}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.Button}>  
                    <Text style={styles.Text_Button}>Hoàn Thành</Text>
                </TouchableOpacity>
                <Text style={{color: '#565656', fontSize: 8, textAlign: 'center'}}>Bằng cách tham gia OKGO, bạn đã đồng ý với <Text onPress={() => navigation.navigate('ScreenChinhSachBaoMat')} style={{textDecorationLine: 'underline', color: '#565656', fontSize: 8}}>Chính sách bảo mật và Điều khoản sử dụng</Text> của chúng tôi</Text>
            </View>
            

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1, backgroundColor: '#E5E5E5'
    },
    input:{
        color: '#383838', fontSize: 18
    },
    View_input:{
        marginVertical: 5, paddingVertical: 10, borderBottomWidth: 3
    },
    Text_Tieude :{
        marginVertical: 20,fontWeight: '800', fontSize: 25, color: '#333333'
    },
    Box:{
        flex: 5, padding: 16
    },
    Text_Button:{
        color: 'white',  fontSize: 18, fontWeight: '700'
    },
    Button:{
        marginVertical: 20, height: 45,width: '100%', backgroundColor: '#FF5F24', borderRadius: 30, justifyContent: 'center', alignItems: 'center'
    }
});
export default ScreenCapNhatThongTin;