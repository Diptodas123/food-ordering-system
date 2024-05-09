import './GridView.css';
const GridView = ({ filterRestaurants = [] }) => {
    return (
        <div className='container grid-view'>
            {
                filterRestaurants.map((curElem) => {
                    return (
                        <div className='card'>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default GridView;