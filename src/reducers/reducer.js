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
        default:
            return state
    }
}
export default reducer;