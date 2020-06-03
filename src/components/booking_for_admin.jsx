import React, { Component } from 'react'
import {confirmPickupActions,confirmReturnActions,blacklistUserActions} from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import {Row, Col} from 'reactstrap'

export class BookingForAdmin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookingData: null,
            bookingId:this.props.booking.bookingId,
            bookingStatusType:this.props.booking.bookingStatus.bookingStatusType
        };
    }

    onReturn=()=>{
        this.setState({bookingStatusType:'RETURNED'})
        this.props.confirmReturnActions.confirmReturn(this.state)
    }

    onPickup=()=>{
        this.setState({bookingStatusType:'PICKED_UP'})
        this.props.confirmPickupActions.confirmPickup(this.state)
    }

    onBlacklist=()=>{
        this.props.blacklistUserActions.blacklistUser(this.state)
    }

    render() {
        console.log(this.props.booking)

        const { rentalPeriod, pickupDate, returnDate, vehicleList, additionalEquipmentList, total, customer, lateReturn, latePickup,lisenceNo} = this.props.booking;
        const { bookingStatusType } = this.state;

        console.log(lateReturn)

        return (
            <div className="media mb-3">
                <div className="media-body p-4 shadow-sm rounded bg-light border">
                    <small className="float-right text-muted">{bookingStatusType}</small>
                    <small className="float-left text-muted">{customer.customerFName} {customer.customerLName}  ({customer.customerUserName})</small><br/><hr/>
                    Booked under Lisence No.: {lisenceNo}<br />
                    Rental Period: {rentalPeriod}hrs<br />
                    Pickup Date: {pickupDate}<br />
                    Return Date: {returnDate}<br />
                    <ul>
                        {
                            vehicleList && vehicleList.map((property, index) => {
                                return (
                                   
                                        <li key={index} >
                                             <Row >
                                            <Col xs='6'>
                                                    <h6 className="mt-0 mb-1 text-secondary" style={{'font-family': 'Arial, Helvetica, sans-serif'}}>{property.vehicle.vehicleName}</h6>
                                                </Col>
                                                <Col xs='6'>
                                                    Rs.{property.vehicle.vehicleRentalPrice}.00 per hr x {rentalPeriod}
                                                </Col>
                                            </Row>
                                        </li>
                                   
                                )
                            })
                        }
                    </ul>
                    <ul>
                        {
                            additionalEquipmentList && additionalEquipmentList.map((property, index) => {
                                return (
                                    
                                        <li key={index} >
                                            <Row >
                                            <Col xs='6'>
                                                    <h6 className="mt-0 mb-1 text-secondary" style={{'font-family': 'Arial, Helvetica, sans-serif'}}>{property.equipment.equipmentName}</h6>
                                                    </Col>
                                                <Col xs='6'>
                                                    Rs.{property.equipment.aeRentalPrice}.00 per hr x {rentalPeriod}
                                                </Col>
                                                </Row>
                                        </li>
                                    
                                )
                            })
                        }
                    </ul><hr />
                    <table className="list_table">
                        <tr>
                            <td>Total:</td>
                            <td>Rs.{total}.00</td>
                        </tr>
                    </table>
                    
                    {bookingStatusType==="PICKED_UP" && !lateReturn ?<div><button onClick={this.onReturn} type="button" class="btn btn-info float-right">Confirm Return</button></div>
                    :bookingStatusType==="PICKED_UP" && lateReturn ?<div><button onClick={this.onBlacklist} type="button" class="btn btn-danger float-right">Blacklist User</button><button onClick={this.onReturn} type="button" class="btn btn-outline-warning mr-2 float-right">Confirm Return</button></div>
                    :bookingStatusType==="CANCELLED" || bookingStatusType==="RETURNED"? null
                    :bookingStatusType==="PENDING" && latePickup ? <div><button onClick={this.onBlacklist} type="button" class="btn btn-danger float-right">Blacklist User</button><button onClick={this.onPickup} type="button" class="btn btn-outline-primary float-right mr-2">Confirm Pickup</button></div>
                    :<div><button onClick={this.onPickup} type="button" class="btn btn-secondary float-right">Confirm Pickup</button></div>}
                </div>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        confirmPickupActions: bindActionCreators(confirmPickupActions, dispatch),
        confirmReturnActions:bindActionCreators(confirmReturnActions, dispatch),
        blacklistUserActions:bindActionCreators(blacklistUserActions, dispatch)
    }
}

function mapStateToProps(state) {
    return {
        ...state.HandleBookings,
        
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingForAdmin))
