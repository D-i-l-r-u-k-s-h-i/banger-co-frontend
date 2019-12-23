import React, { Component } from 'react'
import Rater from 'react-rater'
import { Link } from 'react-router-dom'

export class BookVehicleComponent extends Component {

    render() {
        let property = this.props.props.location.state && this.props.props.location.state.property
        // console.log(this.props)
        return (
            <div>
                <table >
                    <tr>
                        <td>
                            <div className="imgalign">
                                <img src={property.vehicleImgLink} alt="img" /><hr />
                                Rate your experience with this vehicle: <Rater onRate={({ rating }) => { }} total={5} interactive={true} />
                            </div>
                        </td>
                        <td>
                            <div className="discription">
                                <h1>Vehicle Name: {property.vehicleName}</h1><br />
                                Gearbox Type: {property.gearboxType}<br />
                                Type: {property.vehicleType}<br />
                                Rating: {property.vehicleRating}<br />
                                Price: {property.vehicleRentalPrice}<br /><br />
                                <Link to={{
                                    pathname: '/schedule',
                                    state: {
                                        property: property
                                    }
                                }}
                                    id="submit"
                                    type="submit"
                                    className="btn btn-primary btn-lg"
                                >Schedule</Link>
                            </div>
                        </td>
                    </tr>
                </table>
                <hr />
            </div>

        )
    }
}

export default BookVehicleComponent
