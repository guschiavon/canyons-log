import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CanyonsContext } from "../../contexts/canyons.context"
import { UserContext } from "../../contexts/users.context";

const Canyon = () => {
  const { canyons } = useContext(CanyonsContext)
  const { currentUser } = useContext(UserContext);
  const { id } = useParams()
  const canyonObj = canyons.filter((canyon) => canyon.id == id )
  
  const logDescent = () => {
    if (!currentUser) {
      alert('You must sign in to log a descent')
      return;
    } else {
      alert('You can log your descent')
    }
    
  }

  const {
    name,
    location,
    information    
  } = canyonObj[0];
  
  return (
    <div className="container mx-auto py-12">
      <div className="card lg:card-side bg-base-100 shadow-xl">      
        <div className="card-body">
          <h2 className="card-title font-heading text-5xl">{name}</h2>    
          <p className="font-body font-light text-4xl">{location.region}</p>
          <p className="font-body font-light text-3xl">{location.country}</p>
          <span className="font-heading font-bold text-4xl text-yellow-500 tracking-wider">V{information.rating.vertical}A{information.rating.aquatic}{information.rating.committment}</span>
          <div className="card-actions justify-end">
            <button className="btn btn-warning" onClick={logDescent} >Log Descent</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Canyon