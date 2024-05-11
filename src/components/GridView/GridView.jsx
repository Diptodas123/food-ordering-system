import './GridView.css';
const GridView = ({ filterRestaurants = [] }) => {
    console.log(filterRestaurants);
    return (
        <div className='container grid-view'>
            {
                filterRestaurants.map((curElem) => {
                    return (
                        <div className='card'>
                            <p style={{ color: 'black' }}>{curElem.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default GridView;