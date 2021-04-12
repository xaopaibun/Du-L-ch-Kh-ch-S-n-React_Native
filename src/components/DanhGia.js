import React from 'react';
import { SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,Image,TextInput,ImageBackground,View,TouchableOpacity,FlatList } from 'react-native';
const DanhGia = ({navigation}) =>{
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
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <StatusBar barStyle='dark-content'/>
            <View style={{height: 40, alignItems: 'center', flexDirection:'row', paddingHorizontal: 16, justifyContent:'space-between', marginVertical: 10, backgroundColor: '#ffffff'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} ><Text style={{color:'#828282', fontSize: 12}}>Huỷ</Text></TouchableOpacity>
                <View><Text style={{fontSize: 14, fontWeight:'bold', color:'black'}}>Đánh giá lịch trình</Text></View>
                <TouchableOpacity ><Text style={{color:'#828282', fontSize: 12}}>Gửi</Text></TouchableOpacity>
            </View>
            <View style={{height: 60, backgroundColor: '#E5E5E5', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                <CustomRatingBar />
            </View>
            <View style={styles.Box_NhanXet}>
                <View style={{flex: 1, borderBottomColor: '#828282', borderBottomWidth: 0.5, justifyContent: 'center'}}>
                    <TextInput placeholder ='Tiêu đề' placeholderTextColor ='#9A9A9A'/>
                </View>
                <View style={{flex: 3, paddingTop: 16 }}>
                    <TextInput placeholder ='Nhận xét' placeholderTextColor ='#9A9A9A' numberOfLines={5}/>
                </View>
            </View>
            <View style={{backgroundColor: '#E5E5E5', flex: 1, padding: 16}}>
                <Text style={{fontWeight: '400', marginBottom: 16}}>Thêm ảnh</Text>
                <TouchableOpacity><Image source={require('../assets/images/Them.png')}  style={{width: 61, height: 61,resizeMode:'stretch'}}/></TouchableOpacity>
            </View>
        </SafeAreaView>
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
    }
});

export default DanhGia;