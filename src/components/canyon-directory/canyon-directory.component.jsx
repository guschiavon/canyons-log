import { Component } from "react";
import CanyonCard from "../canyon-card/canyon-card.component";

class CanyonDirectory extends Component {
  render() {    
    // const activeFilters = useState({'activeFilters': ''})
    const searchedCanyons = this.props.content;
     return (
        <div className="canyon-directory">
          {searchedCanyons.map((canyon) => {
          return (
            <CanyonCard key={canyon.id} canyon={canyon}/>        
          ) 
          })}   
        </div>
     )
  }
}

export default CanyonDirectory;