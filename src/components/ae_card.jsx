import React from 'react'
import PropTypes from 'prop-types';
// import Rater from 'react-rater'

const CardAE=({property})=>{
    const {index, imgLink, aeRentalPrice, equipmentName, type} = property; //,description
    return (
        <div id={`card-${index}`} className="card">
            <img src={imgLink} alt={equipmentName} /><hr/>
            <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                    <b>{equipmentName}</b><br /><br/>
                    Type:{type}<br /><br />
                    {/* {description}<br /><br /> */}
                    Price: Rs.{aeRentalPrice*12}.00 per Day<br/><br/>
                    {/* {vehicleRating}<Rater rating={vehicleRating} total={5} interactive={false} /> */}
                </p>
            </div>
        </div>
    )
}

CardAE.propTypes = {
    property: PropTypes.object.isRequired
}

export default CardAE
