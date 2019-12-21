import React from 'react'
import PropTypes from 'prop-types';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

const Card = ({property}) => {
    const {index, vehicleImgLink, vehicleRentalPrice, vehicleName, vehicleType,vehicleRating,gearboxType} = property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={vehicleImgLink} alt={vehicleName} /><hr/>
            <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                    <b>{vehicleName}</b><br /><br/>
                    Type:{vehicleType}<br />
                    Gear Box:{gearboxType}<br/>
                    Price: {vehicleRentalPrice}<br/><br/>
                    {vehicleRating}<Rater rating={vehicleRating} total={5} interactive={false} />
                </p>
                {/* <ul className="features">
                    <li className="icon-bed">{bedrooms} <span>bedrooms</span></li>
                    <li className="icon-bath">{bathrooms} <span>bathrooms</span></li>
                    <li className="icon-car">{carSpaces} <span>parking spots</span></li>
                </ul> */}
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}


export default Card
