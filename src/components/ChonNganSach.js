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
  FlatList,
  Alert,
} from 'react-native';
const ChonNganSach = () =>{
    const ChonTien = () =>{
        
    }
    return(
        <View style={{height: 210,marginHorizontal: 52,  backgroundColor:'white',justifyContent: 'space-around', borderRadius: 5}}>
                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontWeight: '600', fontSize: 16}}>Chọn ngân sách (/người)</Text>
                </View>
            <View style={{flex: 5, justifyContent: 'space-around', alignItems: 'center'}}>
                    <TouchableOpacity onPress={ChonTien}>
                        <Text>1.000.000 - 2.000.000 đ</Text>
                    </TouchableOpacity>
                    <TextInput placeholder='Chọn khác' placeholderTextColor="#ECECEC" />
               
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                    <TouchableOpacity >
                        <Text style={{fontWeight: 'bold',color: '#9A9A9A'}}>CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={{fontWeight: 'bold',color: '#FF5F24'}}>OK</Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}

export default ChonNganSach;

