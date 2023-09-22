import { useState, useId } from "react";
import CanyonCard from "../canyon-card/canyon-card.component";
import SearchBox from "../search-box/search-box.component";    
import Filter from "../filter-container/filter-container.component";

const CanyonDirectory = ({ canyons, filters }) =>  {
  const [activeFilters, setActiveFilters] = useState(new Set())  
  const [searchQuery, setSearchQuery] = useState('')
  
  const id = useId()
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
    <div className="container mx-auto">    
      <div className="grid grid-cols-12 gap-12">
        <div className="md:col-span-2 flex flex-col items-between justify-start p-0 md:p-4 ">
          <div className="search-container pb-4">
            <h3 className="uppercase font-heading font-semibold tracking-wider">Search</h3>
            <SearchBox placeholder={'Search canyon by name'} onChange={onSearchChangeHandler} />
            <span className="italic text-xs font-light py-4">Database: {canyons.length} canyons</span>
          </div>
          <h3 className="uppercase font-heading font-semibold tracking-wider">Filters</h3>
          {filters.map((filter) => {
            return (
              <Filter key={id + filter} filter={filter} onChange={onFilterChangeHandler}/>
            )
          })}
        
        </div>
        <div className="col-span-10">
          <h1 className="font-heading text-6xl mb-6">Directory</h1>
          <div className="flex flex-wrap gap-6" >
          {filteredAndSearchedCanyons.map((canyon) => {   
            return (
              <CanyonCard className='card' key={canyon.id} canyon={canyon} />      
            )
          })}                      
          </div>
          
        </div>
      </div>
    </div>
  )
}


export default CanyonDirectory;