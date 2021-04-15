import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../components/Home';
import 'react-native-gesture-handler';
import ScreenLichTrinh from '../../components/LichTrinh';
import ScreenKhuyenMai from '../../components/KhuyenMai';
import ScreenDiaDiemPhoBien from '../../components/DiaDiem';
import ScreenDiemDenThang12 from '../../components/DiemDenThang12';
import ScreenTraiNghiem from '../../components/TraiNghiem';
import ScreenTimKiem from '../../components/Timkiem';
import ScreenKS_RS from '../../components/KS_RS';
import Tabview from '../Tabview/TabMain';
const Stack = createStackNavigator();
import ScreenKhachSan from '../../components/KhachSan';
import ScreenNhaHang from '../../components/NhaHang';
import ChiTietKM from '../../components/ChiTietKM';
import ScreenCTDiaDiem from '../../components/CTDiaDiem';
import ScreenCTNhaHang from '../../components/CTNhaHang';
import ScreenChiTietKhachSan from '../../components/ChiTietKhachSan';
import ScreenTaoLichTrinh from '../../components/TaoLichTrinh';
import ScreenNguoiThamGia from '../../components/NguoiThamGia';
import ScreenXemGoiY from '../../components/Xemgoiy';
import ScreenDanhSachPhong from '../../components/DanhSachPhong';
import ScreenDatPhong from '../../components/DatPhong';
import ScreenYeuThich from '../../components/YeuThich';
import ScreenCaiDat from '../../components/CaiDat';
import ScreenChinhSachBaoMat from '../../components/ChinhSachBaoMat';
import ScreenDieuKhoan from '../../components/DieuKhoan';
import ScreenLogin from '../../components/Login';
import ScreenOTP from '../../components/OTP';
import ScreenCapNhatThongTin from '../../components/CapNhatThongTin';
import SuaThongTinCaNhan from '../../components/Suathongtincanhan';
import ScreenTongQuanLichTrinh from '../../components/TongQuanLichTrinh';
import Profile from '../../components/Profile';
import NguoiTheoDoi from '../../components/NguoiTheoDoi';
import NguoiDangTheoDoi from '../../components/NguoiDangTheoDoi';
import ScreenXemGoiY_ from '../../components/XemGoiY@';
export default function RootStack({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" >
        <Stack.Screen name="ScreenLogin" component={ScreenLogin} />
        <Stack.Screen name="Home" component={Tabview} />
        <Stack.Screen name="ScreenLichTrinh" component={ScreenLichTrinh} />
        <Stack.Screen name="ScreenKhuyenMai" component={ScreenKhuyenMai} />
        <Stack.Screen name="ScreenDiaDiemPhoBien" component={ScreenDiaDiemPhoBien} />
        <Stack.Screen name="ScreenDiemDenThang12" component={ScreenDiemDenThang12} />
        <Stack.Screen name="ScreenTraiNghiem" component={ScreenTraiNghiem} />
        <Stack.Screen name="ScreenTimKiem" component={ScreenTimKiem} />
        <Stack.Screen name="ScreenKS_RS" component={ScreenKS_RS} />
        <Stack.Screen name="ScreenKhachSan" component={ScreenKhachSan} />
        <Stack.Screen name="ScreenNhaHang" component={ScreenNhaHang} />
        <Stack.Screen name="ChiTietKM" component={ChiTietKM} />
        <Stack.Screen name="ScreenCTDiaDiem" component={ScreenCTDiaDiem} />
        <Stack.Screen name="ScreenCTNhaHangKhachSan" component={ScreenCTNhaHang} />
        <Stack.Screen name="ScreenChiTietKhachSan" component={ScreenChiTietKhachSan} />
        <Stack.Screen name="ScreenTaoLichTrinh" component={ScreenTaoLichTrinh} />
        <Stack.Screen name="ScreenNguoiThamGia" component={ScreenNguoiThamGia} />
        <Stack.Screen name="ScreenDanhSachPhong" component={ScreenDanhSachPhong} />
        <Stack.Screen name="ScreenXemGoiY" component={ScreenXemGoiY} />
        <Stack.Screen name="ScreenDatPhong" component={ScreenDatPhong} />
        <Stack.Screen name="ScreenYeuThich" component={ScreenYeuThich} />
        <Stack.Screen name="ScreenCaiDat" component={ScreenCaiDat} />
        <Stack.Screen name="ScreenDieuKhoan" component={ScreenDieuKhoan} />
        <Stack.Screen name="ScreenChinhSachBaoMat" component={ScreenChinhSachBaoMat} />
        <Stack.Screen name="ScreenOTP" component={ScreenOTP} />
        <Stack.Screen name="ScreenCapNhatThongTin" component={ScreenCapNhatThongTin} />
        <Stack.Screen name="SuaThongTinCaNhan" component={SuaThongTinCaNhan} />
        <Stack.Screen name="ScreenTongQuanLichTrinh" component={ScreenTongQuanLichTrinh} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="NguoiTheoDoi" component={NguoiTheoDoi} />
        <Stack.Screen name="NguoiDangTheoDoi" component={NguoiDangTheoDoi} />
        <Stack.Screen name="ScreenXemGoiY_" component={ScreenXemGoiY_} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
