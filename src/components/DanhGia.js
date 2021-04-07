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
  FlatList}
from 'react-native';
const DanhGia = () =>{
    const [defaultRating, setdefaultRating] = React.useState(2);
    const [maxRating, setmaxRating] = React.useState([1,2,3,4,5]);
    const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true';
    const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true';
    const CustomRatingBar = () =>{
        return (
            <View style={styles.customRatingBar}>
                {
                    maxRating.map((item, key) =>{
                        return (
                            <TouchableOpacity onPress={() =>setdefaultRating(item)} activeOpacity={0.7} key = {item}>
                                    <Image 
                                        style={styles.starImg}
                                        source = { item <= defaultRating ? {
                                            uri : starImgFilled} : {uri :starImgCorner }}
                                    />
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
        );
    }
    return(
        <View style={styles.container}>
            <CustomRatingBar />
            <Text style={{fontSize: 20}}>{defaultRating + '/' + maxRating.length}</Text>
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
        width: 40,
        height: 40, 
        resizeMode: 'cover'
    },
    customRatingBar:{
        justifyContent:'center',
        flexDirection: 'row',
        
    }
});
export default DanhGia;