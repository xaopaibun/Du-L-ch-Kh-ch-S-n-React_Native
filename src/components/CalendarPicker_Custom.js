import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
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
        <View style={{backgroundColor: 'white', borderRadius: 10, marginHorizontal: 16}}>
            <CalendarPicker 
                previousTitle='<'
                nextTitle='>'
                customDatesStyles='YYYY-MM'
                nextTitleStyle={{ backgroundColor: '#FFFFFF', marginRight: 16, borderRadius: 2, elevation: 5, paddingLeft: 10, paddingRight: 10 }}
                previousTitleStyle={{ backgroundColor: '#FFFFFF', marginLeft: 16, borderRadius: 2, elevation: 5, paddingLeft: 7, paddingRight: 10 }}
                todayBackgroundColor="#F8530D" selectedDayColor="#F8530D"
                selectedDayTextColor="#FFFFFF"
                // customDatesStyles='YYYY-MM'
                // todayTextStyle={{
                //     color: '#BE52F2',
                // }}
                todayTextStyle='#F8530D'
                customDatesStyles={customDatesStylesCallback}
                customDayHeaderStyles={customDayHeaderStylesCallback}
                weekdays={['Th 2','Th 3','Th 4','Th 5','Th 6','Th 7','CN']}
                months={['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']}
                />
                <View style={{height: 20, margin: 16, justifyContent: 'center', alignItems: 'flex-end'}}>
                    <TouchableOpacity >
                        <  Text style={{color: '#FF5F24', fontSize: 14, fontWeight: 'bold'}}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
}
export default CalendarPicker_Custom;