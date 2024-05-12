const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            };
        case "SET_ALL_RESTAURANTS":
            let { restaurants, rating } = action.payload;
            restaurants = restaurants.map((item) => {
                rating = rating.map((currentElement) => {
                    if (currentElement._id === item._id) {
                        return currentElement.avgRating
                    } else {
                        return 0
                    }
                })

                return {
                    ...item,
                    rating: rating[0]
                }
            });

            return {
                ...state,
                isLoading: false,
                allRestaurants: restaurants,
                filterRestaurants: restaurants,
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
            const { text, cuisine, maxPrice, minPrice, price, searchBy } = state.filter;
            let tempData;
            if (searchBy === "Restaurants") {
                tempData = [...state.allRestaurants];
            } else {
                tempData = [...state.allDishes];
            }
            if (text) {
                tempData = tempData.filter((item) => item.name.toLowerCase().includes(text));
            }
            if (cuisine !== "All") {
                tempData = tempData.filter((item) => item.cuisine === cuisine);
            }
            if (maxPrice !== 0) {
                tempData = tempData.filter((item) => item.price <= maxPrice);
            }
            if (minPrice !== 0) {
                tempData = tempData.filter((item) => item.price >= minPrice);
            }
            if (price !== 0) {
                tempData = tempData.filter((item) => item.price <= price);
            }
            return {
                ...state,
                filterRestaurants: tempData
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
                        return a.rating - b.rating;
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
                filterRestaurants: state.allRestaurants,
                filterDishes: state.allDishes,
                searchBy: "Restaurants",
                filter: {
                    ...state.filter,
                    text: "",
                    cuisine: "All",
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