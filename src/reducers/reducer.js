const initState = {};
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
        
        default:
            return state
    }
}
export default reducer;