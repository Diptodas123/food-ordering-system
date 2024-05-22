import { useEffect, useState } from 'react'
import { useFilterContext } from '../../Context/FilterContext';
import { useParams } from 'react-router-dom';
import FormatPrice from '../../Helper/FormatPrice';
import "./RestaurantPageExploreComponent.css";

const RestaurantPageExploreComponent = () => {

  const { allDishes } = useFilterContext();
  const [foodItems, setFoodItems] = useState([]);

  const { restaurantId } = useParams();

  useEffect(() => {
    const fetchFoodItems = async () => {

      const allFoodItems = allDishes.filter((dish) => {
        return restaurantId === dish.restaurant._id
      });

      setFoodItems(allFoodItems);
    }
    fetchFoodItems();
  }, [restaurantId]);

  return (
    <div className=' container mt-3'>
      {
        foodItems.map((foodItem) => {
          return (
            <div className='list-item-card-container'>

            </div>
          );
        })
      }
    </div>
  )
}

export default RestaurantPageExploreComponent