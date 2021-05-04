const initState = {
    Data_QuanTam : [
        {
            "id": "1",
            "img" :"https://vuonhoaphatgiao.com/uploads/noidung/images/phat_hoc/tam-linh.jpg",
            "text":"Tâm linh"
        },
        {
            "id": "2",
            "img" :"https://cdn.vietnamtours247.com/2020/02/mot-so-net-tieu-bieu-van-hoa-viet-nam.png",
            "text":"Văn hóa - Lịch sử"
        },
        {
            "id": "3",
            "img" :"https://botoquanmoc.com/upload_images/images/2019/10/09/IMG_0342-2(1).jpg",
            "text":"Ẩm thực"
        },
        {
            "id": "4",
            "img" :"https://vcdn1-dulich.vnecdn.net/2018/06/19/Phu-Quoc-honeymoon-beach.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=g-Omn4qgZxh3okJe7scP_A",
            "text":"Biển"
        },
    ],
    NganSach:[
        '1.000.000 - 2.000.000 đ', '3.000.000 - 5.000.000 đ'
    ],
    soluongsao: 0,
    active_CalendarPicker: false
};
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'DuLieuLichTrinh' : 
            return { ...state, data_diadiem : action.data }
        case 'DuLieuKhuyenMai' : 
            return { ...state, data_khuyenmai : action.data }
        case 'DuLieudiadiemphobien' : 
            return { ...state, data_diadiemphobien : action.data }
        case 'DuLieudiemdentheomua' : 
            return { ...state, data_diadiemthang12: action.data }
        case 'DuLieuKhuyenMai' : 
            return { ...state, data_KhuyenMai: action.data }
        case 'DuLieuDiaDiemTheoMua' : 
            return { ...state, data_DiaDiemTheoMua: action.data }
        case 'DuLieutrainghiem' : 
            return { ...state, data_trainghiem: action.data }
        case 'DuLieuKS_RS' : 
            return { ...state, data_KS_RS: action.data }
        case 'ACTIVE_TABVIEW':
            return { ...state, nutButton: action.nutButton}
        case 'ChiTietKM':
            return { ...state, chitietKM: action.item}
        case 'ChiTietDiaDiem':
            return { ...state, chitietDiaDiem: action.data}
        case 'DuLieuNhaHang':
            return { ...state, data_NhaHang: action.data}
        case 'ChiTietNhaHang':
            return { ...state, chitietNhaHang: action.data}
        case 'ChiTietKhachSan':
            return { ...state, chitietKhachSan: action.data}
        case 'ThanhPhoXuatPhat':
            return { ...state, ThanhPhoChon: action.ThanhPho}
        case 'ThanhPhoDen':
            return { ...state, ThanhPhoChon2: action.ThanhPho}
        case 'NguoiThamGia':
            return { ...state, sum_NguoiThamGia: action.sum}
        case 'NganSach':
            return { ...state, val_NganSach: action.val}
        case 'NgayThangChon':
            return { ...state, NgayThangChon: action.val}
        case 'Lay_Id_De_Xoa':
            //console.log(action.id);
            return { ...state, id_can_xoa: action.id}
        case 'DuLieuDuLichABC':{
           //console.log(action.Dulieu);
            return { ...state, dulieudulichabc: action.Dulieu }
        }
        case 'Xoa_Item':
          
            console.log(state.dulieudulichabc.filter(val => val.id != state.id_can_xoa));
            
            return { ...state, dulieudulichabc:  state.dulieudulichabc.filter(val => val.id != state.id_can_xoa)}
        case 'Sao':
            soluongsao = parseInt(action.soluongsao) + parseInt(state.soluongsao);
            return { ...state, soluongsao: soluongsao}
        case 'SODIENTHOAI':
            return { ...state, SDT: action.SDT}
        case 'GUIKEY':
            return { ...state, typetimkiem : action.value }
        case 'GUIKEYSCREEN':
            return { ...state, typescreen : action.value }
        case 'active_CalendarPicker':
            return { ...state, active_CalendarPicker : action.active }
        default:
            return state
    }
}
export default reducer;