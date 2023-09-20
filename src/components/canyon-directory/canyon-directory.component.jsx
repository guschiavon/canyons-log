import { useState } from "react";
import CanyonCard from "../canyon-card/canyon-card.component";
import SearchBox from "../search-box/search-box.component";    
import Filter from "../filter-container/filter-container.component";


const CanyonDirectory = ({ canyons, filters }) =>  {
  const [activeFilters, setActiveFilters] = useState(new Set())  
  const [searchQuery, setSearchQuery] = useState('')

  const onFilterChangeHandler = (e) => {
    const filterName = e.target.name;
    setActiveFilters((prevActiveFilters) => {
      const updatedFilters = new Set(prevActiveFilters);

        if (e.target.checked) {
          updatedFilters.add(filterName);
        } else {
          updatedFilters.delete(filterName);
        }

        return updatedFilters;
      });
    };
    // Filter feature
    // const filteredCanyons = activeFilters.size === 0
    // ? canyons
    // : canyons.filter((canyon) => activeFilters.has(canyon.location.country));
  

    const onSearchChangeHandler = (e) => {      
      setSearchQuery(e.target.value.toLowerCase())      
    }

    // Filter and search combined
    const filteredAndSearchedCanyons = canyons.filter((canyon) => {
      const isInActiveFilters = activeFilters.size === 0 || activeFilters.has(canyon.location.country);
      const matchesSearch = canyon.name.toLowerCase().includes(searchQuery);
      
      return isInActiveFilters && matchesSearch;
    });

  return (
    <div className="grid grid-cols-12 gap-12">
      <div className="col-span-2 flex flex-col items-between justify-start p-4">
        <div className="search-container">
          <SearchBox placeholder='Search' onChange={onSearchChangeHandler} />
        </div>
        <h3 className="uppercase font-semibold tracking-wider">Filters</h3>
        {filters.map((filter) => {
          return (
            <Filter key={filter.indexOf()} filter={filter} onChange={onFilterChangeHandler}/>
          )
        })}
      
      </div>
      <div className="col-span-10 flex flex-wrap gap-6">
      
        {filteredAndSearchedCanyons.map((canyon) => {   
          return (
            <CanyonCard className='card' key={canyon.id} canyon={canyon} />      
          )
        })}              
      </div>
    </div>
  )
}


export default CanyonDirectory;