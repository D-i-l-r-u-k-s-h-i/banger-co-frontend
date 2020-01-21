import React, { Component } from 'react'
import {confirmPickupActions,confirmReturnActions,blacklistUserActions} from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
export class BookingForAdmin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookingData: null,
            bookingId:this.props.booking.bookingId
        };
    }

    onReturn=()=>{
        this.props.confirmReturnActions.confirmReturn(this.state)
    }

    onPickup=()=>{
        this.props.confirmPickupActions.confirmPickup(this.state)
    }

    onBlacklist=()=>{
        this.props.blacklistUserActions.blacklistUser(this.state)
    }

    render() {
        const { rentalPeriod, pickupDate, returnDate, vehicleList, additionalEquipmentList, total, customer, late} = this.props.booking;
        const { bookingStatusType } = this.props.booking.bookingStatus;
        return (
            <div className="media mb-3">
                <div className="media-body p-2 shadow-sm rounded bg-light border">
                    <small className="float-right text-muted">{bookingStatusType}</small>
                    <small className="float-left text-muted">{customer.customerFName} {customer.customerLName}  ({customer.customerUserName})</small><br/><hr/>
                    Rental Period: {rentalPeriod}hrs<br />
                    Pickup Date: {pickupDate}<br />
                    Return Date: {returnDate}<br />
                    <ul>
                        {
                            vehicleList && vehicleList.map((property, index) => {
                                return (
                                    <table className="list_table">
                                        <li key={index} >
                                            <tr>
                                                <td>
                                                    <h6 className="mt-0 mb-1 text-muted">{property.vehicle.vehicleName}</h6>
                                                </td>
                                                <td>
                                                    Rs.{property.vehicle.vehicleRentalPrice}.00 per hr x {rentalPeriod}
                                                </td>
                                            </tr>
                                        </li>
                                    </table>
                                )
                            })
                        }
                    </ul>
                    <ul>
                        {
                            additionalEquipmentList && additionalEquipmentList.map((property, index) => {
                                return (
                                    <table className="list_table">
                                        <li key={index} >
                                            <tr>
                                                <td>
                                                    <h6 className="mt-0 mb-1 text-muted">{property.equipment.equipmentName}</h6>
                                                </td>
                                                <td>
                                                    Rs.{property.equipment.aeRentalPrice}.00 per hr x {rentalPeriod}
                                                </td>
                                            </tr>
                                        </li>
                                    </table>
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
                    {bookingStatusType==="PICKED_UP" && bookingStatusType!=="CANCELLED"?<div><button onClick={this.onReturn} type="button" class="btn btn-info float-right">Confirm Return</button></div>
                    :bookingStatusType==="PICKED_UP" || bookingStatusType!=="CANCELLED"? null
                    :bookingStatusType==="PENDING" && late ? <div><button onClick={this.onBlacklist} type="button" class="btn btn-danger float-right">Blacklist User</button><button onClick={this.onPickup} type="button" class="btn btn-outline-primary float-right mr-2">Confirm Pickup</button></div>
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
