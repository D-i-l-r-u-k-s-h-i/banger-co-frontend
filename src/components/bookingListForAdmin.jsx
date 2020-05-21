import React from 'react'
import BookingForAdmin from './booking_for_admin';

function BookingListForAdmin(props) {
  console.log(props.bookings)
    return (
        <div>
            <h5 className="text-muted mb-4">
            <span className="badge badge-success">{props.bookings.length}</span>{" "}
            {props.bookings.length >= 1 ? "Bookings " : "No Bookings "} for Today
          </h5>
 
          {props.bookings.map((booking, index) => (
            <BookingForAdmin key={index} booking={booking} />
          ))}
        </div>
    )
}

export default BookingListForAdmin
