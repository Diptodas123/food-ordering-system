import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
    isLoading: false,
    allRestaurants: [],
    filterRestaurants: [],
    gridView: true,
    sortingValue: "newest",
    filter: {
        text: "",
        cuisine: "all",
        maxPrice: 0,
        minPrice: 0,
        price: 0,
    }
}

const FilterProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getallRestaurants = async () => {
        dispatch({ type: "SET_LOADING" });
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/restaurant/getallRestaurants`);
            const data = await response.json();
            dispatch({ type: "SET_ALL_RESTAURANTS", payload: data.restaurants });
        } catch (error) {
            console.log(error);
        }
    };

    const setGridView = () => {
        dispatch({ type: "SET_GRID_VIEW" });
    };

    const setListView = () => {
        dispatch({ type: "SET_LIST_VIEW" });
    };

    const sorting = (event) => {
        const userValue = event.target.value;

        dispatch({ type: "GET_SORTING_VALUE", payload: userValue });
    }

    const updateFilterValue = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
    }

    const clearFilter = () => {
        dispatch({ type: "CLEAR_FILTER" });
    }

    useEffect(() => {
        dispatch({ type: "FILTER_RESTAURANTS" });
        dispatch({ type: "SORTING_RESTAURANTS" });
    },[state.sortingValue, state.filter]);
    
    useEffect(() => {
        getallRestaurants();
    }, []);

    return <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilter }}>
        {children}
    </FilterContext.Provider>
}
const useFilterContext = () => {
    return useContext(FilterContext);
};

export { useFilterContext, FilterProvider }