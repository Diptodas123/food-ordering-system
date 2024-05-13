import { useFilterContext } from "../../Context/FilterContext";
import ListSkeleton from "./ListSkeleton";
import "./ListView.css";

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
                            <div key={index} className='card'>
                                <figure className='card-image-container'>
                                    <img src={curElem.imgUrls[0]} alt="cover" />
                                </figure>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default ListView;