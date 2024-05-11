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
                allRestaurants: action.payload,
                filterRestaurants: action.payload
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
        case "GET_SORTING_VALUE":
            return {
                ...state,
                sortingValue: action.payload
            }
        case "UPDATE_FILTER_VALUE":
            const { name, value } = action.payload;
            return {
                ...state,
                filter: {
                    ...state.filter,
                    [name]: value
                }
            };

        case "FILTER_RESTAURANTS":
            const { text, cuisine, maxPrice, minPrice, price } = state.filter;
            let tempRestaurant = [...state.allRestaurants];
            if (text) {
                tempRestaurant = tempRestaurant.filter((item) => item.name.toLowerCase().includes(text));
            }
            if (cuisine !== "all") {
                tempRestaurant = tempRestaurant.filter((item) => item.cuisine.includes(cuisine));
            }
            if (maxPrice !== 0) {
                tempRestaurant = tempRestaurant.filter((item) => item.price <= maxPrice);
            }
            if (minPrice !== 0) {
                tempRestaurant = tempRestaurant.filter((item) => item.price >= minPrice);
            }
            if (price !== 0) {
                tempRestaurant = tempRestaurant.filter((item) => item.price <= price);
            }
            return {
                ...state,
                filterRestaurants: tempRestaurant
            }

        case "SORTING_RESTAURANTS":
            let newSortData;
            let { sortingValue, filterRestaurants } = state;
            let temp = [...filterRestaurants];
            const sortingRestaurants = (a, b) => {
                switch (sortingValue) {
                    case "newest":
                        return new Date(b.createdAt) - new Date(a.createdAt);
                    case "oldest":
                        return new Date(a.createdAt) - new Date(b.createdAt);
                    case "highRating":
                        return b.rating - a.rating;
                    case "lowRating":
                        return a.price - b.price;
                    default:
                        return;
                }
            }

            newSortData = temp.sort(sortingRestaurants);
            return {
                ...state,
                filterRestaurants: newSortData
            };

        case "CLEAR_FILTER":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    text: "",
                    cuisine: "all",
                    maxPrice: 0,
                    minPrice: 0,
                    price: 0,
                }
            }
        default:
            return state
    }
}

export default reducer;