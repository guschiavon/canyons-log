import { useState, useEffect } from "react";

const SearchFilter = ({ filters }) => {  
    const [filterList, setFilterList] = useState(filters)
     // Use useEffect to update localFilters when filters prop changes
    useEffect(() => {
      setFilterList(filters);
    }, [filters]);    
    const toggleFilter = () => {
      return console.log('toggled');
    }
    return (
      <div className='search-filters'>          
      { filterList.map((filter) => {
        const filterLabel = Object.keys(filter);
             
        return (
          <div key={filterLabel}>
            <label htmlFor={filterLabel}>{filterLabel}</label>
            <input id={filterLabel} type='checkbox' name={filterLabel} onChange={toggleFilter} />
          </div>
        )
      })}        
      </div>
    )  

};

export default SearchFilter;