import {createAction} from 'redux-actions'

export const GET_TODAYS_BOOKINGS="GET_TODAYS_BOOKINGS";
export const SUCCESS_GET_TODAYS_BOOKINGS="SUCCESS_GET_TODAYS_BOOKINGS";
export const FAIL_GET_TODAYS_BOOKINGS="FAIL_GET_TODAYS_BOOKINGS";

export default {
    getTodaysBookings:createAction(GET_TODAYS_BOOKINGS),
    getTodaysBookingsSuccess:createAction(SUCCESS_GET_TODAYS_BOOKINGS),
    getTodaysBookingsFail:createAction(FAIL_GET_TODAYS_BOOKINGS)

}