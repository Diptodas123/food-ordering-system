import React from 'react'
import "./FilterSection.css"
import { useFilterContext } from '../../Context/FilterContext';
import FormatPrice from '../../Helper/FormatPrice';
const FilterSection = () => {
  const { filter: { text,maxPrice,minPrice,price,updateFilterValue } } = useFilterContext();

  return (
    <section className="container filter-section-container">
      <form action="">
        <input type="text"
          name="text"
          id="text"
          placeholder="Search..."
          className="search-input"
          value={text}
          onChange={updateFilterValue}
        />
      </form>

      <section className='cuisine-container'>
        <h5>Cuisine</h5>
      </section>

      <section className='price-container'>
        <h5>Price</h5>
        <p><FormatPrice price={price} /></p>
        <input style={{ cursor: 'pointer' }} type='range' min={minPrice} max={maxPrice} value={price} />
      </section>

      <button className='clear-filter btn mt-3'>Clear Filter</button>
    </section>
  )
}

export default FilterSection;