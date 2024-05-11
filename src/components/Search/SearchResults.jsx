import React from 'react'
import './SearchResults.css'
import { useFilterContext } from '../../Context/FilterContext'
import ListView from '../ListView/ListView'
import GridView from '../GridView/GridView'
const SearchResults = () => {
  const { filterRestaurants, gridView } = useFilterContext()
  if (filterRestaurants.length === 0) {
    return (
      <div className='container search-results-container'>
        <img style={{ display: 'block', margin: '1rem auto 0 auto', height: "300px", width: "300px" }}
          src="img/no-result-found.png"
          alt="no result" />
      </div>
    )
  }

  if (gridView) {
    return (
      <GridView filterRestaurants={filterRestaurants} />
    )
  } else {
    return (
      <ListView filterRestaurants={filterRestaurants} />
    )
  }
}

export default SearchResults