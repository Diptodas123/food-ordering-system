import React from 'react'
import { useFilterContext } from '../../Context/FilterContext';
import GridViewIcon from '@mui/icons-material/GridView';
import "./SortingSection.css"
import MenuIcon from '@mui/icons-material/Menu';
const SortingSection = () => {
  const { filterRestaurants, setGridView, setListView,sorting } = useFilterContext();
  return (
    <section className='sorting-section-container px-3 mt-3'>
      <div className='btn-container'>
        <button onClick={() => setGridView()} className=''><GridViewIcon /></button>
        <button onClick={() => setListView()}><MenuIcon /></button>
      </div>
      <div>
        <p>{filterRestaurants.length} results found</p>
      </div>
      <div>
        <form action="">
          <label htmlFor="sort"></label>
          <select name="sort" onClick={sorting()}>
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