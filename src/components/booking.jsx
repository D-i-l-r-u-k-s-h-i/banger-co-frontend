import React, { Component } from 'react'
import { extendBookingActions,cancelBookingActions, cancelBookingItemActions} from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
export class Booking extends Component {

  constructor(props) {
    super(props);
    this.state = {
        bookingId:this.props.booking.bookingId,
        vehicleId:null,
        equipmentId:null
    }
  }

  listLength=()=>{
    var totLength=0
    if(this.props.booking.additionalEquipmentList){
      totLength+=this.props.booking.additionalEquipmentList.length
    }
    if(this.props.booking.vehicleList){
      totLength+=this.props.booking.vehicleList.length
    }
    return totLength;
  }

  onCancel=()=>{
    this.props.cancelBookingActions.cancelBooking(this.state)
  }

  onExtend=()=>{
    this.props.extendBookingActions.extendBooking(this.state)
  }

  onDeleteVehicleItem=(vehicleId)=>{
    this.setState({vehicleId:vehicleId})
    this.props.cancelBookingItemActions.cancelBookingItem(this.state)
  }

  onDeleteEquipmentItem=(equipId)=>{
    this.setState({equipmentId:equipId})
    this.props.cancelBookingItemActions.cancelBookingItem(this.state)
  }

  content(){
    const { rentalPeriod, pickupDate, returnDate, vehicleList, additionalEquipmentList, total } = this.props.booking;
    const { bookingStatusType } = this.props.booking.bookingStatus;
    return (
      <div className="media mb-3">
        <div className="media-body p-2 shadow-sm rounded bg-light border">
          <small className="float-right text-muted">{bookingStatusType}</small>
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
        </div>
      </div>
    );
  }
  contentPending () {
    const { rentalPeriod, pickupDate, returnDate, vehicleList, additionalEquipmentList, total } = this.props.booking;
    const { bookingStatusType } = this.props.booking.bookingStatus;
    return (
      <div className="media mb-3">
        <div className="media-body p-2 shadow-sm rounded bg-light border">
          <small className="float-right text-muted">{bookingStatusType}</small>
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
                        <td >
                          <h6 className="mt-0 mb-1 text-muted">{property.vehicle.vehicleName}</h6>
                        </td>
                        <td>
                          Rs.{property.vehicle.vehicleRentalPrice}.00 per hr x {rentalPeriod}
                        </td>
                        {this.listLength()>1 ? <td className="remove_icon"><button onClick={this.onDeleteVehicleItem(property.vehicle.vehicleId)} type="button" class="btn btn-light"><span>&#10062;</span></button></td>:null}
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
                        <td >
                          Rs.{property.equipment.aeRentalPrice}.00 per hr x {rentalPeriod}
                        </td>
                        {this.listLength()>1 ? <td className="remove_icon"><button onClick={this.onDeleteEquipmentItem(property.equipment.equipmentId)} type="button" class="btn btn-light"><span>&#10062;</span></button></td>:null}
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
          </table><br/>
          {bookingStatusType==="PICKED_UP"?<div><button onClick={this.onExtend} type="button" class="btn btn-info float-right">Extend Booking</button></div>:<div><button onClick={this.onExtend} type="button" class="btn btn-info float-right">Extend Booking</button><button onClick={this.onCancel} type="button" class="btn btn-secondary float-right mr-2">Cancel Booking</button></div>}
        </div>
      </div>
    );
  }


  render() {
    console.log(this.props)
    const { bookingStatusType } = this.props.booking.bookingStatus;
    return (
      <div>
        {bookingStatusType==="PENDING"||bookingStatusType==="PICKED_UP"?this.contentPending():this.content()}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
      extendBookingActions: bindActionCreators(extendBookingActions, dispatch),
      cancelBookingActions: bindActionCreators(cancelBookingActions, dispatch),
      cancelBookingItemActions:bindActionCreators(cancelBookingItemActions,dispatch)
  }
}

function mapStateToProps(state) {
  return {
      ...state.ExtendBooking,
      ...state.CancelBooking,
      ...state.CancelBookingItem
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Booking))
