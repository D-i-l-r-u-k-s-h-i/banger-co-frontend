import {createAction} from 'redux-actions'

export const BOOKING="BOOKING";
export const SUCCESS_BOOKING="SUCCESS_BOOKING";
export const FAIL_BOOKING="FAIL_BOOKING";

export default {
    booking:createAction(BOOKING),
    bookingSuccess:createAction(SUCCESS_BOOKING),
    bookingUpFail:createAction(FAIL_BOOKING)

}