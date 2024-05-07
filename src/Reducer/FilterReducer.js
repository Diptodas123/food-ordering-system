const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            };
        case "SET_ALL_RESTAURANTS":
            return {
                ...state,
                isLoading: false,
                allRestaurants: action.payload
            };
        case "SET_GRID_VIEW":
            return {
                ...state,
                gridView: true
            };
        case "SET_LIST_VIEW":
            return {
                ...state,
                gridView: false
            };
        default:
            return state
    }
}

export default reducer;