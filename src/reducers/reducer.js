const initState = {};
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'DuLieuLichTrinh' : 
            return { ...state, data_diadiem : action.data }
        default:
            return state
    }
}
export default reducer;