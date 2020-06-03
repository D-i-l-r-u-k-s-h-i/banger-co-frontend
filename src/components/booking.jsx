import React, { Component } from 'react'
import { extendBookingActions,cancelBookingActions, cancelBookingItemActions} from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import { Alert } from 'reactstrap'
import ShowBookingItemsModal from './showBookingItemsModal';
export class Booking extends Component {

  constructor(props) {
    super(props);
    this.state = {
        bookingId:this.props.booking.bookingId,
        vehicleId:null,
        equipmentId:null,
        visible:false,
        visible2:false,
        modalShow: false,
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
    this.setState({
      visible2: true
    })
    this.props.cancelBookingActions.cancelBooking(this.state)
  }

  onExtend=()=>{
    this.setState({
      visible: true
    })
    this.props.extendBookingActions.extendBooking(this.state)
  }

  onDismiss = () =>{
    this.setState({
        visible:false
    })
  }

  onDismiss2 = () =>{
    this.setState({
        visible2:false
    })
  }

  onDeleteVehicleItem=(vehicleId)=>{
    console.log(vehicleId)
    let obj={
      vehicleId:vehicleId,
      bookingId:this.props.booking.bookingId
    }
    
    this.props.cancelBookingItemActions.cancelBookingItem(obj)
  }

  onDeleteEquipmentItem=(equipId)=>{
    let obj={
      equipmentId:equipId,
      bookingId:this.props.booking.bookingId
    }
    this.props.cancelBookingItemActions.cancelBookingItem(obj)
  }

  content(){
    const { rentalPeriod, pickupDate, returnDate, vehicleList, additionalEquipmentList, total ,bookingId,lisenceNo} = this.props.booking;
    const { bookingStatusType } = this.props.booking.bookingStatus;
    return (
      <div className="media mb-3">
        <div className="media-body p-2 shadow-sm rounded bg-light border">
          <small className="float-right text-muted">{bookingStatusType}</small>
          Rental Period: {rentalPeriod}hrs<br />
          Booking No.: {bookingId}<br />
          Booked under Lisence No.: {lisenceNo}<br />
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
                          <h6 className="mt-0 mb-1 text-secondary" style={{'font-family': 'Arial, Helvetica, sans-serif'}}>{property.vehicle.vehicleName}</h6>
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
                          <h6 className="mt-0 mb-1 text-secondary" style={{'font-family': 'Arial, Helvetica, sans-serif'}}>{property.equipment.equipmentName}</h6>
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
    const { rentalPeriod, pickupDate, returnDate, vehicleList, additionalEquipmentList, total,bookingId,latePickup,lisenceNo } = this.props.booking;
    const { bookingStatusType } = this.props.booking.bookingStatus;

    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div>
        <div className="media mb-3">
          <div className="media-body p-4 shadow-sm rounded bg-light border">
            <small className="float-right text-muted">{bookingStatusType}</small>
            Rental Period: {rentalPeriod}hrs<br />
            Booking No.: {bookingId}<br />
            Booked under Lisence No.: {lisenceNo}<br />
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
                            <h6 className="mt-0 mb-1 text-secondary" style={{'font-family': 'Arial, Helvetica, sans-serif'}}>{property.vehicle.vehicleName}</h6>
                          </td>
                          <td>
                            Rs.{property.vehicle.vehicleRentalPrice}.00 per hr x {rentalPeriod}
                          </td>
                          {bookingStatusType !== "PICKED_UP" && this.listLength() > 1 ? <td className="remove_icon"><button onClick={() => this.onDeleteVehicleItem(property.vehicle.vehicleId)} type="button" class="btn btn-light"><span>&#10062;</span></button></td> : null}
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
                            <h6 className="mt-0 mb-1 text-secondary" style={{'font-family': 'Arial, Helvetica, sans-serif'}}>{property.equipment.equipmentName}</h6>

                          </td>
                          <td >
                            Rs.{property.equipment.aeRentalPrice}.00 per hr x {rentalPeriod}
                          </td>
                          {bookingStatusType !== "PICKED_UP" && this.listLength() > 1 ? <td className="remove_icon"><button onClick={() => this.onDeleteEquipmentItem(property.equipment.equipmentId)} type="button" class="btn btn-light"><span>&#10062;</span></button></td> : null}
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
            </table><br />
            {bookingStatusType === "PICKED_UP" ? <div><button onClick={this.onExtend} type="button" class="btn btn-info float-right">Extend Booking</button></div>:bookingStatusType==="PENDING" && latePickup==true ? <button onClick={this.onCancel} type="button" class="btn btn-secondary float-right mr-2">Cancel Booking</button>: <div><button onClick={()=>this.setState({ modalShow: true })} type="button" class="btn btn-warning">&#x2b; to Booking</button><button onClick={this.onExtend} type="button" class="btn btn-info float-right">Extend Booking</button><button onClick={this.onCancel} type="button" class="btn btn-secondary float-right mr-2">Cancel Booking</button></div>}
            <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
              {this.props.BookingData == false ? "Booking could not be extended" : "Booking was extended successfully until 4.00pm"}
            </Alert>
            <ShowBookingItemsModal show={this.state.modalShow} props={this.props.booking.bookingId} onHide={modalClose}/>
          </div>
          <br />
        </div>
        <Alert color="success" isOpen={this.state.visible2} toggle={this.onDismiss2}>
          Booking Was Cancelled
                    </Alert>
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
      ...state.GetBookings,
      // ...state.CancelBookingItem
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Booking))
