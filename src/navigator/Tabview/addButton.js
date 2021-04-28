

import { useNavigation } from '@react-navigation/native';
import React, { useRef }from "react";
import { View, StyleSheet, TouchableHighlight,TouchableOpacity, Animated,  Image,Text } from "react-native";

import { useDispatch} from 'react-redux';
const AddButton  = () => {
    // mode = new Animated.Value(0);
    // buttonSize = new Animated.Value(1);
    const navigation = useNavigation();
    const mode  = useRef(new Animated.Value(0)).current;
    const [active, setactive] = React.useState(true);
    const buttonSize  = useRef(new Animated.Value(1)).current;
    const dispatch = useDispatch();
    handlePress = () => {
       
        Animated.sequence([
            Animated.timing(buttonSize, {
                toValue: 0.95,
                duration: 200,
                useNativeDriver: true
            }),
            Animated.timing(buttonSize, {
                toValue: 1,
                useNativeDriver: true,
        
            }),
            Animated.timing(mode, {
                toValue: mode._value === 0 ? 1 : 0,
                useNativeDriver: false,

            })
        ]).start();
      setTimeout(() =>{
        setactive(!active)
        dispatch({type : 'ACTIVE_TABVIEW', nutButton : active})
        }, 1200)
    };

   
        const thermometerX = mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-40, -120]
        });

        const thermometerY = mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, -100]
        });

        const timeX = mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-30, 5]
        });

        const timeY = mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, -160]
        });
        const timeY1 = mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, -160]
        });

        const pulseX = mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-30, 50]
        });
        const timeX1 = mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-30, -70]
        });
        const pulseY = mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, -100]
        });

        const rotation = mode.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"]
        });

        const sizeStyle = {
            transform: [{ scale: buttonSize }]
        };

        return (
            <View style={{ position: "absolute", alignItems: "center" }}>
                <Animated.View style={{ position: "absolute", left: thermometerX, top: thermometerY }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ScreenTaoLichTrinh')} style={{width: 80, height: 50, justifyContent: 'space-between', alignItems: 'center'}} >
                        <View style={styles.secondaryButton}>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>+</Text>
                        </View>
                        <Text style={{color: 'white', fontSize: 12, position: 'absolute', bottom : -20, left: 0, zIndex: 2, textAlign: 'center'}}>Tạo lịch trình</Text>
       
       
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={{ position: "absolute", left: timeX, top: timeY }}>
                <TouchableOpacity onPress={() => navigation.navigate('DanhGia')} style={{width: 60, height: 50, justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={styles.secondaryButton}>
                            <Image source={require('../../assets/images/butchi.png')}  style={{width: 12, height: 12}} />
                        </View>
                        <Text style={{color: 'white', fontSize: 12, position: 'absolute', bottom : -20, left: 5, zIndex: 2, textAlign: 'center'}}>Đánh giá</Text>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={{ position: "absolute", left: timeX1, top: timeY1 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ScreenXemGoiY_')} style={{width: 60, height: 50, justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={styles.secondaryButton}>
                            <Image source={require('../../assets/images/bongden.png')}  style={{width: 12, height: 12}} />
                        </View>
                        
                        <Text style={{color: 'white', fontSize: 12, position: 'absolute', bottom : -20, left: 0, zIndex: 2, textAlign: 'center'}}>Xem gợi ý</Text>
                    </TouchableOpacity>
                  
                </Animated.View>
                <Animated.View style={{ position: "absolute", left: pulseX, top: pulseY }}>
                  
                    <TouchableOpacity onPress={() => navigation.navigate('ScreenTimKiem')} style={{width: 60, height: 50, justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={styles.secondaryButton}>
                            <Image source={require('../../assets/images/timkiem3.png')}  style={{width: 12, height: 12}} />
                        </View>
                        <Text style={{color: 'white', fontSize: 12, position: 'absolute', bottom : -28, left: 0, zIndex: 2, textAlign: 'center'}}>Tìm quanh đây</Text>
                    </TouchableOpacity>
                </Animated.View>
                
                <Animated.View style={[{alignItems: "center",
        justifyContent: "center",
        width: 39,
        height: 39,
        borderRadius: 36,
        backgroundColor: active?"#FF5F24":"#FFAE8F",
        position: "absolute",
        marginTop: -35,
        shadowColor: "#FF5F24",
        shadowRadius: 5,
        shadowOffset: { height: 10 },
        shadowOpacity: 0.3,}, sizeStyle]}>
                    <TouchableOpacity onPress={handlePress}>
                        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
                        <Text style={{color: 'white', fontSize: 30, textAlign:'center', fontWeight: '600'}}>+</Text>
                        </Animated.View>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: 39,
        height: 39,
        borderRadius: 36,
        
        backgroundColor: "#FF5F24",
        position: "absolute",
        marginTop: -35,
        shadowColor: "#FF5F24",
        shadowRadius: 5,
        shadowOffset: { height: 10 },
        shadowOpacity: 0.3,
        // borderWidth: 3,
        // borderColor: "#FFFFFF"
    },
    secondaryButton: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: 30,
        height: 30,
        marginTop: 20,
        marginLeft: 10,
        borderRadius: 24,
        backgroundColor: "#FF5F24"
    }
});
export default AddButton;