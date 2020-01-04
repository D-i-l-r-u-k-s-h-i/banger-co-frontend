import {createAction} from 'redux-actions'

export const GET_PAST_BOOKINGS="GET_PAST_BOOKINGS";
export const SUCCESS_GET_PAST_BOOKINGS="SUCCESS_GET_PAST_BOOKINGS";
export const FAIL_GET_PAST_BOOKINGS="FAIL_GET_PAST_BOOKINGS";

export default {
    getPastBookings:createAction(GET_PAST_BOOKINGS),
    getPastBookingsSuccess:createAction(SUCCESS_GET_PAST_BOOKINGS),
    getPastBookingsFail:createAction(FAIL_GET_PAST_BOOKINGS)

}