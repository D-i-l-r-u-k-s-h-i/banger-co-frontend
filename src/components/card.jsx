import React from 'react'
import PropTypes from 'prop-types';
import Rater from 'react-rater'

const Card = ({property}) => {
    const {index, vehicleImgLink, vehicleRentalPrice, vehicleName, vehicleType,vehicleRating,gearboxType,fuelType} = property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={vehicleImgLink} alt={vehicleName} /><hr/>
            <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                    <b>{vehicleName}</b><br /><br/>
                    Type:{vehicleType}<br />
                    Gear Box:{gearboxType}<br/>
                    Fuel Type:{fuelType}<br/>
                    Price: Rs.{vehicleRentalPrice*12}.00 per Day<br/><br/>
                    {vehicleRating}<Rater rating={vehicleRating} total={5} interactive={false} />
                </p>
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}


export default Card
