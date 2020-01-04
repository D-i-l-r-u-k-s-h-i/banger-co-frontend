import React from 'react'

function Booking(props) {
  console.log(props)
  const { rentalPeriod, pickupDate, returnDate, vehicleList, additionalEquipmentList, total } = props.booking;
  const { bookingStatusType } = props.booking.bookingStatus;
  // let lengthLists=vehicleList && vehicleList.length+ additionalEquipmentList && additionalEquipmentList.length;
  console.log(additionalEquipmentList && additionalEquipmentList.length + vehicleList && vehicleList.length) //this gives null

  function listLength(){
    var totLength=0
    if(additionalEquipmentList){
      totLength+=additionalEquipmentList.length
    }
    if(vehicleList){
      totLength+=vehicleList.length
    }
    return totLength;
  }

  function content(){
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
  function contentPending () {
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
                        {listLength()>1 ? <td className="remove_icon"><button type="button" class="btn btn-light"><span>&#10062;</span></button></td>:null}
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
                        {listLength()>1 ? <td className="remove_icon"><button type="button" class="btn btn-light"><span>&#10062;</span></button></td>:null}
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
          {bookingStatusType==="PICKED_UP"?<div><button type="button" class="btn btn-info float-right">Extend Booking</button></div>:<div><button type="button" class="btn btn-info float-right">Extend Booking</button><button type="button" class="btn btn-secondary float-right mr-2">Cancel Booking</button></div>}
        </div>
      </div>
    );
  }

  return (
    <div>{bookingStatusType==="PENDING"||bookingStatusType==="PICKED_UP"?contentPending():content()}</div>
  );
}


export default Booking
