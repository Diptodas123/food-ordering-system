import "./ListView.css";

const ListView = ({ filterRestaurants = [] }) => {
    return (
        <div className='list-view'>
            {
                filterRestaurants.map((curElem) => {
                    return (
                        <div className='card'>

                        </div>
                    )
                })
            }
        </div>
    );
}

export default ListView;