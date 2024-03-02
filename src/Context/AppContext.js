import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/AppReducer.js";

const AppContext = createContext();

const initialState = {
    mode: "light",
    loading: false,
};

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleMode = () => {
        dispatch({ type: "TOGGLE_MODE" });
    }

    return <AppContext.Provider value={{ ...state, toggleMode }}>
        {children}
    </AppContext.Provider>

}

const useAppContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useAppContext };