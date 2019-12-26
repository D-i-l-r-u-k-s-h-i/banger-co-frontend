import React, { Component } from 'react'
import Rater from 'react-rater'
import { Link } from 'react-router-dom'
import {Button,ButtonToolbar} from 'react-bootstrap'
import SchedularModal from './schedular_modal';

export class BookVehicleComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            modalShow:false
        }
    }
    render() {
        let property = this.props.props.location.state && this.props.props.location.state.property

        let modalClose=()=>this.setState({modalShow:false});
        console.log(this.props)
        return (
            <div>
                <table >
                    <tr>
                        <td>
                            <div className="imgalign">
                                <img src={property.vehicleImgLink} alt="img" /><hr />
                                {/* <img src="http://uscarsales.lk/erp/carsale/website/SHOWROOM/RW1-1000759_20190722_01_28_171.jpg" alt="img" /><hr /> */}
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

                                <ButtonToolbar>
                                    <Button varient='primary'
                                    onClick={()=>this.setState({modalShow:true})}>
                                       Schedule 
                                    </Button>
                                    <SchedularModal props={this.props} show={this.state.modalShow} onHide={modalClose}/>
                                </ButtonToolbar>
                                {/* <Link to={{
                                    pathname: '/schedule',
                                    state: {
                                        property: property
                                    }
                                }}
                                    id="submit"
                                    type="submit"
                                    className="btn btn-primary btn-lg"
                                >Schedule</Link> */}
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
