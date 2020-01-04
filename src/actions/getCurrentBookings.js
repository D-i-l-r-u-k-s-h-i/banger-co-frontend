import {createAction} from 'redux-actions'

export const GET_CURRENT_BOOKINGS="GET_CURRENT_BOOKINGS";
export const SUCCESS_GET_CURRENT_BOOKINGS="SUCCESS_GET_CURRENT_BOOKINGS";
export const FAIL_GET_CURRENT_BOOKINGS="FAIL_GET_CURRENT_BOOKINGS";

export default {
    getCurrentBookings:createAction(GET_CURRENT_BOOKINGS),
    getCurrentBookingsSuccess:createAction(SUCCESS_GET_CURRENT_BOOKINGS),
    getCurrentBookingsFail:createAction(FAIL_GET_CURRENT_BOOKINGS)

}