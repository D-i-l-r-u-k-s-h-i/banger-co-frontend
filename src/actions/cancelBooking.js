import {createAction} from 'redux-actions'

export const CANCEL_BOOKING="CANCEL_BOOKING";
export const SUCCESS_CANCEL_BOOKING="SUCCESS_CANCEL_BOOKING";
export const FAIL_CANCEL_BOOKING="FAIL_CANCEL_BOOKING";

export default {
    cancelBooking:createAction(CANCEL_BOOKING),
    cancelBookingSuccess:createAction(SUCCESS_CANCEL_BOOKING),
    cancelBookingFail:createAction(FAIL_CANCEL_BOOKING)
}