import { useFilterContext } from '../../Context/FilterContext';
import './GridView.css';
import FormatPrice from '../../Helper/FormatPrice';
import GridSkeleton from './GridSkeleton';
import Star from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../Context/AppContext';

const GridView = ({ data = [] }) => {
    const { isLoading } = useFilterContext();
    const { mode } = useAppContext();
    if (isLoading) {
        return <GridSkeleton />
    } else {
        return (
            <div className='container grid-view'>
                {
                    data.map((curElem, index) => {
                        const address = curElem.address.split(',');
                        return (
                            <Link to={`/restaurant/${curElem._id}`} key={index} style={mode === 'light-mode' ? { textDecoration: 'none', color: 'black' } : { textDecoration: 'none', color: 'white' }}>
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
                                                {
                                                    curElem.rating === 0 ?
                                                        <p style={{ marginBottom: 0, color: 'green' }}>New</p>
                                                        :
                                                        <p style={{ marginBottom: 0 }}>
                                                            {curElem.rating}
                                                        </p>
                                                }
                                                <Star fontSize='small' className='card-star' />
                                            </div>
                                        </div>
                                    </figure>
                                    <div className='grid-card-footer'>
                                        <p>{curElem.keywords.slice(0, 20)}...</p>
                                        <p><FormatPrice price={1000} /> for two</p>
                                    </div>
                                    <p className='grid-card-address'>
                                        {
                                            address.length === 1 ? `${address[0]}, ${curElem.city}` : `${address[1]}, ${curElem.city}`
                                        }
                                    </p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}

export default GridView;