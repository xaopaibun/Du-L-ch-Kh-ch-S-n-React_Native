import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
 Image,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  Switch
} from 'react-native';
import { Modal } from 'react-native-paper';
// import CalendarPicker_Custom from './CalendarPicker_Custom';
import CalendarPicker from 'react-native-calendar-picker';
import { useSelector , useDispatch} from 'react-redux';

const ScreenXemGoiY_ =  ({navigation}) => {
    const NgayThangChon = useSelector(state => state.NgayThangChon);
    const Data_QuanTam = useSelector(state => state.Data_QuanTam);
    const [visible, setVisible] = React.useState(false)

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [visible2, setVisible2] = React.useState(false)

    const showModal2 = () => setVisible2(true);
    const hideModal2 = () => setVisible2(false);
    const Loai = ['Độc hành', 'Cặp đôi', 'Gia đình', 'Tour'];
    const XuatPhat = useSelector(state => state.ThanhPhoChon)
    const val_NganSach = useSelector(state => state.val_NganSach)
    const sum_NguoiThamGia = useSelector(state => state.sum_NguoiThamGia)
    const NganSach = ['1.000.000 - 2.000.000 đ', '3.000.000 - 4.000.000 đ']
    const dispatch = useDispatch();
    
    const CalendarPicker_Custom = () =>{
     
        const customDayHeaderStylesCallback = ({ dayOfWeek, month, year }) => {
            switch (dayOfWeek) { // can also evaluate month, year
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 7:
                    return {
                        textStyle: {
                            color: '#F8530D'
                        }
                    }
                case 6: // Thursday
                    return {
                        textStyle: {
                            color: '#F8530D',
                        }
                    };
            }
        }
        const customDatesStylesCallback = date => {
            switch (date.isoWeekday()) {
    
                case 6: // Sunday
                    return {
                        textStyle: {
                            color: '#F8530D',
                        }
                    };
                case 5: // Sunday
                    return {
                        textStyle: {
                            color: '#F8530D',
                        }
                    };
            }
        }
        return(
            <View style={{backgroundColor: 'white', borderRadius: 10, marginHorizontal: 16, overflow:'hidden'}}>
                <CalendarPicker 
              
                previousTitle='<'
                nextTitle='>'
                customDatesStyles='YYYY-MM'
                nextTitleStyle={{ backgroundColor: '#FFFFFF', marginRight: 16, borderRadius: 2, elevation: 5, paddingLeft: 10, paddingRight: 10 }}
                previousTitleStyle={{ backgroundColor: '#FFFFFF', marginLeft: 16, borderRadius: 2, elevation: 5, paddingLeft: 7, paddingRight: 10 }}
                todayBackgroundColor="#F8530D" selectedDayColor="#F8530D"
                selectedDayTextColor="#FFFFFF"
                startFromMonday={true}
                allowRangeSelection={true}
                selectedRangeStartStyle={{backgroundColor:'#F8530D'}}
                selectedRangeEndStyle={{backgroundColor:'#F8530D'}}
                selectedRangeStyle={{backgroundColor:'#F8530D',opacity:0.1}}
                todayTextStyle='#F8530D'
                customDatesStyles={customDatesStylesCallback}
                customDayHeaderStyles={customDayHeaderStylesCallback}
                weekdays={['Th 2','Th 3','Th 4','Th 5','Th 6','Th 7','CN']}
                months={['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']}
                />
                <View style={{height: 20, margin: 16, justifyContent: 'center', alignItems: 'flex-end'}}>
                    <TouchableOpacity onPress={hideModal}>
                        <  Text style={{color: '#FF5F24', fontSize: 14, fontWeight: 'bold'}}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
        
    }
    const ChonNganSach = () => (
        <View style={{height: 240,marginHorizontal: 52,  backgroundColor:'white',justifyContent: 'space-around', borderRadius: 5}}>
                <View style={{height: 40 ,justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontWeight: '600', fontSize: 16}}>Chọn ngân sách (/người)</Text>
                </View>
            <View style={{flex: 3, justifyContent: 'space-around', alignItems: 'center'}}>
                   
                    {
                        NganSach.map((val, index)=>{
                            const OnNganSach = () =>{
                                dispatch({type: 'NganSach', val: val});
                                hideModal2();
                            }
                                return(
                                <TouchableOpacity onPress = {OnNganSach} key={index.toString()}>
                                    <Text>{val}</Text>
                                </TouchableOpacity>
                            );
                        })
                    }
                    
                    <TextInput placeholder='Chọn khác' placeholderTextColor="#ECECEC" />
            
            </View>
            <View style={{height: 50 ,flexDirection: 'row', justifyContent: 'space-around'}}>
                    <TouchableOpacity onPress={hideModal2}>
                        <Text style={{fontWeight: 'bold',color: '#9A9A9A'}}>CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>{
                        hideModal2();
                        dispatch({type:'NgayThangChon', val:mindatetime + ' - '+maxdatetime })
                    }}>
                        <Text style={{fontWeight: 'bold',color: '#FF5F24'}}>OK</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
             <StatusBar barStyle='dark-content'/>
            <View style={{height: 40, alignItems: 'center', flexDirection:'row', paddingHorizontal: 16, justifyContent:'space-between', marginVertical: 10, backgroundColor: '#ffffff'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} ><Image source={require('../assets/images/back.png')}  style={{width: 6, marginRight: 12}}/></TouchableOpacity>
               <View><Text style={{fontSize: 14, fontWeight:'bold', color:'black'}}>Xem Gợi Ý</Text></View>
               <View></View>
            </View>
            <ScrollView  style={{backgroundColor: '#E5E5E5', flex: 1, padding: 16}}>
                <ScrollView style={{height: 30, flex: 1}} horizontal>
                {
                    Loai.map((val, index) =>{
                        const [active, setactive] = React.useState(false);
                            return(
                            <TouchableOpacity key={index.toString()} onPress={() => setactive(!active)} style={{ marginHorizontal: 5, height: 30, width: 80,justifyContent: 'center', alignItems: 'center',backgroundColor: active?'#FF5F24':'#ECF1FF', borderRadius: 5}}>
                            <Text style={{color: active?'white':'black', fontWeight: '500', fontSize: 12}}>{val}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
                </ScrollView>
                <View style={{height: 30,  justifyContent:'space-between', flexDirection: 'row', marginTop: 20}}>
                    <Text style={{color: '#000000', fontWeight: 'bold'}}>Có thể bạn quan tâm</Text>
                    <TouchableOpacity onPress={() =>navigation.navigate('ScreenCoTheBanQuanTam')}><Text style={{color: '#9E9E9E', fontSize: 12}}>Tất cả <Image source={require('../assets/images/Right.png')}  style={{width: 3, height: 7}}/></Text></TouchableOpacity>
                </View>
                <ScrollView style={{height: 'auto'}} horizontal>
                {
                                    Data_QuanTam.map((item, index) =>{
                                    const [active, setactive] = React.useState(false);
                                    const check1 = require('../assets/images/check1.png');
                                    const check2 = require('../assets/images/check2.png');
                                        return(
                                            <View key = {item.id} style={{position: 'relative',width: 162, height: 162,backgroundColor: 'white',marginRight: 10, borderRadius: 5, overflow:'hidden'}}>
                                                <Image source={{uri : item.img}}  style={{width: 162, height: 128}}/>
                                                <View style={{flex: 12, justifyContent: 'center', alignItems: 'center'}}>
                                                    <Text>{item.text}</Text>
                                                </View>
                                                <TouchableOpacity onPress={() => setactive(!active)} style={{position: 'absolute', top : 10, right: 10, zIndex: 2}}><Image source={!active?check1:check2} style={{width: 16, height: 16}}/></TouchableOpacity>
                                            </View>
                                        );
                                    })
                }
            </ScrollView >
                    
                <View style={{flex : 1, justifyContent: 'space-between', marginBottom: 10}}>
                    <View style={{flex: 1, marginVertical: 10}}>
                        <View style={{borderBottomWidth: 0.5, marginVertical: 8, borderColor:'#000000', height: 40, flexDirection: 'row',alignItems:'center'}}>
                            <View style={{flex: 1, justifyContent: 'center'}}><Image source={require('../assets/images/pin1.png')}  style={{width: 20, height: 20}}/></View>
                            <TextInput onFocus={() => navigation.navigate('ScreenTimKiem')} placeholder = "Xuất phát" value={XuatPhat} placeholderTextColor='#989898' style={{padding: 10, flex: 9}}/>
                        </View>
                        <View style={{borderBottomWidth: 0.5, marginVertical: 8, borderColor:'#000000', height: 40, flexDirection: 'row',alignItems:'center'}}>
                            <View style={{flex: 1, justifyContent: 'center'}}><Image source={require('../assets/images/placeholders1.png')}  style={{width: 20, height: 20}}/></View>
                            <TextInput onFocus={() => navigation.navigate('ScreenTimKiem')} placeholder = "Điểm đến"  placeholderTextColor='#989898' style={{padding: 10, flex: 9,  color: '#989898'}}/>
                        </View>
                        <View style={{borderBottomWidth: 0.5, marginVertical: 8, borderColor:'#000000', height: 40, flexDirection: 'row',alignItems:'center'}}>
                            <View style={{flex: 1, justifyContent: 'center'}}><Image source={require('../assets/images/calendar1.png')}  style={{width: 20, height: 20}}/></View>
                            <TextInput value={NgayThangChon} onFocus={showModal} placeholder = "Thời gian" placeholderTextColor='#989898' style={{padding: 10, flex: 9,  color: '#989898'}}/>
                        </View>
                        <View style={{borderBottomWidth: 0.5, marginVertical: 8, borderColor:'#000000', height: 40, flexDirection: 'row',alignItems:'center'}}>
                            <View style={{flex: 1, justifyContent: 'center'}}><Image source={require('../assets/images/dollar1.png')}  style={{width: 20, height: 20}}/></View>
                            <TextInput onFocus={showModal2} value={val_NganSach} placeholder = "Ngân Sách" placeholderTextColor='#989898' style={{padding: 10, flex: 9,  color: '#989898'}}/>
                            <TouchableOpacity onPress = {showModal2}><Image source={require('../assets/images/muitentroxuong.png')}  style={{width: 10, height: 5.5}}/></TouchableOpacity>
                        </View>
                        <View style={{borderBottomWidth: 0.5, marginVertical: 8, borderColor:'#000000', height: 40, flexDirection: 'row',alignItems:'center'}}>
                            <View style={{flex: 1, justifyContent: 'center'}}><Image source={require('../assets/images/friends1.png')}  style={{width: 20, height: 20}}/></View>
                            <TextInput value = {sum_NguoiThamGia} onFocus={() => navigation.navigate('ScreenNguoiThamGia')} placeholder = "Người tham gia" placeholderTextColor='#989898' style={{padding: 10, flex: 9, color: '#989898'}}/>
                        </View>
                        
                    </View>
                    <View style={{flex: 1, justifyContent: 'flex-end'}}>
                        <TouchableOpacity style={{backgroundColor: '#FF5F24', borderRadius: 5, height: 35,justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'#FFFFFF', fontSize: 14, lineHeight: 17}}>Xem gợi ý</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >
            <Modal visible={visible} onDismiss={hideModal} >
                <CalendarPicker_Custom  />
            </Modal>
            <Modal visible={visible2} onDismiss={hideModal2} >
                    <ChonNganSach />
            </Modal>
        </SafeAreaView>
    );
}
export default ScreenXemGoiY_;