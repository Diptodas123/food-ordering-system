import { useFilterContext } from "../../Context/FilterContext";
import ListSkeleton from "./ListSkeleton";
import "./ListView.css";
import RenderRatings from "../../Helper/RenderRatings";

const ListView = ({ data = [] }) => {
    const { isLoading } = useFilterContext();
    if (isLoading) {
        return <ListSkeleton />;
    } else {
        return (
            <div className='list-view'>
                {
                    data.map((curElem, index) => {
                        return (
                            <div key={index} className='list-card'>
                                <div className='list-card-image-container'>
                                    <img src={curElem.imgUrls[0]} alt="cover" />
                                </div>
                                <div className="list-card-text-container">
                                    <h3>{curElem.name}</h3>
                                    <RenderRatings className="list-card-rating" rating={curElem.rating} size="medium" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default ListView;