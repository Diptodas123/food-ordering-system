import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/RestaurantReducer";

const RestaurantContext = createContext();

const initialState = {
    allOrders: [],
    allFoodItems: [],
    isLoading: false,
    topSellingDishes: [],
    topSellingRestaurants: [],
    foodItemsByCategory: [
        {
            label: "Veg",
            value: 0
        },
        {
            label: "Non-Veg",
            value: 0
        }
    ],
    allCoupons: [],
};

const RestaurantProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchAllOrders = async () => {
        dispatch({ type: "SET_LOADING" });
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/order/getAllOrders`);
            const data = await response.json();
            if (data.orders.length) {
                dispatch({ type: "SET_ALL_ORDERS", payload: data.orders });
            }
        } catch (error) {
            console.log(error);
        } finally {
            dispatch({ type: "UNSET_LOADING" });
        }
    };

    const fetchAllFoodItems = async () => {
        dispatch({ type: "SET_LOADING" });
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/restaurant/getAllFoodItems`);
            const data = await response.json();
            if (data.foodItems.length) {
                dispatch({ type: "SET_ALL_FOOD_ITEMS", payload: data.foodItems });
            }
        } catch (error) {
            console.log(error);
        } finally {
            dispatch({ type: "UNSET_LOADING" });
        }
    };

    const fetchTopSellingDishes = async () => {
        dispatch({ type: "SET_LOADING" });
        try {
            console.log(sessionStorage.getItem("restaurantId"));
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/order//topSellingDishes/${sessionStorage.getItem("restaurantId")}`);
            const data = await response.json();
            if (data.topSellingDishesByRestaurant.length) {
                dispatch({ type: "SET_TOP_SELLING_DISHES", payload: data.topSellingDishesByRestaurant });
            }
        } catch (error) {
            console.log(error);
        } finally {
            dispatch({ type: "UNSET_LOADING" });
        }
    };

    const fetchTopSellingRestaurants = async () => {
        dispatch({ type: "SET_LOADING" });
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/restaurant/topSellingRestaurants`);
            const data = await response.json();
            if (data.restaurants.length) {
                dispatch({ type: "SET_TOP_SELLING_RESTAURANTS", payload: data.restaurants });
            }
        } catch (error) {
            console.log(error);
        } finally {
            dispatch({ type: "UNSET_LOADING" });
        }
    };

    const fetchFoodItemsByCategory = async () => {
        dispatch({ type: "SET_LOADING" });
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/restaurant/getAllFoodItems`);
            const data = await response.json();
            if (data.foodItems.length) {
                dispatch({ type: "SET_FOOD_ITEMS_BY_CATEGORY", payload: data.foodItems });
            }
        } catch (error) {
            console.log(error);
        } finally {
            dispatch({ type: "UNSET_LOADING" });
        }
    };

    useEffect(() => {
        fetchAllOrders();
        fetchAllFoodItems();
        fetchTopSellingDishes();
        fetchTopSellingRestaurants();
        fetchFoodItemsByCategory();
    }, []);

    return (
        <RestaurantContext.Provider value={{ ...state, dispatch }}>
            {children}
        </RestaurantContext.Provider>
    );
};

const useRestaurantContext = () => {
    return useContext(RestaurantContext);
};

export { useRestaurantContext, RestaurantProvider };
