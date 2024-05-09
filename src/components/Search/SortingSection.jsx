import React from 'react'
import { useFilterContext } from '../../Context/FilterContext';
import SortIcon from '@mui/icons-material/Sort';
import GridViewIcon from '@mui/icons-material/GridView';
import "./SortingSection.css"
import MenuIcon from '@mui/icons-material/Menu';
const SortingSection = () => {
  const { filterRestaurants, setGridView, setListView, sorting, sortingValue, gridView, } = useFilterContext();
  return (
    <section className='sorting-section-container px-3 mt-4'>
      <div className='btn-container'>
        <button className={gridView ? "active" : ""} onClick={() => setGridView()}><GridViewIcon /></button>
        <button className={!gridView ? "active" : ""} onClick={() => setListView()}><MenuIcon /></button>
      </div>
      <div>
        <p className='mt-2'>{filterRestaurants.length} results found</p>
      </div>
      <div>
        <form className='sorting-form' action="">
          <label htmlFor="sortingValue" className='mt-2'><SortIcon fontSize="medium" /></label>
          <select name='sortingValue'
            id="sortingValue"
            style={{ border: "none", outline: "none", backgroundColor: "transparent" }}
            className="search-sort"
            value={sortingValue}
            onClick={() => sorting()}
          >
            <option value='newest'>Newest</option>
            <option value='oldest'>Oldest</option>
            <option value='highRating'>Highest Rating</option>
            <option value='lowRating'>Lowest Rating</option>
          </select>
        </form>
      </div>
    </section>
  )
}

export default SortingSection