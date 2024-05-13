import { useFilterContext } from '../../Context/FilterContext';
import './GridView.css';
import GridSkeleton from './GridSkeleton';
import Star from '@mui/icons-material/Star';
const GridView = ({ data = [] }) => {
    const { isLoading } = useFilterContext();
    if (isLoading) {
        return <GridSkeleton />
    } else {
        return (
            <div className='container grid-view'>
                {
                    data.map((curElem, index) => {
                        return (
                            <div key={index} className='card'>
                                <figure className='card-image-container'>
                                    <img src={curElem.imgUrls[0]} alt={curElem.name} />
                                    <div className='figcaption-container'>
                                        <figcaption className='card-figcaption'>{curElem.name}</figcaption>
                                        <div className='card-rating-container'
                                            style={curElem.rating === 0 ?
                                                {
                                                    marginBottom: 0, color: 'green',
                                                    backgroundColor: 'white', border: '1px solid green'
                                                }
                                                : null
                                            }
                                        >
                                            <p style={{ marginBottom: 0 }}>
                                                {curElem.rating === 0 ? "New" : curElem.rating}
                                            </p>
                                            <Star fontSize='small' className='card-star' />
                                        </div>
                                    </div>
                                </figure>
                                <div className='second-container'>
                                    <p style={{ marginBottom: 0 }}>{curElem.keywords.slice(0, 24)}...</p>
                                    <span>1000 for two</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default GridView;