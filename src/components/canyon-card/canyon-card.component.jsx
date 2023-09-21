

const CanyonCard = ({ canyon }) => {
  const {
    name,
    location,
    information
  } = canyon;  
  return (
    <div className="card w-96 bg-base-100 shadow-xl">      
      <div className="card-body">
        <h2 className="card-title font-heading text-4xl">{name}</h2>
        <p className="font-body font-light">{location.region} - {location.country}</p>
        <span className="font-heading font-bold text-xl text-yellow-500 tracking-wider">V{information.rating.vertical}A{information.rating.aquatic}{information.rating.committment}</span>
        <div className="rating rating-xs">
          <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" defaultChecked />
          <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">+ INFO</button>
        </div>
      </div>
    </div>
  )
}


export default CanyonCard;