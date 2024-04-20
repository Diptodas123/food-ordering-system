import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./RestaurantPage.css";
import { useEffect } from "react";
const RestaurantPage = () => {
    const params = useParams();
    console.log(params.restaurantId);

    const fetchRestaurant = async () => {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/restaurant/${params.restaurantId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        console.log(data);
    }
    useEffect(() => {
        fetchRestaurant();
    }, [])
    return (
        <>
            <Navbar />
            <div className="restaurant-page container">
                RestaurantPage
            </div>
            <Footer />
        </>

    )
}

export default RestaurantPage;