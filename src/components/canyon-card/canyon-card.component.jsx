import { Component } from "react";

class CanyonCard extends Component {
  render() {
    const canyon = this.props.canyon;
    return (
      <div className="canyon-card">
        <h2>{canyon.name}</h2>
        <h3>{canyon.location}</h3>
        <div>
          Coordinates: {canyon.coordinates.latitude},{canyon.coordinates.longitude}
        </div>
      </div> 
    )
  }
}

export default CanyonCard;