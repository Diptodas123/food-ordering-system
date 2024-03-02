const AppReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_MODE":
            return{
                ...state,
                mode: state.mode === "light" ? "dark" : "light"
            }
        default:
            return state;
    }
};

export default AppReducer;