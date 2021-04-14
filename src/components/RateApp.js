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
const RateApp = () =>{
    const [defaultRating, setdefaultRating] = React.useState(1);
    const [maxRating, setmaxRating] = React.useState([1,2,3,4,5]);
    const starImgFilled = require('../assets/images/star_filled.png');
    const starImgCorner = require('../assets/images/star_corner.png');
    const CustomRatingBar = () =>{
                return (
                    <View style={styles.customRatingBar}>
                        {
                            maxRating.map((item, key) =>{
                                return (
                                    <TouchableOpacity onPress={() =>setdefaultRating(item)} activeOpacity={0.7} key = {item}>
                                            <Image 
                                                style={styles.starImg}
                                                source = { item <= defaultRating ? starImgFilled : starImgCorner }
                                            />
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </View>
                );
            }
    return(
        <View style={{height: 210,marginHorizontal: 52,  backgroundColor:'white',justifyContent: 'space-around', borderRadius: 5}}>
            <View style={{flex: 4.5, paddingVertical: 10}}>
                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontWeight: '500'}}>Đánh giá chúng tôi</Text>
                </View>
                
                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <CustomRatingBar />
                </View>
            </View>
            <View style={{flex: 5.5}}>
                <View style={styles.View_LuaChon}>
                    <TouchableOpacity onPress={() => {
                        Alert.alert("Thông báo ", "Bạn đã đánh giá App thành công");
                    }}>
                        <Text>Đánh giá ngay</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.View_LuaChon}>
                    <TouchableOpacity >
                        <Text>Nhắc tôi sau</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.View_LuaChon}>
                    <TouchableOpacity >
                        <Text>Không nhắc lại</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    starImg:{   
        width: 20,
        height: 20, 
        resizeMode: 'cover',
        marginHorizontal: 5
    },
    customRatingBar:{
        justifyContent:'center',
        flexDirection: 'row',
        
    },
    Box_NhanXet:{
        height: 200,
        padding: 16,
        backgroundColor: '#ffffff'
    },
    View_LuaChon:{ flex: 2,
    borderTopColor:'#979797',
    borderTopWidth: 0.5, justifyContent: 'center',
    alignItems:'center'}
   
});
export default RateApp;

