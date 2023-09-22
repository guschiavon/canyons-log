
import { useContext } from 'react';
import { CanyonsContext } from '../../contexts/canyons.context';
import CanyonDirectory from '../../components/canyon-directory/canyon-directory.component';

const Directory = () => {
  const {canyons} = useContext(CanyonsContext)        
  const filters = Array.from(new Set(canyons.map((canyon) => canyon.location.country)));
    console.log(canyons);
  
  return (
    <>      
      <CanyonDirectory canyons={canyons} filters={filters} />
    </>
    
    
  )
}

export default Directory;