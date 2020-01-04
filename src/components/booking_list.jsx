import React from 'react'
import Booking from './booking';

function BookingList(props) {
    console.log(props)
    return (
        <div>
          <h5 className="text-muted mb-4">
            <span className="badge badge-success">{props.bookings.length}</span>{" "}
            Booking{props.bookings.length > 1 ||props.bookings.length===0 ? "s" : ""}
          </h5>
 
          {props.bookings.map((booking, index) => (
            <Booking key={index} booking={booking} />
          ))}
        </div>
      );
}

export default BookingList
