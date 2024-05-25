import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/OrderReducer";

const OrderContext = createContext();

const initialState = {

}

const OrderProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <OrderContext.Provider value={{...state}}>
            {children}
        </OrderContext.Provider>
    )
}

const useOrderContext = () => {
    return useContext(OrderContext);
}

export { OrderProvider, useOrderContext };