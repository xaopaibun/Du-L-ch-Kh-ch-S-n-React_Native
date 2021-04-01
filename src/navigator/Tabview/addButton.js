// import React, { useRef } from "react";
// import { View, StyleSheet, TouchableHighlight, Animated , Image,Text} from "react-native";


// const AddButton  = () => {
//     const mode  = useRef(new Animated.Value(0)).current;
//     const buttonSize  = useRef(new Animated.Value(1)).current;
//     // mode = new Animated.Value(0);
//     // buttonSize = new Animated.Value(1);

//     handlePress = () => {
//         Animated.sequence([
//             Animated.timing(buttonSize, {
//                 toValue: 0.95,
//                 duration: 200,
//                 useNativeDriver: true 
//             }),
//             Animated.timing(buttonSize, {
//                 toValue: 1,
//                 useNativeDriver: true 
//             }),
//             Animated.timing(mode, {
//                 toValue: mode._value === 0 ? 1 : 0,
//                 useNativeDriver: true 
//             })
            
//         ]).start();
//     };

   
//         const thermometerX = mode.interpolate({
//             inputRange: [0, 1],
//             outputRange: [-24, -100]
//         });

//         const thermometerY = mode.interpolate({
//             inputRange: [0, 1],
//             outputRange: [-50, -100]
//         });

//         const timeX = mode.interpolate({
//             inputRange: [0, 1],
//             outputRange: [-24, -24]
//         });

//         const timeY = mode.interpolate({
//             inputRange: [0, 1],
//             outputRange: [-50, -150]
//         });

//         const pulseX = mode.interpolate({
//             inputRange: [0, 1],
//             outputRange: [-24, 50]
//         });

//         const pulseY = mode.interpolate({
//             inputRange: [0, 1],
//             outputRange: [-50, -100]
//         });

//         const rotation = mode.interpolate({
//             inputRange: [0, 1],
//             outputRange: ["0deg", "45deg"]
//         });

//         const sizeStyle = {
//             transform: [{ scale: buttonSize }]
//         };

//         return (
//             <View style={{ position: "absolute", alignItems: "center" }}>
//                 <Animated.View style={{ position: "absolute", left: thermometerX, top: thermometerY }}>
//                     <View style={styles.secondaryButton}>
//                     <Image source={require('../../assets/images/chuong.png')}  style={{width: 18, height: 18}} /> 
//                     </View>
//                 </Animated.View>
//                 <Animated.View style={{ position: "absolute", left: timeX, top: timeY }}>
//                     <View style={styles.secondaryButton}>
//                         <Image source={require('../../assets/images/chuong.png')}  style={{width: 18, height: 18}} /> 
//                     </View>
//                 </Animated.View>
//                 <Animated.View style={{ position: "absolute", left: pulseX, top: pulseY }}>
//                     <View style={styles.secondaryButton}>
//                     <Image source={require('../../assets/images/chuong.png')}  style={{width: 18, height: 18}} /> 
//                     </View>
//                 </Animated.View>
//                 <Animated.View style={[styles.button, sizeStyle]}>
//                     <TouchableHighlight onPress={handlePress} underlayColor="#FF5F24">
//                         <Animated.View style={{ transform: [{ rotate: rotation }] }}>
//                             {/* <FontAwesome5 name="plus" size={24} color="#FFF" /> */}
//                             {/* <Image source={require('../../assets/images/chuong.png')}  style={{width: 18, height: 18}} /> */}
//                             <Text style={{color: 'white', fontSize: 30, textAlign:'center', fontWeight: '600'}}>+</Text>
//                         </Animated.View>
//                     </TouchableHighlight>
//                 </Animated.View>
//             </View>
//         );
// }

// const styles = StyleSheet.create({
//     button: {
//         width: 39,
//         height: 39,
//         borderRadius: 50,
//         backgroundColor: "#FF5F24",
//         position: "absolute",
//         marginTop: -0,
//         shadowColor: "#FF5F24",
//         shadowRadius: 5,
//         shadowOffset: { height: 10 },
//         shadowOpacity: 0.3,
//         alignItems: "center",
//         justifyContent: "center",
        
//     },
//     secondaryButton: {
//         position: "absolute",
//         alignItems: "center",
//         justifyContent: "center",
//         width: 39,
//         height: 39,
//         borderRadius: 24,
//         backgroundColor: "#FF5F24"
//     }
// });
// export default AddButton;



import React, { useRef }from "react";
import { View, StyleSheet, TouchableHighlight, Animated,  Image,Text } from "react-native";

import { useDispatch} from 'react-redux';
const AddButton  = () => {
    // mode = new Animated.Value(0);
    // buttonSize = new Animated.Value(1);
    const mode  = useRef(new Animated.Value(0)).current;
    const [active, setactive] = React.useState(true);
    const buttonSize  = useRef(new Animated.Value(1)).current;
    const dispatch = useDispatch();
    handlePress = () => {
        setactive(!active);
        setTimeout(() =>{
            dispatch({type : 'ACTIVE_TABVIEW', nutButton : active})
        }, 1200)
        Animated.sequence([
            Animated.timing(buttonSize, {
                toValue: 0.95,
                duration: 200,
                useNativeDriver: true 
            }),
            Animated.timing(buttonSize, {
                toValue: 1,
                useNativeDriver: true 
            }),
            Animated.timing(mode, {
                toValue: mode._value === 0 ? 1 : 0,
                useNativeDriver: false
                
            })
        ]).start();
    };

   
        const thermometerX = mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, -100]
        });

        const thermometerY = mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, -100]
        });

        const timeX = mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, -24]
        });

        const timeY = mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, -150]
        });

        const pulseX = mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, 50]
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
                    <View style={styles.secondaryButton}>
                    <Image source={require('../../assets/images/bongden.png')}  style={{width: 12, height: 12}} /> 
                    </View>
                </Animated.View>
                <Animated.View style={{ position: "absolute", left: timeX, top: timeY }}>
                    <View style={styles.secondaryButton}>
                        <Image source={require('../../assets/images/butchi.png')}  style={{width: 12, height: 12}} />
                        
                    </View>
                </Animated.View>
                <Animated.View style={{ position: "absolute", left: pulseX, top: pulseY }}>
                    <View style={styles.secondaryButton}>
                    <Image source={require('../../assets/images/timkiem3.png')}  style={{width: 12, height: 12}} /> 
                    </View>
                </Animated.View>
                <Animated.View style={[styles.button, sizeStyle]}>
                    <TouchableHighlight onPress={handlePress} underlayColor="#FF5F24">
                        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
                        <Text style={{color: 'white', fontSize: 30, textAlign:'center', fontWeight: '600'}}>+</Text>
                        </Animated.View>
                    </TouchableHighlight>
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