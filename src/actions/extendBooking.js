import {createAction} from 'redux-actions'

export const EXTEND_BOOKING="EXTEND_BOOKING";
export const SUCCESS_EXTEND_BOOKING="SUCCESS_EXTEND_BOOKING";
export const FAIL_EXTEND_BOOKING="FAIL_EXTEND_BOOKING";

export default {
    extendBooking:createAction(EXTEND_BOOKING),
    extendBookingSuccess:createAction(SUCCESS_EXTEND_BOOKING),
    extendBookingFail:createAction(FAIL_EXTEND_BOOKING)
}